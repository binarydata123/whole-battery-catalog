const express = require('express');
const router = express.Router();
const updateUser = require('./userRoutes');

router.use('/updateUser', updateUser);

module.exports = router;
