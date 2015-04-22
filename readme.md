# Gulp setup

This is my [Gulp](http://gulpjs.com) setup i've been using lately.

Browsersync reloads on all file changes

## Some tools used

+ Sass (using [``gulp-sass``](https://www.npmjs.com/package/gulp-sass))
+ [Browsersync](http://browsersync.io)
+ [Autoprefixer](https://github.com/ai/autoprefixer)

## Getting started

#### Clone repo

	git clone git@github.com:urre/gulpsetup.git && cd gulpsetup
	rm -rf .git

#### Install Gulp Browser Sync and NPM dependencies

	npm install browser-sync gulp --save-dev
	npm install

#### Run tasks

	gulp

#### Watch, inject and reload using Browser Sync

	gulp serve

### Roadmap

- [ ] Add asset revisioning using gulp-rev and gulp-revcollector

### Changelog

+ 2014-04-22: Added License. Removed Fastclick. More info on demo page.
+ 2014-04-22: Removed jQuery. Cleanup unused Gulp plugins not in use. 
+ 2014-04-22: Refactor Gulpfile with separate partials in subfolders. require in base file. Use bascss-sass version.
+ 2014-04-18: Remove jQuery. Use BASSCSS and Ionicons with Bower.
+ 2014-02-19: Replaced ruby-sass with gulp-sass
+ 2014-09-21: Added a todo section in readme. Cleanup
+ 2014-08-30: Separate watch task. Typo, jshint order. Use BASCSS-lite. Updated readme on browser-sync install
+ 2014-08-08: Using multi line banner style again. Dont ignore `/dist` folder. Added Bower and BASCSS
+ 2014-08-06: Removed rev tasks for now. Nicer banner style
+ 2014-08-05: Changed `rev-all` to `rev-append` cache-busting files using file hash
+ 2014-08-03: Added `rev-all` for cdn versioning/cache busting and nicer path handling
+ 2014-07-29: First version