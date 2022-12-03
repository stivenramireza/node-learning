const validationsMiddleware = require('../middlewares/validations');
const jwtAuthMiddleware = require('../middlewares/auth');
const rolesMiddleware = require('../middlewares/roles');
const collectionsMiddleware = require('../middlewares/collections');

module.exports = {
    ...validationsMiddleware,
    ...jwtAuthMiddleware,
    ...rolesMiddleware,
    ...collectionsMiddleware,
};
