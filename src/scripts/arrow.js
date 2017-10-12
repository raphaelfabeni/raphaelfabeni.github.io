var Arrow = (function(){

	const arrow = document.querySelector('[data-post-arrow]');

	function init() {
		bindEvents();
	}

	function bindEvents() {
		arrow.addEventListener('click', movePage);
	}

	function movePage() {
		console.log('1');
	}

	return {
		init: init
	};

})();

Arrow.init();
