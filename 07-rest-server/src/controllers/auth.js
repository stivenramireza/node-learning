const { request, response } = require('express');

const { loginUser } = require('../services/auth');

const login = async (req = request, res = response) => {
    try {
        const { email, password } = req.body;

        const accessToken = await loginUser(req, res, email, password);
        if (!accessToken) {
            return res.status(401).json({
                message: 'Invalid credentials',
            });
        }

        res.json({
            accessToken,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Internal server error',
        });
    }
};

module.exports = {
    login,
};
