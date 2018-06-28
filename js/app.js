$(document).ready(function(){

  $('.navbar-burger').click(function() {
    $('#navbarMenuHeroA, .navbar-burger').toggleClass('is-active');
  });

  $('.workCarousel').slick({
    dots: true,
    infinite: true,
    variableWidth: true,
    dotsClass: 'slick-dots',
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 1,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

});
