const validationsMiddleware = require('../middlewares/validations');
const jwtAuthMiddleware = require('../middlewares/auth');
const rolesMiddleware = require('../middlewares/roles');
const collectionsMiddleware = require('../middlewares/collections');
const filesMiddleware = require('../middlewares/files');

module.exports = {
    ...validationsMiddleware,
    ...jwtAuthMiddleware,
    ...rolesMiddleware,
    ...collectionsMiddleware,
    ...filesMiddleware,
};
