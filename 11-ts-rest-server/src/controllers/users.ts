import { Request, Response } from 'express';
import { searchUsers } from '../services/users';

export const getUsers = async (req: Request, res: Response) => {
    const users = await searchUsers();

    res.json(users);
};

export const getUser = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        message: 'GET user',
        id,
    });
};

export const postUser = (req: Request, res: Response) => {
    const { body } = req;

    res.json({
        message: 'POST users',
        body,
    });
};

export const putUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    res.json({
        message: 'PUT users',
        body,
        id,
    });
};

export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        message: 'DELETE users',
        id,
    });
};
