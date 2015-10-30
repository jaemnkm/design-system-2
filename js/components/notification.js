// Notification

var $notification = $('[data-object="notification"]'),
  $notification_trigger = $('[data-object-trigger="notification"]');

$notification_trigger.on('click', function (event) {
  var $el = $(this),
    $this_notification = $body.find($el.attr('data-target')),
    state = $this_notification.attr('data-state'),
    transition_to;

  event.preventDefault();

  if (state === 'is-closed') {
    transition_to = 'notification.open';
  } else {
    transition_to = 'notification.close';
  }

  $this_notification.trigger(transition_to, { el: $el, object: $this_notification, state: state });
});

$notification.on('click', '[data-behavior]', function (event) {
  var $el = $(this),
    $object = $el.closest('[data-object="notification"]'),
    state = $object.attr('data-state'),
    behavior = $el.attr('data-behavior');

    event.preventDefault();
    $el.blur(); // Removes focus

    // Each behavior attached to the element should be triggered
    $.each(behavior.split(' '), function (idx, action) {
        $el.trigger(action, { el: $el, object: $object, state: state });
    });
});

$notification.on('notification.open', function(event, opts) {
  var closenotification = function () {
    opts.object.trigger('notification.close', {
      el: opts.el,
      object: opts.object,
      state: opts.state
    });
  };

  event.preventDefault();

  opts.object.attr('data-state', 'is-open');
  opts.object.attr('aria-hidden', 'false');
});

$notification.on('notification.close', function(event, opts) {
  opts.object.attr('data-state', 'is-closed');
  opts.object.attr('aria-hidden', 'true');
});
