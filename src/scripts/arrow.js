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

const loadScriptAsync = (url, label = '', callback = null) => {

	const script = document.createElement('script');
	script.src = url;
	script.async = true;
	script.onload = () => {
		console.log(label + ' loaded' );
		if (callback) {
			callback();
		}
	};
	script.onerror = () => console.log(`Error loading ${label} script!`);
	const wrapper = document.body;
	wrapper.appendChild(script);
};

const instagramSelector = document.querySelectorAll('.instagram-media');
if(instagramSelector) {
	document.addEventListener('DOMContentLoaded', () => {
		window.setTimeout(() => {
			loadScriptAsync('//www.instagram.com/embed.js', 'Insta Embed');
		}, 2000);
	});
}
