jQuery(function( $ ){

	// Add class based on scroll position
	$(window).scroll(function () {
		if ($(document).scrollTop() > 1 ) {
			$('.sticky-header, .home').addClass('sticky');
		} else {
			$('.sticky-header, .home').removeClass('sticky');
		}
	});
});