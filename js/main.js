 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {
	"use strict";
	var slider = function() {
		$('.nonloop-block-3').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
	    smartSpeed: 700,
			stagePadding: 15,
	    margin: 20,
	    autoplay: true,
			nav: true,
			dots:false,
			navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
	    responsive:{
        600:{
        	margin: 20,
          items: 2
        },
        1000:{
        	margin: 20,
          items: 3
        },
        1200:{
        	margin: 20,
          items: 3
        }
			},
			afterUpdate: function () {
				updateSize();
		   },
		  afterInit:function(){
				updateSize();
		}
		});
	};
	slider();
	function updateSize(){
		var minHeight=parseInt($('.owl-item').eq(0).css('height'));
		$('.owl-item').each(function () {
				var thisHeight = parseInt($(this).css('height'));
				minHeight=(minHeight<=thisHeight?minHeight:thisHeight);
		});
		$('.owl-wrapper-outer').css('height',minHeight+'px');
}

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
		$('.carousel-testimony').owlCarousel({
			autoplay: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 1
				},
				1000:{
					items: 1
				}
			}
		});

	};
	carousel();

	var siteMenuClone = function() {

		$('<div class="site-mobile-menu"></div>').prependTo('.site-wrap');

		$('<div class="site-mobile-menu-header"></div>').prependTo('.site-mobile-menu');
		$('<div class="site-mobile-menu-close "></div>').prependTo('.site-mobile-menu-header');
		$('<div class="site-mobile-menu-logo"></div>').prependTo('.site-mobile-menu-header');

		$('<div class="site-mobile-menu-body"></div>').appendTo('.site-mobile-menu');

		

		$('.js-logo-clone').clone().appendTo('.site-mobile-menu-logo');

		$('<span class="ion-ios-close js-menu-toggle"></div>').prependTo('.site-mobile-menu-close');
		

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

	$('.nav-link').on('click',function() {
		if ( $('body').hasClass('offcanvas-menu') ) {
			$('body').removeClass('offcanvas-menu');
		}
	});

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	siteSliderRange();


	var siteMagnificPopup = function() {
		$('.image-popup').magnificPopup({
	    type: 'image',
	    closeOnContentClick: true,
	    closeBtnInside: false,
	    fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	     gallery: {
	      enabled: true,
	      navigateByImgClick: true,
	      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	    },
	    image: {
	      verticalFit: true
	    },
	    zoom: {
	      enabled: true,
	      duration: 300 // don't foget to change the duration also in CSS
	    }
	  });

	  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,

	    fixedContentPos: false
	  });
	};
	siteMagnificPopup();

	var searchShow = function() {
		// alert();
		var searchWrap = $('.search-wrap');
		$('.js-search-open').on('click', function(e) {
			e.preventDefault();
			searchWrap.addClass('active');
			setTimeout(function() {
				searchWrap.find('.form-control').focus();
			}, 300);
		});
		$('.js-search-close').on('click', function(e) {
			e.preventDefault();
			searchWrap.removeClass('active');
		})
	};
	searchShow();

	$('.nav-item').on('click',function(){

		//Remove any previous active classes
		$('.nav-item').removeClass('active');
	
		//Add active class to the clicked item
		$(this).addClass('active');
	});

	var email = 'eckhart@eim.ae';
	$("#submit").bind("click", function() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
		var body_message = document.getElementById("message").value;

		var mailto_link = 'mailto:' + email + '?subject=' +
											subject + '&body= Hi, I am '+name +
											',<br>'+ body_message;
    win = window.open(mailto_link, 'emailWindow');
    if (win && win.open && !win.closed) win.close();
	});
		$('#myButton1').click(function(){ //you can give id or class name here for $('button')
		$(this).text(function(i,old){
				return old=='view details' ?  'hide details' : 'view details';
		});
	});
		$('#myButton2').click(function(){ //you can give id or class name here for $('button')
		$(this).text(function(i,old){
				return old=='view details' ?  'hide details' : 'view details';
		});
	});
		$('#myButton3').click(function(){ //you can give id or class name here for $('button')
		$(this).text(function(i,old){
				return old=='view details' ?  'hide details' : 'view details';
		});
	});
		$('#myButton4').click(function(){ //you can give id or class name here for $('button')
		$(this).text(function(i,old){
				return old=='view details' ?  'hide details' : 'view details';
		});
	});
		$('#myButton5').click(function(){ //you can give id or class name here for $('button')
		$(this).text(function(i,old){
				return old=='view details' ?  'hide details' : 'view details';
		});
	});
		$('#myButton6').click(function(){ //you can give id or class name here for $('button')
		$(this).text(function(i,old){
				return old=='view details' ?  'hide details' : 'view details';
		});
	});
		$('#myButton7').click(function(){ //you can give id or class name here for $('button')
		$(this).text(function(i,old){
				return old=='view details' ?  'hide details' : 'view details';
		});
	});
		$('#myButton8').click(function(){ //you can give id or class name here for $('button')
		$(this).text(function(i,old){
				return old=='view details' ?  'hide details' : 'view details';
		});
	});
		$('#myButton9').click(function(){ //you can give id or class name here for $('button')
		$(this).text(function(i,old){
				return old=='view details' ?  'hide details' : 'view details';
		});
	});
	if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('.zoomit').elevateZoom({easing : true});
	}
});
