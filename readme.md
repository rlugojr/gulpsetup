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
+ Clean tasks

## Getting started

#### clone repo

	git clone git@github.com:urre/gulpsetup.git mywebsite
	cd mywebsite

Setup `mywebsite.loc` on your local machine

#### Install Gulp Browser Sync and NPM dependencies

	npm install browser-sync gulp --save-dev
	npm install

#### Run tasks

	gulp

#### Watch, inject and reload using Browser Sync

	gulp serve

### Changelog

+ 2014-08-30: Separate watch task. Typo, jshint order. Use BASCSS-lite. Updated readme on browser-sync install
+ 2014-08-08: Using multi line banner style again. Dont ignore `/dist` folder. Added Bower and BASCSS
+ 2014-08-06: Removed rev tasks for now. Nicer banner style
+ 2014-08-05: Changed `rev-all` to `rev-append` cache-busting files using file hash
+ 2014-08-03: Added `rev-all` for cdn versioning/cache busting and nicer path handling
+ 2014-07-29: First version