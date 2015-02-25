# Gulp setup

This is my [Gulp](http://gulpjs.com) setup i've been using lately.

Browsersync reloads on all file changes, and uses proxy with vhost.

## Tools

+ Sass (using [``gulp-sass``](https://www.npmjs.com/package/gulp-sass))
+ [Browsersync](http://browsersync.io)
+ [Autoprefixer](https://github.com/ai/autoprefixer)
+ Banner using [header](https://www.npmjs.org/package/gulp-header) with metadata from package.json
+ Uglify
+ Imagemin
+ Jshint
+ Csshint
+ Clean tasks

## Getting started

#### Clone repo

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

### Todo

- [ ]: Refactor using subfolder/files for loading in tasks. Not just a long Gulpfile.
- [ ]: [gulp-rev](https://github.com/sindresorhus/gulp-rev) for real cache buster using static asset revisioning by appending content hash to filenames
- [ ]: [Browserify](http://viget.com/extend/gulp-browserify-starter-faq)
- [ ]: [gulp-notify](https://www.npmjs.org/package/gulp-notify) and [gulp-plumber](https://www.npmjs.org/package/gulp-plumber)

### Changelog

+ 2014-02-19: Replaced ruby-sass with gulp-sass
+ 2014-09-21: Added a todo section in readme. Cleanup
+ 2014-08-30: Separate watch task. Typo, jshint order. Use BASCSS-lite. Updated readme on browser-sync install
+ 2014-08-08: Using multi line banner style again. Dont ignore `/dist` folder. Added Bower and BASCSS
+ 2014-08-06: Removed rev tasks for now. Nicer banner style
+ 2014-08-05: Changed `rev-all` to `rev-append` cache-busting files using file hash
+ 2014-08-03: Added `rev-all` for cdn versioning/cache busting and nicer path handling
+ 2014-07-29: First version
