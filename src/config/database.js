const mongoose = require('mongoose');

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = require('../utils/secrets');

const dbConnection = () => {
    try {
        mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log('MongoDB database has been connected successfully');
    } catch (error) {
        console.error(error);
        throw new Error('Error to connect to MongoDB database');
    }
};

module.exports = {
    dbConnection,
};
