// Down arrow post page
const Arrow = (function(){

	const arrow = document.querySelector('[data-post-arrow]');
	const titleReference = document.querySelector('[data-post-title]');
	const titleDistance = titleReference.getBoundingClientRect().top;

	function init() {
		if(!arrow) {
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

})();

Arrow.init();
