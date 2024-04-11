const express = require('express');
const router = express.Router();
const batteryController = require('../../controllers/user/batteryController');

router.get('/', batteryController.allBatteryByVendor);
router.get('/byBatteryId/:id', batteryController.getBatteryDataById);
router.get('/allPeriscopeTest/byBatteryId/:id', batteryController.allPeriscopeTestByBatteryId);
router.get('/periscopeTest/:id', batteryController.getPeriscopeTestData);

module.exports = router;
