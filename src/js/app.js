import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

//    BURGER JQERY    //

$(document).ready(function () {
	$('.burger').click(function (event) {
		$('.burger,.burger__item,.navigation,.menu').toggleClass('active');
	});
});

