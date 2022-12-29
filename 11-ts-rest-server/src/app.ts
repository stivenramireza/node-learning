import express, { Application } from 'express';
import cors from 'cors';

import userRoutes from './routes/users';
import { PORT, ENV, API_VERSION } from './utils/secrets';
import database from './config/database';

class App {
    private app: Application;
    private port: number = PORT;
    private environment: string = ENV;
    private apiVersion: string = API_VERSION;

    constructor() {
        // Create an express instance
        this.app = express();

        // Database connection
        this.dbConnection();

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
    }

    async dbConnection() {
        try {
            await database.authenticate();
            console.log('Connected to MySQL database successfully');
        } catch (error: any) {
            throw new Error(error);
        }
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
