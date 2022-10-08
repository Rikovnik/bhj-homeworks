const prevArrow = document.querySelector('.slider__arrow_prev');
const nextArrow = document.querySelector('.slider__arrow_next');
const sliderItems = Array.from(document.querySelectorAll('.slider__item'));
let activSlider = 0; 

prevArrow.onclick = () => {
	activSlider = sliderItems.findIndex((item, index, arr) => {
		item.className.includes('slider__item_active') == true;
	});

	sliderItems[activSlider].classList.remove('slider__item_active');

	if (activSlider == 0) {
		activSlider = sliderItems.length - 1;
	} else {
		activSlider = activSlider - 1;
	};

	sliderItems[activSlider].classList.add('slider__item_active');
};

nextArrow.onclick = () => {
	activSlider = sliderItems.findIndex((item, index, arr) => {
		item.className.includes('slider__item_active') == true;
	});

	sliderItems[activSlider].classList.remove('slider__item_active');

	if (activSlider == (sliderItems.length - 1)) {
		activSlider = 0;
	} else {
		activSlider = activSlider + 1;
	};

	sliderItems[activSlider].classList.add('slider__item_active');
};
	