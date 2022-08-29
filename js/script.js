const swiper = new Swiper('.slider-main-block', {
	// Optional parameters
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-main-block__arrow.swiper-button-next',
		prevEl: '.slider-main-block__arrow.swiper-button-prev',
	},
});

// Tabs
const tabNavItems = document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener("click", function (e) {
	const targetElement = e.target;
	let currentActiveIndex = null;
	if (targetElement.closest('.tabs-deals__button')) {
		tabNavItems.forEach((tabNavItems, index) => {
			if (tabNavItems.classList.contains('active')) {
				currentActiveIndex = index;
			}
			// tabNavItems.classList.remove('active');
		});
	}
});