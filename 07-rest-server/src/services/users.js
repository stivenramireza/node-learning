const bcryptjs = require('bcryptjs');

const { saveUser, findUserByEmail } = require('../repositories/users');

const postUser = async (user) => {
    const existsUser = await findUserByEmail(user.email);
    if (existsUser) return false;

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(user.password, salt);

    return await saveUser(user);
};

module.exports = {
    postUser,
};
