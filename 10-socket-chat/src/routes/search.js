const { Router } = require('express');
const { param } = require('express-validator');

const { search } = require('../controllers/search');
const { isValidCollection, validateFields } = require('../middlewares');

const router = Router();

router.get(
    '/:collection/:term',
    [
        param('collection', 'Collection is required').not().isEmpty(),
        param('term', 'Term is required').not().isEmpty(),
        isValidCollection,
        validateFields,
    ],
    search
);

module.exports = router;
