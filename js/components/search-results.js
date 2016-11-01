// Search results
var $search_results = $('[data-object="search-results"]');

$search_results.on('click', '[data-behavior]', function () {
  var $el = $(this),
    $object = $el.closest('[data-object="search-results"]'),
    $target = $el.find($el.attr('data-target')),
    behavior = $el.attr('data-behavior');

  $el.blur(); // Removes focus

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(' '), function (idx, action) {
    if (action.match(/^search-results/)) {
      $el.trigger(action, { el: $el, object: $object, target: $target });
    }
  });
});

$search_results.on('search-results.toggle-save', function(event, opts) {
  var saved_state = opts.el.attr('data-state');

  event.preventDefault();

  if (saved_state === 'is-saved') {
    opts.target.text('Save');
    opts.el.attr('data-state', 'is-unsaved');
  } else {
    opts.target.text('Saved');
    opts.el.attr('data-state', 'is-saved');
  }
});
