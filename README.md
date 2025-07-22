#  💬 Real-Time Chat Server with Socket.io

This project is a **real-time chat server** built using **Socket.io**, demonstrating key skills such as WebSocket communication, event-driven architecture, and session management.

---

##  🧠  Skills Tested

- WebSocket communication via Socket.io  
- Event-driven architecture  
- Session and user activity management  

---

## ✨ Features

- **Multiple Users Joining/Leaving Rooms**  
  Users can join or leave chat rooms dynamically.

- **Broadcast Messages Within Rooms**  
  Messages are sent only to users in the same room.

- **Track User Activity**  
  All actions (connect, join, leave, send message, disconnect) are logged and saved to a file in `/logs/activity.log`.

- **Chat Message Persistence** *(Bonus)*  
  Messages are saved in MongoDB for future reference and chat history.

- **Rate Limiting** *(Bonus)*  
  Prevents users from sending too many messages in a short time window (default: 10 messages per 60 seconds).

- **Profanity Filter** *(Bonus)*  
  Detects and blocks inappropriate or offensive words in messages.

- **Built-in Bisc UI** *(Bonus)*  
  A minimal web-based UI (`bisc.html`) allows easy testing of rooms and messaging without external tools like Postman.

---

## ⚙️ Installation & Setup

Follow the steps below to install and run the server locally:

```bash
# 1. Clone the repository
git clone https://github.com/HatemSamy/Chat_Server.git
cd Chat_Server

# 2. Install dependencies
npm install

# 3. Copy the example environment file
cp .env.example .env

# 4. (Optional) Edit the .env file with your preferred configuration
# Example content of .env:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/chat_app
RATE_LIMIT_WINDOW=60000
RATE_LIMIT_MAX=10



