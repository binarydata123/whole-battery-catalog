const express = require('express');
const router = express.Router();
const contactUsController = require('../../controllers/admin/contactUsController');

// Define routes for booking appointments
router.get('/', contactUsController.getContactUs);
router.get('/allNotifications/:id', contactUsController.getAllNotifications);
module.exports = router;
