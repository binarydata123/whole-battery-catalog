const Author = require('../../models/Author');
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;
const logError = require('../../../logger');

const storage = multer.diskStorage({
	destination: async function (req, file, cb) {
		const folderPath = 'src/storage/author';
		try {
			await fs.mkdir(folderPath, { recursive: true });
			cb(null, folderPath);
		} catch (error) {
			logError('Error creating folder:', error);
			cb(error, folderPath);
		}
	},
	filename: function (req, file, cb) {
		const projectName = 'imperial-health';
		const uploaderName = req.body.name || 'unknown_uploader';
		const randomNumbers = Math.floor(Math.random() * 9000) + 1000; // for 4 digits
		const uniqueFileName = `${projectName}_${uploaderName}_${Date.now()}_${randomNumbers}${path.extname(file.originalname)}`;
		cb(null, uniqueFileName);
	}
});

const upload = multer({ storage: storage });

const authorController = {
	allAuthors: async (req, res) => {
		try {
			const authors = await Author.find({ status: { $in: ['active', 'inactive'] } }).sort({ _id: -1 });
			res.status(200).json({ status: true, data: authors });
		} catch (error) {
			logError(error);
			res.status(500).json({ status: false, message: 'Internal Server Error' });
		}
	},
	addUpdateAuthorDetails: async (req, res) => {
		try {
			upload.single('profileImage')(req, res, async (err) => {
				if (err) {
					logError('Error uploading file:', err);
					return res.status(500).json({ message: 'Error uploading file', status: false });
				}

				try {
					const authorData = {
						profileImage: req.file ? req.file.filename : req.body.profileImage,
						name: req.body.name,
						slug: req.body.slug,
						gender: req.body.gender,
						designation: req.body.designation,
						description: req.body.description,
						linkedin: req.body.linkedin,
						facebook: req.body.facebook,
						twitter: req.body.twitter,
						instagram: req.body.instagram,
						status: req.body.status,
						createdBy: req.body.userID
					};

					if (req.body.authorId) {
						const existingAuthor = await Author.findById(req.body.authorId);

						if (!existingAuthor) {
							return res.status(404).json({ status: false, message: 'Author not found' });
						}

						Object.assign(existingAuthor, authorData);
						existingAuthor.updatedBy = req.body.userID;
						await existingAuthor.save();

						res.status(200).json({ status: true, message: 'Author updated successfully' });
					} else {
						const newAuthor = new Author(authorData);
						await newAuthor.save();

						res.status(200).json({ status: true, message: 'Author added successfully' });
					}
				} catch (error) {
					logError('Error processing Author operation:', error);
					res.status(500).json({ status: false, message: 'Internal Server Error' });
				}
			});
		} catch (error) {
			logError(error);
			res.status(500).json({ status: false, message: 'Internal Server Error' });
		}
	},

	deleteAuthorImage: async (req, res) => {
		try {
			const data = req.body;
			const author = await Author.findById(data.authorId);

			if (!author) {
				return res.status(404).json({ message: 'Author not found', status: false });
			}

			// Remove the file from the folder
			const filePath = path.join(__dirname, '../../storage/author', author.profileImage);

			await fs.unlink(filePath);

			// Remove the profileImage field from the author
			author.profileImage = null;

			await author.save();

			res.json({ message: 'Author photo deleted successfully', status: true });
		} catch (error) {
			logError(error);
			res.status(500).json({ message: 'Internal Server Error', status: false });
		}
	},

	deleteAuthor: async (req, res) => {
		try {
			const { id, userId } = req.body;
			console.log(req.body);

			// Retrieve feature category information from the database
			const deletedFeature = await Author.findByIdAndUpdate(
				id,
				{ $set: { deletedBy: userId, status: 'deleted' } },
				{ new: true } // Return the updated document
			);

			if (!deletedFeature) {
				return res.status(404).json({ message: 'Author not found', status: false });
			}

			res.json({ message: 'Author has been deleted successfully', status: true });
		} catch (error) {
			logError(error);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	}
};

module.exports = authorController;
