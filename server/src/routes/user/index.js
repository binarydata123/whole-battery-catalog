const express = require('express');
const router = express.Router();
const updateUser = require('./userRoutes');
const batteryRoutes = require('./batteryRoutes');

router.use('/updateUser', updateUser);
router.use('/battery', batteryRoutes);

module.exports = router;
