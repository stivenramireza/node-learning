const { Router } = require('express');
const { body } = require('express-validator');

const { validateFields } = require('../middlewares/validations');
const { upload } = require('../controllers/files');

const router = Router();

router.post('/', [], upload);

module.exports = router;
