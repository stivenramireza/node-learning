const { request, response } = require('express');

const { uploadFile } = require('../utils');

const upload = async (req = request, res = response) => {
    if (!req.files || !Object.keys(req.files).length || !req.files.file) {
        return res.status(400).json({ message: 'Missing file' });
    }

    try {
        const fileName = await uploadFile(req.files, ['txt', 'jpg', 'md'], 'texts');
        res.json({
            fileName,
        });
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

module.exports = { upload };
