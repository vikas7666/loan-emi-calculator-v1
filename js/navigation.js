
$('#home').click(function() {
   if($('#home').hasClass('anchor_tag')) {       
       $(this).removeClass('anchor_tag').addClass('homeactive');
   }
});
$('#personal').click(function() {
   if($('#personal').hasClass('anchor_tag')) {       
       $(this).removeClass('anchor_tag').addClass('personalactive');
   }
});
$('#car').click(function() {
   if($('#car').hasClass('anchor_tag')) {       
       $(this).removeClass('anchor_tag').addClass('carctive');
   }
});
$('#commercial').click(function() {
  if($('#commercial').hasClass('anchor_tag')) {       
      $(this).removeClass('anchor_tag').addClass('commercialctive');
  }
});

$(function () {
  setNavigation();
});

function setNavigation() {
  var path = window.location.pathname;
  path = path.replace(/\/$/, "");
  path = decodeURIComponent(path);

  $(".nav a").each(function () {
      var href = $(this).attr('href');
      if (path.substring(0, href.length) === href) {
          $(this).closest('li a').addClass('active');
      }
  });
}
