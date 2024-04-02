const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const paymentRoutes = require('./paymentRoutes');
const blogRoutes = require('./blogRoutes');
const vendorAuthRoutes = require('./vendorAuthRoutes');

router.use('/auth', authRoutes);
router.use('/vendorAuth', vendorAuthRoutes);
router.use('/payment', paymentRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;
