const express = require('express');
const blogController = require('../../controllers/frontend/blogController.js');

const router = express.Router();

router.get('/', blogController.allBlogs);
router.get('/:slug', blogController.singleBlog);

module.exports = router;
