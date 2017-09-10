module.exports = {
	_404: (req, res, next) => {
		var err = new Error('Not Found')
		err.status = 404
		next(err)
	},

	_500: (err, req, res, next) => {
		res.locals.message = err.message
		res.locals.error = req.app.get('env') === 'development' ? err : {}

		const status = err.status || 500
		res.status(status)

		if (status === 500)
			res.render('error/500')
		else
			res.render('error/404')

	},
}
