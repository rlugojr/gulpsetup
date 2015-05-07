/*-------------------------------------------------------------------
Paths
-------------------------------------------------------------------*/

module.exports = {
  basePaths : {
    assets: {
      dist: './dist/'
    },
    vendor: {
      base: './js/vendor/',
    },
    scripts: {
      base: './assets/js/',
      dist: './dist/rev/css/',
      rev: "./dist/rev/js/"
    },
    bowerjs: {
      base: './bower_components/',
    },
    fonts: {
      src: './assets/fonts/'
    },
    scss: {
      src: './assets/scss/**/*.{sass,scss}',
      base: './assets/scss/',
      dist: './dist/rev/css/',
      rev: "./dist/rev/css/"
    },
    html: {
      base: './',
      dist: './'
    },
    images: {
      src: './assets/images/**/*.{png,jpg}',
      base: './assets/images/',
      dist: './assets/images/'
    },
    rev: {
      base: "./dist/rev/"
    }
  }
};