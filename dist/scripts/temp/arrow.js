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

var loadScriptAsync = function loadScriptAsync(url) {
	var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


	var script = document.createElement('script');
	script.src = url;
	script.async = true;
	script.onload = function () {
		console.log(label + ' loaded');
		if (callback) {
			callback();
		}
	};
	script.onerror = function () {
		return console.log('Error loading ' + label + ' script!');
	};
	var wrapper = document.body;
	wrapper.appendChild(script);
};

var instagramSelector = document.querySelectorAll('.instagram-media');
if (instagramSelector) {
	document.addEventListener('DOMContentLoaded', function () {
		window.setTimeout(function () {
			loadScriptAsync('//www.instagram.com/embed.js', 'Insta Embed');
		}, 2000);
	});
}