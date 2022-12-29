const { request, response } = require('express');

const {
    searchCategories,
    getTotalCategories,
    searchCategoryById,
    postCategory,
    putCategory,
    removeCategory,
} = require('../services/categories');

const getCategories = async (req = request, res = response) => {
    const { skip = 0, limit = 5 } = req.query;

    const [total, categories] = await Promise.all([
        getTotalCategories(),
        searchCategories(Number(skip), Number(limit)),
    ]);

    res.json({ total, categories });
};

const getCategoryById = async (req = request, res = response) => {
    const { id } = req.params;

    const category = await searchCategoryById(id);
    if (!category) return res.status(404).json({ message: 'Category not found' });

    res.json(category);
};

const createCategory = async (req = request, res = response) => {
    const name = req.body.name.toUpperCase();

    const userId = req.user._id;
    const category = await postCategory(name, userId);
    if (!category) return res.status(409).json({ message: 'Category already exists' });

    res.status(201).json(category);
};

const putCategories = async (req = request, res = response) => {
    const { id } = req.params;
    const { status, user, ...data } = req.body;

    data.name = data.name.toUpperCase();
    data.user = req.user._id;

    const updatedCategory = await putCategory(id, data);
    if (!updatedCategory) return res.status(409).json({ message: 'Category could not be updated' });

    res.json(updatedCategory);
};

const deleteCategories = async (req = request, res = response) => {
    const { id } = req.params;

    const deletedCategory = await removeCategory(id);
    if (!deletedCategory) {
        return res.status(400).json({
            message: 'Category is already deleted',
        });
    }

    res.json(deletedCategory);
};

module.exports = {
    getCategories,
    getCategoryById,
    createCategory,
    putCategories,
    deleteCategories,
};
