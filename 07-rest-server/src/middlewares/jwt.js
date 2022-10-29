const jwt = require('jsonwebtoken');

const { JWT_SECRET_KEY } = require('../utils/secrets');

const generateToken = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };

        jwt.sign(
            payload,
            JWT_SECRET_KEY,
            {
                expiresIn: '4h',
            },
            (err, token) => {
                if (err) {
                    console.error(err);
                    reject('Token could not be generated');
                } else {
                    resolve(token);
                }
            }
        );
    });
};

module.exports = {
    generateToken,
};
