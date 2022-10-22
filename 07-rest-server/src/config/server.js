const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.env = process.env.ENV;

        this.usersPath = '/api/v1/users';
        this.usersRoutes = require('../routes/users');

        // Connect to database
        this.connectDatabase();

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
    }

    connectDatabase() {
        dbConnection();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Read and parse body
        this.app.use(express.json());

        // Public directory
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usersPath, this.usersRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Coffee Shop API is running at port ${this.port} in ${this.env} mode`);
        });
    }
}

module.exports = Server;
