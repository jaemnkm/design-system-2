// Document - Object for uploading, viewing, and editing documents

var $doc = $('[data-object="document"]');

$doc.on('click', '[data-behavior]', function (event) {
  var $el = $(this),
    $object = $el.closest('[data-object="document"]'),
    behavior = $el.attr('data-behavior'),
    state = $object.attr('data-state'),
    $target = $object.find($el.attr('data-target'));

  event.preventDefault();
  $el.blur(); // Removes focus

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(' '), function (idx, action) {
    $el.trigger(action, { el: $el, object: $object, state: state, target: $target });
  });
});

$doc.on('document.toggle', function(event, opts) {
  var $input = opts.object.find('#' + opts.target.attr('for'));

  event.preventDefault();

  // This event is fired by the figure and clicks the checkbox
  opts.target.trigger('click');

  if (opts.state !== 'is-disabled') {
    if ($input.is(':checked')) {
      opts.object.attr('data-state', 'is-selected');
    } else {
      opts.object.attr('data-state', 'is-selectable');
    }
  }
});
