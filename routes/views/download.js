var keystone = require('keystone');
var request = require('request');
var querystring = require('querystring');
var colors = require('colors');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.section = 'download';
	locals.formData = req.body || {};
	var base_dir = 'public/generated';
	
	colors.setTheme({
	  silly: 'rainbow',
	  input: 'grey',
	  verbose: 'cyan',
	  prompt: 'grey',
	  info: 'green',
	  data: 'grey',
	  help: 'cyan',
	  warn: 'yellow',
	  debug: 'blue',
	  error: 'red'
	});

	view.on('post', function(next) {
	    console.log('Received POST /'.bold);
    	console.log(req.body);
    	console.log('\n\n');
    	
		var postreq = 'cmd=_notify-validate';
		for (var key in req.body) {
			if (req.body.hasOwnProperty(key)) {
				var value = querystring.escape(req.body[key]);
				postreq = postreq + "&" + key + "=" + value;
			}
		}
		
		//posting back to paypal
		console.log('Posting back to paypal'.bold);
		console.log(postreq);
		console.log('\n\n');
		var options = {
			url: 'https://www.sandbox.paypal.com/cgi-bin/webscr',
			method: 'POST',
			headers: {
				'Connection': 'close'
			},
			body: postreq,
			strictSSL: true,
			rejectUnauthorized: false,
			requestCert: true,
			agent: false
		};
		
		request(options, function callback(error, response, body) {
			if (!error && response.statusCode === 200) {

			// inspect IPN validation result and act accordingly

				if (body.substring(0, 8) === 'VERIFIED'){
					// The IPN is verified, process it
					console.log('Verified IPN!'.green);
					console.log('\n\n');

					// assign posted variables to local variables
					var item_name = req.body['item_name'];
					var item_number = req.body['item_number'];
					var payment_status = req.body['payment_status'];
					var payment_amount = req.body['mc_gross'];
					var payment_currency = req.body['mc_currency'];
					var txn_id = req.body['txn_id'];
					var receiver_email = req.body['receiver_email'];
					var payer_email = req.body['payer_email'];

					//Lets check a variable
					console.log("Checking variable".bold);
					console.log("payment_status:", payment_status)
					console.log('\n\n');

					// IPN message values depend upon the type of notification sent.
					// To loop through the &_POST array and print the NV pairs to the screen:
					console.log('Printing all key-value pairs...'.bold)
					for (var key in req.body) {
						if (req.body.hasOwnProperty(key)) {
							var value = req.body[key];
							console.log(key + "=" + value);
						}
					}

				} else if (body.substring(0, 7) === 'INVALID') {
					// IPN invalid, log for manual investigation
					console.log('Invalid IPN!'.error);
					console.log('\n\n');
				}
			}
		});
	});
	
	/*
	res.download(base_dir+'/1234/website'+req.body.selection+'.zip', function(err) {
		if (err) throw err;
	});
	
	view.render('download');
	*/
}