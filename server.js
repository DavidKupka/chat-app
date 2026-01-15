const express = require ('express');
const http = require ('http');
const socketIo = require ('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

io.on('connection', (socket) => {
    console.log('User connected');

socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
});

socket.on('user joined' , (username) => {
    socket.broadcast.emit('user joined', username);
});