$(document).ready(function () {
  $(window).scroll(function () {
    var h = $(window).scrollTop();
    if (h > 140) {
      $('.sticky').addClass('fix_header')
      $('.scrolltotop').fadeIn(300)
    }
    else {
      $('.sticky').removeClass('fix_header')
      $('.scrolltotop').fadeOut(300)
    }
  })

  $('.scrolltotop').click(function(){
    $('html,body').animate({scrollTop: 0},2000);
  })

  $('.scrolltotop').hide()

  setTimeout(() => {
    $('.loader').fadeOut(300);
    


  }, 3000);

  new WOW().init();

})