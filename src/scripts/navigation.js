var Navigation = (function() {

	const navButton = document.querySelector('[data-nav-button]');
	const navigation = document.querySelector('[data-navigation]');
	const closeButton = document.querySelector('[data-nav-close]');

	function init() {
		bindEvents();
	}

	function bindEvents() {
		if(!navButton || !closeButton || !navigation) {
			return;
		}
		navButton.addEventListener('click', () => navigation.classList.add('is-active'));
		closeButton.addEventListener('click', () => navigation.classList.remove('is-active'));
		navigation.addEventListener('click', () => navigation.classList.remove('is-active'));
	}

	return {
		init:  init
	};

})();

Navigation.init();
