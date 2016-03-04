// Alerts
var $alert = $('[data-object="alert"]');

$alert.on('click', '[data-behavior]', function (event) {
  var $el = $(this),
    $object = $el.closest('[data-object="alert"]'),
    state = $object.attr('data-state'),
    behavior = $el.attr('data-behavior');

  event.preventDefault();
  $el.blur(); // Removes focus

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(' '), function (idx, action) {
    $el.trigger(action, { el: $el, object: $object, state: state });
  });
});

$alert.on('alert.close', function(event, opts) {
  opts.object.attr('data-state', 'is-closed');
  opts.object.attr('aria-hidden', 'true');
});
