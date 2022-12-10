const TicketControl = require('../models/ticket-control');

const ticketControl = new TicketControl();

const socketController = (socket) => {
    console.log('Client connected', socket.id);

    socket.on('disconnect', () => {
        console.log('Client disconnected: ', socket.id);
    });

    socket.emit('last-ticket', ticketControl.lastTicket);

    socket.on('next-ticket', (payload, callback) => {
        const nextTicket = ticketControl.nextTicket();
        callback(nextTicket);

        // TODO: Notify a new pending ticket
    });
};

module.exports = { socketController };
