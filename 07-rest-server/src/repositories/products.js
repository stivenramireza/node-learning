const { Product } = require('../models');

const populatedUser = { path: 'user', select: 'name' };
const populatedCategory = { path: 'category', select: 'name' };

const findProducts = async (offset, limit) => {
    return await Product.find({ status: true })
        .populate(populatedUser)
        .populate(populatedCategory)
        .skip(offset)
        .limit(limit);
};

const countProducts = async () => {
    return await Product.countDocuments({ status: true });
};

const findProductById = async (id) => {
    return await Product.findOne({ _id: id, status: true })
        .populate(populatedUser)
        .populate(populatedCategory);
};

const findProductByName = async (name) => {
    return await Product.findOne({ name }).populate(populatedUser).populate(populatedCategory);
};

const findProductsByParams = async (term) => {
    return await Product.find({
        $or: [
            { name: { $regex: term, $options: 'i' } },
            { description: { $regex: term, $options: 'i' } },
        ],
        $and: [{ status: true }],
    });
};

const saveProduct = async (data) => {
    const savedProduct = new Product(data);
    await savedProduct.save();
    return savedProduct;
};

const updateProduct = async (id, data) => {
    return await Product.findByIdAndUpdate(id, data, { new: true })
        .populate(populatedUser)
        .populate(populatedCategory);
};

const removeProduct = async (id) => {
    return await Product.findByIdAndUpdate(id, { status: false }, { new: true })
        .populate(populatedUser)
        .populate(populatedCategory);
};

module.exports = {
    findProducts,
    countProducts,
    findProductById,
    findProductByName,
    findProductsByParams,
    saveProduct,
    updateProduct,
    removeProduct,
};
