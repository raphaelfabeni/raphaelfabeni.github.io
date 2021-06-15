'use strict';

(function () {
	var categoryButton = document.querySelector('[data-categories-button]');
	if (!categoryButton) {
		return;
	}

	var categoriesList = document.querySelector('[data-categories-list]');

	categoryButton.addEventListener('click', function () {
		categoriesList.classList.toggle('is-visible');
	});
})();