var express = require('express')
var passport = require('passport')

var router = express.Router()

router.post('/signin', (req, res, next) => {
	passport.authenticate('signin', (err, user, info) => {
		if (err) return next(err)
		if (!user) return res.status(400).send(req.flash('error'))
		req.logIn(user, err => {
			if (err) return next(err)
			return res.status(200).end()
		})
	})(req, res, next)
})

router.post('/signup', (req, res, next) => {
	passport.authenticate('signup', (err, user, info) => {
		console.log(err)
		if (err) return next(err)
		if (!user) return res.status(400).send(req.flash('error'))
		req.logIn(user, err => {
			if (err) return next(err)
			return res.status(200).end()
		})
	})(req, res, next)
})

router.get('/logout', (req, res) => {
	req.logout()
	res.redirect('/')
})

module.exports = router
