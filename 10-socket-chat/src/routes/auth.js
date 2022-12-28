const { Router } = require('express');
const { body } = require('express-validator');

const { jwtAuth } = require('../middlewares/auth');
const { validateFields } = require('../middlewares/validations');
const { login, loginGoogle, renewToken } = require('../controllers/auth');

const router = Router();

router.post(
    '/login',
    [
        body('email', 'Email is invalid').isEmail(),
        body('password', 'Password is mandatory').not().isEmpty(),
        validateFields,
    ],
    login
);

router.post(
    '/login/google',
    [body('idToken', 'idToken is mandatory').not().isEmpty(), validateFields],
    loginGoogle
);

router.post('/token/validation', jwtAuth, renewToken);

module.exports = router;
