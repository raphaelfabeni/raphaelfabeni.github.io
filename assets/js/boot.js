(function() {
  'use strict';

  var config = {
    btnColor: document.getElementById('color'),
    hold: document.getElementById('hold')
  };

  new DataColor(config.btnColor, config.hold);

  new ChangeColor(config.btnColor, config.hold);
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