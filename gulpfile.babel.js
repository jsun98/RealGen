var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync'),
	browserify = require('browserify'),
	eslint = require('gulp-eslint'),
	filter = require('gulp-filter'),
	notify = require('gulp-notify'),
	plumber = require('gulp-plumber'),
	path = require('path'),
	nodemon = require('gulp-nodemon'),
	reload = browserSync.reload,
	sass = require('gulp-ruby-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),

	plumberOptions = {
		errorHandler (err) {
			notify.onError({
				title: 'Error',
				message: '<%= error %>',
			})(err)
			this.emit('end')
		},
	},
	dir = {
		src: {
			jsx: 'src/',
			vendor: 'src/vendor',
			sass: 'src/scss',
		},
		dest: {
			js: 'public/js',
			css: 'public/styles',
		},
		sourcemaps: 'sourcemaps',

	}


// Lint JS/JSX files
gulp.task('eslint', () => gulp.src(path.join(dir.src.jsx, '*.js'))
	.pipe(eslint({ baseConfig: { ecmaFeatures: { jsx: true } } }))
	.pipe(eslint.format())
	.pipe(eslint.failAfterError()))

gulp.task('jsx', () =>
	browserify(path.join(dir.src.jsx, 'index.js'))
		.transform(babelify, { presets: [ 'es2015', 'react' ] })
		.bundle()
		.pipe(source('app.js'))
		// .pipe(concat('app.js'))
		// .pipe(sourcemaps.init())
		// .pipe(sourcemaps.write(dir.sourcemaps))
		.pipe(gulp.dest(dir.dest.js))
		.pipe(reload({ stream: true })))

// Compile Sass to CSS
gulp.task('sass', () => {
	var autoprefixerOptions = { browsers: [ 'last 2 versions' ] },
		filterOptions = '**/*.css'

	return sass(path.join(dir.src.sass, '*.scss'), { style: 'expanded' })
		.pipe(plumber(plumberOptions))
		.pipe(sourcemaps.init())
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(sourcemaps.write(dir.sourcemaps))
		.pipe(gulp.dest(dir.dest.css))
		.pipe(filter(filterOptions))
		.pipe(reload({ stream: true }))
})

// Watch JS/JSX and Sass files
gulp.task('watch', () => {
	gulp.watch(path.join(dir.src.jsx, '/**/*.{js,jsx}'), [ 'jsx' ])
	gulp.watch(path.join(dir.src.sass, '*.scss'), [ 'sass' ])
})

// BrowserSync
gulp.task('browsersync', () => {
	browserSync.init({
		proxy: 'http://localhost:3000',
		browser: 'Google Chrome',
		port: 3001,
		notify: true,
	})
})

gulp.task('serve', () => {
	nodemon({
		script: 'app.js',
		ext: 'js ejs',
		verbose: true,
	})
})

gulp.task('build', [ 'sass', 'jsx' ])
gulp.task('default', [ 'build', 'serve', 'browsersync', 'watch' ])
