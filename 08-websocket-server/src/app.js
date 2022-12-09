const express = require('express');
const cors = require('cors');
const http = require('http');
const io = require('socket.io');

const { PORT, ENV } = require('./utils/secrets');

class App {
    constructor() {
        // Create an express instance
        this.app = express();

        // Create server based on the express instance
        this.server = http.createServer(this.app);

        // Create a WebSocket instance
        this.io = io(this.server);

        // Set app environment variables
        this.app.set('port', PORT || 3000);
        this.app.set('environment', ENV || 'development');

        // Middlewares
        this.middlewares();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Public directory
        this.app.use(express.static('public'));
    }

    start() {
        this.server.listen(this.app.get('port'), () => {
            console.log(
                `WebSocket server is running at port ${this.app.get('port')} in ${this.app.get(
                    'environment'
                )} mode`
            );
        });
    }
}

module.exports = App;
