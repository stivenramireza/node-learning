const bcryptjs = require('bcryptjs');

const encryptPassword = (password) => {
    const salt = bcryptjs.genSaltSync();
    return bcryptjs.hashSync(password, salt);
};

const validatePassword = (password, hashed_password) => {
    return bcryptjs.compareSync(password, hashed_password);
};

module.exports = {
    encryptPassword,
    validatePassword,
};
