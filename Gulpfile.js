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
	revall = require('gulp-rev-all'),
	rev = require('gulp-rev-append'),
	package = require('./package.json');

var paths = {
	src: {
		sass: './scss/',
		sassall: './scss/**/',
		css: './css/',
		js: './js/views/',
		images: './images/',
		html: './',
	},
	dist: {
		css: './css/',
		js: './js/min/',
		images: './images/',
		html: './'
	}
};

var banner = [
	'/*!\n' +
	' * <%= package.name %>\n' +
	' * <%= package.title %>\n' +
	' * <%= package.url %>\n' +
	' * @author <%= package.author %>\n' +
	' * @version <%= package.version %>\n' +
	' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
	' */',
	'\n'
].join('');

gulp.task('sass', function() {
	gulp.src(paths.src.sass + 'gulpsetup.scss', paths.src.sassall + '*.scss')
		.pipe(sass({
			sourcemap: true,
			sourcemapPath: paths.src.sass,
			loadPath: paths.src.sass,
			style: 'compressed',
			lineNumbers: false
		}))
		.on('error', function(err) {
			console.log(err.message);
		})
		.pipe(gulp.dest(paths.dist.css))
		.pipe(prefix("last 2 versions", 'Android'))
		.pipe(header(banner, {
			package: package
		}))
		.pipe(gulp.dest(paths.dist.css))
		.pipe(reload({
			stream: true,
			once: true
		}))
});

gulp.task('browser-sync', function() {
	browserSync.init([paths.src.sass, paths.src.css, paths.src.js, paths.src.images, paths.src.html], {
		proxy: "http://gulpsetup.loc/",
		browser: "google chrome",
		notify: false,
	});
});

gulp.task('bs-reload', function() {
	browserSync.reload();
});

gulp.task('js', function() {
	gulp.src([
		paths.src.js+'gulpsetup.js',
	])
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'))
		.pipe(concat('gulpsetup.min.js'))
		.pipe(uglify())
		.pipe(header(banner, {
			package: package
		}))
		.pipe(gulp.dest(paths.dist.js))
});

gulp.task('jshint', function() {
	gulp.src([
		paths.src.js+'gulpsetup.js',
	])
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'))
});

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

gulp.task('csslint', function() {
	gulp.src(paths.src.css+'gulpsetup.css')
		.pipe(csslint({
			'compatible-vendor-prefixes': false,
			'box-sizing': false,
			'important': false,
			'known-properties': false
		}))
		.pipe(csslint.reporter());
});

gulp.task('rev', function() {
	gulp.src('./index.html')
		.pipe(rev())
		.pipe(gulp.dest('.'));
});

gulp.task('default', ['sass', 'js', 'browser-sync'], function() {
	gulp.watch([paths.src.sassall+'*.scss'], ['sass']);
	gulp.watch([paths.src.js+'*.js'], ['js']);
	gulp.watch(['index.html'], ['bs-reload']);
});