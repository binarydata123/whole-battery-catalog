const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	fullName: { type: String, index: true, default: null },
	firstName: { type: String, default: null },
	lastName: { type: String, default: null },
	email: { type: String, unique: true, required: true, index: true, default: null },
	roleId: { type: mongoose.Schema.Types.ObjectId, ref: 'roles', default: null },
	hotelId: { type: mongoose.Schema.Types.ObjectId, ref: 'hotels', default: null, index: true },
	departmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'departments', default: null, index: true },
	slug: { type: String, unique: true, index: true, default: null },
	password: { type: String, default: null },
	isShowEmail: { type: Boolean, default: false },
	isEmailVerified: { type: Boolean, default: false },
	phoneNumber: { type: String, default: null },
	isShowPhoneNumber: { type: Boolean, default: false },
	mobile: { type: String, default: null },
	isPhoneVerified: { type: Boolean, default: false },
	passwordUpdatedAt: { type: Date, default: null },
	gender: { type: String, enum: ['male', ' female', 'other'], default: 'male' },
	profileImage: { type: String, default: null },
	loginTime: { type: String, default: null },
	checkoutTime: { type: String, default: null },
	dob: { type: Date, default: null },
	age: { type: Number, default: null },
	bio: { type: String, default: null },
	about: { type: String, default: null },
	work: { type: String, default: null },
	isApproved: { type: Boolean, default: false },
	otp: { type: Number, default: null },
	profileViewCount: { type: Number, default: 0 },
	planId: { type: Number, default: null },
	images: [
		{
			imageType: { type: String, default: null },
			imagePath: { type: String, default: null },
			status: { type: String, enum: ['active', 'inactive', 'deleted'], default: 'active' }
		}
	],
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
	socialLinks: {
		twitter: { type: String, default: null },
		facebook: { type: String, default: null },
		linkedin: { type: String, default: null },
		instagram: { type: String, default: null },
		website: { type: String, default: null }
	},
	paymentCards: [
		{
			cardHolderName: { type: String, default: null },
			cardNumber: { type: String, default: null },
			expirationMonth: { type: Number, default: null },
			expirationYear: { type: Number, default: null },
			cvv: { type: String, default: null },
			isDefault: { type: Boolean, default: false },
			status: { type: String, enum: ['active', 'inactive', 'deleted'], default: 'active' }
		}
	],
	metaTags: {
		metaTitle: { type: String, default: null },
		metaDescription: { type: String, default: null }
	},
	resetToken: { type: String, default: null },
	paymentMethod: { type: String, default: null },
	lastSeen: { type: Date, default: null },
	isOnline: { type: String, enum: ['yes', 'no'], default: 'yes' },
	twoFactorAuth: { type: String, enum: ['enabled', 'disabled'], default: 'disabled' },
	loginType: { type: String, default: null },
	isReported: { type: Boolean, default: false },
	role: { type: String, enum: ['superAdmin', 'admin', 'user', 'staff'], default: 'user' },
	status: { type: String, enum: ['active', 'inactive', 'deleted', 'suspended'], default: 'active' },
	taxIdNumber: { type: String, default: null },
	companyName: { type: String, default: null },
	companyTaxIdNumber: { type: String, default: null },
	createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users', default: null },
	createdAt: { type: Date, default: Date.now },
	updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users', default: null },
	updatedAt: { type: Date, default: Date.now },
	deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users', default: null },
	deletedAt: { type: Date, default: Date.now }
});

// Create an index on the email field
userSchema.index({ _id: 0, email: 1 }, { unique: true });

const User = mongoose.model('users', userSchema);

module.exports = User;
