var Colors = (function(){

	// var hold = document.querySelector('[data-hold]')
	const colorButton = document.querySelector('[data-button-colors]');
	const lightButton = document.querySelector('[data-button-dark]');
	const darkButton = document.querySelector('[data-button-light]');
	var cover = document.querySelector('[data-cover]');

	function init() {
		bindEvents();
	}

	function bindEvents() {

		colorButton.addEventListener('click', () => toggleColor(true));
		darkButton.addEventListener('click', () => toggleColor(false));
		lightButton.addEventListener('click', () => toggleColor(true));

	}

	function toggleColor(condition) {
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
