import dotenv from 'dotenv';
dotenv.config();

/** App secrets */
export const PORT = Number(process.env.PORT) || 3000;
export const ENV = process.env.ENV || 'development';
export const API_VERSION = process.env.API_VERSION || '/api/v1';

/** Database secrets */
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = Number(process.env.DB_PORT) || 3306;
export const DB_NAME = process.env.DB_NAME || 'mysql';
export const DB_USER = process.env.DB_USER || 'mysql';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'mysql';
