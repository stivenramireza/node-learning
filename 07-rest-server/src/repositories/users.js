const User = require('../models/user');

const findUsers = async () => {
    return await User.find();
};

const findUserById = async (id) => {
    return await User.findOne({ id });
};

const saveUser = async (user) => {
    const savedUser = new User(user);
    await savedUser.save();
    return savedUser;
};

module.exports = {
    findUsers,
    findUserById,
    saveUser,
};
