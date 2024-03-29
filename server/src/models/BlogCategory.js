const mongoose = require('mongoose');

const blogCategorySchema = new mongoose.Schema({
	title: { type: String, default: null },
	description: { type: String, default: null },
	image: { type: String, default: null },
	name: { type: String, default: null },
	slug: { type: String, unique: true, index: true, default: null },
	metaTitle: { type: String, default: null },
	metaDescription: { type: String, default: null },
	createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users', default: null },
	updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users', default: null },
	deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users', default: null },
	createdAt: { type: Date, index: true, default: Date.now },
	updatedAt: { type: Date, index: true, default: Date.now },
	deletedAt: { type: Date, index: true, default: Date.now }
});

const blogCategory = mongoose.model('blogCategory', blogCategorySchema);

module.exports = blogCategory;
