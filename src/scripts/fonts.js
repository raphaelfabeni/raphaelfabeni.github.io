const Fonts = () => {
	const link = document.createElement('link');
	link.href = 'https://fonts.googleapis.com/css?family=Raleway:300,400,600';
	link.rel = 'stylesheet';

	document.head.appendChild(link);

	const raleway = new window.FontFaceObserver('Raleway');

	raleway.load().then(() => {
		document.documentElement.classList.add('font-loaded');
	});
};

Fonts();
