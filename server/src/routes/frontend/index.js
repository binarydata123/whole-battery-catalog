const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const paymentRoutes = require('./paymentRoutes');
const blogRoutes = require('./blogRoutes');

router.use('/auth', authRoutes);
router.use('/payment', paymentRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;
