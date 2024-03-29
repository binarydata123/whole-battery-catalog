const author = require('../../models/Author');
const blog = require('../../models/Blog');
const errorLogger = require('../../../logger');

const AuthorController = {
	allAuthors: async (req, res) => {
		try {
			const activeAndLatestAuthors = await author.find({ status: 'active' }).sort({ createdAt: -1 });

			res.status(200).json({ status: true, data: activeAndLatestAuthors });
		} catch (error) {
			errorLogger(error);
			res.status(500).json({ status: false, message: 'Internal Server Error' });
		}
	},

	singleAuthor: async (req, res) => {
		try {
			const slug = req.params.slug;

			const singleAuthor = await author.findOne({ slug: slug, status: 'active' });

			if (!singleAuthor) {
				return res.status(404).json({ status: false, message: 'Author not found' });
			}
			// Find blogs associated with the author's ID
			const authorBlogs = await blog.find({ authorId: singleAuthor._id });

			res.status(200).json({ status: true, data: { author: singleAuthor, blogs: authorBlogs } });
		} catch (error) {
			errorLogger(error);
			res.status(500).json({ status: false, message: 'Internal Server Error' });
		}
	}
};

module.exports = AuthorController;
