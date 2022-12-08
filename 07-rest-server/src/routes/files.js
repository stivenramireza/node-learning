const { Router } = require('express');
const { param } = require('express-validator');

const { isValidFile, validateFields } = require('../middlewares');
const { upload, putImage } = require('../controllers/files');
const { allowedCollections } = require('../utils/validators');

const router = Router();

router.post('/', [isValidFile, validateFields], upload);

router.put(
    '/:collection/:id',
    [
        param('id', 'Id is not valid').isMongoId(),
        param('collection').custom((c) => allowedCollections(c, ['users', 'products'])),
        isValidFile,
        validateFields,
    ],
    putImage
);

module.exports = router;
