// Import jQuery module (npm i jquery)
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
		spaceBetween: 30,
		autoplay: {
			delay: 3000,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				slidesPerColumn: 1,
				spaceBetween: 5
			},
			425: {
				slidesPerView: 2,
				slidesPerColumn: 2,
				spaceBetween: 15
			},
			630: {
				slidesPerView: 3,
				slidesPerColumn: 2,
				spaceBetween: 15
			},
			768: {
				slidesPerView: 3,
				slidesPerColumn: 2,
				spaceBetween: 20
			},
			992: {
				slidesPerView: 4,
				slidesPerColumn: 2,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 3,
				slidesPerColumn: 2,
				spaceBetween: 20
			},
			1280: {
				slidesPerView: 4,
				slidesPerColumn: 2
			}
		}
	});
});

document.addEventListener('DOMContentLoaded', () => {
	// init Isotope
	let iso = new Isotope('.grid', {
		itemSelector: '.element-item',
		masonry: {
			columnWidth: 20,
			isFitWidth: true
		}
	});

	// filter functions
	let filterFns = {
		// show if number is greater than 50
		numberGreaterThan50: function (itemElem) {
			let number = itemElem.querySelector('.number').textContent;
			return parseInt(number, 10) > 50;
		},
		// show if name ends with -ium
		ium: function (itemElem) {
			var name = itemElem.querySelector('.name').textContent;
			return name.match(/ium$/);
		}
	};

	// bind filter button click
	let filtersElem = document.querySelector('.filters-button-group');
	filtersElem.addEventListener('click', function (event) {
		// only work with buttons
		if (!matchesSelector(event.target, 'button')) {
			return;
		}
		var filterValue = event.target.getAttribute('data-filter');
		// use matching filter function
		filterValue = filterFns[filterValue] || filterValue;
		iso.arrange({
			filter: filterValue
		});
	});

	// change is-checked class on buttons
	let buttonGroups = document.querySelectorAll('.button-group');
	for (var i = 0, len = buttonGroups.length; i < len; i++) {
		var buttonGroup = buttonGroups[i];
		radioButtonGroup(buttonGroup);
	}

	function radioButtonGroup(buttonGroup) {
		buttonGroup.addEventListener('click', function (event) {
			// only work with buttons
			if (!matchesSelector(event.target, 'button')) {
				return;
			}
			buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
			event.target.classList.add('is-checked');
		});
	}

});