// Document - Object for uploading, viewing, and editing documents

var $doc = $('[data-object="document"]');

$doc.on('click', '[data-behavior]', function (event) {
  var $el = $(this),
    $object = $el.closest('[data-object="document"]'),
    behavior = $el.attr('data-behavior'),
    $target = $object.find($el.attr('data-target'));

  event.preventDefault();
  $el.blur(); // Removes focus

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(' '), function (idx, action) {
    $el.trigger(action, { el: $el, object: $object, target: $target });
  });
});

$doc.on('document.toggle', function(event, opts) {
  event.preventDefault();

  // This event is fired by the figure and simply clicks the checkbox
  // which we're leveraging for state

  opts.target.trigger('click');
});
