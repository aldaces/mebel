// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	const swiperGal = new Swiper('.swiper-container', {
		zoom: true,
		slidesPerView: 6,
		slidesPerColumn: 2,
		spaceBetween: 30
	  });


	var iso = new Isotope( '.gallery', {
	itemSelector: '.stone-product-list',
	getSortData: {
		name: '.name',
		category: '[data-category]'
	},
	masonry: {
		columnWidth: 200
	}
	});
});

