(function() {
	const categoryButton = document.querySelector('[data-categories-button]');
	if(!categoryButton) {
		return;
	}


	const categoriesList = document.querySelector('[data-categories-list]');

	categoryButton.addEventListener('click', function() {
		categoriesList.classList.toggle('is-visible');
	});
})();
