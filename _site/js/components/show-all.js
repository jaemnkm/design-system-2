var $show_all = $('[data-object="show-all"]');

$show_all.on('click', '[data-behavior]', function (event) {
  var $el = $(this),
    $object = $el.closest('[data-object="show-all"]'),
    behavior = $el.attr('data-behavior'),
    $target = $object.find('#' + $el.attr('aria-controls')),
    state = $target.attr('aria-hidden');

  event.preventDefault();
  $el.blur(); // Removes focus

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(' '), function (idx, action) {
    $el.trigger(action, { el: $el, object: $object, target: $target, state: state });
  });
});

$show_all.on('show-all.trigger', function(event, opts) {
  // Shows the contents of the accordion and then hides itself.
  // This is a one time shot. Once the content is revealed the user
  // has to navigate away to go back to the original state.

  event.preventDefault();

  if (opts.state === 'true') {
    opts.target.attr('aria-hidden', 'false');

    opts.target.slideDown(function () {
      $('html, body').animate({
        scrollTop: opts.object.offset().top
      });

      opts.el.remove();
    });

  }
});
