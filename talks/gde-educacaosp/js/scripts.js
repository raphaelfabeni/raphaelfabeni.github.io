// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,

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
	// Kid
	if( idElement == 'kid' ) {
		$('.hold-workflow').animate({ opacity: 0.4 }, 'slow');
	}

	// Last workflow
	if( idElement == 'last-workflow' ) {
		$('.old-workflow .icon-desktop').addClass('icon-red');
	}

	// Wrench last workflow
	if( idElement == 'wrench-workflow' ) {
		$('#first-workflow').animate({ opacity: 0.4 }, 'slow');
	}

	// New workflow
	if( idElement == 'new-last-workflow' ) {
		$('.new-workflow .icon-desktop').addClass('icon-green');
	}

	// Wrench new workflow
	if( idElement == 'new-wrench-workflow' ) {
		$('#new-first-workflow').animate({ opacity: 0.4 }, 'slow');
	}

	// Workflow mobile
	if( idElement == 'workflow-mobile' ) {
		$('#hold-workflow-mobile').addClass('icon-red');
	}
});

Reveal.addEventListener( 'fragmenthidden', function( event ) {
	var idElement = event.fragment.id;
	// Kid
	if( idElement == 'kid' ) {
		$('.hold-workflow').animate({ opacity: 1 }, 'slow');
	}

	// Last workflow
	if( idElement == 'last-workflow' ) {
		$('.icon-desktop').removeClass('icon-red');
	}

	// Wrench last workflow
	if( idElement == 'wrench-workflow' ) {
		$('#first-workflow').animate({ opacity: 1 }, 'slow');
	}

	// New workflow
	if( idElement == 'new-last-workflow' ) {
		$('.new-workflow .icon-desktop').removeClass('icon-green');
	}

	// Wrench new workflow
	if( idElement == 'new-wrench-workflow' ) {
		$('#new-first-workflow').animate({ opacity: 1 }, 'slow');
	}
});