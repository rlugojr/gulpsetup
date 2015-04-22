/**
 * Gulpsetup
 * Copyright (c) 2015 Urban Sanden
 * Using Browser Sync http://www.browsersync.io/, Autoprefixer, Sass, Uglify etc
 * With some inspiration from https://github.com/neoskop/patternlab-php and http://code.tutsplus.com/tutorials/gulp-as-a-development-web-server--cms-20903
 */


var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });