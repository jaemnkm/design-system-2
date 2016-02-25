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
    opts.object.trigger('nav.open', opts);
  } else if (opts.state === 'is-open') {
    opts.object.trigger('nav.close', opts);
  }
});

$nav.on('nav.open', function(event, opts) {
  opts.object.attr('data-state', 'is-open');
  opts.target.slideToggle(300, function () {
    opts.el.attr('aria-expanded', 'true');
    opts.target.attr('aria-expanded', 'true');
  });
});

$nav.on('nav.close', function(event, opts) {
  opts.object.attr('data-state', 'is-closed');
  opts.target.slideToggle(300, function () {
    opts.el.attr('aria-expanded', 'false');
    opts.target.attr('aria-expanded', 'false');
  });
});

$nav.on('nav.menu.toggle', function(event, opts) {
  var $parent = opts.el.parent(),
    parent_state = $parent.attr('data-state'),
    $menu = $parent.find('[role="menu"]'),
    $sibling = $parent.siblings().find('[aria-expanded="true"]');

  event.preventDefault();

  $nav.trigger('nav.menu.slide-close', { parent: $sibling.parent(), menu: $sibling });

  if (parent_state === 'is-closed') {
    $nav.trigger('nav.menu.slide-open', { parent: $parent, menu: $menu });
  } else if (parent_state === 'is-open') {
    $nav.trigger('nav.menu.slide-close', { parent: $parent, menu: $menu });
  }
});

$nav.on('nav.menu.slide-open', function(event, opts) {
  opts.parent.attr('data-state', 'is-open');
  opts.menu.slideDown(300, function () {
    opts.menu.attr('aria-expanded', 'true');
  });
});

$nav.on('nav.menu.slide-close', function(event, opts) {
  opts.parent.attr('data-state', 'is-closed');
  opts.menu.slideUp(300, function () {
    opts.menu.attr('aria-expanded', 'false');
  });
});

$nav.on('nav.menu.search-toggle', function(event, opts) {
  var $parent = opts.el.parent(),
    parent_state = $parent.attr('data-state'),
    $menu = $nav.find($parent.attr('data-target'));

  event.preventDefault();

  if (parent_state === 'is-closed') {
    $nav.trigger('nav.menu.slide-open', { parent: $parent, menu: $menu });
  } else if (parent_state === 'is-open') {
    $nav.trigger('nav.menu.slide-close', { parent: $parent, menu: $menu });
  }
});


// Search autocomplete locations
var acHostUrl = 'https://ac.usajobs.gov/acwd',
usajSrc = function (request, response) {
  $.ajax({
    url: acHostUrl,
    dataType: 'jsonp',
    crossdomain: true,
    cache: true,
    jsonpCallback: 'usaj151067976',
    data: { t: request.term },
    success: function (data) {
      response(data);
    }
  });
};

$( '#search-location-v2' ).autocomplete({
  source: usajSrc,
  minLength: 3,
  select: function (event, ui) {
    var selectedObj = ui.item,
      whichTextBox = $(this).attr('id');

    if (whichTextBox === 'search-location-v2') {
      $('#search-location-v2').val(selectedObj.label);
    } else {
      $('#Location').val(selectedObj.label);
    }

    $('#AutoCompleteSelected').val('true');
    return false;
  },
  search: function (event, ui) {
    //wipe out values on new searches or when user selects one but changes their mind!
    /*
    $('#AutoCompleteSelected').val('false');
    $('#Location').validate();
    if (!$('#Location').valid()) {
      $('#Location').autocomplete('close');
      return false;
    }
    */
  },
  open: function () {
  },
  close: function () {
  }
});
