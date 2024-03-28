const express = require('express');
const router = express.Router();
const userController = require('../../controllers/admin/userController');

router.get('/all-users', userController.getAllUsers);
router.post('/delete-user', userController.deleteUser);
router.post('/update-User', userController.addUpdateUser);

module.exports = router;
