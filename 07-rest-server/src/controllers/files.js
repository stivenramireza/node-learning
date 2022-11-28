const { request, response } = require('express');

const { uploadFile } = require('../utils');

const upload = async (req = request, res = response) => {
    if (!req.files || !Object.keys(req.files).length || !req.files.file) {
        return res.status(400).json({ message: 'Missing file' });
    }

    const fileName = await uploadFile(req.files);

    res.json({
        fileName,
    });
};

module.exports = { upload };
