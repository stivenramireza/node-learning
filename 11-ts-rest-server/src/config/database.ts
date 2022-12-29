import { Sequelize } from 'sequelize';

import { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } from '../utils/secrets';

class Database {
    db: Sequelize;

    constructor() {
        this.db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
            host: DB_HOST,
            dialect: 'mysql',
        });
    }

    async connect() {
        try {
            await this.db.authenticate();
            console.log('Connected to MySQL database successfully');
        } catch (error: any) {
            throw new Error(error);
        }
    }
}

export default Database;
