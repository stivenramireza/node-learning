const bcryptjs = require('bcryptjs');

const { findUsers, findUserById, saveUser } = require('../repositories/users');

const searchUsers = async () => {
    return await findUsers();
};

const searchUserById = async (id) => {
    return await findUserById(id);
};

const postUser = async (user) => {
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(user.password, salt);

    return await saveUser(user);
};

module.exports = {
    searchUsers,
    searchUserById,
    postUser,
};
