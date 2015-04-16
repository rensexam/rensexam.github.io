var rd = rd || {};
  rd.init = function() {
    rd.initNavbar();
    rd.skillProgress();
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

rd.skillProgress = function() {
  $('.skill1.circle').circleProgress({
    value: 0.85
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(85 * progress) + '<i>%</i>');
  });

  $('.skill2.circle').circleProgress({
    value: 0.85
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(85 * progress) + '<i>%</i>');
  });

  $('.skill3.circle').circleProgress({
    value: 0.50
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(50 * progress) + '<i>%</i>');
  });

  $('.skill4.circle').circleProgress({
    value: 0.90
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
  });
    
}

$(function(){
    rd.init();
});