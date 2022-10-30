require('dotenv').config();

/** App secrets */
const PORT = process.env.PORT;
const ENV = process.env.ENV;
const API_VERSION = process.env.API_VERSION;

/** Database secrets */
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

/** JWT secrets */
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

/** Google Identity secrets */
const GOGGLE_CLIENT_ID = process.env.GOGGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

module.exports = {
    PORT,
    ENV,
    API_VERSION,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    JWT_SECRET_KEY,
    GOGGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
};
