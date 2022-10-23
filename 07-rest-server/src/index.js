const mongoose = require('mongoose');

const Server = require('./server');

process.on('uncaughtException', (error) => {
    console.error(`Unhandled exception: ${error.message}`);
});

process.on('unhandledRejection', (error) => {
    console.error(`Unhadled rejection: ${error.message}`);
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.error('MongoDB default connection is disconnected due to application termination');
        process.exit(0);
    });
});

const server = new Server();
server.start();
