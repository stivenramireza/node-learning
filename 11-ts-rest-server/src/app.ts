import express, { Application } from 'express';

import userRoutes from './routes/users';
import { PORT, ENV, API_VERSION } from './utils/secrets';

class App {
    private app: Application;
    private port: number;
    private environment: string;
    private apiVersion: string;

    constructor() {
        // Create an express instance
        this.app = express();

        // Set app environment variables
        this.port = Number(PORT) || 3000;
        this.environment = ENV || 'development';
        this.apiVersion = API_VERSION || '/api/v1';

        // Routes
        this.routes();
    }

    routes() {
        this.app.use(`${this.apiVersion}/users`, userRoutes);
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server is running at port ${this.port} in ${this.environment} mode`);
        });
    }
}

export default App;
