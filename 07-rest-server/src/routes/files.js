const { Router } = require('express');
const { param } = require('express-validator');

const { validateFields } = require('../middlewares/validations');
const { upload, putImage } = require('../controllers/files');
const { allowedCollections } = require('../utils/validators');

const router = Router();

router.post('/', [], upload);

router.put(
    '/:collection/:id',
    [
        param('id', 'Id is not valid').isMongoId(),
        param('collection').custom((c) => allowedCollections(c, ['users', 'products'])),
        validateFields,
    ],
    putImage
);

module.exports = router;
