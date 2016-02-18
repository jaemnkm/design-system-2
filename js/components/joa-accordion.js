// JOA Accordions

var $joa_accordion = $('[data-object="joa-accordion"]'),

  // Open the accordion at the appropriate viewport size
  openAccordions = function () {
    var viewport_width = parseInt($(window).innerWidth(), 10),
      $accordion,
      $trigger;

    $.each($joa_accordion, function (index, accordion) {
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

