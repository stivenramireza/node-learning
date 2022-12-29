import { Router } from 'express';
import { param, body } from 'express-validator';

import UserController from '../controllers/users';
import { validateFields } from '../middlewares/validations';
import { existsEmail, existsUserById } from '../utils/validators';

const router = Router();

router.get('/', UserController.getUsers);

router.get(
    '/:id',
    [param('id', 'Id is not valid').isUUID(), param('id').custom(existsUserById), validateFields],
    UserController.getUser
);

router.post(
    '/',
    [
        body('name', 'Name is required').not().isEmpty(),
        body('email', 'Email is invalid').isEmail(),
        body('email').custom(existsEmail),
        validateFields,
    ],
    UserController.postUser
);

router.put(
    '/:id',
    [
        param('id', 'Id is not valid').isUUID(),
        param('id').custom(existsUserById),
        body('name').optional(),
        body('email').isEmail().optional(),
        body('email').custom(existsEmail),
        validateFields,
    ],
    UserController.putUser
);

router.delete(
    '/:id',
    [param('id', 'Id is not valid').isUUID(), param('id').custom(existsUserById), validateFields],
    UserController.deleteUser
);

export default router;
