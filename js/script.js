$('.burger-btn').on('click',function(){
  $('.burger-btn').toggleClass('close');
  $('.header__nav').fadeToggle(500);
  $('body').toggleClass('noscroll');
});