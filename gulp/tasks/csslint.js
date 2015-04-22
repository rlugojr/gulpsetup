var gulp = require('gulp');
var csslint = require('gulp-csslint');
var config  = require('../config').basePaths;

/*-------------------------------------------------------------------
CSS lint
-------------------------------------------------------------------*/
gulp.task('csslint', function() {
    gulp.src(config.scss.base+'gulpsetup.css')
        .pipe(csslint({
            'compatible-vendor-prefixes': false,
            'box-sizing': false,
            'important': false,
            'known-properties': false
        }))
        .pipe(csslint.reporter());
});