$(function(){
  $('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.header__nav').fadeToggle(700);
    $('body').toggleClass('noscroll');
  });
});