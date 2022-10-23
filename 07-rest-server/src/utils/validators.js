const Role = require('../models/role');
const User = require('../models/user');

const isValidRole = async (role = '') => {
    const existsRole = await Role.findOne({ role });
    if (!existsRole) throw new Error(`Rol ${role} is not valid`);
};

const existsEmail = async (email = '') => {
    const existsUser = await User.findOne({ email });
    if (existsUser) throw new Error('Email is already registered');
};

module.exports = {
    isValidRole,
    existsEmail,
};
