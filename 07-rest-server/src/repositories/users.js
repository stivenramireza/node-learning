const User = require('../models/user');

const findUsers = async (skip, limit) => {
    return await User.find({ status: true }).skip(skip).limit(limit);
};

const countUsers = async () => {
    return await User.countDocuments({ status: true });
};

const findUserById = async (id) => {
    return await User.findOne({ id });
};

const saveUser = async (user) => {
    const savedUser = new User(user);
    await savedUser.save();
    return savedUser;
};

const updateUser = async (id, data) => {
    return User.findByIdAndUpdate(id, data);
};

module.exports = {
    findUsers,
    countUsers,
    findUserById,
    saveUser,
    updateUser,
};
