const Blog = require('../../models/Blog');
const errorLogger = require('../../../logger');
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;

const storage = multer.diskStorage({
	destination: async function (req, file, cb) {
		const folderPath = 'src/storage/blog';
		try {
			await fs.mkdir(folderPath, { recursive: true });
			cb(null, folderPath);
		} catch (error) {
			errorLogger('Error creating folder:', error);
			cb(error, folderPath);
		}
	},
	filename: function (req, file, cb) {
		const projectName = 'imperial-health';
		const uploaderName = req.body.slug || 'unknown_uploader';
		const randomNumbers = Math.floor(Math.random() * 9000) + 1000; // for 4 digits
		const uniqueFileName = `${projectName}_${uploaderName}_${Date.now()}_${randomNumbers}${path.extname(file.originalname)}`;
		cb(null, uniqueFileName);
	}
});

const upload = multer({ storage: storage });

const blogController = {
	getAllBlogs: async (req, res) => {
		try {
			const blogs = await Blog.find({ status: { $in: ['active', 'inactive'] } })
				.sort({ updatedAt: -1 })
				.populate('authorId');
			res.status(200).json({ status: true, data: blogs });
		} catch (error) {
			errorLogger(error);
			res.status(500).json({ status: false, message: 'Internal Server Error' });
		}
	},

	addUpdateBlogDetails: async (req, res) => {
		// console.log(req.body);
		try {
			upload.single('image')(req, res, async (err) => {
				if (err) {
					errorLogger('Error uploading file:', err);
					return res.status(500).json({ message: 'Error uploading file', status: false });
				}

				try {
					const blogData = {
						image: req.file ? req.file.filename : req.body.image,
						title: req.body.title,
						slug: req.body.slug,
						description: req.body.description,
						imageAltText: req.body.imageAltText,
						metaTitle: req.body.metaTitle,
						metaDescription: req.body.metaDescription,
						timeToRead: req.body.timeToRead,
						status: req.body.status,
						authorId: req.body.authorId
					};

					// console.log(blogData);

					if (req.body.blogId) {
						const existingBlog = await Blog.findById(req.body.blogId);

						if (!existingBlog) {
							return res.status(404).json({ status: false, message: 'Blog not found' });
						}

						Object.assign(existingBlog, blogData);
						existingBlog.updatedBy = req.body.userID;
						await existingBlog.save();

						res.status(200).json({ status: true, message: 'Blog updated successfully' });
					} else {
						const newBlog = new Blog(blogData);
						await newBlog.save();

						res.status(200).json({ status: true, message: 'Blog added successfully' });
					}
				} catch (error) {
					errorLogger('Error processing Blog operation:', error);
					console.log(error);
					res.status(500).json({ status: false, message: 'Internal Server Error' });
				}
			});
		} catch (error) {
			errorLogger(error);
			res.status(500).json({ status: false, message: 'Internal Server Error' });
		}
	},
	deleteBlogImage: async (req, res) => {
		try {
			const data = req.body;
			const blog = await Blog.findById(data.blogId);
			if (!blog) {
				return res.status(404).json({ message: 'Blog not found', status: false });
			}
			const filePath = path.join(__dirname, '../../storage/blog', blog.image);
			await fs.unlink(filePath);
			blog.image = null;
			await blog.save();
			res.json({ message: 'Blog photo deleted successfully', status: true });
		} catch (error) {
			errorLogger(error);
			res.status(500).json({ message: 'Internal Server Error', status: false });
		}
	},

	deleteBlog: async (req, res) => {
		console.log(req.body);
		try {
			const { id, userId } = req.body;
			const deletedFeature = await Blog.findByIdAndUpdate(
				id,
				{ $set: { deletedBy: userId, status: 'deleted' } },
				{ new: true }
			);
			if (!deletedFeature) {
				return res.status(404).json({ message: 'Blog not found', status: false });
			}
			res.json({ message: 'Blog has been deleted successfully', status: true });
		} catch (error) {
			errorLogger(error);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	}
};

module.exports = blogController;
