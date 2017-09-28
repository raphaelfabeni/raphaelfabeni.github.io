var Colors = (function(){

	// var hold = document.querySelector('[data-hold]')
	var colorButton = document.querySelector('[data-button-colors]');
	var lightButton = document.querySelector('[data-button-dark]');
	var darkButton = document.querySelector('[data-button-light]');
	var cover = document.querySelector('[data-cover]');

	function init() {
		bindEvents();
	}

	function bindEvents() {

		colorButton.addEventListener('click', toggleColor);

	}

	function toggleColor() {
		cover.classList.toggle('has-color');
	}

	return {
		init: init
	};

})();

Colors.init();
