require('dotenv').config();

/** App secrets */
const PORT = process.env.PORT;
const ENV = process.env.ENV;
const API_VERSION = process.env.API_VERSION;

/** Database secrets */
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

module.exports = {
    PORT,
    ENV,
    API_VERSION,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
};
