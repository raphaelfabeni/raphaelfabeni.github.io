var Blog = (function() {

	const categoriesButton = document.querySelector('[data-categories-button]');
	const categoriesList = document.querySelector('[data-categories-list]');

	function init() {
		bindEvents();
	}

	function bindEvents() {
		categoriesButton.addEventListener('click', e => {
			e.currentTarget.classList.toggle('is-active');
			categoriesList.classList.toggle('is-visible');
		});
	}

	return {
		init:  init
	};

})();

Blog.init();
