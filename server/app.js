const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.use(express.static(path.join(__dirname, "../client/public")));

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat-message', (message) => {
        io.emit('chat-message', message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
