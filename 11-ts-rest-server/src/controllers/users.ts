import { Request, Response } from 'express';
import User from '../models/user';

import UserService from '../services/users';

class UserController {
    public async getUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await UserService.getUsers();

            res.json(users);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async getUser(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            const user = await UserService.getUserById(id);

            res.json(user);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async postUser(req: Request, res: Response): Promise<void> {
        try {
            const user = req.body;

            const createdUser = await UserService.saveUser(user);

            res.json(createdUser);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async putUser(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { body } = req;

            const updatedUser = await UserService.updateUser(id, body);

            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            const deletedUser = await UserService.deleteUser(id);

            res.json(deletedUser);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default new UserController();
