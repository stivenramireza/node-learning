const { Product } = require('../models');

const findProducts = async (offset, limit) => {
    return await Product.find({ status: true })
        .populate(['user', 'category'], 'name')
        .skip(offset)
        .limit(limt);
};

const countProducts = async () => {
    return await Product.countDocuments({ status: true });
};
