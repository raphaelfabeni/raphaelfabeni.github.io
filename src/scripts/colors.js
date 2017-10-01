var Colors = (function(){

	const hold = document.getElementsByTagName('body')[0];
	const colorButton = document.querySelector('[data-button-colors]');
	const darkButton = document.querySelector('[data-button-dark]');
	const lightButton = document.querySelector('[data-button-light]');
	const cover = document.querySelector('[data-cover]');
	const buttons = document.querySelectorAll('[data-button]');
	const themes = [...document.querySelectorAll('[data-theme]')];

	function init() {
		bindEvents();
	}

	function bindEvents() {

		colorButton.addEventListener('click', () => toggleCoverColor(true));
		darkButton.addEventListener('click', () => toggleCoverColor(false));

		lightButton.addEventListener('click', (event) => {
			controlStatusButtons(event);
			controlThemes('light');
			toggleCoverColor(true);
		});

		darkButton.addEventListener('click', (event) => {
			controlStatusButtons(event);
			controlThemes();
			toggleCoverColor();
		});

	}

	// Control status for themes buttons
	function controlStatusButtons() {
		buttons.forEach(item => item.classList.remove('is-active'));
		event.target.classList.add('is-active');
	}

	// Control themes wrap
	function controlThemes(isLight) {
		if(isLight) {
			hold.classList.add('is-light');
			themes[0].classList.add('is-active');
		} else {
			hold.classList.remove('is-light');
			themes[0].classList.remove('is-active');
		}
	}

	// Control status of cover
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
