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

  $(document).ready(function () {
    const btnSelector = '.backform__collapse-button';
    const targetMenuSelector = '.backform__collapse-list';
    $(btnSelector).each(function () {
      $(this).click(function (event) {
        console.log(this);
        console.log('click');
        const $targetElem = $(this).parent().find(targetMenuSelector);
        $(this).parent().find(targetMenuSelector).toggleClass('hidden').toggleClass('open');
        $(document).mouseup(function (e) {
          let container = $targetElem;
          if (container.has(e.target).length === 0) {
            container.addClass('hidden');
          }
        });
      });
    });
    $('.backform__collapse-clause').each(function () {
      $(this).click(function (event) {
        $(event.currentTarget).parents('.backform__input').find(btnSelector).html($(event.currentTarget).html() + '<span>&#9660;</span>');
        $(event.currentTarget).parents('.backform__input').find(targetMenuSelector).addClass('hidden');
      });
    });
  });

  let modalCall = $("[data-modal]");
  let modalClose = $("[data-close]");
  modalCall.on("click", function (event) {
    event.preventDefault();
    let modalId = $(this).data('modal');

    $(modalId).addClass('show');
    $("body").addClass('no-scroll');
  });

  modalClose.on("click", function (event) {
    event.preventDefault();

    let modalParent = $(this).parents('.modal');

    modalParent.removeClass('show');
    $("body").removeClass('no-scroll');
  });

  let successCall = $("[data-success]");
  successCall.on("click", function (event) {
    event.preventDefault();
    let successId = $(this).data('success');

    $(successId).removeClass('hidden');
  });

  let modalSuccessCall = $("[data-modsuccess]");
  modalSuccessCall.on("click", function (event) {
    event.preventDefault();
    let modalSuccessId = $(this).data('modsuccess');

    $(modalSuccessId).removeClass('hidden');
    $(".modal__body").addClass('hidden');
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