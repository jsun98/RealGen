const index = require('./views/index'),
	error = require('./error')


module.exports = app => {
	app.get('/', index)

	app.use(error._404)
	app.use(error._500)
}
