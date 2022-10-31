const { Category } = require('../models');

const findCategoryByName = async (name) => {
    return await Category.findOne({ name });
};

const save = async (category) => {
    const savedCategory = new Category(category);
    await savedCategory.save();
    return savedCategory;
};

module.exports = {
    findCategoryByName,
    save,
};
