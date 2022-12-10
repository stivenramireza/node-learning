const fs = require('fs');
const path = require('path');

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
}

module.exports = TicketControl;
