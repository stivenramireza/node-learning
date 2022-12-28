const { request, response } = require('express');

const {
    searchProducts,
    getTotalProducts,
    searchProductById,
    postProduct,
    putProduct,
    deleteProduct,
} = require('../services/products');

const getProducts = async (req = request, res = response) => {
    const { offset = 0, limit = 5 } = req.query;

    const [total, products] = await Promise.all([
        getTotalProducts(),
        searchProducts(Number(offset), Number(limit)),
    ]);

    res.json({ total, products });
};

const getProductById = async (req = request, res = response) => {
    const { id } = req.params;

    const product = await searchProductById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.json(product);
};

const postProducts = async (req = request, res = response) => {
    const { name, price, category, description } = req.body;
    const userId = req.user._id;

    const data = { name, user: userId, price, category, description };

    const savedProduct = await postProduct(data);
    if (!savedProduct) return res.status(409).json({ message: 'Product could not be saved' });

    res.json(savedProduct);
};

const putProducts = async (req = request, res = response) => {
    const { id } = req.params;
    const { name, price, category, description, available } = req.body;
    const userId = req.user._id;

    const data = { name, user: userId, price, category, description, available };

    const updatedProduct = await putProduct(id, data);
    if (!updatedProduct) return res.status(409).json({ message: 'Product could not be updated' });

    res.json(updatedProduct);
};

const deleteProducts = async (req = request, res = response) => {
    const { id } = req.params;

    const deletedProduct = await deleteProduct(id);
    if (!deletedProduct) return res.status(409).json({ message: 'Product could not be deleted' });

    res.json(deletedProduct);
};

module.exports = {
    getProducts,
    getProductById,
    postProducts,
    putProducts,
    deleteProducts,
};
