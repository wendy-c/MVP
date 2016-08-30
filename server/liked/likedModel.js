var mongoose = require('mongoose');

//Schema goes here
var likesSchema = new mongoose.Schema({
	name: {type: String, required: true}.
	city: String,
	email: String,
	phone: String,
	description: String
})