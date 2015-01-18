// GA (buttons)
(function () {
    var a2 = document.getElementById('a2');
    var tableless = document.getElementById('tableless');
    var culturizeit = document.getElementById('culturizeit');
    var twitter = document.getElementById('twitter');
    var talks = document.getElementById('talks');
    var meetup = document.getElementById('meetup');
    var blog = document.getElementById('blog');
    var facebook = document.getElementById('facebook');
    var github = document.getElementById('github');
    var google = document.getElementById('google');
    var linkedin = document.getElementById('linkedin');
    var codepen = document.getElementById('codepen');
    var color = document.getElementById('color');

    var btnArray = [a2, tableless, culturizeit, twitter, talks, meetup, blog, facebook, github, google, linkedin, codepen, color];

    for (var i = 0; i < btnArray.length; i++) {
        if( btnArray[i] ) {
            addListener(btnArray[i], 'click', function() {
                var which = this.dataset.link;
                ga('send', 'event', 'Links Externos', which);
            });
        }
    };

    function addListener(element, type, callback) {
        if (element.addEventListener) element.addEventListener(type, callback);
        else if (element.attachEvent) element.attachEvent('on' + type, callback);
    }
})();