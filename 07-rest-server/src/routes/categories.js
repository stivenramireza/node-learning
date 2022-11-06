const { Router } = require('express');
const { body, query, param } = require('express-validator');

const { jwtAuth, isAdminRole, validateFields } = require('../middlewares');
const { existCategoryById } = require('../utils/validators');

const {
    getCategories,
    getCategoryById,
    createCategory,
    putCategories,
    deleteCategories,
} = require('../controllers/categories');

const router = Router();

router.get(
    '/',
    [
        query('skip', 'Skip must be a number').isNumeric().optional(),
        query('limit', 'Limit must be a number').isNumeric().optional(),
        validateFields,
    ],
    getCategories
);

router.get('/:id', [param('id', 'Invalid id').isMongoId(), validateFields], getCategoryById);

router.post(
    '/',
    [jwtAuth, body('name', 'Name is required').not().isEmpty(), validateFields],
    createCategory
);

router.put(
    '/:id',
    [
        jwtAuth,
        param('id', 'Invalid id').isMongoId(),
        param('id').custom(existCategoryById),
        body('name', 'Name is required').not().isEmpty(),
        validateFields,
    ],
    putCategories
);

router.delete(
    '/:id',
    [
        jwtAuth,
        isAdminRole,
        param('id', 'Invalid id').isMongoId(),
        param('id').custom(existCategoryById),
        validateFields,
    ],
    deleteCategories
);

module.exports = router;
