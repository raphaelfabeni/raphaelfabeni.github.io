'use strict';

// Down arrow post page
var Arrow = function () {

	var arrow = document.querySelector('[data-post-arrow]');
	var titleReference = document.querySelector('[data-post-title]');
	var titleDistance = titleReference.getBoundingClientRect().top;

	function init() {
		if (!arrow) {
			return;
		}
		bindEvents();
	}

	function bindEvents() {
		arrow.addEventListener('click', movePage);
	}

	function movePage() {
		window.scroll({
			top: titleDistance,
			left: 0,
			behavior: 'smooth'
		});
	}

	return {
		init: init
	};
}();

Arrow.init();