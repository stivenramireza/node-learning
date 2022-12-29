const mongoose = require('mongoose');

const { ENV, DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = require('../utils/secrets');

const dbConnection = () => {
    try {
        const uri =
            ENV == 'development'
                ? `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
                : `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB database has been connected successfully');
    } catch (err) {
        console.error(err);
        throw new Error('Error to connect to MongoDB database');
    }
};

module.exports = {
    dbConnection,
};
