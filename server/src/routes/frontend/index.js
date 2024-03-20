const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const paymentRoutes = require('./paymentRoutes');

router.use('/auth', authRoutes);
router.use('/payment', paymentRoutes);

module.exports = router;
