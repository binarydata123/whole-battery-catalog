const router = require('express').Router();
const vendorController = require('../../controllers/admin/vendorController');

router.get('/', vendorController.allVendor);

module.exports = router;
