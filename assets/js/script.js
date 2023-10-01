(function ($) {
    "use strict"

	/* Document on load functions */
	$(window).on('load', function () {
        // preLoader();
		// headerHeightFixer();
    });
	/* Document on load functions */
	$(window).on('resize', function () {
		headerHeightFixer();
		fixVerticalHeight();
    });

	/* Preloader init */
	function preLoader(){
		$(".preloader").delay(1000).fadeOut("slow");
	}

	/* scroll top btn */
	$(".scroll-top").on("click", function () {
		$("html,body").animate({scrollTop: 0},50);
	});
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > 200) {
			$(".scroll-top").fadeIn();
		} else {
			$(".scroll-top").fadeOut();
		}
	});

	/* Fix Header Height function */
	$('header').before('<div class="header-height-fix"></div>');
    function headerHeightFixer(){
    	$('.header-height-fix').css('height', $('header').innerHeight() +'px');
    	$('html').css('--header-size', $('header').innerHeight() +'px');
	};
	headerHeightFixer();


    function fixVerticalHeight() {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
	fixVerticalHeight()

})(jQuery);