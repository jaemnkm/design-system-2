var $reveal = $('[data-object="reveal"]'),
  $reveal_more = $('[data-object="reveal-more"]'),
  hideReadMoreContent = function () {
    $reveal_more.readmore({
      speed: 500,
      moreLink: '<a class="usajobs-read-more__link" href="#">Read more</a>',
      lessLink: '<a class="usajobs-read-more__link" href="#">Close</a>',
      heightMargin: 17, // Add the class 'transitioning' before toggling begins.
      beforeToggle: function(trigger, element) {
        element.addClass('transitioning');
      },
      // Remove the 'transitioning' class when toggling completes.
      afterToggle: function(trigger, element) {
        element.removeClass('transitioning');
      }
    });
  };

hideReadMoreContent();


$reveal.on('click', '[data-behavior]', function (event) {
  var $el = $(this),
    $object = $el.closest('[data-object="reveal"]'),
    behavior = $el.attr('data-behavior'),
    $target = $object.find('#' + $el.attr('aria-controls')),
    state = $target.attr('aria-hidden');

  event.preventDefault();
  $el.blur(); // Removes focus

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(' '), function (idx, action) {
    $el.trigger(action, { el: $el, object: $object, target: $target, state: state });
  });
});

$reveal.on('reveal.show-toggle', function(event, opts) {
  var $toggle_text_container = opts.el.find('[data-toggle-text]'),
    toggle_text = $toggle_text_container.attr('data-toggle-text'),
    current_text = $toggle_text_container.text();

  event.preventDefault();

  if (opts.state === 'true') {
    opts.el.attr('aria-expanded', 'true');
    opts.target.attr('aria-hidden', 'false');

    $toggle_text_container.text(toggle_text);
    $toggle_text_container.attr('data-toggle-text', current_text);

    opts.target.slideDown(function () {
      $('html, body').animate({
        scrollTop: opts.object.offset().top
      });
    });

  } else {
    opts.target.slideUp(function () {
      opts.el.attr('aria-expanded', 'false');
      opts.target.attr('aria-hidden', 'true');

      $toggle_text_container.text(toggle_text);
      $toggle_text_container.attr('data-toggle-text', current_text);
    });
  }
});

$reveal.on('reveal.show-next', function(event, opts) {

  event.preventDefault();

  opts.target.attr('aria-hidden', 'false');

  opts.target.slideDown(function () {
    $('html, body').animate({
      scrollTop: opts.el.offset().top
    });
    opts.el.remove();
  });
});
