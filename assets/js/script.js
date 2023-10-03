/* 
--------------------------------------------------------------------
Template Name: 	    A2 Exterminators | Pest control company website
Version:            1.00
Author:             Zahid Hasan Munna | Developer Zahid
Author Occupation: 	Frontend Web Design & Developer
Author Whatsapp:    https://wa.me/8801992409030
Author Linkedin:    https://www.linkedin.com/in/zahid-hasan-munna/
Author Facebook:    https://www.facebook.com/coderexpertzahid/
Author Github: 	    https://github.com/Developer-Zahid
Author Website:     https://developer-zahid-portfolio.netlify.app/
Author Email: 	    dgtaltechzahidhasan@gmail.com
---------------------------------------------------------------------
*/

(function ($) {
    "use strict"

	/* Preloader init */
	function preLoader(){
		$(".preloader").delay(300).fadeOut("slow");
	}

	/* Fix Header Height function */
    function headerHeightFixer(){
    	$('.header-height-fix').css('height', $('header').innerHeight() +'px');
    	$('html').css('--header-size', $('header').innerHeight() +'px');
	};

    function fixVerticalHeight() {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}

	/* Window on load Event */
	$(window).on('load', function () {
        preLoader();
    });

	/* Window on resize Event */
	$(window).on('resize', function () {
		headerHeightFixer();
		fixVerticalHeight();
    });
	
	/* Document on ready Event */
	$(document).ready(function () {
		$('header').before('<div class="header-height-fix"></div>');
		headerHeightFixer();

		fixVerticalHeight();

		/* scroll top btn */
		$(".scroll-top").on("click", function () {
			$("html,body").animate({scrollTop: 0},50);
		});

		/* lazy load map iframe */
		setTimeout(()=>{
			$('[data-iframe-src]').each(function(){
				$(this).html(`<iframe src="${$(this).attr("data-iframe-src")}" style="border:0;" allowfullscreen frameborder="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
			})
		}, 2000)
	});

	/* Window on scroll Event */
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > 200) {
			$(".header__top__wrapper").slideUp();
			$(".header").addClass('fixed');
			$(".scroll-top").slideDown();
		} else {
			$(".header__top__wrapper").slideDown();
			$(".header").removeClass('fixed');
			$(".scroll-top").slideUp();
		}
	});

})(jQuery);