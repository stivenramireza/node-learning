const { request, response } = require('express');

const isValidFile = (req = request, res = response, next) => {
    const files = req.files;
    if (!files || !files.file) {
        return res.status(400).json({
            message: 'File not uploaded',
        });
    }
    next();
};

module.exports = { isValidFile };
