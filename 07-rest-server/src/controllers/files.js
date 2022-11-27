const { request, response } = require('express');

const uploadFile = (req = request, res = response) => {
    res.json({
        message: 'Hello world!',
    });
};

module.exports = { uploadFile };
