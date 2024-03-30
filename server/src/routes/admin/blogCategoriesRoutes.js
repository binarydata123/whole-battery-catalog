const express = require('express');
const router = express.Router();
const blogCategoryController = require('../../controllers/admin/blogCategoryController');

router.get('/', blogCategoryController.getAllCategories);

module.exports = router;
