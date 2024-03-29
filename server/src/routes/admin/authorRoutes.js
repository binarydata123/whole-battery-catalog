const express = require('express');
const router = express.Router();
const authorController = require('../../controllers/admin/authorController');

router.get('/', authorController.allAuthors);
router.post('/addUpdateAuthorDetails/', authorController.addUpdateAuthorDetails);
router.post('/deleteAuthorImage/', authorController.deleteAuthorImage);
router.post('/deleteAuthor', authorController.deleteAuthor);

module.exports = router;
