const { findCategoryByName, save } = require('../repositories/categories');

const saveCategory = async (name, userId) => {
    const category = await findCategoryByName(name);
    if (category) return false;

    const data = {
        name,
        user: userId,
    };

    return await save(data);
};

module.exports = {
    saveCategory,
};
