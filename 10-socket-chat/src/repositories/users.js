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

const findUserByName = async (name) => {
    return await User.findOne({ name: { $regex: name, $options: 'i' } });
};

const findUsersByParams = async (term) => {
    return await User.find({
        $or: [
            { name: { $regex: term, $options: 'i' } },
            { email: { $regex: term, $options: 'i' } },
        ],
        $and: [{ status: true }],
    });
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
    findUserByName,
    findUsersByParams,
    saveUser,
    updateUser,
    deleteUser,
};
