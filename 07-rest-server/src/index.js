const mongoose = require('mongoose');

const Server = require('./config/server');

process.on('uncaughtException', (error) => {
    console.error(`Unhandled exception: ${error.stack}`);
});

process.on('unhandledRejection', (error) => {
    console.error(`Unhadled rejection: ${error.stack}`);
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.error('MongoDB default connection is disconnected due to application termination');
        process.exit(0);
    });
});

const server = new Server();
server.start();
