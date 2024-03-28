const express = require('express');
const frontendRoutes = require('./frontend');
const adminRoutes = require('./admin');
const verifyToken = require('../middleware/verifyToken');
const checkRole = require('../middleware/checkRole');
const router = express.Router();

router.use('/api', frontendRoutes);
router.use('/api/admin', adminRoutes);

// router.use('/api/user', verifyToken, checkRole('user'), userRoutes);

module.exports = router;
