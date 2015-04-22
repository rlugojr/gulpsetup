var gulp = require('gulp');
var size = require('gulp-size');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var header = require('gulp-header');
var plumber = require('gulp-plumber');
var config  = require('../config').basePaths;

/*-------------------------------------------------------------------
Concatinate, uglify
-------------------------------------------------------------------*/
gulp.task('js', function() {
    gulp.src([
      config.bowerjs.base + 'fastclick/lib/fastclick.js',
      config.scripts.base + '*.js'
    ])
    .pipe(plumber())
    .on('error', function(err) {
        console.log(err.message);
    })
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(size())
    .pipe(gulp.dest(config.scripts.dist))
});