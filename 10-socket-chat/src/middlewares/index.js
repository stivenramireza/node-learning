const validationsMiddleware = require('./validations');
const jwtAuthMiddleware = require('./auth');
const rolesMiddleware = require('./roles');
const collectionsMiddleware = require('./collections');
const filesMiddleware = require('./files');

module.exports = {
    ...validationsMiddleware,
    ...jwtAuthMiddleware,
    ...rolesMiddleware,
    ...collectionsMiddleware,
    ...filesMiddleware,
};
