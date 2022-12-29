import { Router } from 'express';

import UserController from '../controllers/users';

const router = Router();

router.get('/', UserController.getUsers);

router.get('/:id', UserController.getUser);

router.post('/', UserController.postUser);

router.put('/:id', UserController.putUser);

router.delete('/:id', UserController.deleteUser);

export default router;
