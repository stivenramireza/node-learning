const { request, response } = require('express');

const { saveCategory } = require('../services/categories');

const createCategory = async (req = request, res = response) => {
    const name = req.body.name.toUpperCase();

    const userId = req.user._id;
    const category = await saveCategory(name, userId);
    if (!category) return res.status(409).json({ message: 'Category already exists' });

    res.status(201).json(category);
};

module.exports = {
    createCategory,
};
