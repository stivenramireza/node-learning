const { request, response } = require('express');

const getUsers = (req = request, res = response) => {
    res.json({
        msg: 'GET API - Controller',
    });
};

const postUsers = (req = request, res = response) => {
    res.json({
        msg: 'POST API - Controller',
    });
};

const putUsers = (req = request, res = response) => {
    res.json({
        msg: 'PUT API - Controller',
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
