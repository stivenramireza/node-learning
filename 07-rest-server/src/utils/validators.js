const Role = require('../models/role');
const User = require('../models/user');

const isValidRole = async (role) => {
    if (role) {
        const existsRole = await Role.findOne({ role });
        if (!existsRole) throw new Error(`Rol ${role} is not valid`);
    }
};

const existsEmail = async (email) => {
    if (email) {
        const existsUser = await User.findOne({ email });
        if (existsUser) throw new Error('Email is already registered');
    }
};

const existsUserById = async (id) => {
    if (id) {
        const existsUser = await User.findById(id);
        if (!existsUser) throw new Error('User does not exist');
    }
};

module.exports = {
    isValidRole,
    existsEmail,
    existsUserById,
};
