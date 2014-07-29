# Gulp setup

This is my [Gulp](http://gulpjs.com) setup i've been using lately. The folder structure is the one i use for WordPress theme development, but easy to change. Browsersync reloads on all file changes, and uses proxy with vhost.

## Tools

+ Sass (using Ruby Sass (Native/Lib Sass is faster, but this has more features as i write this))
+ Sass 3.3 Source maps
+ [Browsersync](http://browsersync.io)
+ [Autoprefixer](https://github.com/ai/autoprefixer)
+ Banner using [header](https://www.npmjs.org/package/gulp-header) with metadata from package.json
+ Uglify
+ Jshint
+ Csshint

## Getting started

	npm install

	gulp