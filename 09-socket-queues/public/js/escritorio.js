// HTML references
const lblDesk = document.querySelector('h1');
const btnAttendTicket = document.querySelector('button');
const lblTicket = document.querySelector('small');
const divAlert = document.querySelector('.alert');
const lblPendientes = document.querySelector('#lblPendientes');

const searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('Desk is mandatory');
}

const desk = searchParams.get('escritorio');
lblDesk.innerText = desk;
divAlert.style.display = 'none';

const socket = io();

socket.on('connect', () => {
    btnAttendTicket.disabled = false;
});

socket.on('disconnect', () => {
    btnAttendTicket.disabled = true;
});

socket.on('pending-tickets', (pendingTickets) => {
    if (pendingTickets === 0) {
        lblPendientes.style.display = 'none';
    } else {
        lblPendientes.style.display = '';
        lblPendientes.innerText = pendingTickets;
    }
});

btnAttendTicket.addEventListener('click', () => {
    socket.emit('attend-ticket', { desk }, ({ success, message, ticket }) => {
        if (!success) {
            lblTicket.innerText = 'nadie';
            divAlert.style.display = '';
            divAlert.innerText = message;
        } else {
            lblTicket.innerText = `Ticket ${ticket.number}`;
        }
    });
});
