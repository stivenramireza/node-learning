const { Router } = require('express');
const { check } = require('express-validator');

const { getUsers, postUsers, putUsers, patchUsers, deleteUsers } = require('../controllers/users');

const router = Router();

router.get('/', getUsers);

router.post(
    '/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('password', 'Password is required and must have more than 6 characters').isLength({
            min: 6,
        }),
        check('email', 'Email is invalid').isEmail(),
    ],
    postUsers
);

router.put('/:id', putUsers);

router.patch('/', patchUsers);

router.delete('/', deleteUsers);

module.exports = router;
