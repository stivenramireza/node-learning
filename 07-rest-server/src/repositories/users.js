const User = require('../models/user');

const findUsers = async (skip, limit) => {
    return await User.find({ status: true }).skip(skip).limit(limit);
};

const countUsers = async () => {
    return await User.countDocuments({ status: true });
};

const findUserById = async (id) => {
    return await User.findOne({ _id: id, status: true });
};

const findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

const saveUser = async (user) => {
    const savedUser = new User(user);
    await savedUser.save();
    return savedUser;
};

const updateUser = async (id, data) => {
    return await User.findByIdAndUpdate(id, data, { new: true });
};

const deleteUser = async (id) => {
    return await User.findByIdAndUpdate(id, { status: false }, { new: true });
};

module.exports = {
    findUsers,
    countUsers,
    findUserById,
    findUserByEmail,
    saveUser,
    updateUser,
    deleteUser,
};