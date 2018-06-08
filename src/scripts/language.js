var LanguageChange = (function() {

	const languageButton = document.querySelectorAll('[data-language]');
	const posts = [...document.querySelectorAll('[data-post]')];

	function init() {
		bindEvents();
	}

	function changePostsLanguage(event) {
		// Control active class
		languageButton.forEach(item => item.classList.remove('is-active'));
		event.target.classList.add('is-active');

		// Hide/show posts
		posts.forEach(post => post.setAttribute('hidden', true));

		const checkedLang = event.target.getAttribute('data-language');
		posts.filter(post => post.getAttribute('data-post') === checkedLang).forEach(item => item.removeAttribute('hidden'));
	}

	function bindEvents() {
		languageButton.forEach(buttonItem => buttonItem.addEventListener('click', changePostsLanguage));
	}

	return {
		init:  init
	};

})();

LanguageChange.init();
