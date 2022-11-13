const { ObjectId } = require('mongoose').Types;

const { searchUserById, searchUsersByParams } = require('../services/users');
const { searchCategoryById, searchCategoriesByParams } = require('../services/categories');
const { searchProductById, searchProductsByParams } = require('../services/products');

const searchUsers = async (term) => {
    const isMongoId = ObjectId.isValid(term);

    let users = [];
    if (isMongoId) {
        const user = await searchUserById(term);
        if (user) users.push(user);
    } else {
        const foundUsers = await searchUsersByParams(term);
        users = [...users, ...foundUsers];
    }

    return users;
};

const searchCategories = async (term) => {
    const isMongoId = ObjectId.isValid(term);

    let categories = [];
    if (isMongoId) {
        const category = await searchCategoryById(term);
        if (category) categories.push(category);
    } else {
        const foundCategories = await searchCategoriesByParams(term);
        categories = [...categories, ...foundCategories];
    }

    return categories;
};

const searchProducts = async (term) => {
    const isMongoId = ObjectId.isValid(term);

    let products = [];
    if (isMongoId) {
        const product = await searchProductById(term);
        if (product) products.push(product);
    } else {
        const foundProducts = await searchProductsByParams(term);
        products = [...products, ...foundProducts];
    }

    return products;
};

const findTerm = async (collection, term) => {
    let searchedTerms = [];

    switch (collection) {
        case 'users':
            searchedTerms = searchUsers(term);
            break;
        case 'categories':
            searchedTerms = searchCategories(term);
            break;
        case 'products':
            searchedTerms = searchProducts(term);
            break;
        default:
            searchedTerms = [];
            break;
    }

    return searchedTerms;
};

module.exports = { findTerm };
