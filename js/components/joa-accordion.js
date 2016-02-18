// JOA Accordions

var $joa_accordion = $('[data-object="joa-accordion"]'),

  // Open the accordion at the appropriate viewport size
  openAccordions = function () {
    var viewport_width = parseInt($(window).innerWidth(), 10),
      $accordions = $joa_accordion.find('.usajobs-joa-accordion-content'),
      $accordion,
      $trigger;

    $.each($accordions, function (index, accordion) {
      $accordion = $(accordion);
      $trigger = $accordion.siblings('.usajobs-joa-accordion-trigger');

      if (viewport_width > 599) {
        if ($accordion.hasClass('is-open-at-M')) {
          $accordion.attr('aria-hidden', 'false');
          $trigger.removeAttr('aria-controls');
        }
      }

      if (viewport_width > 991) {
        if ($accordion.hasClass('is-open-at-L')) {
          $accordion.attr('aria-hidden', 'false');
          $trigger.removeAttr('aria-controls');
        }
      }
    });
  };

$joa_accordion.on('click', '[data-behavior]', function () {
  var $el = $(this),
    $object = $el.closest('[data-object="joa-accordion"]'),
    state = $el.attr('aria-expanded'),
    behavior = $el.attr('data-behavior'),
    $target = $object.find('#' + $el.attr('aria-controls'));

  $el.blur(); // Removes focus

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(' '), function (idx, action) {
    $object.trigger(action, { el: $el, object: $object, state: state, target: $target });
  });
});

$joa_accordion.on('joa_accordion.toggle', function(event, opts) {
  event.preventDefault();

  if (opts.state === 'false') {
    opts.object.trigger('joa_accordion.open', opts);
  } else if (opts.state === 'true') {
    opts.object.trigger('joa_accordion.close', opts);
  }
});

$joa_accordion.on('joa_accordion.open', function(event, opts) {
  // This isn't working and I don't know why
  $('html, body').animate({
    scrollTop: opts.target.offset().top
  });
});

$joa_accordion.on('joa_accordion.close', function(event, opts) {
  // We rely on the js/vendor/usds-components.js accordion default handling
});


// Toggle Secondary Nav items on load
if ($joa_accordion !== undefined && $joa_accordion.length > 0) {
  openAccordions();
}

// Toggle Secondary Nav items on resize
$(window).resize( $.throttle( 250, function() {
  if ($joa_accordion !== undefined && $joa_accordion.length > 0) {
    openAccordions();
  }
}));

