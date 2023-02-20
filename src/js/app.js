
import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
import Splide from '@splidejs/splide';


$(document).ready(function () {
	if ($('.about-me__splid')) {
		new Splide('.about-me__splide', {
			type: 'loop',
			perPage: 1,
			pagination: false,
		}).mount();
	};

	$(window).scroll(function () {
		if ($(window).scrollTop() > 0) {
			$(".navigation,.burger").addClass('stiky');
		}
		else { $('.navigation,.burger').removeClass('stiky') }
	})
})


// variables for togle 'actve' on burger
const classesForActivationBurger = document.querySelectorAll('.burger,.burger__item,.navigation,.menu');
const burger = document.querySelector('.burger');

// add new class 'active' function
const toggleClass = (element) => {
	element.classList.toggle('active');
};

//togle class 'active' to 'burger' element
burger.addEventListener('click', function () {
	classesForActivationBurger.forEach(toggleClass)
});


const menuLinks = document.querySelectorAll('.menu__icon [data-goto]');

const onMenuLinkClick = (element) => {
	const menuLink = element.target;
	if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
		const goToBlock = document.querySelector(menuLink.dataset.goto);
		const goToBlockValue = goToBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

		window.scrollTo({
			top: goToBlockValue,
			behavior: "smooth",
		});
		element.preventDefault();
	}
}

if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick)
	})

};