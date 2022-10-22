const { saveUser } = require('../src/repositories/users');

const postUser = async (user) => {
    return await saveUser(user);
};

module.exports = {
    postUser,
};
