const { request, response } = require('express');

const { validateToken } = require('./jwt');

const jwtAuth = async (req = request, res = response, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Missing token' });

    try {
        const user = await validateToken(token);

        // Read user
        if (!user) {
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
