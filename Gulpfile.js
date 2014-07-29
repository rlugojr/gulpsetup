// Gulp tasks by @urre

var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	prefix = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	browserSync = require('browser-sync'),
	header  = require('gulp-header'),
	imagemin = require('gulp-imagemin'),
	reload = browserSync.reload,
	csslint = require('gulp-csslint'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	package = require('./package.json');

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
	gulp.src('scss/mywebsite.scss')
		.pipe(sass(
		  {sourcemap: true, sourcemapPath: './scss', loadPath: './scss/**/*', style: 'compressed'}
		))
		.on('error', function (err) { console.log(err.message); })
		.pipe(gulp.dest('css/'))
		.pipe(prefix("last 4 version"))
		.pipe(header(banner, { package : package }))
		.pipe(gulp.dest('css/'))
		.pipe(reload({stream:true, once: true}))
});

gulp.task('browser-sync', function() {
  browserSync.init(["css/*.css", "scss/*", "scss/**/*", "*.html", "inc/*.html", "*.php", "parts/**/*.php", "js/views/*.js"], {
	proxy: "http://mywebsite.loc/",
	browser: "google chrome",
	notify: false,
  });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('js', function() {
  gulp.src([
  	'js/views/mywebsite.js',
  	])
  	.pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
  	.pipe(concat('mywebsite.min.js'))
    .pipe(uglify())
    .pipe(header(banner, { package : package }))
    .pipe(gulp.dest('js/min'))
});

gulp.task('jshint', function() {
  gulp.src([
  	'js/views/mywebsite.js',
  	])
  	.pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
});

gulp.task('imagemin', function () {
	return gulp.src('images/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngcrush()]
		}))
		.pipe(gulp.dest('images/'));
});

gulp.task('csslint', function(){
  gulp.src('./css/mywebsite.css')
	.pipe(csslint({
		  'compatible-vendor-prefixes': false,
		  'box-sizing': false,
		  'important': false,
		  'known-properties': false
		}))
	.pipe(csslint.reporter());
});

gulp.task('default', ['sass', 'js', 'browser-sync'], function () {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['js/views/*.js'], ['js']);
  gulp.watch(['*.html', '*.php', 'parts/**/*.php'], ['bs-reload']);
});

gulp.task('lint', ['csslint'], function () {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});