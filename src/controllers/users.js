const { request, response } = require('express');

const {
    searchUsers,
    getTotalUsers,
    searchUserById,
    postUser,
    putUser,
    removeUser,
} = require('../services/users');

const getUsers = async (req = request, res = response) => {
    const { skip = 0, limit = 5 } = req.query;

    const [total, users] = await Promise.all([
        getTotalUsers(),
        searchUsers(Number(skip), Number(limit)),
    ]);

    res.json({ total, users });
};

const getUserById = async (req = request, res = response) => {
    const { id } = req.params;

    const user = await searchUserById(id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
};

const postUsers = async (req = request, res = response) => {
    const { name, email, password, role } = req.body;
    const user = { name, email, password, role };

    const savedUser = await postUser(user);
    if (!savedUser) return res.status(409).json({ message: 'Email is already registered' });

    res.json(savedUser);
};

const putUsers = async (req = request, res = response) => {
    const { id } = req.params;
    const { _id, password, google, email, ...data } = req.body;

    const updatedUser = await putUser(id, data, password);

    res.json(updatedUser);
};

const patchUsers = (req = request, res = response) => {
    res.json({
        msg: 'PATCH API - Controller',
    });
};

const deleteUsers = async (req = request, res = response) => {
    const { id } = req.params;

    const deletedUser = await removeUser(id);
    if (!deletedUser) {
        return res.status(400).json({
            message: 'User not found',
        });
    }

    res.json(deletedUser);
};

module.exports = {
    getUsers,
    getUserById,
    postUsers,
    putUsers,
    patchUsers,
    deleteUsers,
};
