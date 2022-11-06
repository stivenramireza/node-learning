const { Role, User, Category } = require('../models');

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

const existCategoryById = async (id) => {
    if (id) {
        const existsCategory = await Category.findById(id);
        if (!existsCategory) throw new Error('Category does not exist');
    }
};

module.exports = {
    isValidRole,
    existsEmail,
    existsUserById,
    existCategoryById,
};
