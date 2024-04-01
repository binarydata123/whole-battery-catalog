require('dotenv').config();
const nodemailer = require('nodemailer');
const ContactUs = require('../../models/ContactUs');
const errorLogger = require('../../../logger');
const fs = require('fs');
const ejs = require('ejs');
// const createNotification = require('../../utils/notifications');
const Users = require('../../models/Users');

const contactUsController = {
	submitContactUs: async (req, res) => {
		try {
			const { email, name, phoneNumber, message, userId } = req.body;

			// Create contact form data
			const contactFormData = {
				name: name,
				email: email,
				phone: phoneNumber,
				message: message || null,
				userId: userId
			};

			// Save contact form data to MongoDB
			const contact = new ContactUs(contactFormData);
			await contact.save();

			const existingEmail = await Users.findOne({ email });
			if (existingEmail) {
				const userNotificationData = {
					notification: `Thank you <strong>${name}</strong> for contacting us at Imperial Health Clinic.`,
					notifyBy: existingEmail._id,
					notifyTo: existingEmail._id,
					type: 'contact',
					url: ''
				};

				// createNotification(userNotificationData);
			}

			const adminId = await Users.findOne({ role: 'admin' }).select('_id');

			const adminNotificationData = {
				notification: `A new contact form submission has been received from <strong>${name}</strong> at Imperial Health Clinic.`,
				notifyBy: adminId,
				notifyTo: adminId,
				type: 'contact',
				url: `/en/admin/contact-form`
			};

			// createNotification(adminNotificationData);

			const templatePath = 'views/emails/contactFormUserEmail.ejs';
			const adminTemplatePath = 'views/emails/contactFormAdminEmail.ejs';

			// User email template
			const template = fs.readFileSync(templatePath, 'utf-8');
			const compiledTemplate = ejs.compile(template);
			const userHtmlContent = compiledTemplate({ contactFormData });

			// Admin email template
			const adminTemplate = fs.readFileSync(adminTemplatePath, 'utf-8');
			const compiledAdminTemplate = ejs.compile(adminTemplate);
			const adminHtmlContent = compiledAdminTemplate({ contactFormData });

			const transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: process.env.MAIL_USERNAME,
					pass: process.env.MAIL_PASSWORD
				}
			});

			// Sending email to user
			await transporter.sendMail({
				from: process.env.MAIL_FROM_ADDRESS,
				to: email,
				subject: 'Thank you for contacting us!',
				text: 'We have received your message and will get back to you shortly.',
				html: userHtmlContent
			});

			// Sending email to admin
			await transporter.sendMail({
				from: process.env.MAIL_FROM_ADDRESS,
				to: process.env.ADMIN_EMAIL_ADDRESS,
				subject: 'New Contact Form Submission',
				text: 'A new contact form submission has been received.',
				html: adminHtmlContent
			});

			return res.status(201).json({ status: true, message: 'Contact form submitted successfully.' });
		} catch (error) {
			errorLogger(error);
			return res.status(500).json({ status: false, message: 'Failed to submit contact form.' });
		}
	}
};

module.exports = contactUsController;
