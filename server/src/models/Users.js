const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: { type: String, default: null },
	email: { type: String, unique: true, required: true, index: true },
	role: { type: String, enum: ['superAdmin', 'admin', 'user'], default: 'user' },
	slug: { type: String, default: null },
	password: { type: String, default: null },
	isShowEmail: { type: Boolean, default: false },
	isEmailVerified: { type: Boolean, default: false },
	phoneNumber: { type: String, default: null },
	isShowPhoneNumber: { type: Boolean, default: false },
	isPhoneVerified: { type: Boolean, default: false },
	designation: { type: String, default: null },
	passwordUpdatedAt: { type: Date, default: null },
	gender: { type: String, enum: ['male', 'female', 'other'], default: 'male' },
	image: { type: String, default: null },
	dob: { type: Date, default: null },
	bio: { type: String, default: null },
	otp: { type: Number, default: null },
	resetToken: { type: String, default: null },
	profileViewCount: { type: Number, default: 0 },
	address: {
		street: { type: String, default: null },
		building: { type: String, default: null },
		city: { type: String, default: null },
		zip: { type: String, default: null },
		state: { type: String, default: null },
		country: { type: String, default: null },
		lat: { type: String, default: null },
		long: { type: String, default: null }
	},
	billingAddress: {
		addressOne: { type: String, default: null },
		addressTwo: { type: String, default: null },
		city: { type: String, default: null },
		zip: { type: String, default: null },
		state: { type: String, default: null },
		country: { type: String, default: null },
		companyName: { type: String, default: null },
		taxNumber: { type: String, default: null }
	},
	socialLinks: {
		twitter: { type: String, default: null },
		facebook: { type: String, default: null },
		linkedin: { type: String, default: null },
		instagram: { type: String, default: null },
		website: { type: String, default: null }
	},
	metaTitle: { type: String, default: null },
	metaDescription: { type: String, default: null },
	subscriptionExpiryDate: { type: Date, default: null },
	lastSeen: { type: Date, default: null },
	isOnline: { type: String, enum: ['yes', 'no'], default: 'yes' },
	twoFactorAuth: { type: String, enum: ['enabled', 'disabled'], default: 'disabled' },
	loginType: { type: String, default: null },
	isReported: { type: Boolean, default: false },
	status: { type: String, enum: ['active', 'inactive', 'deleted', 'suspended'], default: 'active' },
	createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users', default: null },
	createdAt: { type: Date, default: Date.now },
	updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users', default: null },
	updatedAt: { type: Date, default: Date.now },
	deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users', default: null },
	deletedAt: { type: Date, default: null }
});

const users = mongoose.model('users', userSchema);

module.exports = users;
