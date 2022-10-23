const express = require('express');
const cors = require('cors');
const errorHandler = require('errorhandler');

const { dbConnection } = require('./config/database');
const { errorLogger, errorResponse, errorInternal } = require('./middlewares/error');

class Server {
    constructor() {
        // Create an express instance
        this.app = express();

        // Set app environment variables
        this.app.set('port', process.env.PORT || 3000);
        this.app.set('environment', process.env.ENV || 'development');

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
        // this.app.use(errorHandler());
        // this.app.use(errorLogger);
        // this.app.use(errorResponse);
        // this.app.use(errorInternal);
    }

    routes() {
        this.app.use('/api/v1/users', require('./routes/users'));
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