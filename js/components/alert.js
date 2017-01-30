// Alerts
var $alert = $('[data-object="alert"]');

$alert.on('click', '[data-behavior]', function (event) {
  var $el = $(this),
    $object = $el.closest('[data-object="alert"]'),
    $target = $object.find('#' + $el.attr('aria-controls')),
    state = $target.attr('aria-hidden'),
    behavior = $el.attr('data-behavior');

  event.preventDefault();
  $el.blur(); // Removes focus

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(' '), function (idx, action) {
    if (action.match(/^alert/)) {
      $el.trigger(action, { el: $el, object: $object, target: $target, state: state });
    }
  });
});

$alert.on('alert.close', function(event, opts) {
  opts.object.attr('data-state', 'is-closed');
  opts.object.attr('aria-hidden', 'true');
});

$alert.on('alert.skip', function(event, opts) {
  var $next_tip = opts.object.find('#' + opts.el.attr('data-target-next'));

  opts.target.fadeOut('fast', function () {
    opts.target.attr('aria-hidden', 'true');
    $next_tip.attr('aria-hidden', 'false');
  });
});

$alert.on('alert.back', function(event, opts) {
  var $prev_tip = opts.object.find('#' + opts.el.attr('data-target-previous'));

  $prev_tip.fadeIn('fast', function () {
    opts.target.attr('aria-hidden', 'true');
    $prev_tip.attr('aria-hidden', 'false');
  });
});
