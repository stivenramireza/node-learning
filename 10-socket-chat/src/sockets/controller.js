const { validateToken } = require('../middlewares/jwt');

const socketController = async (socket) => {
    const token = socket.handshake.headers.authorization;

    const user = await validateToken(token);
    if (!user) return socket.disconnect();

    console.log('Client connected:', user.name);

    socket.on('disconnect', () => {
        console.log('Client disconnected:', user.name);
    });
};

module.exports = { socketController };
