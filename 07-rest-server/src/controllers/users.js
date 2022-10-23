const { request, response } = require('express');
const { validationResult } = require('express-validator');

const { postUser } = require('../services/users');

const getUsers = (req = request, res = response) => {
    const { q, name = 'No name', apikey, page = 10, limit } = req.query;
    res.json({
        msg: 'GET API - Controller',
        q,
        name,
        apikey,
        page,
        limit,
    });
};

const postUsers = async (req = request, res = response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);

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
    postUsers,
    putUsers,
    patchUsers,
    deleteUsers,
};
