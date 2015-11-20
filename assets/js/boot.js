(function() {
  'use strict';
  changeColor.init();

  console.log(changeColor.hasLocalColor());
  
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