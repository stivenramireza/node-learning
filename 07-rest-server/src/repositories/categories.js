const { Category, User } = require('../models');

const findCategories = async (skip, limit) => {
    return await Category.find({ status: true }).skip(skip).limit(limit).populate({
        path: 'user',
        select: '-__v -password',
    });
};

const countCategories = async () => {
    return await Category.countDocuments({ status: true });
};

const findCategoryById = async (id) => {
    return await Category.findById(id).populate({
        path: 'user',
        select: '-__v -password',
    });
};

const findCategoryByName = async (name) => {
    return await Category.findOne({ name });
};

const saveCategory = async (category) => {
    const savedCategory = new Category(category);
    await savedCategory.save();
    return savedCategory;
};

const updateCategory = async (id, data) => {
    return await User.findByIdAndUpdate(id, data);
};

const deleteCategory = async (id) => {
    return await User.findByIdAndUpdate(id, { status: false });
};

module.exports = {
    findCategories,
    findCategoryById,
    countCategories,
    findCategoryByName,
    saveCategory,
    updateCategory,
    deleteCategory,
};
