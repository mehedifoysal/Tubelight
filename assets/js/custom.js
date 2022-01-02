/*===preloader===*/
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3500);
	
	$('a.page-scroll').on('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
	
	
//Menu Fixed Top
		
	var fixed_top = $(".menu-scroll");

	$(window).on('scroll', function() {
		
		if( $(this).scrollTop() > 300 ){
			fixed_top.addClass("menu-fixed animated fadeInDown");
		}
		else{
			fixed_top.removeClass("menu-fixed animated fadeInDown");
		}
		
	});

			


//swiper

	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 5
    });

  
  
 //scroll-up
	var link,
	toggleScrollToTopLink = function(){
		
		if($("body").scrollTop() > 600 || $("html").scrollTop() > 0){
			link.fadeIn(500);
		}else{
			link.fadeOut(0);
		}
		
	};
	link = $(".scrollUp");
	
	$(window).scroll(toggleScrollToTopLink);
	
	toggleScrollToTopLink();
	
	link.on("click", function(){
		
		$("body").animate({scrollTop: 0});
		$("html").animate({scrollTop: 0});
		
	});

  


  
	//slick-slider
	  
	 $('.center').slick({
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 1,
	   responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
		arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
	});
