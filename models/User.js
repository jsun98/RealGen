// app/models/user.js
// load the things we need
const mongoose = require('mongoose'),
	bcrypt = require('bcrypt-nodejs')

// define the schema for our user model

var userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	first_name: {
		type: String,
		required: true,
	},
	last_name: {
		type: String,
		required: true,
	},
})

// methods ======================
// generating a hash
userSchema.methods.generateHash = function (password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

// checking if password is valid
userSchema.methods.validPassword = function (password) {
	return bcrypt.compareSync(password, this.password)
}

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema)
