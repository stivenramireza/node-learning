const { request, response } = require('express');

const { searchUserByEmail } = require('../services/users');
const { validatePassword } = require('../middlewares/passwords');
const { generateToken } = require('../middlewares/jwt');

const loginUser = async (req = request, res = response, email, password) => {
    // Check if email exists
    const user = await searchUserByEmail(email);
    if (!user) return false;

    // Check if the user is active
    if (!user.status) return false;

    // Check if the password is valid
    const isValidPassword = validatePassword(password, user.password);
    if (!isValidPassword) return false;

    // Generate JWT
    const token = await generateToken(user.id);
    return token;
};

module.exports = {
    loginUser,
};
