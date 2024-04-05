const User = require('../../models/Users');
const errorLogger = require('../../../logger');
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;

const storage = multer.diskStorage({
	destination: async function (req, file, cb) {
		const folderPath = 'src/storage/user';
		try {
			await fs.mkdir(folderPath, { recursive: true });
			cb(null, folderPath);
		} catch (error) {
			errorLogger('Error creating folder:', error);
			cb(error, folderPath);
		}
	},
	filename: function (req, file, cb) {
		const projectName = 'whole-battery-catalog';
		const uploaderName = req.body.slug || 'unknown_uploader';
		const randomNumbers = Math.floor(Math.random() * 9000) + 1000; // for 4 digits
		const uniqueFileName = `${projectName}_${uploaderName}_${Date.now()}_${randomNumbers}${path.extname(file.originalname)}`;
		cb(null, uniqueFileName);
	}
});

const upload = multer({ storage: storage });

const userController = {
	getAllUsers: async (req, res) => {
		try {
			const users = await User.find({ status: { $ne: 'deleted' } }).sort({ _id: -1 });
			res.status(200).json({ status: true, data: users });
		} catch (error) {
			errorLogger(error);
			res.status(500).json({ status: false, message: 'Internal Server Error' });
		}
	},

	addOrUpdateUser: async (req, res) => {
		try {
			upload.single('image')(req, res, async (err) => {
				if (err) {
					errorLogger('Error uploading file:', err);
					return res.status(500).json({ message: 'Error uploading file', status: false });
				}

				try {
					const userData = {
						image: req.file ? req.file.filename : req.body.image,
						name: req.body.name,
						username: req.body.username,
						email: req.body.email,
						gender: req.body.gender,
						designation: req.body.designation,
						description: req.body.description,
						linkedin: req.body.linkedin,
						facebook: req.body.facebook,
						twitter: req.body.twitter,
						instagram: req.body.instagram,
						status: req.body.status,
						createdBy: req.body.adminId
					};

					if (req.body.userId) {
						const existingUser = await User.findById(req.body.userId);

						if (!existingUser) {
							return res.status(404).json({ status: false, message: 'User not found' });
						}

						Object.assign(existingUser, userData);
						existingUser.updatedBy = req.body.adminId;
						await existingUser.save();

						res.status(200).json({ status: true, message: 'User updated successfully' });
					} else {
						const newUser = new User(userData);
						await newUser.save();

						res.status(200).json({ status: true, message: 'User added successfully' });
					}
				} catch (error) {
					errorLogger('Error processing User operation:', error);
					console.log(error);
					res.status(500).json({ status: false, message: 'Internal Server Error' });
				}
			});
		} catch (error) {
			errorLogger(error);
			res.status(500).json({ status: false, message: 'Internal Server Error' });
		}
	},

	deleteUserImage: async (req, res) => {
		try {
			const data = req.body;
			const user = await User.findById(data.userId);

			if (!user) {
				return res.status(404).json({ message: 'User not found', status: false });
			}

			// Remove the file from the folder
			const filePath = path.join(__dirname, '../../storage/user', user.image);

			await fs.unlink(filePath);

			// Remove the profileImage field from the user
			user.image = null;

			await user.save();

			res.json({ message: 'user photo deleted successfully', status: true });
		} catch (error) {
			errorLogger(error);
			res.status(500).json({ message: 'Internal Server Error', status: false });
		}
	},

	deleteUser: async (req, res) => {
		try {
			const { id, userId } = req.body;

			// Retrieve feature category information from the database
			const deletedFeature = await User.findByIdAndUpdate(
				id,
				{ $set: { deletedBy: userId, status: 'deleted' } },
				{ new: true } // Return the updated document
			);

			if (!deletedFeature) {
				return res.status(404).json({ message: 'User not found', status: false });
			}

			res.json({ message: 'User has been deleted successfully', status: true });
		} catch (error) {
			errorLogger(error);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	}
};

module.exports = userController;
