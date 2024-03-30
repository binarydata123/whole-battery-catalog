const ContactUs = require('../../models/ContactUs');
const Notifications = require('../../models/notifications');
const logError = require('../../../logger');

const contactUsController = {
	getContactUs: async (req, res) => {
		try {
			const appointments = await ContactUs.find().sort({ _id: -1 });
			res.status(200).json({ status: true, data: appointments });
		} catch (error) {
			logError(error);
			res.status(500).json({ status: false, message: 'Internal Server Error' });
		}
	},

	getAllNotifications: async (req, res) => {
		try {
			const id = req.params.id;

			const notification = await Notifications.find({ notifyTo: id }).populate('notifyBy').sort({ _id: -1 });

			res.status(200).json({ status: true, data: notification });
		} catch (error) {
			throw new Error('Error retrieving notifications for user: ' + error.message);
		}
	}
};

module.exports = contactUsController;
