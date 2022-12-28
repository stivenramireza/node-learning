const { request, response } = require('express');

const { validateToken } = require('./jwt');
const User = require('../models/user');

const jwtAuth = async (req = request, res = response, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Missing token' });

    try {
        const { uid } = validateToken(token);

        // Read user
        const user = await User.findById(uid);
        if (!user) {
            return res.status(401).json({
                message: 'Invalid token',
            });
        }

        // Verify if the uid has true status
        if (!user.status) {
            return res.status(401).json({
                message: 'Invalid token',
            });
        }

        req.user = user;

        next();
    } catch (err) {
        console.error(err);
        res.status(401).json({
            message: 'Invalid token',
        });
    }
};

module.exports = {
    jwtAuth,
};
