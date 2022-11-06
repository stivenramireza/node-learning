const {
    findCategories,
    countCategories,
    findCategoryById,
    findCategoryByName,
    saveCategory,
    updateCategory,
    deleteCategory,
} = require('../repositories/categories');

const searchCategories = async (skip, limit) => {
    return await findCategories(skip, limit);
};

const getTotalCategories = async () => {
    return await countCategories();
};

const searchCategoryById = async (id) => {
    return await findCategoryById(id);
};

const postCategory = async (name, userId) => {
    const category = await findCategoryByName(name);
    if (category) return false;

    const data = {
        name,
        user: userId,
    };

    return await saveCategory(data);
};

const putCategory = async (id, name, userId) => {
    const category = await findCategoryByName(name);
    if (category) return false;

    const data = {
        name,
        user: userId,
    };

    return await updateCategory(id, data);
};

const removeCategory = async (id) => {
    const category = await searchCategoryById(id);
    if (!category.status) return false;

    return await deleteCategory(id);
};

module.exports = {
    searchCategories,
    getTotalCategories,
    searchCategoryById,
    postCategory,
    putCategory,
    removeCategory,
};
