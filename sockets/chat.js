

import { rateLimiter, profanityFilter } from '../middlewares/rateLimiter.js';
import { logActivity } from '../middlewares/activityTracker.js';

const users = new Map();

export default function chatHandler(io, socket) {
  console.log(`User connected: ${socket.id}`);
  logActivity(socket.id, 'connect', 'User connected');

  socket.on('join_room', ({ username, room }) => {
    socket.join(room);
    users.set(socket.id, { username, room });

    io.to(room).emit('receive_message', {
      username: 'System',
      message: `${username} joined room: ${room}`
    });

    logActivity(socket.id, 'join_room', `User ${username} joined ${room}`);
    console.log(`${username} joined room: ${room}`);
  });

  
  socket.on('send_message', ({ message }) => {
    if (!message || message.trim() === '') {
    socket.emit('error', 'Message cannot be empty');
    logActivity(socket.id, 'send_message_rejected', 'Empty message');
    return;
  }
    const user = users.get(socket.id);
    if (!user) return;

    const { username, room } = user;

    if (!rateLimiter(socket.id)) {
      socket.emit('error', 'Rate limit exceeded. Please wait.');
      logActivity(socket.id, 'rate_limit_exceeded', message);
      return;
    }

    const { isClean, cleanMessage } = profanityFilter(message);

    if (!isClean) {
      socket.emit('error', 'Inappropriate language is not allowed.');
      logActivity(socket.id, 'bad_language', message);
      return;
    }

    io.to(room).emit('receive_message', {
      username,
      message: cleanMessage
    });

    logActivity(socket.id, 'send_message', cleanMessage);
  });

  socket.on('disconnect', () => {
    const user = users.get(socket.id);
    if (user) {
      const { username, room } = user;

      io.to(room).emit('receive_message', {
        username: 'System',
        message: `${username} left the room.`
      });

      users.delete(socket.id);
      logActivity(socket.id, 'disconnect', `User ${username} left room: ${room}`);
      console.log(`User disconnected: ${socket.id}`);
    } else {
      logActivity(socket.id, 'disconnect', 'Unknown user disconnected');
    }
  });
}
