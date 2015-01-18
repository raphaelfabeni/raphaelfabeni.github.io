(function() {
    var changeColor = {
        config: {
            btn: document.getElementById('color'),
            theBody: document.getElementById('hold'),
            colors: ['default', 'gray', 'brown', 'blue', 'purple']
        },

        init: function() {
            this.config.btn.addEventListener('click', this.dataColor);
        },

        dataColor: function() {
            var current = changeColor.config.theBody.getAttribute('data-color');
            var newClass = changeColor.randNum(changeColor.config.colors, current);

            changeColor.config.theBody.setAttribute('data-color', newClass);
        },

        getRandom: function(element) {
            return element[Math.floor(Math.random() * element.length)];
        },

        getClass: function(element) {
            return element.className;
        },

        randNum: function(arr, excludeColor){
            var randColor = Math.floor( Math.random() * arr.length );
            if( arr[randColor] == excludeColor ) {
                return this.randNum( arr, excludeColor );
            } else {
                return arr[randColor];
            }
        }
    };

    changeColor.init();
}());

(function() {
    function getLinks() {
        var links = document.getElementsByTagName('a');
        for (var i = 0; i < links.length; i++) {
            if( links[i].host !== location.host ) {
                links[i].target = '_blank';
            }
        }
    }

    getLinks();
}());

(function() {
    'use strict';

    var DataColor = function() {
        this.btn = document.getElementById('color');
        this.father = document.getElementById('hold');
        this.init();
    };

    DataColor.prototype.init = function() {
        var that = this;
        this.btn.addEventListener('click', function() {
            that.storeColor(that.getColor());
        });

        this.appyColor();
    };

    DataColor.prototype.storeColor = function(color) {
        localStorage.setItem('userColor', color);
    };

    DataColor.prototype.getColor = function() {
        return this.father.getAttribute('data-color');
    };

    DataColor.prototype.appyColor = function(color) {
        if(localStorage.getItem('userColor')){
            var recoveredColor = localStorage.getItem('userColor');
            
            this.father.setAttribute('data-color', recoveredColor);
        }
        
    };

    new DataColor();
}());