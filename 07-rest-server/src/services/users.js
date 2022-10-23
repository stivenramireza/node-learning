const { findUsers, findUserById, saveUser, updateUser } = require('../repositories/users');
const { encryptPassword } = require('../middlewares/passwords');

const searchUsers = async () => {
    return await findUsers();
};

const searchUserById = async (id) => {
    return await findUserById(id);
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

module.exports = {
    searchUsers,
    searchUserById,
    postUser,
    putUser,
};
