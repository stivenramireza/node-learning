const { Router } = require('express');
const { body } = require('express-validator');

const { jwtAuth, validateFields } = require('../middlewares');

const { createCategory } = require('../controllers/categories');

const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: 'GET categories',
    });
});

router.get('/:id', (req, res) => {
    res.json({
        message: 'GET categories by id',
    });
});

router.post(
    '/',
    [jwtAuth, body('name', 'Name is required').not().isEmpty(), validateFields],
    createCategory
);

router.put('/:id', (req, res) => {
    res.json({
        message: 'PUT categories',
    });
});

router.delete('/:id', (req, res) => {
    res.json({
        message: 'DELETE categories',
    });
});

module.exports = router;
