// JOA Sections

var $reveal_more = $('[data-object="reveal-more"]');

$(window).resize($.throttle(250, function() {
  var width = window.innerWidth;

  if (width > 599) {
    // This function lives in reveal.js
    if (! $reveal_more.attr('style')) {
      hideReadMoreContent();
    }
  } else {
    $('[data-behavior="joa-read-more"]').readmore('destroy');
  }
}));
