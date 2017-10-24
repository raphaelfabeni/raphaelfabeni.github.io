'use strict';

var Fonts = function Fonts() {
	var link = document.createElement('link');
	link.href = 'https://fonts.googleapis.com/css?family=Raleway:300,400,600';
	link.rel = 'stylesheet';

	document.head.appendChild(link);

	var raleway = new window.FontFaceObserver('Raleway');

	raleway.load().then(function () {
		document.documentElement.classList.add('font-loaded');
	});
};

Fonts();