var gulp   = require("gulp");
var rev    = require("gulp-rev");
var config = require("../config").basePaths;

/*-------------------------------------------------------------------
Create revisioned js
-------------------------------------------------------------------*/
gulp.task("revjs", ["js"], function() {
  return gulp.src(config.scripts.dist+"main.js")
    .pipe(rev())
    .pipe(gulp.dest(config.scripts.rev))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.scripts.rev))
});