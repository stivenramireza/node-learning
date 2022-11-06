const {
    findUsers,
    countUsers,
    findUserById,
    findUserByEmail,
    saveUser,
    updateUser,
    deleteUser,
} = require('../repositories/users');
const { encryptPassword } = require('../middlewares/passwords');

const searchUsers = async (skip, limit) => {
    return await findUsers(skip, limit);
};

const getTotalUsers = async () => {
    return await countUsers();
};

const searchUserById = async (id) => {
    return await findUserById(id);
};

const searchUserByEmail = async (email) => {
    return await findUserByEmail(email);
};

const postUserWithoutPassword = async (user) => {
    return await saveUser(user);
};

const postUser = async (user) => {
    user.password = encryptPassword(user.password);
    return await saveUser(user);
};

const putUser = async (id, data, password) => {
    if (password) {
        data.password = encryptPassword(password);
    }
    return await updateUser(id, data);
};

const removeUser = async (id) => {
    const user = await searchUserById(id);
    if (!user) return false;

    return await deleteUser(id);
};

module.exports = {
    searchUsers,
    getTotalUsers,
    searchUserById,
    searchUserByEmail,
    postUser,
    postUserWithoutPassword,
    putUser,
    removeUser,
};
