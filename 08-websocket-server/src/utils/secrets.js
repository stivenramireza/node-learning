require('dotenv').config();

/** App secrets */
const PORT = process.env.PORT;
const ENV = process.env.ENV;

module.exports = {
    PORT,
    ENV,
};
