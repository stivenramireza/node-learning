const { request, response } = require('express');

const isValidFile = (req = request, res = response, next) => {
    if (!req.files || !Object.keys(req.files).length || !req.files.file) {
        return res.status(400).json({ message: 'Missing file' });
    }
    next();
};

module.exports = { isValidFile };
