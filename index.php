<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie7" lang="pt-br"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7" lang="pt-br"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8" lang="pt-br"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="pt-br"> <!--<![endif]-->
<head>
  <meta charset="utf-8">

  <title>Raphael Fabeni | Webdesigner</title>
  <?php include('/in/meta.php');?>
  <?php include('/in/estilos.php');?>
</head>
<body>
<div role="main">
	<div class="alert">
		<p>You're using a browser which does not support all new features. Try Chrome or Firefox!</p>
	</div>
	<header>
  		<hgroup>
  			<h1>RaphaelFabeni</h1>
  			<h2>webdesigner</h2>
  		</hgroup>
  	</header>
  	<section id="about">
  		<p class="description">Hi, my name is <span class="big">Raphael Fabeni</span> and I'm a <span class="medium">webdesigner</span> borned in São Paulo who loves web, electronic music and travel.</p>
  		<p class="description">Currently, I'm working full time at <a href="http://www.a2comunicacao.com.br" target="blank">A2 Comunicação</a> as a front-end developer. I'm focusing on HTML5, CSS3, jQuery and Mobile.</p>
  	</section>
    <!-- works -->
    <nav id="works" class="box overlay">
      <figure class="icon">
        <img src="img/works.png" alt="Recent works">
      </figure>
     <div class="hold-title">
         <h3 class="title">Works</h3>
         <span class="phrase">something what I did..</span>
     </div>
      <ul class="list">
        <li>
          <a target="blank" href="http://www.a2fotografia.com.br">a2fotografia.com.br</a>
        </li>
        <li>
          <a target="blank" href="http://www.idort.com.br">idort.com.br</a>
        </li>
        <li>
          <a target="blank" href="http://www.eletros.org.br">eletros.org.br</a>
        </li>
        <li>
          <a target="blank" href="http://www.fundosocial.sp.gov.br">fundosocial.sp.gov.br
          </a></li>
      </ul>
    </nav>
    <!-- contact -->
    <section id="contact" class="box overlay">
     <figure class="icon">
        <img src="img/contact.png" alt="Contact">
     </figure>
     <div class="hold-title">
         <h3 class="title">Contact</h3>
         <span class="phrase">drop me a line...</span>
     </div>
        <address class="list">
            <p>contato@raphaelfabeni.com.br</p>
            <p>rapha.fabeni@gmail.com</p>
        </address>
        <aside id="social">
            <ul class="social-networks">
                <li class="twitter"><a href="#"><img src="img/twitter.png" alt="Twitter"></a></li>
                <li class="facebook"><a href="#"><img src="img/facebook.png" alt="Facebook"></a></li>
                <li class="google"><a href="#"><img src="img/google.png" alt="Google"></a></li>
                <li class="linkedin"><a href="#"><img src="img/linkedin.png" alt="Linkedin"></a></li>
            </ul>
        </aside>
    </section>
    <!-- button -->
    <div class="button">
        <a href="#" class="btn"><span>Don’t push the button!</span></a>
    </div>

</div>

<?php include('/in/scripts.php');?>
<script>
Modernizr.load({
     test: Modernizr.borderradius,
     nope: [
         'js/PIE.js'
     ],
     complete: function() {
        if (window.PIE) {
          $('.box').each(function() {
              PIE.attach(this);
          });
        }
     }
 });
</script>
</body>
</html>