const { request, response } = require('express');

const { searchUserById } = require('../services/users');
const { searchProductById } = require('../services/products');
const { getImage, updateImage } = require('../services/files');
const { getDefaultImagePath, uploadFile } = require('../utils');

const upload = async (req = request, res = response) => {
    try {
        const fileName = await uploadFile(req.files, ['txt', 'jpg', 'md'], 'texts');
        res.json({
            fileName,
        });
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

const showImage = async (req = request, res = response) => {
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

    const imagePath = await getImage(model, collection);
    if (imagePath) return res.sendFile(imagePath);

    const defaultPath = getDefaultImagePath();
    res.sendFile(defaultPath);
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

module.exports = { upload, showImage, putImage };
