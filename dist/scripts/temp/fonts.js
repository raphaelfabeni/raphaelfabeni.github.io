'use strict';

var Fonts = function Fonts() {
	var link = document.createElement('link');
	link.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap';
	link.rel = 'stylesheet';

	document.head.appendChild(link);

	var raleway = new window.FontFaceObserver('Raleway');

	raleway.load().then(function () {
		document.documentElement.classList.add('font-loaded');
	});
};

Fonts();