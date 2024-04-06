const blog = require('../../models/Blog');
const errorLogger = require('../../../logger');

const blogController = {
	allBlogs: async (req, res) => {
		try {
			const activeAndLatestBlogs = await blog
				.find({ status: 'active' })
				.sort({ updatedAt: -1 })
				.populate('authorId');

			res.status(200).json({ status: true, data: activeAndLatestBlogs });
		} catch (error) {
			errorLogger(error);
			res.status(500).json({ status: false, message: 'Internal Server Error' });
		}
	},

	singleBlog: async (req, res) => {
		try {
			const slug = req.params.slug;

			const singleBlog = await blog.findOne({ slug: slug }).populate('authorId');
			if (!singleBlog) {
				return res.status(404).json({ status: false, message: 'Blog not found' });
			}
			res.status(200).json({ status: true, data: singleBlog });
		} catch (error) {
			errorLogger(error);
			res.status(500).json({ status: false, message: 'Internal Server Error' });
		}
	}
};

module.exports = blogController;
