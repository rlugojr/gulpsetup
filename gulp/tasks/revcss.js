var gulp         = require("gulp");
var rev          = require("gulp-rev");
var revCollector = require("gulp-rev-collector");
var config  = require("../config").basePaths;

/*-------------------------------------------------------------------
Create revisioned css
-------------------------------------------------------------------*/
gulp.task("revcss", ["sass"], function() {
  return gulp.src(config.scss.dist+"main.css")
    .pipe(rev())
    .pipe(gulp.dest(config.rev.base))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.rev.base))
});