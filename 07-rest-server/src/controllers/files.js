const { request, response } = require('express');

const { searchUserById } = require('../services/users');
const { searchProductById } = require('../services/products');
const { updateImage } = require('../services/files');
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

const putImage = async (req = request, res = response) => {
    const { id, collection } = req.params;

    let model;

    switch (collection) {
        case 'users':
            model = await searchUserById(id);
            if (!model) return res.status(404).json({ message: 'User not found' });
            break;
        case 'products':
            model = await searchProductById(id);
            if (!model) return res.status(404).json({ message: 'Product not found' });
            break;
        default:
            return res.status(500).json({ message: 'It must be validated' });
    }

    await updateImage(model, req.files, collection);

    res.json({ model });
};

module.exports = { upload, putImage };
