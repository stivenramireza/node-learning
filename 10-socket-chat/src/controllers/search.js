const { request, response } = require('express');

const { findTerm } = require('../services/search');

const search = async (req = request, res = response) => {
    const { collection, term } = req.params;

    const results = await findTerm(collection, term);

    res.json({ total: results.length, results });
};

module.exports = {
    search,
};
