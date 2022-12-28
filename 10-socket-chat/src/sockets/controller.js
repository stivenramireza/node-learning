const { validateToken } = require('../middlewares/jwt');

const Chat = require('../models/chat');

const chat = new Chat();

const socketController = async (socket, io) => {
    const token = socket.handshake.headers.authorization;

    const user = await validateToken(token);
    if (!user) return socket.disconnect();

    // Add the connected user
    chat.addUser(user);
    console.log('Client connected:', user.name);
    io.emit('active-users', chat.usersArr);
    socket.emit('receive-messages', chat.last10Messages);

    // Connect to special room
    socket.join(user.id); // Global, socket.id and user.id

    // Clean when somebody is disconnected
    socket.on('disconnect', () => {
        chat.disconnectUser(user.id);
        console.log('Client disconnected:', user.name);
        io.emit('active-users', chat.usersArr);
    });

    socket.on('send-message', ({ uid, message }) => {
        if (uid) {
            socket.to(uid).emit('private-message', { from: user.name, message });
        } else {
            chat.sendMessage(user.id, user.name, message);
            io.emit('receive-messages', chat.last10Messages);
        }
    });
};

module.exports = { socketController };
