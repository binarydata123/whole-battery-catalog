const express = require('express');
const router = express.Router();
const profileController = require('../../controllers/admin/profileController')

router.post('/update', profileController.updateProfile)

module.exports = router;
