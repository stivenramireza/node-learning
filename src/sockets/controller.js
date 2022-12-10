const socketController = (socket) => {
    console.log('Client connected', socket.id);

    socket.on('disconnect', () => {
        console.log('Client disconnected: ', socket.id);
    });

    socket.on('message', (payload, callback) => {
        const id = 123456789;
        callback(id);

        socket.broadcast.emit('message', payload);
    });
};

module.exports = { socketController };
