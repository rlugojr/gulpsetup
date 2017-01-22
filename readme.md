# Gulpsetup

A simple structured [Gulp](http://gulpjs.com) setup to get things started.

## Some tools used

<ul>
<li>Structured Gulpfile using ES6 and partials</li>
<li>Compile Sass using gulp-sass, minify using cssmin</li>
<li>Transpile JavaScript using <a href="http://babel.io">Babel</a>. ES2015 preset included via <code>.babelrc</code></li>
<li>Create Bundle using <a href="http://rollupjs.org/">rollup.js</a></li> 
<li><a href="http://eslint.org/">ESLint</a></li> 
<li>Synchronised browser testing using <a href="http://www.browsersync.io/">BrowserSync</a> and Localtunnel</li> 
<li>Autoprefixer</li>
<li>Some helpers: plumber, size</li>
</ul>

## Getting started

#### Clone repo

	git clone git@github.com:urre/gulpsetup.git

#### Install dependencies

	npm i

#### Watch, inject and reload using Browser Sync

    npm start

#### Build

	npm run build


### Changelog
+ 2017-01-22: Add rollup.js
+ 2016-11-06: Use ES6 gulpfile, added Babel, added ESLint, removed Bower support, remove image minifiers, remove jshint, remove csshint. Overall simplified.
+ 2016-02-11: Added gulp-sizereport, cleanup demo page and dependencies
+ 2015-07-17: Fixed optimize images-task. Removed rev tasks.
+ 2015-07-17: Changed task for optimizing images. Added Pngquant, jpegtran and gifsiclce.
+ 2014-05-04: Added jshint-stylish
+ 2014-04-23: Use /assets folder, added pngcrush. Moved fonts to /assets. Fixed imagemin.
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