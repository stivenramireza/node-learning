const { request, response } = require('express');

const { searchUserByEmail, postUserWithoutPassword } = require('./users');

const { validatePassword } = require('../middlewares/passwords');
const { generateToken } = require('../middlewares/jwt');

const USER_ROLE = 'USER';

const loginUser = async (email, password) => {
    // Check if email exists
    const user = await searchUserByEmail(email);
    if (!user) return false;

    // Check if the user is active
    if (!user.status) return false;

    // Check if the user has google login
    if (user.google) return false;

    // Check if the password is valid
    const isValidPassword = validatePassword(password, user.password);
    if (!isValidPassword) return false;

    // Generate JWT
    const token = await generateToken(user.id);
    return token;
};

const loginGoogleUser = async (googleUser) => {
    // Check if email exists
    let user = await searchUserByEmail(googleUser.email);
    if (!user) {
        const userData = {
            name: googleUser.name,
            email: googleUser.email,
            img: googleUser.picture,
            role: USER_ROLE,
            google: true,
        };
        user = await postUserWithoutPassword(userData);
    }

    // Check if the user is active
    if (!user.status) return false;

    // Generate JWT
    const token = await generateToken(user.id);
    return token;
};

module.exports = {
    loginUser,
    loginGoogleUser,
};
