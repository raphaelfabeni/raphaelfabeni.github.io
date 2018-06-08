'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var LanguageChange = function () {

	var languageButton = document.querySelectorAll('[data-language]');
	var posts = [].concat(_toConsumableArray(document.querySelectorAll('[data-post]')));

	function init() {
		bindEvents();
	}

	function changePostsLanguage(event) {
		// Control active class
		languageButton.forEach(function (item) {
			return item.classList.remove('is-active');
		});
		event.target.classList.add('is-active');

		// Hide/show posts
		posts.forEach(function (post) {
			return post.setAttribute('hidden', true);
		});

		var checkedLang = event.target.getAttribute('data-language');
		posts.filter(function (post) {
			return post.getAttribute('data-post') === checkedLang;
		}).forEach(function (item) {
			return item.removeAttribute('hidden');
		});
	}

	function bindEvents() {
		languageButton.forEach(function (buttonItem) {
			return buttonItem.addEventListener('click', changePostsLanguage);
		});
	}

	return {
		init: init
	};
}();

LanguageChange.init();