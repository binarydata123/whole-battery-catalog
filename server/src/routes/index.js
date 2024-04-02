const express = require('express');
const userRoutes = require('./user');
const adminRoutes = require('./admin');
const frontendRoutes = require('./frontend');
const checkRole = require('../middleware/checkRole');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.use('/api', frontendRoutes);
router.use('/api/admin', verifyToken, checkRole('admin'), adminRoutes);
router.use('/api/user', userRoutes);

module.exports = router;
