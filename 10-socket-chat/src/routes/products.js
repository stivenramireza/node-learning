const { Router } = require('express');
const { param, query, body } = require('express-validator');

const {
    getProducts,
    getProductById,
    postProducts,
    putProducts,
    deleteProducts,
} = require('../controllers/products');

const { jwtAuth, isAdminRole, validateFields } = require('../middlewares');
const { existProductById } = require('../utils/validators');

const router = Router();

router.get(
    '/',
    [
        query('offset', 'Offset must be a number').isNumeric().optional(),
        query('limit', 'Limit must be a number').isNumeric().optional(),
        validateFields,
    ],
    getProducts
);

router.get('/:id', [param('id', 'Invalid id').isMongoId(), validateFields], getProductById);

router.post(
    '/',
    [
        jwtAuth,
        body('name', 'Name is required').isString().not().isEmpty(),
        body('price', 'Price must be a number').isNumeric().optional(),
        body('category', 'Category is required').isString().not().isEmpty(),
        body('description', 'Description must be a string').isString().optional(),
        validateFields,
    ],
    postProducts
);

router.put(
    '/:id',
    [
        jwtAuth,
        param('id', 'Id is invalid').isMongoId(),
        param('id').custom(existProductById),
        body('name', 'Name must be a string').isString().optional(),
        body('price', 'Price must be a number').isNumeric().optional(),
        body('category', 'Category must be a string').isString().optional(),
        body('description', 'Description must be a string').isString().optional(),
        body('available').isBoolean().optional(),
        validateFields,
    ],
    putProducts
);

router.delete(
    '/:id',
    [
        jwtAuth,
        isAdminRole,
        param('id', 'Id is invalid').isMongoId(),
        param('id').custom(existProductById),
        validateFields,
    ],
    deleteProducts
);

module.exports = router;
