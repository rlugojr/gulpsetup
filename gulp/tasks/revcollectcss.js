var gulp         = require("gulp");
var revCollector = require("gulp-rev-collector");
var config       = require("../config").basePaths;

/*-------------------------------------------------------------------
Replace html with revisioned css
-------------------------------------------------------------------*/
gulp.task("revcollectcss", function () {
    return gulp.src([config.scss.rev+"rev-manifest.json", config.html.dist+"index.html"])
        .pipe( revCollector({
            replaceReved: true,
        }) )
        .pipe( gulp.dest(config.html.dist) );
});