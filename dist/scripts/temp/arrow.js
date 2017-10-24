'use strict';

// Down arrow post page
var Arrow = function () {

	var arrow = document.querySelector('[data-post-arrow]');

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
			top: window.outerHeight,
			left: 0,
			behavior: 'smooth'
		});
	}

	return {
		init: init
	};
}();

Arrow.init();

// Back link for post page
var BackLink = function () {

	function isPostPage() {
		return document.querySelector('body').classList.contains('post-page');
	}

	function init() {
		if (!isPostPage()) {
			return;
		}

		bindEvents();
	}

	function bindEvents() {
		var back = document.querySelector('[data-back-link]');
		var halfPage = window.outerHeight / 2;

		window.addEventListener('scroll', function () {
			if (window.pageYOffset > halfPage) {
				back.classList.remove('is-hidden');
			} else {
				back.classList.add('is-hidden');
			}
		});
	}

	return {
		init: init
	};
}();

BackLink.init();