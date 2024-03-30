const Appointments = require('../../models/Appointments');
const logError = require('../../../logger');

const appointmentController = {
	getAppointment: async (req, res) => {
		try {
			const appointments = await Appointments.find({ createdBy: req.params.id });
			console.log(appointments, 'here appointements')
			res.status(200).json({ status: true, data: appointments });
		} catch (error) {
			logError(error);
			res.status(500).json({ status: false, message: 'Internal Server Error' });
		}
	}
};

module.exports = appointmentController;
