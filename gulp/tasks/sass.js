import gulp from 'gulp';
import sass from 'gulp-sass';
import cssmin from 'gulp-cssmin';
import size from 'gulp-size';
import plumber from 'gulp-plumber';
import prefix from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
const reload = browserSync.reload;
import paths from '../config';

gulp.task('sass', () => {
  gulp.src(paths.scss.base + 'main.scss')
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(sass())
    .pipe(gulp.dest(paths.scss.dist))
    .pipe(prefix({
      browsers: ['last 2 versions']
    }))
    .pipe(size())
    .pipe(cssmin())
    .pipe(gulp.dest(paths.scss.dist))
    .pipe(reload({
      stream: true,
      once: true
    }))
});