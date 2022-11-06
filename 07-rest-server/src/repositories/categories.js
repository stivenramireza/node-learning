const { Category } = require('../models');

const findCategories = async (skip, limit) => {
    return await Category.find({ status: true }).populate('user', 'name').skip(skip).limit(limit);
};

const countCategories = async () => {
    return await Category.countDocuments({ status: true });
};

const findCategoryById = async (id) => {
    return await Category.findOne({ _id: id, status: true }).populate('user', 'name');
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
    return await Category.findByIdAndUpdate(id, data, { new: true }).populate('user', 'name');
};

const deleteCategory = async (id) => {
    return await Category.findByIdAndUpdate(id, { status: false }, { new: true }).populate(
        'user',
        'name'
    );
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
