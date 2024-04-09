const express = require('express');
const router = express.Router();
const blogRoutes = require('./blogRoutes');
const authorRoutes = require('./authorRoutes');
const contactUsRoutes = require('./contactUsRoutes');
const updateProfileRoutes = require('./updateProfileRoutes');
const userRoutes = require('./userRoutes');
const batteryRoutes = require('./batteryRoutes');
const vendorRoutes = require('./vendorRoutes');

router.use('/blogs', blogRoutes);
router.use('/authors', authorRoutes);
router.use('/contactUs', contactUsRoutes);
router.use('/profile', updateProfileRoutes);
router.use('/users', userRoutes);
router.use('/battery', batteryRoutes);
router.use('/vendors', vendorRoutes);

module.exports = router;
