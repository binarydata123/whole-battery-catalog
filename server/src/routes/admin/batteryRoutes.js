const express = require('express');
const batteryController = require('../../controllers/admin/batteryController');
const router = express.Router();

router.get('/', batteryController.allBattery);

module.exports = router;
