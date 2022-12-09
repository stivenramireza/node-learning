const { Router } = require('express');
const { param } = require('express-validator');

const { isValidFile, validateFields } = require('../middlewares');
const { upload, showImage, putImageCloudinary } = require('../controllers/files');
const { allowedCollections } = require('../utils/validators');

const router = Router();

router.post('/', [isValidFile, validateFields], upload);

router.get(
    '/:collection/:id',
    [
        param('id', 'Id is not valid').isMongoId(),
        param('collection').custom((c) => allowedCollections(c, ['users', 'products'])),
        validateFields,
    ],
    showImage
);

router.put(
    '/:collection/:id',
    [
        isValidFile,
        param('id', 'Id is not valid').isMongoId(),
        param('collection').custom((c) => allowedCollections(c, ['users', 'products'])),
        validateFields,
    ],
    putImageCloudinary
);

module.exports = router;
