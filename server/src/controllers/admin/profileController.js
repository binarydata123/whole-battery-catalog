const User = require('../../models/Users');
const logError = require('../../../logger');
const multer = require('multer');
const fs = require('fs').promises;
const path = require('path');

const storage = multer.diskStorage({
	destination: async function (req, file, cb) {
		const folderPath = 'src/storage/user';
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

const profileController = {
	updateProfile: async (req, res) => {
		try {
			upload.single('image')(req, res, async (err) => {
				if (err) {
					logError('Error uploading file:', err);
					return res.status(500).json({ message: 'Error uploading file', status: false });
				}
				const id = req.body.id;

				// Create the update object based on the presence of a file
				let updateObject = { ...req.body };
				if (req.file && req.file.filename) {
					updateObject.image = req.file.filename; // Include the image field only if file is uploaded
				}

				// Use the update object in the update operation
				const data = await User.findByIdAndUpdate(id, updateObject, { new: true }); // Assuming you want to return the updated document

				res.status(200).json({
					status: true,
					message: 'Profile has been updated successfully',
					data: data
				});
			});
		} catch (error) {
			logError(error);
			res.status(500).json({
				status: false,
				message: 'Internal Server Error'
			});
		}
	}
};

module.exports = profileController;
