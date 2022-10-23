const bcryptjs = require('bcryptjs');

const { saveUser } = require('../repositories/users');

const postUser = async (user) => {
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(user.password, salt);

    return await saveUser(user);
};

module.exports = {
    postUser,
};
