import express, { Application } from 'express';
import cors from 'cors';

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
        this.app.use(`${this.apiVersion}/users`, userRoutes);
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server is running at port ${this.port} in ${this.environment} mode`);
        });
    }
}

export default App;
