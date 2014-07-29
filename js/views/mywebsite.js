var Mywebsite = {

        settings : {
        	first: true,
        	second: true,
        	fourth: true,
        	fifth : ['one', 'two', 'three', 'four', 'five', 'six']
        },

        init: function () {

            this.nextMethod();
            this.anotherMethod();
        },

        nextMethod: function () {

        },

        anotherMethod: function () {

        }

    };

$(function () {
    Mywebsite.init();
});