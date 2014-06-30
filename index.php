<!doctype html>
<!--[if IE 7]>    <html class="no-js ie7" lang="en">     <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8" lang="en">     <![endif]-->
<!--[if IE 9]>    <html class="no-js ie9" lang="en">     <![endif]-->
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Raphael Fabeni | Front-end Developer</title>
    <?php include('build/in/meta.php'); ?>
    <?php include('build/in/estilos.php'); ?>
</head>
<body>
    <!-- Header -->
    <?php include('build/in/header.php'); ?>

    <main role="main" class="main container">
        <p>Hi! My name is Raphael Fabeni and I'm a brazilian front-end developer passionated for the web, electronic music and travels.</p>

        <p>Currently, I'm working full time at <a id="a2" href="http://www.a2comunicacao.com.br" target="_blank" data-link="A2">A2 Comunicação</a> and also as a freelancer. I'm colaborator at <a id="tableless" href="http://tableless.com.br/author/raphael-fabeni/" target="_blank" data-link="Tableless">Tableless</a> (a brazilian blog about web development and design) and <a id="culturizeit" href="http://www.culturizeit.com" target="_blank" data-link="Culturize It">Culturize It</a> (a blog related to brazilian culture).</p>

        <p>HTML5, CSS3, JavaScript, usability, UX, wireframes, soccer, cold tea and a lot of water are part of my day. In my free time, I like to read (technical and biography books) and go out to dinner.</p>

        <p>If you wanna talk about the web, a new cool project or about my soccer team, send me an <a href="mailto:contato@raphaelfabeni.com.br">e-mail</a>.</p>

        <ul class="social">
            <li>
                <a id="twitter" class="twitter" target="_blank" href="http://www.twitter.com/raphaelfabeni" data-link="Twitter">
                    <i class="fa fa-twitter"></i>
                </a>
            </li>
            <li>
                <a id="facebook" class="facebook" target="_blank" href="http://www.facebook.com/raphaelfabeni" data-link="Facebook">
                    <i class="fa fa-facebook"></i>
                </a>
            </li>
            <li>
                <a id="github" class="github" target="_blank" href="http://www.github.com/raphaelfabeni" data-link="GitHub">
                    <i class="fa fa-github"></i>
                </a>
            </li>
            <li>
                <a id="google" class="google" target="_blank" href="https://plus.google.com/u/0/+RaphaelFabeni" data-link="Google">
                    <i class="fa fa-google-plus"></i>
                </a>
            </li>
            <li>
                <a id="linkedin" class="linkedin" target="_blank" href="http://br.linkedin.com/in/raphaelfabeni" data-link="LinkedIn">
                    <i class="fa fa-linkedin"></i>
                </a>
            </li>
        </ul>

    </main>

    <!-- Footer -->
    <?php// include('build/in/footer.php') ;?>

    <script>
    // GA (buttons)
    (function () {
        var a2 = document.getElementById('a2');
        var tableless = document.getElementById('tableless');
        var culturizeit = document.getElementById('culturizeit');
        var twitter = document.getElementById('twitter');
        var facebook = document.getElementById('facebook');
        var github = document.getElementById('github');
        var google = document.getElementById('google');
        var linkedin = document.getElementById('linkedin');

        var btnArray = [a2, tableless, culturizeit, twitter, facebook, github, google, linkedin];

        for (var i = 0; i < btnArray.length; i++) {
            if( btnArray[i] ) {
                addListener(btnArray[i], 'click', function() {
                    var which = this.dataset.link;
                    console.log(which);
                    ga('send', 'event', 'Links Externos', which);
                });
            }
        };

        function addListener(element, type, callback) {
            if (element.addEventListener) element.addEventListener(type, callback);
            else if (element.attachEvent) element.attachEvent('on' + type, callback);
        }
    })();
    </script>
</body>
</html>
