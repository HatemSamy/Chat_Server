# Real-Time Chat Server with Socket.io

This project is a **real-time chat server** built using **Socket.io**, demonstrating key skills such as WebSocket communication, event-driven architecture, and session management.

---

## Skills Tested

- WebSocket communication via Socket.io  
- Event-driven architecture  
- Session and user activity management  

---

## Features

- **Multiple Users Joining/Leaving Rooms**  
  Users can join or leave chat rooms dynamically.

- **Broadcast Messages Within Rooms**  
  Messages are sent only to users in the same room.

- **Track User Activity**  
  All actions (connect, join, leave, send message, disconnect) are logged and saved.

- **Chat Message Persistence** *(Bonus)*  
  Messages are saved in MongoDB for future reference.

- **Rate Limiting** *(Bonus)*  
  Prevents users from sending messages too quickly.

- **Profanity Filter** *(Bonus)*  
  Detects and blocks inappropriate words in messages.

- **Built-in Bisc UI** *(Bonus)*  
  A minimal web-based UI (`bisc.html`) allows easy testing of rooms and messaging without external tools.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/HatemSamy/Chat_Server.git
cd Chat_Server
