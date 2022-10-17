$(function () {

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$"
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup('.products', config);
  var mixer2 = mixitup('.new-design', config);
});