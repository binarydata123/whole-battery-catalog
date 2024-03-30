const express = require('express');
const router = express.Router();
const blogRoutes = require('./blogRoutes');
const authorRoutes = require('./authorRoutes');
const contactUsRoutes = require('./contactUsRoutes');
const updateProfileRoutes = require('./updateProfileRoutes');

router.use('/blogs', blogRoutes);
router.use('/authors', authorRoutes);
router.use('/contactUs', contactUsRoutes);
router.use('/profile', updateProfileRoutes);

module.exports = router;
