( function() {

'use strict';

const Gulpsetup = {

  init: function() {

    this.starter();

  },

  starter: function() {

    const odds = evens.map(v => v + 1);
    console.log('Gulpsetup ok');

  },

};

document.addEventListener('DOMContentLoaded', function() {

  Gulpsetup.init();

});

}());