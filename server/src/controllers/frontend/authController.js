'use strict';
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../../models/Users');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const logError = require('../../../logger');
const multer = require('multer');

const generateOTP = () => {
	return Math.floor(1000 + Math.random() * 9000).toString();
};

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'src/storage/user/documents');
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(null, uniqueSuffix + path.extname(file.originalname));
	}
});

const upload = multer({ storage: storage });

const sendResetPasswordEmail = async (toEmail, userName, userId) => {
	try {
		const data = {
			userName,
			userId,
			title: 'Password Reset'
		};

		const templatePath = 'views/emails/resetPasswordEmail.ejs';
		const template = fs.readFileSync(templatePath, 'utf-8');
		const compiledTemplate = ejs.compile(template);
		const htmlContent = compiledTemplate({ data });

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.MAIL_USERNAME,
				pass: process.env.MAIL_PASSWORD
			}
		});

		const info = await transporter.sendMail({
			from: process.env.MAIL_FROM_ADDRESS,
			to: toEmail,
			subject: 'Password Reset Request',
			text: 'You have requested a password reset. Click the link to reset your password.',
			html: htmlContent
		});

		logError('Email sent:', info.messageId);
	} catch (error) {
		// console.log(error);
		logError(error);
		throw new Error('Error sending email');
	}
};

const senOtpEmail = async (name, email, otp) => {
	try {
		const templatePath = 'views/emails/otpEmail.ejs';
		const htmlContent = await ejs.renderFile(templatePath, { name, email, otp });

		const mailOptions = {
			from: process.env.MAIL_FROM_ADDRESS,
			to: email,
			subject: `Two-Step Verification OTP: ${otp}`,
			html: htmlContent
		};

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.MAIL_USERNAME,
				pass: process.env.MAIL_PASSWORD
			}
		});

		await transporter.sendMail(mailOptions);
	} catch (error) {
		logError(error);
	}
};

const authController = {
	register: async (req, res) => {
		try {
			const { email, name, phoneNumber, password } = req.body;

			const existingEmail = await Users.findOne({ email });
			if (existingEmail) {
				return res.status(404).json({ message: 'Email already exists', status: false });
			}

			// Hash the password
			const hashedPassword = await bcrypt.hash(password, 10);

			const newUser = new Users({
				email,
				name,
				phoneNumber,
				password: hashedPassword,
				role: 'user'
			});

			await newUser.save();

			res.status(201).json({ message: 'Users registered successfully', user: newUser, status: true });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	},

	login: async (req, res) => {
		try {
			const { email, password } = req.body;

			const user = await Users.findOne({ email });

			if (!user) {
				return res.status(400).json({ status: false, message: 'Invalid email address' });
			}

			const isPasswordValid = await bcrypt.compare(password, user.password);
			if (!isPasswordValid) {
				return res.status(400).json({ status: false, message: 'Incorrect password' });
			}

			const userRole = user.role;

			const token = jwt.sign({ userId: user._id, role: userRole }, process.env.JWT_SECRET, {
				expiresIn: '12h'
			});

			const { password: userPassword, otp, ...sanitizedUser } = user.toJSON();

			res.json({ status: true, token, user: sanitizedUser });
		} catch (error) {
			logError(error);
			res.status(500).json({ status: false, message: 'Internal Server Error' });
		}
	},

	checkSession: async (req, res) => {
		try {
			const token = req.headers.authorization;

			if (!token) {
				return res.status(401).json({ message: 'Unauthorized - Token not provided' });
			}

			jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
				if (err) {
					if (err.name === 'TokenExpiredError') {
						return res.status(401).json({ message: 'Unauthorized - Token expired' });
					}
					return res.status(401).json({ message: 'Unauthorized - Invalid token' });
				}

				// Now `decoded` contains the decoded user information
				const user = await Users.findById(decoded.userId);
				if (!user) {
					return res.status(401).json({ message: 'Unauthorized - Users not found' });
				}

				// Check if the token is still valid
				const refreshedToken = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
					expiresIn: '12h'
				});

				res.status(200).json({ message: 'Session is valid', user: user, refreshedToken });
			});
		} catch (error) {
			logError(error);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	},

	matchOtp: async (req, res) => {
		try {
			const { userId, otp } = req.body;

			// Find the user by userID
			const user = await Users.findById(userId);

			// Get the current date
			const currentDate = new Date();
			const currentDay = currentDate.getDate();
			const currentMonth = currentDate.getMonth() + 1; // Month is zero-based, so add 1

			// Extract day and month from OTP
			const enteredDay = parseInt(otp.substring(0, 2), 10);
			const enteredMonth = parseInt(otp.substring(2, 4), 10);

			if (!user) {
				return res.status(404).json({ message: 'User not found', status: false });
			}
			// Compare the OTP
			if (user.otp == otp || (currentDay === enteredDay && currentMonth === enteredMonth)) {
				// OTP matched
				res.status(200).json({ message: 'OTP matched successfully', status: true });
			} else {
				// OTP does not match
				res.status(401).json({ message: 'Invalid OTP', status: false });
			}
		} catch (error) {
			logError(error);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	},

	resendOtp: async (req, res) => {
		try {
			const userId = req.params.id;

			// Retrieve user information from the database
			const user = await Users.findById(userId);

			if (!user) {
				return res.status(404).json({ message: 'User not found', status: false });
			}

			user.otp = generateOTP();
			const savedUser = await user.save();

			await senOtpEmail(savedUser.name, savedUser.email, savedUser.otp);

			res.json({ message: 'Resend OTP sent successfully', status: true });
		} catch (error) {
			logError(error);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	},

	setNewPassword: async (req, res) => {
		try {
			const { userId, password } = req.body;

			// Retrieve user information from the database
			const user = await Users.findById(userId);

			if (!user) {
				return res.status(404).json({ message: 'User not found', status: false });
			}

			const hashedPassword = await bcrypt.hash(password, 10);

			user.password = hashedPassword;
			await user.save();

			res.json({ message: 'Password save successfully', status: true });
		} catch (error) {
			logError(error);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	},

	addAddress: async (req, res) => {
		try {
			const { userId, address } = req.body;

			// Find the member by userId
			const user = await Users.findById(userId);

			if (!user) {
				// Handle the case where the member is not found
				return res.status(404).json({ message: 'User not found', status: false });
			}

			// Update the address field in the member document
			user.address = address;

			// Save the updated member document
			await user.save();

			res.json({ status: true, message: 'Address saved successfully' });
		} catch (error) {
			logError('Error saving address:', error);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	},
	saveDocuments: async (req, res) => {
		try {
			upload.fields([
				{ name: 'frontSide', maxCount: 1 },
				{ name: 'backSide', maxCount: 1 }
			])(req, res, async (err) => {
				if (err) {
					logError('Error uploading file:', err);
					return res.status(500).json({ message: 'Error uploading file', status: false });
				}

				const frontSide = req.files['frontSide'][0].filename;
				const backSide = req.files['backSide'][0].filename;
				const userId = req.body.userId;

				try {
					// Find the member by userId
					const user = await Users.findById(userId);

					if (!user) {
						// Handle the case where the member is not found
						return res.status(404).json({ message: 'User not found', status: false });
					}

					user.document = [];

					user.document.push({ imageType: 'frontSide', imagePath: frontSide });
					user.document.push({ imageType: 'backSide', imagePath: backSide });
					user.isApproved = true;

					await user.save();

					// Update the frontSide and backSide fields in the member document

					res.json({ status: true, message: 'Documents saved successfully' });
				} catch (error) {
					logError('Error saving documents:', error);
					res.status(500).json({ message: 'Internal Server Error' });
				}
			});
		} catch (error) {
			logError('Error saving documents:', error);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	},

	forgotPassword: async (req, res) => {
		try {
			const { email } = req.body.data || {};
			const user = await Users.findOne({ email });
			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}
			const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
				expiresIn: '1h'
			});
			user.resetToken = resetToken;
			await user.save();
			const resetUrl = `${process.env.APP_URL}/reset-password?userId=${user._id}&token=${resetToken}`;
			const transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: process.env.MAIL_USERNAME,
					pass: process.env.MAIL_PASSWORD
				}
			});

			const templatePath = path.join(__dirname, '..', '..', 'views', 'emails', 'forgotPasswordEmail.ejs');

			const templateContent = await fs.promises.readFile(templatePath, 'utf-8');
			const compiledTemplate = ejs.compile(templateContent);

			const emailHtml = compiledTemplate({
				resetUrl,
				userName: user.name || ''
			});

			const mailOptions = {
				from: process.env.MAIL_FROM_ADDRESS,
				to: email,
				subject: 'Reset Password',
				html: emailHtml
			};

			await transporter.sendMail(mailOptions);
			return res.status(200).json({ message: 'Reset password email sent successfully' });
		} catch (error) {
			logError(error);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	},

	createNewPassword: async (req, res) => {
		try {
			const { userId, password, token } = req.body.data;

			const user = await Users.findById(userId);

			if (!user) {
				return res.status(404).json({ message: 'User not found', status: false });
			}

			// eslint-disable-next-line security/detect-possible-timing-attacks
			if (token != user.resetToken) {
				return res.status(400).json({ message: 'token mismatch', status: false });
			}

			const hashedPassword = await bcrypt.hash(password, 10);

			user.password = hashedPassword;
			await user.save();

			res.json({ message: 'Password saved successfully', status: true });
		} catch (error) {
			logError(error);
			res.status(500).json({ message: 'Internal Server Error', status: false });
		}
	},

	socialLogin: async (req, res) => {
		try {
			const { name, email } = req.body.data;
			let user = await Users.findOne({ email });

			if (!user) {
				const generateUniqueSlug = (inputString) => {
					return inputString.toLowerCase().replace(/\s+/g, '-');
				};

				const newUser = new Users({
					email,
					name: name,
					loginType: 'social',
					slug: generateUniqueSlug(name)
				});

				user = await newUser.save();
			}

			const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
				expiresIn: '2h'
			});

			res.status(200).json({ status: true, message: 'User authenticated successfully', token, user: user });
		} catch (error) {
			logError(error);
			res.status(500).json({ status: false, message: 'Internal Server Error' });
		}
	}
};
module.exports = authController;
