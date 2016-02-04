// Footer

var $footer = $('[data-object="footer"]'),
  window_width = window.innerWidth;

$footer.on('click', '[data-behavior]', function () {
  var $el = $(this),
    $object = $el.closest('[data-object="footer"]'),
    state = $el.attr('data-state'),
    behavior = $el.attr('data-behavior'),
    $target = $object.find($el.attr('data-target'));

  $el.blur(); // Removes focus

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(' '), function (idx, action) {
    $object.trigger(action, { el: $el, object: $object, state: state, target: $target });
  });
});

$footer.on('footer.toggle', function(event, opts) {
  event.preventDefault();

  if (opts.state === 'is-closed') {
    opts.object.trigger('footer.open', opts);
  } else if (opts.state === 'is-open') {
    opts.object.trigger('footer.close', opts);
  }
});

$footer.on('footer.open', function(event, opts) {
    // Hide all siblings
    /*
    opts.object
      .find('[data-behavior="footer.toggle"][data-state="is-open"]')
      .trigger('close', { });
    */

  opts.target.removeClass('is-hidden');
  opts.target.attr('aria-expanded', 'true');
  opts.el.attr('aria-expanded', 'true');
  opts.el.attr('data-state', 'is-open');
});

$footer.on('footer.close', function(event, opts) {
  if (window_width < 600) {
    event.preventDefault();

    opts.target.addClass('is-hidden');
    opts.target.attr('aria-expanded', 'false');
    opts.el.attr('aria-expanded', 'false');
    opts.el.attr('data-state', 'is-closed');
  }
});
