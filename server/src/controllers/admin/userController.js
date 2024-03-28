'use strict';

const Users = require('../../models/Users');

const userController = {
	getAllUsers: async (req, res) => {
		try {
			const users = await Users.find({
				role: 'user',
				status: 'active'
			});
			res.json({ users });
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	},

	deleteUser: async (req, res) => {
		try {
			const { id, userId } = req.body;

			if (!id || !userId) {
				return res.status(400).json({ message: 'Missing required parameters', status: false });
			}

			const deletedUser = await Users.findByIdAndUpdate(
				id,
				{ $set: { deletedBy: userId, status: 'deleted' } },
				{ new: true }
			);

			if (!deletedUser) {
				return res.status(404).json({ message: 'User not found', status: false });
			}

			res.json({ message: 'User has been deleted successfully', status: true });
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	},

	addUpdateUser: async (req, res) => {
		console.log(req.body);
		try {
			const userData = {
				name: req.body.name,
				email: req.body.email,
				gender: req.body.gender,
				status: req.body.status,
				address: req.body.address,
				phoneNumber: req.body.phoneNumber,
				userId: req.body.userId
			};

			if (req.body.userId) {
				const existingUser = await Users.findById(req.body.userId);

				if (!existingUser) {
					return res.status(404).json({ status: false, message: 'User not found' });
				}

				Object.assign(existingUser, userData);
				existingUser.updatedBy = req.body.userId;
				await existingUser.save();

				res.status(200).json({ status: true, message: 'User updated successfully' });
			} else {
				const newUser = new Users(userData);
				await newUser.save();

				res.status(200).json({ status: true, message: 'User added successfully' });
			}
		} catch (error) {
			console.log(error);
			res.status(500).json({ status: false, message: 'Internal Server Error' });
		}
	}
};

module.exports = userController;
