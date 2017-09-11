const index = require('./views/index'),
	auth = require('./auth/auth'),
	error = require('./error')


module.exports = app => {
	app.use('/', index)
	app.use('/auth', auth)

	app.use(error._404)
	app.use(error._500)
}
