const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/v1/users';
        this.usersRoutes = require('../routes/users');

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
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
            console.log(`Server is running at port ${this.port}`);
        });
    }
}

module.exports = Server;
