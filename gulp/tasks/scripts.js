import gulp from 'gulp';
import size from 'gulp-size';
import uglify from 'gulp-uglify';
import plumber from 'gulp-plumber';
import paths from '../config';
import browserSync from 'browser-sync';
const reload = browserSync.reload;

import util from 'gulp-util';
import rollup from 'gulp-rollup';
import rollupIncludePaths from 'rollup-plugin-includepaths';
import babel from 'gulp-babel';

const includePathOptions = {
  paths: ['./src/js/modules']
};

gulp.task("js", () => {
  gulp.src([
    paths.scripts.base + "app.js"
  ])
    .pipe(plumber())
    .on("error", function(err) {
      console.log(err.message);
    })
    .pipe(rollup({
      entry: paths.scripts.base + "app.js",
      impliedExtensions: ['.js'],
      allowRealFiles: true,
      sourceMap: true,
      format: 'umd',
      plugins: [
        rollupIncludePaths(includePathOptions)
      ]
    }))
    .pipe(babel())
    .pipe(gulp.dest(paths.scripts.dist))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }));
});
