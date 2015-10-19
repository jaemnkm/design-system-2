// Modal

var $modal = $('[data-object="modal"]'),
  $modal_trigger = $('[data-object-trigger="modal"]'),
  $body = $('body');

$modal_trigger.on('click', function (event) {
  var $el = $(this),
    $this_modal = $body.find($el.attr('data-target')),
    state = $this_modal.attr('data-state'),
    transition_to;

  event.preventDefault();

  if (state === 'is-closed') {
    transition_to = 'modal.open';
  } else {
    transition_to = 'modal.close';
  }

  $this_modal.trigger(transition_to, { el: $el, object: $this_modal, state: state });
});

$modal.on('click', '[data-behavior]', function (event) {
  var $el = $(this),
    $object = $el.closest('[data-object="modal"]'),
    state = $object.attr('data-state'),
    behavior = $el.attr('data-behavior');

    event.preventDefault();
    $el.blur(); // Removes focus

    // Each behavior attached to the element should be triggered
    $.each(behavior.split(' '), function (idx, action) {
        $el.trigger(action, { el: $el, object: $object, state: state });
    });
});

$modal.on('modal.open', function(event, opts) {
  event.preventDefault();

  $body.addClass('is-open-modal');

  opts.object.data('trigger', opts.el);

  opts.object.attr('data-state', 'is-open');
  opts.object.attr('aria-hidden', 'false');

  $(document).on('keyup', function (e) {
    if (e.keyCode === 27) {
      // Close the modal when ESC is pressed
      opts.object.trigger('modal.close', { el: opts.el, object: opts.object, state: opts.state });
    }
  });

});

$modal.on('modal.close', function(event, opts) {
  $body.removeClass('is-open-modal');
  $(document).off('keyup');

  opts.object.attr('data-state', 'is-closed');
  opts.object.attr('aria-hidden', 'true');
  opts.object.data('trigger').focus();
});

