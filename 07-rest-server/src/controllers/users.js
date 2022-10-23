const { request, response } = require('express');

const { searchUsers, searchUserById, postUser } = require('../services/users');

const getUsers = async (req = request, res = response) => {
    const { q, name = 'No name', apikey, page = 10, limit } = req.query;
    const users = await searchUsers();
    res.json(users);
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

    return res.json(savedUser);
};

const putUsers = (req = request, res = response) => {
    const { id } = req.params;
    res.json({
        msg: 'PUT API - Controller',
        id,
    });
};

const patchUsers = (req = request, res = response) => {
    res.json({
        msg: 'PATCH API - Controller',
    });
};

const deleteUsers = (req = request, res = response) => {
    res.json({
        msg: 'DELETE API - Controller',
    });
};

module.exports = {
    getUsers,
    getUserById,
    postUsers,
    putUsers,
    patchUsers,
    deleteUsers,
};
