var rd = rd || {};
  rd.init = function() {
    rd.initNavbar();
    /*rd.initResetScroll();*/
  }

rd.initNavbar = function () {
  $(document).on('click', '.navbar-nav li a', function(e){
      e.preventDefault();
      var target = $($(this).attr('href'));
      var top = target.offset().top;
      $('html, body').animate({scrollTop: top - 122 }, 'easeInOutExpo', function(){
          var adjustedTop = target.offset().top;
          $('html, body').animate({scrollTop: adjustedTop - 122 });
      });
  });
};

/*rd.initResetScroll = function(){
    setTimeout(function(){
        $(document).scrollTop(0);
    }, 300);
};*/

$(function(){
    rd.init();
});