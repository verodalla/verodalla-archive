$('.arrow-return').click(function () {
	var $body = $("html, body");
    $body.animate({
      scrollTop: $('nav').offset().top
    }, 500);

    $(this).css('display', 'none');
});


 $('.section-photo').on('mouseover', function(e) {
    var cover = $(e.target).find('.cover');
    $(cover).css('display', 'inherit');

    $(cover).mouseout(function(){
      $('.cover').css('display', 'none');
    });
 });

  // 'click .flag': function(e) {
  //   e.prevenDefault();
  // }


