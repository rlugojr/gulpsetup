(function() {

    'use strict';

    var Gulpsetup = {

        init: function() {

            this.starter();

        },

        starter: function() {

            console.log('Gulpsetup init');

        },

    };

    document.addEventListener("DOMContentLoaded", function(event) { 

        Gulpsetup.init();

    });

}());