import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import size from 'gulp-size';
import uglify from 'gulp-uglify';
import plumber from 'gulp-plumber';
import paths from '../config';

gulp.task('js', () => {
  gulp.src([
    paths.scripts.base + 'app.js'
  ])
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(concat('main.js'))
    .pipe(babel())
    .pipe(uglify())
    .pipe(size())
    .pipe(gulp.dest(paths.scripts.dist))
});