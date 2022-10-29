const express = require('express');
const cors = require('cors');
const errorHandler = require('errorhandler');

const { dbConnection } = require('./database');
const { PORT, ENV, API_VERSION } = require('../utils/secrets');

class Server {
    constructor() {
        // Create an express instance
        this.app = express();

        // Set app environment variables
        this.app.set('port', PORT || 3000);
        this.app.set('environment', ENV || 'development');
        this.app.set('api_version', API_VERSION || '/api/v1');

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

        // Handle errors
        this.app.use(errorHandler());
    }

    routes() {
        this.app.use(`${this.app.get('api_version')}/auth`, require('../routes/auth'));
        this.app.use(`${this.app.get('api_version')}/users`, require('../routes/users'));
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(
                `Coffee Shop API is running at port ${this.app.get('port')} in ${this.app.get(
                    'environment'
                )} mode`
            );
        });
    }
}

module.exports = Server;
