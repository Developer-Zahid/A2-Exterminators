(function ($) {
    "use strict"

	/* Document on load functions */
	$(window).on('load', function () {
        // preLoader();
		headerHeightFixer();
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
    	$('body').css('--header-size', $('header').innerHeight() +'px');
	};


    /*  common slider */
    // $(".common__slider").slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     speed: 500,
    //     arrows: true,
    //     prevArrow: '<button class="slick__arrows slick__arrows--left border-0 d-inline-flex align-items-center justify-content-center position-absolute"><i class="bi bi-chevron-left"></i></button>',
	// 	nextArrow: '<button class="slick__arrows slick__arrows--right border-0 d-inline-flex align-items-center justify-content-center position-absolute"><i class="bi bi-chevron-right"></i></button>',
    //     dots: false,
    //     pauseOnHover: false,
    //     pauseOnFocus: false,
    //     infinite: true,
	// 	responsive: [
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				arrows: false,
	// 				dots: true
	// 			}
	// 		},
	// 	]
    // });

})(jQuery);