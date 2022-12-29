const { request, response } = require('express');

const { loginUser, loginGoogleUser } = require('../services/auth');
const { verifyGoogleToken } = require('../middlewares/googleAuth');
const { generateToken } = require('../middlewares/jwt');

const login = async (req = request, res = response) => {
    try {
        const { email, password } = req.body;

        const accessToken = await loginUser(email, password);
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

const loginGoogle = async (req = request, res = response) => {
    const { idToken } = req.body;

    try {
        const googleUser = await verifyGoogleToken(idToken);

        const accessToken = await loginGoogleUser(googleUser);
        if (!accessToken) {
            return res.status(401).json({
                message: 'Invalid credentials',
            });
        }

        res.json({
            email: googleUser.email,
            accessToken,
        });
    } catch (err) {
        console.error(err);
        res.status(401).json({
            message: 'Invalid token',
        });
    }
};

const renewToken = async (req = request, res = response) => {
    const { user } = req;

    const token = await generateToken(user.id);

    res.json({
        user,
        token,
    });
};

module.exports = {
    login,
    loginGoogle,
    renewToken,
};
