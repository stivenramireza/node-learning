const { Router } = require('express');
const { param, query, body } = require('express-validator');

const {
    getUsers,
    getUserById,
    postUsers,
    putUsers,
    patchUsers,
    deleteUsers,
} = require('../controllers/users');
const { validateFields, jwtAuth, isAdminRole, hasRole } = require('../middlewares');
const { isValidRole, existsEmail, existsUserById } = require('../utils/validators');

const router = Router();

router.get(
    '/',
    [
        query('skip', 'Skip must be a number').isNumeric().optional(),
        query('limit', 'Limit must be a number').isNumeric().optional(),
        validateFields,
    ],
    getUsers
);

router.get('/:id', getUserById);

router.post(
    '/',
    [
        body('name', 'Name is required').not().isEmpty(),
        body('password', 'Password is required and must have more than 6 characters').isLength({
            min: 6,
        }),
        body('email', 'Email is invalid').isEmail(),
        body('email').custom(existsEmail),
        body('role').custom(isValidRole),
        validateFields,
    ],
    postUsers
);

router.put(
    '/:id',
    [
        param('id', 'Invalid id').isMongoId(),
        param('id').custom(existsUserById),
        body('role').custom(isValidRole),
        validateFields,
    ],
    putUsers
);

router.patch('/', patchUsers);

router.delete(
    '/:id',
    [
        jwtAuth,
        // isAdminRole,
        hasRole('ADMIN', 'SALES'),
        param('id', 'Invalid id').isMongoId(),
        param('id').custom(existsUserById),
        validateFields,
    ],
    deleteUsers
);

module.exports = router;
