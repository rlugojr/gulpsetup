/**
 * Gulpsetup
 * Copyright (c) 2015 Urban Sanden
 * Using Browser Sync http://www.browsersync.io/, Autoprefixer, Sass, Uglify etc
 * With some inspiration from https://github.com/neoskop/patternlab-php and http://code.tutsplus.com/tutorials/gulp-as-a-development-web-server--cms-20903
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var header = require('gulp-header');
var imagemin = require('gulp-imagemin');
var cssmin = require('gulp-cssmin');
var reload = browserSync.reload;
var csslint = require('gulp-csslint');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var size = require('gulp-size');
var shell = require('gulp-shell');
var package = require('./package.json');

/*-------------------------------------------------------------------

  Paths

-------------------------------------------------------------------*/

var basePaths = {
  assets: {
    dist: 'dist/'
  },
  vendor: {
    base: 'js/vendor/',
  },
  scripts: {
    base: 'js/views/',
    dist: 'dist/'
  },
  bowerjs: {
    base: 'bower_components/',
  },
  scss: {
    base: 'scss/',
    dist: 'dist/'
  },
  html: {
    base: './',
    dist: './'
  },
  images: {
    base: 'images/',
    dist: 'images/'
  },
};

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 6',
  'android >= 4.4',
  'bb >= 10'
];

var banner = [
    '/*!\n' +
    ' * <%= package.name %>\n' +
    ' * <%= package.title %>\n' +
    ' * <%= package.url %>\n' +
    ' * @author <%= package.author %>\n' +
    ' * @version <%= package.version %>\n' +
    ' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
    ' */',
    '\n'
].join('');

gulp.task('sass', function() {
    gulp.src('scss/gulpsetup.scss')
        .pipe(plumber())
        .on('error', function(err) {
            console.log(err.message);
        })
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(prefix({browsers: AUTOPREFIXER_BROWSERS}))
        .pipe(header(banner, {
            package: package
        }))
        .pipe(size())
        .pipe(cssmin())
        .pipe(gulp.dest('dist'))
        .pipe(reload({
            stream: true,
            once: true
        }))
});

gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "scss/*", "scss/**/*", "*.html", "inc/*.html", "*.php", "parts/**/*.php", "js/views/*.js"], {
        proxy: "gulpsetup.loc",
        browser: "google chrome",
        port: 4060,
        notify: false,
        xip: true
    });
});

gulp.task('bs-reload', function() {
    browserSync.reload();
});

gulp.task('js', function() {
    gulp.src([
      basePaths.bowerjs.base + 'fastclick/lib/fastclick.js',
      basePaths.scripts.base + '*.js'
    ])
    .pipe(plumber())
    .on('error', function(err) {
        console.log(err.message);
    })
    .pipe(concat('gulpsetup.js'))
    //.pipe(uglify())
    .pipe(header(banner, {
        package: package
    }))
    .pipe(size())
    .pipe(gulp.dest('dist'))
});

gulp.task('imagemin', function() {
    return gulp.src('images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest('images/'));
});

gulp.task('jshint', function() {
    gulp.src([
        'js/views/app.js',
    ])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
});

gulp.task('csslint', function() {
    gulp.src('./css/gulpsetup.css')
        .pipe(csslint({
            'compatible-vendor-prefixes': false,
            'box-sizing': false,
            'important': false,
            'known-properties': false
        }))
        .pipe(csslint.reporter());
});

// Gulp run
gulp.task('default', ['sass', 'js']);

// Gulp run and inject + reload
gulp.task('serve', ['sass', 'js', 'browser-sync'], function() {
    gulp.watch(['scss/**/*.scss'], ['sass'], ['bs-reload']);
    gulp.watch(['js/views/*.js', 'js/vendor/**/*.js'], ['js'], ['bs-reload']);
    gulp.watch(['*.php', 'parts/**/*.php'], ['bs-reload']);
});

// Separate linting task
gulp.task('lint', ['csslint', 'jslint'], function() {
    gulp.watch(['scss/**/*.scss'], ['sass']);
});