'use strict';

var Navigation = function () {

	var navButton = document.querySelector('[data-nav-button]');
	var navigation = document.querySelector('[data-navigation]');
	var closeButton = document.querySelector('[data-nav-close]');

	function init() {
		bindEvents();
	}

	function bindEvents() {
		navButton.addEventListener('click', function () {
			return navigation.classList.add('is-active');
		});
		closeButton.addEventListener('click', function () {
			return navigation.classList.remove('is-active');
		});
		navigation.addEventListener('click', function () {
			return navigation.classList.remove('is-active');
		});
	}

	return {
		init: init
	};
}();

Navigation.init();