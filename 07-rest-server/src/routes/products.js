const { Router, request, response } = require('express');

const router = Router();

router.get('/', (req = request, res = response) => {
    res.json({ message: 'GET products' });
});

router.get('/:id', (req = request, res = response) => {
    res.json({ message: 'GET product' });
});

router.post('/', (req = request, res = response) => {
    res.json({ message: 'POST products' });
});

router.put('/:id', (req = request, res = response) => {
    res.json({ message: 'PUT products' });
});

router.delete('/:id', (req = request, res = response) => {
    res.json({ message: 'DELETE products' });
});

module.exports = router;
