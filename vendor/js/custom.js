$('.slick-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slick-nav',
    speed: 2000
  });
  $('.slick-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slick-slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    speed: 2000
  });


  
