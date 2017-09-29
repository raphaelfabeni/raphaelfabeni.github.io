var Colors = (function(){

	const hold = document.querySelector('[data-hold]');
	const colorButton = document.querySelector('[data-button-colors]');
	const lightButton = document.querySelector('[data-button-dark]');
	const darkButton = document.querySelector('[data-button-light]');
	const cover = document.querySelector('[data-cover]');

	function init() {
		bindEvents();
	}

	function bindEvents() {

		colorButton.addEventListener('click', () => toggleCoverColor(true));
		darkButton.addEventListener('click', () => toggleCoverColor(false));

		lightButton.addEventListener('click', () => {
			toggleTheme();
			toggleCoverColor(true);
		});

	}

	function toggleTheme() {
		hold.classList.toggle('is-light');
	}

	function toggleCoverColor(condition) {
		if(condition) {
			cover.classList.add('has-color');
		} else {
			cover.classList.remove('has-color');
		}

	}

	return {
		init: init
	};

})();

Colors.init();
