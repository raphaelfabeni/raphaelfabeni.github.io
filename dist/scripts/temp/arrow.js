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

// const loadScriptAsync = (url, label = '', callback = null) => {

// 	const script = document.createElement('script');
// 	script.src = url;
// 	script.async = true;
// 	script.onload = () => {
// 		console.log('loaded');
// 		if (callback) {
// 			callback();
// 		}
// 	};
// 	script.onerror = () => console.log(`Error loading ${label} script!`);
// 	const wrapper = document.body;
// 	wrapper.appendChild(script);
// };

// document.addEventListener('DOMContentLoaded', () => {
// 	window.setTimeout(() => {
// 		loadScriptAsync('https://platform-api.sharethis.com/js/sharethis.js#property=5fb7c760aaef1000126fdf46&product=sticky-share-buttons', 'Share this');
// 	}, 3000);
// });