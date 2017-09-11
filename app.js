require('dotenv').config()
var express = require('express'),
	path = require('path'),
	favicon = require('serve-favicon'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	flash = require('connect-flash'),
	passport = require('passport'),
	session = require('express-session'),
	mongoose = require('mongoose'),
	MongoStore = require('connect-mongo')(session),
	app = express(),
	port = process.env.PORT || 3000

// view engine setup
app.set('views', path.join(__dirname, 'templates/views'))
app.set('view engine', 'ejs')

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/realgen', { useMongoClient: true })

require('./passport/passport')(passport)

app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: true,
	saveUninitialized: false,
	store: new MongoStore({ mongooseConnection: mongoose.connection }),
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

require('./routes/index')(app)

app.listen(port, () => {
	console.log('Application started on port ' + port)
})
