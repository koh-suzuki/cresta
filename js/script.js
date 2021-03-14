$(function(){
  $('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.header__nav').fadeToggle(700);
    $('body').toggleClass('noscroll');
  });

  // 100px スクロールしたらボタン表示
  var pagetop = $('#page__top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});