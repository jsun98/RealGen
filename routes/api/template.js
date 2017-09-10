const fs = require('fs'),
	path = require('path')

exports = module.exports = function (req, res, next) {
	fs.readFile(path.join(__dirname, '../../blank_templates/' + req.params.id + '/index.html'), 'utf8', (err, html) => {
		if (err) next(err)
		console.log(req.session)
	})

	// res.render('index')

}
