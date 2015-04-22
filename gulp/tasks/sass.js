var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var cssmin = require('gulp-cssmin');
var size = require('gulp-size');
var plumber = require('gulp-plumber');
var prefix = require('gulp-autoprefixer');
var header = require('gulp-header');
var config  = require('../config').basePaths;


/*-------------------------------------------------------------------
Compile, prefix, add banner
-------------------------------------------------------------------*/
gulp.task('sass', function() {
    gulp.src(config.scss.base+'main.scss')
        .pipe(plumber())
        .on('error', function(err) {
            console.log(err.message);
        })
        .pipe(sass())
        .pipe(gulp.dest(config.scss.dist))
        .pipe(prefix({ browsers: ['last 2 version'] }))
        .pipe(size())
        .pipe(cssmin())
        .pipe(gulp.dest(config.scss.dist))
        .pipe(reload({
            stream: true,
            once: true
        }))
});