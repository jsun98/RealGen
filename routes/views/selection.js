var keystone = require('keystone');


exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	locals.section = 'selection';
	locals.formData = req.body || {};
	locals.selectionMade = false;
	
	view.on('post', function(next) {
		if (req.body.back==null) {
			locals.selectionMade=true;
		}
		next();
	});
	
	
	view.render('selection');
}