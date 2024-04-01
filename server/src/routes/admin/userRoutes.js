const express = require('express');
const userController = require('../../controllers/admin/userController.js');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.post('/addOrUpdateUser', userController.addOrUpdateUser);
router.post('/deleteUserImage/', userController.deleteUserImage);
router.post('/deleteUser', userController.deleteUser);

module.exports = router;
