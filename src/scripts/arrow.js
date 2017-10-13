var Arrow = (function(){

	const arrow = document.querySelector('[data-post-arrow]');

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
