var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	prefix = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	browserSync = require('browser-sync'),
	header = require('gulp-header'),
	imagemin = require('gulp-imagemin'),
	reload = browserSync.reload,
	csslint = require('gulp-csslint'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	clean = require('gulp-clean'),
	package = require('./package.json');

// Project paths
var paths = {
	src: {
		sass: './scss/',
		sassall: './scss/**/',
		css: './css/',
		js: './js/views/**/',
		images: './images/',
		html: './',
	},
	dist: {
		css: './dist/',
		js: './dist/',
		images: './images/',
		html: './'
	}
};

// Banner using meta data from package.json
var banner = [
	'/*!\n' +
	' *	 <%= package.name %>.' +
	' <%= package.title %>.' +
	' <%= package.url %>.' +
	' @author <%= package.author %>.' +
	' @version <%= package.version %>.' +
	' Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
	' */',
	'\n'
].join('');

// Compile Sass
gulp.task('sass', function() {
	gulp.src(paths.src.sass + 'gulpsetup.scss', paths.src.sassall + '*.scss')
		.pipe(sass({
			sourcemap: false,
			sourcemapPath: paths.src.sass,
			loadPath: paths.src.sass,
			style: 'compressed',
			lineNumbers: false
		}))
		.on('error', function(err) {
			console.log(err.message);
		})
		.pipe(prefix('last 2 versions'))
		.pipe(header(banner, {
			package: package
		}))
		.pipe(gulp.dest(paths.dist.css))
		.pipe(csslint())
		.pipe(csslint.reporter())
		.pipe(reload({
			stream: true,
		}))
});

// Concatinate and minify Javascript
gulp.task('js', function() {
	gulp.src([
		paths.src.js + 'gulpsetup.js',
	])
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'))
		.pipe(concat('gulpsetup.min.js'))
		.pipe(uglify())
		.pipe(header(banner, {
			package: package
		}))
		.pipe(gulp.dest(paths.dist.js))
		.pipe(reload({
			stream: true,
		}))
});

// Browser sync
gulp.task('browser-sync', function() {
	browserSync.init([paths.src.sass, paths.src.css, paths.src.js, paths.src.images, paths.src.html], {
		proxy: 'gulpsetup.loc',
		browser: "google chrome",
		port: 5000,
		notify: false,
	});
});

// Browser sync reload
gulp.task('bs-reload', function() {
	browserSync.reload();
});

// Jshint
gulp.task('jshint', function() {
	gulp.src([
		paths.src.js + 'gulpsetup.js',
	])
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'))
});

// Minify images
gulp.task('imagemin', function() {
	return gulp.src(paths.src.images)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{
				removeViewBox: false
			}],
			use: [pngcrush()]
		}))
		.pipe(gulp.dest(paths.dist.images));
});

// CSS Lint
gulp.task('csslint', function() {
	gulp.src(paths.src.css + 'gulpsetup.css')
		.pipe(csslint({
			'compatible-vendor-prefixes': false,
			'box-sizing': false,
			'important': false,
			'known-properties': false
		}))
		.pipe(csslint.reporter());
});

// Clean tasks
gulp.task('cleanall', function() {
	return gulp.src('./dist/*', {
			force: true
		})
		.pipe(clean());
});

gulp.task('cleancss', function() {
	return gulp.src('./dist/*.css', {
			force: true
		})
		.pipe(clean());
});

gulp.task('cleanjs', function() {
	return gulp.src('./dist/*.js', {
			force: true
		})
		.pipe(clean());
});

// Main task
gulp.task('default', ['cleanall', 'sass', 'js', 'browser-sync'], function() {
	gulp.watch([paths.src.sass + '*.scss'], ['cleancss', 'sass', 'bs-reload']);
	gulp.watch([paths.src.js + '*.js'], ['cleanjs', 'js', 'bs-reload']);
	gulp.watch(['./index.html'], ['bs-reload']);
});