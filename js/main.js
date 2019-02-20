jQuery(document).ready(function($) {
	
	$('.btn-search').on('click', function() {
		$(".header__top-search").addClass('search-line');
		$(".input__search").addClass('input__search-active');
	});	
	
	var wrap = $('.header__menu');
	$(window).on('scroll', function(e) {
		if ($(this).scrollTop() > 52) {
		      wrap.addClass('header__menu-fixed');
		     
		    } else {
		      wrap.removeClass('header__menu-fixed');
		     
		    }
	});
	$('.header__menu').on('click', function() {
		event.preventDefault();
	});

	$('.mobile-menu').on('click', function() {
		 
		$(".mobile-menu").toggleClass('active');
		$(".mobile__menu-list").toggleClass('mobile__menu-show');
		$('.mobile__search').removeClass('mobile__search-show');
		$(".mobile-search").removeClass('active');
	
	});

	$('.mobile-search').on('click', function() {
		 
		$(".mobile-search").toggleClass('active');
		$(".mobile__search").toggleClass('mobile__search-show');
		$('.mobile__menu-list').removeClass('mobile__menu-show');
		$(".mobile-menu").removeClass('active');
	
	});

	$(document).click( function(event){
		if( $(event.target).closest(".mobile__menu-list, .mobile-menu,.mobile__menu-search,.mobile-search").length)
			return;
		$('.mobile__menu-list').removeClass('mobile__menu-show');
		$(".mobile-menu").removeClass('active');
		$('.mobile__search').removeClass('mobile__search-show');
		$(".mobile-search").removeClass('active');
		event.stopPropagation();
	});


	$('.select__box').on('click', function() {
		$(this).find("ul").toggleClass('select__box-active');
	});	
	$('.select__box ul li').on('click', function() {
    var label = $(this).parent().parent().children('label');
    label.attr('data-value', $(this).attr('data-value'));
    label.html($(this).html());

  });

	// Slider
	$('.header__slider').slick({
	   slidesToShow: 1,
	   slidesToScroll: 1,
	   autoplay: true,
	   autoplaySpeed: 5000,
	   dots: false
	});

	$(".slide-btn1").click(function(e) {
	  $(".header__slider").slick('slickGoTo', parseInt(0));
	});
	$(".slide-btn2").click(function(e) {
	  $(".header__slider").slick('slickGoTo', parseInt(1));
	});
	$(".slide-btn3").click(function(e) {
	  $(".header__slider").slick('slickGoTo', parseInt(2));
	});
	
	$('.slide-btn1').addClass('slide-active');

	/* Add and remove active class */

	$('.header__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
	  if (nextSlide == 0) {
	    $('.slide-btn1').addClass('slide-active');
	    $('.slide-btn2').removeClass('slide-active');
	    $('.slide-btn3').removeClass('slide-active');
	 
	  } else if (nextSlide == 1) {

	    $('.slide-btn2').addClass('slide-active');
	    $('.slide-btn1').removeClass('slide-active');
	    $('.slide-btn3').removeClass('slide-active');
	 
	  } else if (nextSlide == 2) {

	    $('.slide-btn3').addClass('slide-active');
	    $('.slide-btn2').removeClass('slide-active');
	    $('.slide-btn1').removeClass('slide-active');
	  
	  }
	});




	// Sort in line
	$('.sort-inline').on('click', function() {
    $(".sort-inline").addClass('sort-active');
    $(".sort-columns").removeClass('sort-active');
    $(".product").parent().addClass('col-lg-7');

  });
	// Sort columns
	$('.sort-columns').on('click', function() {
    $(".sort-columns").addClass('sort-active');
    $(".sort-inline").removeClass('sort-active');
    $(".product").parent().removeClass('col-lg-7');

  });


	$('.sort-alphabeticall').on('click', function() {
		$(this).find("ul").toggleClass('sort-alphabeticall-active');
	});	
	$('.sort-alphabeticall ul li').on('click', function() {
    var label = $(this).parent().parent().children('label');
    label.attr('data-value', $(this).attr('data-value'));
    label.html($(this).html());

  });

  $(function () {

	    var counter = 0,
	        divs = $('.product__new-1, .product__new-2, .product__new-3');

	    function showDiv () {
	        divs.hide() // hide all divs
	            .filter(function (index) { return index == counter % 3; }) // figure out correct div to show
	            .fadeIn(1000); // and show it

	        counter++;
	    }; // function to loop through divs and show correct div

	    showDiv(); // show first div    

	    setInterval(function () {
	        showDiv(); // show next div
	    }, 5 * 1000); // do this every 10 seconds    

		});

  $(function () {

	    var counter = 0,
	        widgets = $('.twetter__widget-1, .twetter__widget-2, .twetter__widget-3, .twetter__widget-4');
	    function showWidget () {
	        widgets.hide() // hide all divs
	            .filter(function (index) { return index == counter % 4; }) // figure out correct div to show
	            .fadeIn(1000); // and show it

	        counter++;
	    }; // function to loop through divs and show correct div

	    showWidget(); // show first div    

	    setInterval(function () {
	        showWidget(); // show next div
	    }, 5 * 1000); // do this every 10 seconds    

		});	

	$(".fancybox-thumb").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});

	$('.input__field').each(function() {
        var $parentSpan = $(this).parent('span');
        if ($(this).val().trim() !== "") {
            $parentSpan.addClass('input--filled');
        } else {
            $parentSpan.removeClass('input--filled');
        }
    });
    $('.input__field').focusout(function(event) {
        var $parentSpan = $(this).parent('span');
        if ($(this).val().trim() !== "") {
            $parentSpan.addClass('input--filled');
            $parentSpan.removeClass('input--hoshi-error');
        } else {
            $parentSpan.removeClass('input--filled');
        }
    });



});


