(function() {

    'use strict';

    var Gulpsetup = {

        init: function() {

            this.starter();

        },

        starter: function() {

            console.log('init');

        },

    };

    $(function() {

        Gulpsetup.init();

    });

}());