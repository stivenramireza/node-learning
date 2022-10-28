const { Router } = require('express');
const { check, query } = require('express-validator');

const {
    getUsers,
    getUserById,
    postUsers,
    putUsers,
    patchUsers,
    deleteUsers,
} = require('../controllers/users');
const { validateFields } = require('../middlewares/validations');
const { isValidRole, existsEmail, existsUserById } = require('../utils/validators');

const router = Router();

router.get(
    '/',
    [
        query('skip', 'Skip must be a number').isNumeric(),
        query('limit', 'Limit must be a number').isNumeric(),
    ],
    getUsers
);

router.get('/:id', getUserById);

router.post(
    '/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('password', 'Password is required and must have more than 6 characters').isLength({
            min: 6,
        }),
        check('email', 'Email is invalid').isEmail(),
        check('email').custom(existsEmail),
        // check('role', 'Role is not valid').isIn(['ADMIN', 'USER']),
        check('role').custom(isValidRole),
        validateFields,
    ],
    postUsers
);

router.put(
    '/:id',
    [
        check('id', 'Invalid id').isMongoId(),
        check('id').custom(existsUserById),
        check('role').custom(isValidRole),
        validateFields,
    ],
    putUsers
);

router.patch('/', patchUsers);

router.delete('/', deleteUsers);

module.exports = router;
