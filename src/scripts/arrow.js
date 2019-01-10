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


// Back link for post page
const BackLink = (function() {

	function isPostPage() {
		return document.querySelector('body').classList.contains('post-page');
	}

	function init() {
		if(!isPostPage()) {
			return;
		}

		bindEvents();
	}

	function bindEvents() {
		const back = document.querySelector('[data-back-link]');
		const halfPage = window.outerHeight / 2;

		window.addEventListener('scroll', () => {
			if(window.pageYOffset > halfPage) {
				back.classList.remove('is-hidden');
			} else {
				back.classList.add('is-hidden');
			}
		});
	}

	return {
		init: init
	};

})();

BackLink.init();
