const User = require('../models/user');

const findUserByEmail = async (email) => {
    return await User.findOne({ email: email });
};

const saveUser = async (user) => {
    const savedUser = new User(user);
    await savedUser.save();
    return savedUser;
};

module.exports = {
    saveUser,
    findUserByEmail,
};
