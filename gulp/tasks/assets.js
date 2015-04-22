var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var config  = require('../config').basePaths;

/*-------------------------------------------------------------------
Minify images
-------------------------------------------------------------------*/
gulp.task('imagemin', function() {
    return gulp.src(config.images.base+'*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest(config.images.dist));
});