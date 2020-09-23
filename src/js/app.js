import '../scss/app.scss';

// Your JS Code goes here

$(document).ready(function () {

  $('#burger').click(function (event) {
    $('#burger').toggleClass('active');
    $('#nav').toggleClass('active');
  });

  $('#menuButton').click(function (event) {
    $('#menuButton').toggleClass('active');
    $('#menuBody').toggleClass('active');
  });

  $('#newBuildTitle').click(function (event) {
    $('#newBuildTitle').toggleClass('active');
    $('#newBuildWrap').toggleClass('active');
  });

  $('#popularTitle').click(function (event) {
    $('#popularTitle').toggleClass('active');
    $('#popularWrap').toggleClass('active');
  });

  $("[data-slider]").slick({
    arrows: false,
    dots: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

});