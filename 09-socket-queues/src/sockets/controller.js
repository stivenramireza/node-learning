const TicketControl = require('../models/ticket-control');

const ticketControl = new TicketControl();

const socketController = (socket) => {
    console.log('Client connected', socket.id);

    socket.on('disconnect', () => {
        console.log('Client disconnected: ', socket.id);
    });

    socket.emit('last-ticket', ticketControl.lastTicket);
    socket.emit('pending-tickets', ticketControl.tickets.length);
    socket.emit('current-status', ticketControl.lastTickets);

    socket.on('next-ticket', (payload, callback) => {
        const nextTicket = ticketControl.nextTicket();
        callback(nextTicket);

        // TODO: Notify a new pending ticket
    });

    socket.on('attend-ticket', ({ desk }, callback) => {
        if (!desk) callback({ success: false, message: 'Desk is mandatory' });

        const ticket = ticketControl.attendTicket(desk);
        // TODO: Notify changes in the last tickets
        socket.emit('pending-tickets', ticketControl.tickets.length);
        socket.broadcast.emit('current-status', ticketControl.lastTickets);

        if (!ticket) callback({ success: false, message: 'There are not more tickets' });

        callback({ success: true, ticket, pendingTickets: ticketControl.tickets.length });
    });
};

module.exports = { socketController };
