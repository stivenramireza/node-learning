const { request, response } = require('express');

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

const postUsers = (req = request, res = response) => {
    const { name, age } = req.body;
    res.json({
        msg: 'POST API - Controller',
        name,
        age,
    });
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
