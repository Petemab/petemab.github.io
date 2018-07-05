$(document).ready(function(){

  $('.navbar-burger').click(function() {
    $('#navbarMenuHeroA, .navbar-burger').toggleClass('is-active');
  });

  $('.aniview').AniView();

  var options = {
    animateThreshold: 0,
    scrollPollInterval: 20
  };
  $('.aniview').AniView(options);

  $('.workCarousel').slick({
    dots: true,
    infinite: true,
    variableWidth: true,
    dotsClass: 'slick-dots',
    centerMode: true,
    centerPadding: '100px',
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

  function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
    var visibleSlides = $('.slick-slide[aria-hidden="false"]');
    //Make sure all of the visible slides have an opacity of 1
    $(visibleSlides).each(function() {
      $(this).css('opacity', 1);
    });
    //Set the opacity of the first and last partial slides.
    $(visibleSlides).first().prev().css('opacity', 0);
    $(visibleSlides).last().next().css('opacity', 0);
  }

  $(setSlideVisibility());

  $('.workCarousel').on('beforeChange', function() {
    $('.slick-slide').each(function() {
      $(this).css('opacity', 1);
    });
  });

  $('.workCarousel').on('afterChange', function() {
    setSlideVisibility();
  });


});
