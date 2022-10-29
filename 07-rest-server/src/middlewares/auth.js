const { request, response } = require('express');

const { validateToken } = require('../middlewares/jwt');

const jwtAuth = (req = request, res = response, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Missing token' });

    try {
        const { uid } = validateToken(token);

        req.uid = uid;

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
