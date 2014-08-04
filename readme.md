# Gulp setup

This is my [Gulp](http://gulpjs.com) setup i've been using lately.

Browsersync reloads on all file changes, and uses proxy with vhost.

## Tools

+ Sass (using `ruby-sass` (`gulp-sass` (libsass) is faster, but this has more features (for Sass 3.3) as i write this))
+ Sass 3.3 Source maps
+ [Browsersync](http://browsersync.io)
+ [Autoprefixer](https://github.com/ai/autoprefixer)
+ Banner using [header](https://www.npmjs.org/package/gulp-header) with metadata from package.json
+ Uglify
+ Imagemin
+ Jshint
+ Csshint
+ Rev-all for cache busting

## Getting started

	npm install gulp
	npm install browser-sync
	npm install

	gulp

### Changelog
+ 2014-08-03: Added `rev-all` for cdn versioning/cache busting and nicer path handling
+ 2014-07-29: First version