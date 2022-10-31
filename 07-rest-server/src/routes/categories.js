const { Router } = require('express');
const { body } = require('express-validator');

const { validateFields } = require('../middlewares/validations');

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

router.post('/', (req, res) => {
    res.json({
        message: 'POST categories',
    });
});

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
