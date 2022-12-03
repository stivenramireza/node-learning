const mongoose = require('mongoose');

const App = require('./app');

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

const app = new App();
app.start();
