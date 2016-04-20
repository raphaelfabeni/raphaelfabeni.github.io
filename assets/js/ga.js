// GA (buttons)
(function () {
    var redventures = document.getElementById('redventures');
    var twitter = document.getElementById('twitter');
    var talks = document.getElementById('talks');
    var meetup = document.getElementById('meetup');
    var blog = document.getElementById('blog');
    var blogPt = document.getElementById('blog-pt');
    var blogEn = document.getElementById('blog-en');
    var facebook = document.getElementById('facebook');
    var github = document.getElementById('github');
    var google = document.getElementById('google');
    var linkedin = document.getElementById('linkedin');
    var codepen = document.getElementById('codepen');
    var color = document.getElementById('color');

    var btnArray = [redventures, twitter, talks, meetup, blog, blogPt, blogEn, facebook, github, google, linkedin, codepen, color];

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
