var Arrow = (function(){

	const arrow = document.querySelector('[data-post-arrow]');

	function init() {
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

})();

Arrow.init();
