const { Router } = require('express');
const { body } = require('express-validator');

const { validateFields } = require('../middlewares/validations');
const { uploadFile } = require('../controllers/files');

const router = Router();

router.post('/', uploadFile);

module.exports = router;
