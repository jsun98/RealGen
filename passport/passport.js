// config/passport.js

// load all the things we need
const LocalStrategy = require('passport-local').Strategy,
	User = require('../models/user')

// expose this function to our app using module.exports
module.exports = function (passport) {

	passport.serializeUser((user, done) => {
		done(null, user.id)
	})

	// used to deserialize the user
	passport.deserializeUser((id, done) => {
		User.findById(id, (err, user) => {
			done(err, user)
		})
	})

	// =========================================================================
	// FIRST SIGNUP ============================================================
	// =========================================================================
	passport.use('signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true,
	}, (req, email, password, done) => {
		User.findOne({ email }, (err, user) => {
			if (err) return done(err)

			if (user) return done(null, false, req.flash('error', 'Email Already in Use!'))

			var newUser = new User()

			newUser.email = email
			newUser.password = newUser.generateHash(password)
			newUser.name = req.body.name

			newUser.save()
				.then(savedUser => {
					done(null, newUser)
				})
				.catch(err => {
					done(err)
				})

		})

	}))

	// =========================================================================
	// LOGIN =============================================================
	// =========================================================================

	passport.use('login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true,
	}, (req, email, password, done) => {
		User.findOne({ email })
			.exec((err, User) => {

				if (err)					{
					return done(err)
				}


				if (!User)					{
					return done(null, false, req.flash('error', 'Email Not Found'))
				}


				if (!User.validPassword(password))					{
					return done(null, false, req.flash('error', 'Wrong Password'))
				}


				return done(null, User)
			})
	}))

}
