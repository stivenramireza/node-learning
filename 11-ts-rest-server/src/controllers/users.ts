import { Request, Response } from 'express';

import UserService from '../services/users';

class UserController {
    public async getUsers(req: Request, res: Response) {
        const users = await UserService.getUsers();

        res.json(users);
    }

    public async getUser(req: Request, res: Response) {
        const { id } = req.params;

        const user = await UserService.getUserById(id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json(user);
    }

    public async postUser(req: Request, res: Response) {
        const { body } = req;

        res.json({
            message: 'POST users',
            body,
        });
    }

    public async putUser(req: Request, res: Response) {
        const { id } = req.params;
        const { body } = req;

        res.json({
            message: 'PUT users',
            body,
            id,
        });
    }

    public async deleteUser(req: Request, res: Response) {
        const { id } = req.params;

        res.json({
            message: 'DELETE users',
            id,
        });
    }
}

export default new UserController();
