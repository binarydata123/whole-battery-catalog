const express = require('express');
const frontendRoutes = require('./frontend');
const verifyToken = require('../middleware/verifyToken');
const checkRole = require('../middleware/checkRole');
const router = express.Router();

router.use('/api', frontendRoutes);
// router.use('/api/user', verifyToken, checkRole('user'), userRoutes);

module.exports = router;
