// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,
	width: 1100,

	theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
	transition: Reveal.getQueryHash().transition || 'fade', // default/cube/page/concave/zoom/linear/fade/none

	// Optional libraries used to extend on reveal.js
	dependencies: [
		{ src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
		{ src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
		{ src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
		{ src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
	]
});


Reveal.addEventListener( 'fragmentshown', function( event ) {
	var idElement = event.fragment.id;

	if( idElement == 'call-mobile-first' ) {
		$('.mobile-first').addClass('animated');
	}
});

Reveal.addEventListener( 'mobile-first-animated', function() {
    $('.mobile-first').removeClass('animated');
}, false );

jQuery(document).ready(function($) {
	$('#start-responsive').on('click', function(event){
		event.preventDefault();
		$('#hold-example').toggleClass('animated');
	});
});