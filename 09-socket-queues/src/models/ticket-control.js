const fs = require('fs');
const path = require('path');

class Ticket {
    constructor(number, desk) {
        this.number = number;
        this.desk = desk;
    }
}

class TicketControl {
    constructor() {
        this.lastTicket = 0;
        this.todayDate = new Date().getDate();
        this.tickets = [];
        this.lastTickets = [];

        this.init();
    }

    get toJSON() {
        return {
            lastTicket: this.lastTicket,
            todayDate: this.todayDate,
            tickets: this.tickets,
            lastTickets: this.lastTickets,
        };
    }

    init() {
        const { todayDate, tickets, lastTicket, lastTickets } = require('../db/data.json');

        if (todayDate === this.todayDate) {
            this.tickets = tickets;
            this.lastTicket = lastTicket;
            this.lastTickets = lastTickets;
        } else {
            this.saveDB();
        }
    }

    saveDB() {
        const dbPath = path.join(__dirname, '../db/data.json');
        fs.writeFileSync(dbPath, JSON.stringify(this.toJSON));
    }

    nextTicket() {
        this.lastTicket += 1;
        const ticket = new Ticket(this.lastTicket, null);
        this.tickets.push(ticket);
        this.saveDB();
        return `Ticket ${ticket.number}`;
    }

    attendTicket(desk) {
        if (!this.tickets.length) return null;

        const ticket = this.tickets.shift(); //this.tickets[0];
        ticket.desk = desk;

        this.lastTickets.unshift(ticket);

        if (this.lastTickets.length > 4) this.lastTickets.splice(-1, 1);

        this.saveDB();

        return ticket;
    }
}

module.exports = TicketControl;
