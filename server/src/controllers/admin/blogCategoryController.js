const BlogCategory = require('../../models/BlogCategory');
const errorLogger = require('../../../logger');
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'src/storage/blogCategory');
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(null, uniqueSuffix + path.extname(file.originalname));
	}
});

const upload = multer({ storage: storage });

const BlogCategoryController = {
	allBlogCategory: async (req, res) => {
		try {
			const blogCategory = await BlogCategory.find({ status: { $in: ['active', 'inactive'] } }).sort({ _id: -1 });
			res.status(200).json({ status: true, data: blogCategory });
		} catch (error) {
			errorLogger(error);
			res.status(500).json({ status: false, message: 'Internal Server Error' });
		}
	},
	addUpdateBlogCategoryDetails: async (req, res) => {
		try {
			upload.single('image')(req, res, async (err) => {
				if (err) {
					errorLogger('Error uploading file:', err);
					return res.status(500).json({ message: 'Error uploading file', status: false });
				}

				try {
					const blogCategoryData = {
						image: req.file ? req.file.filename : null,
						name: req.body.name,
						description: req.body.description,
						slug: req.body.slug,
						metaTitle: req.body.metaTitle,
						metaDescription: req.body.metaDescription,
						createdBy: req.body.userID,
						status: req.body.status
					};

					if (req.body.blogCategoryId) {
						const existingBlogCategory = await BlogCategory.findById(req.body.blogCategoryId);

						if (!existingBlogCategory) {
							return res.status(404).json({ status: false, message: 'BlogCategory not found' });
						}

						Object.assign(existingBlogCategory, blogCategoryData);
						existingBlogCategory.updatedBy = req.body.userID;
						await existingBlogCategory.save();

						res.status(200).json({ status: true, message: 'BlogCategory updated successfully' });
					} else {
						const newBlogCategory = new BlogCategory(blogCategoryData);
						await newBlogCategory.save();

						res.status(200).json({ status: true, message: 'BlogCategory added successfully' });
					}
				} catch (error) {
					errorLogger('Error processing Category operation:', error);
					res.status(500).json({ status: false, message: 'Internal Server Error' });
				}
			});
		} catch (error) {
			errorLogger(error);
			res.status(500).json({ status: false, message: 'Internal Server Error' });
		}
	},

	deleteBLogCategoryPhoto: async (req, res) => {
		try {
			const data = req.body;
			const blogCategory = await BlogCategory.findById(data.blogCategoryId);

			if (!blogCategory) {
				return res.status(404).json({ message: 'BlogCategory not found', status: false });
			}

			// Remove the file from the folder
			const filePath = path.join(__dirname, '../../storage/blogCategory', blogCategory.image);

			await fs.unlink(filePath);

			// Remove the image field from the blogcategory
			blogCategory.image = null;

			await blogCategory.save();

			res.json({ message: 'BlogCategory photo deleted successfully', status: true });
		} catch (error) {
			errorLogger(error);
			res.status(500).json({ message: 'Internal Server Error', status: false });
		}
	},

	deleteBlogCategory: async (req, res) => {
		try {
			const { id, userId } = req.body;

			// Retrieve feature category information from the database
			const deletedFeature = await BlogCategory.findByIdAndUpdate(
				id,
				{ $set: { deletedBy: userId, status: 'deleted' } },
				{ new: true } // Return the updated document
			);

			if (!deletedFeature) {
				return res.status(404).json({ message: 'BlogCategory not found', status: false });
			}

			res.json({ message: 'BlogCategory has been deleted successfully', status: true });
		} catch (error) {
			errorLogger(error);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	},

	getAllCategories: async (req, res) => {
		try {
			const categories = await BlogCategory.find();
			res.status(200).json({ status: true, data: categories });
		} catch (error) {
			errorLogger(error);
			res.status(500).json({ status: false, message: 'Internal Server Error' });
		}
	},
};

module.exports = BlogCategoryController;
