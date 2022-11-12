const {
    findProducts,
    findProductById,
    findProductByName,
    countProducts,
    saveProduct,
    updateProduct,
    removeProduct,
} = require('../repositories/products');

const { searchCategoryByName } = require('../services/categories');

const searchProducts = async (offset, limit) => {
    return await findProducts(offset, limit);
};
const getTotalProducts = async () => {
    return await countProducts();
};

const searchProductById = async (id) => {
    const product = await findProductById(id);
    if (!product) return false;

    return product;
};

const postProduct = async (data) => {
    const productName = data.name.toUpperCase();
    const existsProduct = await findProductByName(productName);
    if (existsProduct) return false;

    const category = data.category.toUpperCase();
    const searchedCategory = await searchCategoryByName(category);
    if (!searchedCategory) return false;

    const product = { ...data, name: productName, category: searchedCategory._id };

    const savedProduct = await saveProduct(product);
    if (!savedProduct) return false;

    return savedProduct;
};

const putProduct = async (id, data) => {
    const { name, category } = data;

    if (name) {
        const productName = name.toUpperCase();
        const foundProduct = await findProductByName(productName);
        if (foundProduct) return false;
        data.name = productName;
    }

    if (category) {
        const categoryName = category.toUpperCase();
        const searchedCategory = await searchCategoryByName(categoryName);
        if (!searchedCategory) return false;
        data.category = searchedCategory._id;
    }

    const updatedProduct = await updateProduct(id, data);
    if (!updatedProduct) return false;

    return updatedProduct;
};

const deleteProduct = async (id) => {
    const deletedProduct = await removeProduct(id);
    if (!deletedProduct) return false;

    return deletedProduct;
};

module.exports = {
    searchProducts,
    getTotalProducts,
    searchProductById,
    postProduct,
    putProduct,
    removeProduct,
    deleteProduct,
};
