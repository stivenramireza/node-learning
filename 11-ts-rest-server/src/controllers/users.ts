import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
    res.json({
        message: 'GET users',
    });
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
