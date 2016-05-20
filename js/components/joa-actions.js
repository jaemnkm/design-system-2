// JOA Actions
var $joa_actions = $('[data-object="joa-actions"]');

$joa_actions.on('click', '[data-behavior]', function (event) {
  var $el = $(this),
    $object = $el.closest('[data-object="joa-actions"]'),
    behavior = $el.attr('data-behavior');

  event.preventDefault();
  $el.blur(); // Removes focus

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(' '), function (idx, action) {
    if (action.match(/^joa-actions/)) {
      $el.trigger(action, { el: $el, object: $object });
    }
  });
});

$joa_actions.on('joa-actions.toggle-save', function(event, opts) {
  var saved_state = opts.el.attr('data-state');

  event.preventDefault();

  if (saved_state === "is-saved") {
    opts.el.text('Save');
    opts.el.attr('data-state', 'is-unsaved');
  } else {
    opts.el.text('Saved');
    opts.el.attr('data-state', 'is-saved');
  }
});
