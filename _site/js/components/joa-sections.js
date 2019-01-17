// JOA Sections

var $reveal_more = $('[data-object="reveal-more"]'),
  hideReadMoreContent = function () {
    if (! $('body').hasClass('is-print-version')) {
      $reveal_more.readmore({
        speed: 500,
        collapsedHeight: 100,
        moreLink: '<a class="usajobs-read-more__link" href="#">Read more</a>',
        lessLink: '<a class="usajobs-read-more__link" href="#">Close</a>',
        heightMargin: 17, // Add the class 'transitioning' before toggling begins.
        beforeToggle: function(trigger, element) {
          element.addClass('transitioning');
        },
        // Remove the 'transitioning' class when toggling completes.
        afterToggle: function(trigger, element) {
          element.removeClass('transitioning');
        }
      });
    }
  };

$(window).resize($.throttle(250, function() {
  var width = window.innerWidth;

  if (width > 599) {
    if (! $reveal_more.attr('style')) {
      hideReadMoreContent();
    }
  } else {
    $('[data-behavior="joa-read-more"]').readmore('destroy');
  }
}));
