// Navigation (top-level-nav)

var $nav = $('[data-object="nav"]');

$nav.on('click', '[data-behavior]', function (event) {
  var $el = $(this),
    $object = $el.closest('[data-object="nav"]'),
    state = $object.attr('data-state'),
    behavior = $el.attr('data-behavior'),
    $target = $object.find($object.attr('data-target'));

    event.preventDefault();
    $el.blur(); // Removes focus

    // Each behavior attached to the element should be triggered
    $.each(behavior.split(' '), function (idx, action) {
        $el.trigger(action, { el: $el, object: $object, state: state, target: $target });
    });
});

$nav.on('nav.toggle', function(event, opts) {
  event.preventDefault();

  if (opts.state === 'is-closed') {
    $nav.trigger('nav.open', opts);
  } else if (opts.state === 'is-open') {
    $nav.trigger('nav.close', opts);
  }
});

$nav.on('nav.open', function(event, opts) {
  opts.target.slideToggle("fast", function () {
    opts.object.attr('data-state', 'is-open');
    opts.el.attr('aria-expanded', 'true');
    opts.target.attr('aria-expanded', 'true');
  });
});

$nav.on('nav.close', function(event, opts) {
  opts.target.slideToggle("fast", function () {
    opts.object.attr('data-state', 'is-closed');
    opts.el.attr('aria-expanded', 'false');
    opts.target.attr('aria-expanded', 'false');
  });
});
