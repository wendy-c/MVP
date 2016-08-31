var mongoose = require('mongoose');

var likesSchema = mongoose.Schema({
	name: {type: String, required: true},
	city: String,
	email: String,
	phone: String,
	description: String
});

module.exports = mongoose.model('Liked', likesSchema);
