const { Router } = require('express');
const { check } = require('express-validator');

const {
    getUsers,
    getUserById,
    postUsers,
    putUsers,
    patchUsers,
    deleteUsers,
} = require('../controllers/users');
const { validateFields } = require('../middlewares/validations');
const { isValidRole, existsEmail } = require('../utils/validators');

const router = Router();

router.get('/', getUsers);

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

router.put('/:id', putUsers);

router.patch('/', patchUsers);

router.delete('/', deleteUsers);

module.exports = router;
