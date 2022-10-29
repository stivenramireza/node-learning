const validationsMiddleware = require('../middlewares/validations');
const jwtAuthMiddleware = require('../middlewares/auth');
const rolesMiddleware = require('../middlewares/roles');

module.exports = {
    ...validationsMiddleware,
    ...jwtAuthMiddleware,
    ...rolesMiddleware,
};
