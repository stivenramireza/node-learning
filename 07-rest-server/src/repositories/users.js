const User = require('../models/user');

const saveUser = async (user) => {
    const savedUser = new User(user);
    await savedUser.save();
    return savedUser;
};

module.exports = {
    saveUser,
};
