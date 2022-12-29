import App from './app';

process.on('uncaughtException', (error: any) => {
    console.error(`Unhandled exception: ${error.stack}`);
});

process.on('unhandledRejection', (error: any) => {
    console.error(`Unhadled rejection: ${error.stack}`);
});

const app = new App();
app.start();
