const { request, response } = require('express');

const allowedCollections = ['users', 'categories', 'products', 'roles'];

const isValidCollection = (req = request, res = response, next) => {
    if (!allowedCollections.includes(req.params.collection)) {
        return res.status(400).json({
            message: `You must choose one of the following collections: ${allowedCollections}`,
        });
    }

    next();
};

module.exports = { isValidCollection };
