const express = require('express');
const vendorAuthController = require('../../controllers/frontend/vendorAuthController');

const router = express.Router();

router.post('/register', vendorAuthController.vendorRegister);
router.post('/login', vendorAuthController.vendorLogin);
router.post('/generateAccessToken', vendorAuthController.generateAccessToken);

module.exports = router;
