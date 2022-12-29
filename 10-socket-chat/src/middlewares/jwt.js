const jwt = require('jsonwebtoken');

const { JWT_SECRET_KEY } = require('../utils/secrets');
const { searchUserById } = require('../services/users');

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

const validateToken = async (token) => {
    try {
        const { uid } = jwt.verify(token, JWT_SECRET_KEY);
        const user = await searchUserById(uid);

        if (!user) return null;
        if (!user.status) return null;
        return user;
    } catch (error) {
        return null;
    }
};

module.exports = {
    generateToken,
    validateToken,
};
