const Fonts = () => {
	const link = document.createElement('link');
	link.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap';
	link.rel = 'stylesheet';

	document.head.appendChild(link);

	const raleway = new window.FontFaceObserver('Raleway');

	raleway.load().then(() => {
		document.documentElement.classList.add('font-loaded');
	});
};

Fonts();
