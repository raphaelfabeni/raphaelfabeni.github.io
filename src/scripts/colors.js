var Colors = (function(){

	const hold = document.getElementsByTagName('body')[0];
	// const colorButton = document.querySelector('[data-button-colors]');
	const darkButton = document.querySelector('[data-button-dark]');
	const lightButton = document.querySelector('[data-button-light]');
	const cover = document.querySelector('[data-cover]');
	const buttons = document.querySelectorAll('[data-button]');
	const themes = [...document.querySelectorAll('[data-theme]')];
	const objButtons = {
		'light': lightButton,
		'dark': darkButton
	};

	function init() {
		bindEvents();
		checkLocal();
	}

	function checkLocal() {
		let hasLocal = localStorage.getItem('theme');
		if(!hasLocal) {
			objButtons.dark.click();
			return;
		}
		objButtons[localStorage.getItem('theme')].click();
	}

	// Only bind events to buttons
	function bindEvents() {

		// Light button
		lightButton.addEventListener('click', (event) => {
			controlStatusButtons(event);
			controlThemes('light');
			if(cover) {
				toggleCoverColor(true);
			}
			localStorage.setItem('theme', 'light');
		});

		// Dark button
		darkButton.addEventListener('click', (event) => {
			controlStatusButtons(event);
			controlThemes();
			if(cover) {
				toggleCoverColor();
			}
			localStorage.setItem('theme', 'dark');
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
