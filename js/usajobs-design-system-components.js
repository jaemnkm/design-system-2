// Alerts
var $alert = $('[data-object="alert"]');

$alert.on('click', '[data-behavior]', function (event) {
  var $el = $(this),
    $object = $el.closest('[data-object="alert"]'),
    $target = $object.find('#' + $el.attr('aria-controls')),
    state = $target.attr('aria-hidden'),
    behavior = $el.attr('data-behavior');

  event.preventDefault();
  $el.blur(); // Removes focus

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(' '), function (idx, action) {
    if (action.match(/^alert/)) {
      $el.trigger(action, { el: $el, object: $object, target: $target, state: state });
    }
  });
});

$alert.on('alert.close', function(event, opts) {
  opts.object.fadeOut(300, function () {
    opts.object.attr('data-state', 'is-closed');
    opts.object.attr('aria-hidden', 'true');
  });
});

$alert.on('alert.skip', function(event, opts) {
  var $next_tip = opts.object.find('#' + opts.el.attr('data-target-next'));

  opts.target.fadeOut('fast', function () {
    opts.target.attr('aria-hidden', 'true');
    $next_tip.attr('aria-hidden', 'false');
  });
});

$alert.on('alert.back', function(event, opts) {
  var $prev_tip = opts.object.find('#' + opts.el.attr('data-target-previous'));

  $prev_tip.fadeIn('fast', function () {
    opts.target.attr('aria-hidden', 'true');
    $prev_tip.attr('aria-hidden', 'false');
  });
});

// Document - Object for uploading, viewing, and editing documents

var $doc = $('[data-object="document"]'),
  $doc_multiselect = $doc.find('input[type="checkbox"][data-behavior="document.select-checkbox"]'),
  $doc_singleselect = $doc.find('input[type="radio"][data-behavior="document.select-radio"]');

$doc.on('click', '[data-behavior]', function () {
  var $el = $(this),
    $object = $el.closest('[data-object="document"]'),
    behavior = $el.attr('data-behavior'),
    state = $object.attr('data-state'),
    $target = $object.find($el.attr('data-target'));

  // DO NOT preventDefault here otherwise we will
  // unintentionally disable form elements
  $el.blur(); // Removes focus

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(' '), function (idx, action) {
    $el.trigger(action, { el: $el, object: $object, state: state, target: $target });
  });
});

$doc.on('document.toggle', function(event, opts) {
  event.preventDefault();

  if (opts.state !== 'is-disabled') {
    opts.target.trigger('click');
  }
});

$doc.on('document.select', function(event, opts) {
  event.preventDefault();

  if (opts.state !== 'is-disabled') {
    opts.target.trigger('click');
  }
});

$doc_singleselect.on('change', function() {
  var $input = $(this),
    $object = $input.parent().closest('[data-object="document"]'),
    $sibling_inputs = $(document).find('input[type="radio"][name="' + $input.attr('name') + '"]'),
    $sibling_objects = $sibling_inputs.not('#' + $input.attr('id')).parent().closest('[data-object="document"]');

  if ($input.is(':checked')) {
    $object.attr('data-state', 'is-selected');
    $sibling_objects.attr('data-state', 'is-selectable');
  } else {
    $object.attr('data-state', 'is-selectable');
  }
});

$doc_multiselect.on('change', function() {
  var $input = $(this),
    $object = $input.parent().closest('[data-object="document"]');

  if ($input.is(':checked')) {
    $object.attr('data-state', 'is-selected');
  } else {
    $object.attr('data-state', 'is-selectable');
  }
});

// All select menus or select buttons with either of these classes
// get converted to the select2 style
$(document).ready(function() {
  $('.usajobs-form-select--entry').select2();

  /*
$('.usajobs-button-select').select2({
  disable_search_threshold: 10,
  inherit_select_classes: true
});
*/
});


var $form = $('[data-object="usajobs-form"]'),
  $form_reveal_fields = $form.find('input[type="radio"][data-behavior="usajobs-form.reveal-fields"]'),
  $form_hide_fields = $form.find('input[type="radio"][data-behavior="usajobs-form.hide-fields"]');

$form_reveal_fields.on('change', function() {
  var $input = $(this),
    $object = $input.parent().closest('[data-object="usajobs-form"]'),
    $target = $object.find('#' + $input.attr('aria-controls')),
    $siblings = $object.find('.usajobs-form-reveal-fields');

  $siblings.slideUp();

  $target.slideDown(function () {
    $target.attr('aria-hidden', 'false');
  });
});

$form_hide_fields.on('change', function() {
  var $input = $(this),
    $object = $input.parent().closest('[data-object="usajobs-form"]'),
    $targets = $object.find('.usajobs-form-reveal-fields');

  // A bit of cheating. aria-controls can have multiple targets but, this is easier.

  $targets.slideUp(function () {
    $targets.attr('aria-hidden', 'true');
  });
});

// JOA Actions
var $joa_actions = $('[data-object="joa-actions"]'),
  cleanUpShare = function ($list) {
    $list.children().show();
    $list.find('.link').show();
    $list.find('.short-url').remove();
  };

$joa_actions.on('click', '[data-behavior]', function () {
  var $el = $(this),
    $object = $el.closest('[data-object="joa-actions"]'),
    behavior = $el.attr('data-behavior');

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

  if (saved_state === 'is-saved') {
    opts.el.text('Save');
    opts.el.attr('data-state', 'is-unsaved');
  } else {
    opts.el.text('Saved');
    opts.el.attr('data-state', 'is-saved');
  }
});

$joa_actions.on('joa-actions.toggle-share', function(event, opts) {
  var target_id = opts.el.attr('id'),
    $target = opts.object.find('[aria-labeledby="' + target_id + '"]'),
    state = $target.attr('aria-hidden');

  if (state === 'true') {
    $target.attr('aria-hidden', false);
  } else {
    $target.attr('aria-hidden', true);
    cleanUpShare($target);
  }
});

$joa_actions.on('joa-actions.close-share', function(event, opts) {
  var target_id = opts.el.attr('data-target'),
    $target = opts.object.find(target_id),
    state = $target.attr('aria-hidden');

  if (state === 'true') {
    $target.attr('aria-hidden', false);
  } else {
    $target.attr('aria-hidden', true);
    cleanUpShare($target);
  }
});

$joa_actions.on('joa-actions.shorten-link', function(event, opts) {
  var base_url = 'http://go.usa.gov/api/shorten.jsonp',
    params = [
      { name: 'login', value: 'dev-usajobs' },
      { name: 'apiKey', value: '509326519e75e35f4355498bca0a31e2' }
    ],
    url_to_encode = opts.el.attr('data-shorten-url'),
    fixedEncodeURI = function(str) {
      // Reserves square brackets for IPv6 which follows RFC3986
      return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
    },
    short_url;

  event.preventDefault();

  params.push({ name: 'longUrl', value: fixedEncodeURI(url_to_encode) });

  // This should be the list that holds the share elements
  // Not really disabled but it will appear so until the result comes back
  opts.el.parent().parent().addClass('is-disabled');

  $.ajax({
    url: base_url,
    dataType: 'jsonp',
    crossdomain: true,
    data: $.param(params),
    success: function (rsp) {
      short_url = rsp.response.data.entry[0].short_url;

      // Hide other sharing options to make space to show the short URL
      $.each(opts.el.parent().siblings(), function (idx, sibling) {
        $(sibling).hide();
      });
      opts.el.after('<span class="short-url">' + short_url + '</span>');
      opts.el.hide();
      opts.el.parent().parent().removeClass('is-disabled');
    }
  });
});

// JOA Sections

var $reveal_more = $('[data-object="reveal-more"]'),
  hideReadMoreContent = function () {
    if (! $('body').hasClass('is-print-version')) {
      $reveal_more.readmore({
        speed: 500,
        collapsedHeight: 100,
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
    }
  };

$(window).resize($.throttle(250, function() {
  var width = window.innerWidth;

  if (width > 599) {
    if (! $reveal_more.attr('style')) {
      hideReadMoreContent();
    }
  } else {
    $('[data-behavior="joa-read-more"]').readmore('destroy');
  }
}));

// Modal

var $modal = $('[data-object="modal"]'),
  $modal_trigger = $('[data-object-trigger="modal"]'),
  $body = $('body'),
  $backdrop = $('<div class="usajobs-modal__canvas-blackout" tabindex="-1" />');

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
  var closeModal = function () {
    opts.object.trigger('modal.close', {
      el: opts.el,
      object: opts.object,
      state: opts.state
    });
  };

  event.preventDefault();

  $body.addClass('is-open-modal');
  $backdrop
    .appendTo($body)
    .attr('aria-hidden', 'true');

  // Store the element on the page that had focus
  // so we can return focus to that element
  opts.object.data('previous_focus', $(':focus'));

  opts.object.attr('data-state', 'is-open');
  opts.object.attr('aria-hidden', 'false');

  $(document).on('keyup', function (e) {
    // Close the modal when ESC is pressed
    if (e.keyCode === 27) {
      closeModal();
    }
  });

});

$modal.on('modal.close', function(event, opts) {
  $body.removeClass('is-open-modal');
  $backdrop.remove();

  $(document).off('keyup');

  opts.object.attr('data-state', 'is-closed');
  opts.object.attr('aria-hidden', 'true');
  opts.object.data('previous_focus').focus();
});

// Secondary Nav

var $nav_secondary = $('[data-object="nav-secondary"]'),
  $fixed_nav = $('.is-fixed-nav'),

  // The majority of this function is used courtesty of
  // Brad Frost's responsive design patterns:
  // https://bradfrost.github.io/this-is-responsive/patterns.html
  // Specifically, the Priority+ Alt pattern.
  navSecondaryToggleMenuItems = function () {
    var nav_width = 0,
      $menu = $nav_secondary.find('.usajobs-nav-secondary__menu'),
      $more_menu = $menu.find('.more'),
      $more_container = $nav_secondary.find($nav_secondary.attr('data-target')),
      more_width = $more_menu.outerWidth(true),
      available_space,
      last_item,
      first_more_el;

    $menu.find('> li:not(.more)').each(function () {
      nav_width += $(this).outerWidth( true );
    });

    available_space = $nav_secondary.outerWidth(true) - more_width;

    if (nav_width > available_space) {
      $menu.each(function () {
        last_item = $menu.find('> li:not(.more)').last();
        last_item.attr('data-width', last_item.outerWidth(true));
        last_item.prependTo($more_container);
        navSecondaryToggleMenuItems();
      });
    } else {
      first_more_el = $more_menu.find('li').first();

      if (nav_width + first_more_el.data('width') < available_space) {
        first_more_el.insertBefore($more_menu);
      }
    }

    if ($more_menu.find('li').length > 0) {
      $more_menu.css('display','inline-block');
    } else {
      $more_menu.css('display','none');
    }
  },
  updateActiveNav = function () {
    var scroll_position = $(document).scrollTop(),
      fixed_nav = $fixed_nav.length > 0,
      $links = $nav_secondary.find('[data-behavior="nav-secondary.scroll-to-top nav-secondary.make-active"]');

    if (fixed_nav) {
      $links.each(function () {
        var $link = $(this),
          $section = $($link.attr('href'));

        if ($section.position().top <= scroll_position &&
            $section.position().top + $section.height() > scroll_position) {
          $links.removeClass('is-active');
          $link.addClass('is-active');
        } else {
          $link.removeClass('is-active');
        }
      });
    }
  };

// Toggle Secondary Nav items on load
if ($nav_secondary !== undefined && $nav_secondary.length > 0) {
  navSecondaryToggleMenuItems();
}

// Toggle Secondary Nav items on resize
$(window).resize( $.throttle( 250, function() {
  if ($nav_secondary !== undefined && $nav_secondary.length > 0) {
    navSecondaryToggleMenuItems();
  }
}));

$nav_secondary.on('click', '[data-behavior]', function (event) {
  var $el = $(this),
    $object = $el.closest('[data-object="nav-secondary"]'),
    behavior = $el.attr('data-behavior'),
    $target = $object.find($object.attr('data-target')),
    state = $target.attr('data-state');

  event.preventDefault();
  $el.blur(); // Removes focus

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(' '), function (idx, action) {
    $el.trigger(action, { el: $el, object: $object, state: state, target: $target });
  });
});

$nav_secondary.on('nav-secondary.toggle', function(event, opts) {
  event.preventDefault();

  if (opts.state === 'is-closed') {
    opts.object.trigger('nav-secondary.open', opts);
  } else if (opts.state === 'is-open') {
    opts.object.trigger('nav-secondary.close', opts);
  }
});

$nav_secondary.on('nav-secondary.open', function(event, opts) {
  opts.target.attr('data-state', 'is-open');
});

$nav_secondary.on('nav-secondary.close', function(event, opts) {
  opts.target.attr('data-state', 'is-closed');
});

$nav_secondary.on('nav-secondary.make-active', function(event, opts) {
  var $siblings = opts.object.find('.is-active');

  $siblings.removeClass('is-active');
  opts.el.addClass('is-active');
});

$nav_secondary.on('nav-secondary.scroll-to-top', function(event, opts) {
  var target = opts.el.attr('href'),
    $target = $('body').find(target),
    offset_height = 0;

  $(document).off('scroll');

  if (opts.object.attr('data-behavior') === 'is-fixed-nav') {
    if ($(window).scrollTop() < opts.object.height()) {
      // Determining this height has proven to be illogical. it's not the offeset.top value. Why not?
      offset_height = (opts.object.height() * 2.5) + 15;
    } else {
      offset_height = opts.object.height();
    }
  }

  $('html, body').stop().animate({
    'scrollTop': $target.offset().top - offset_height
  }, 500, 'swing', function () {
    window.location.hash = target;
  });
});

// Fixed secondary nav on scroll
$(window).scroll($.throttle(250, function () {
  $fixed_nav.toggleClass('is-fixed', $(this).scrollTop() > $fixed_nav.height());
  updateActiveNav();
}));

// Navigation (top-level-nav)

var $nav = $('[data-object="nav"]'),
  closeNavOnLoad = function($nav_bar) {
    var width = window.innerWidth,
      $trigger = $nav_bar.find('[data-behavior="nav.menu.search-toggle"]'),
      $parent = $trigger.parent(),
      state = $parent.attr("data-state"),
      $menu = $nav_bar.find("#" + $trigger.attr("aria-controls"));

    if (width < 600 && state === "is-open") {
      $nav.trigger("nav.menu.slide-close", { parent: $parent, menu: $menu });
    } else if (width >= 600 && state === "is-closed") {
      $nav.trigger("nav.menu.slide-open", { parent: $parent, menu: $menu });
    }
  };

$nav.on("click", "[data-behavior]", function(event) {
  var $el = $(this),
    $object = $el.closest('[data-object="nav"]'),
    behavior = $el.attr("data-behavior"),
    $target = $(window.document).find("#" + $el.attr("aria-controls")),
    state = $target.attr("aria-expanded");

  event.preventDefault();
  $el.blur(); // Removes focus

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(" "), function(idx, action) {
    if (action.match(/^nav/)) {
      $el.trigger(action, {
        el: $el,
        object: $object,
        state: state,
        target: $target
      });
    }
  });
});

$nav.on("nav.toggle", function(event, opts) {
  if (opts.state === "is-closed") {
    opts.object.trigger("nav.open", opts);
  } else if (opts.state === "is-open") {
    opts.object.trigger("nav.close", opts);
  }
});

$nav.on("nav.open", function(event, opts) {
  opts.object.attr("data-state", "is-open");
  opts.target.slideToggle(300, function() {
    opts.el.attr("aria-expanded", "true");
    opts.target.attr("aria-expanded", "true");
  });
});

$nav.on("nav.close", function(event, opts) {
  opts.object.attr("data-state", "is-closed");
  opts.target.slideToggle(300, function() {
    opts.el.attr("aria-expanded", "false");
    opts.target.attr("aria-expanded", "false");
  });
});

$nav.on("nav.menu.toggle", function(event, opts) {
  var $parent = opts.el.parent(),
    parent_state = $parent.attr("data-state"),
    $menu = $parent.find('[role="menu"]'),
    $sibling = $parent.siblings().find('[aria-expanded="true"]');

  $nav.trigger("nav.menu.slide-close", {
    parent: $sibling.parent(),
    menu: $sibling
  });

  if (parent_state === "is-closed") {
    $nav.trigger("nav.menu.slide-open", { parent: $parent, menu: $menu });
  } else if (parent_state === "is-open") {
    $nav.trigger("nav.menu.slide-close", { parent: $parent, menu: $menu });
  }
});

$nav.on("nav.menu.slide-open", function(event, opts) {
  opts.parent.attr("data-state", "is-open");
  opts.menu.slideDown(300, function() {
    opts.menu.attr("aria-expanded", "true");
  });
});

$nav.on("nav.menu.slide-close", function(event, opts) {
  opts.parent.attr("data-state", "is-closed");
  opts.menu.slideUp(300, function() {
    opts.menu.attr("aria-expanded", "false");
    if (opts.callback !== undefined) {
      opts.callback(opts);
    }
  });
});

$nav.on("nav.menu.search-toggle", function(event, opts) {
  var $parent = opts.el.parent(),
    $triggering_menu,
    $secondary_nav,
    reinstateActiveMenu = function(menuOpts) {
      var $sibling_trigger, $sibling_secondary_nav;

      $sibling_trigger = menuOpts.object.find(
        "#" + menuOpts.el.attr("data-state-triggering-menu")
      );
      $sibling_secondary_nav = $(window.document).find(
        "#" + $sibling_trigger.attr("aria-controls")
      );

      if (
        $sibling_secondary_nav !== undefined &&
        $sibling_secondary_nav.length > 0
      ) {
        $sibling_secondary_nav.slideDown(300, function() {
          $sibling_secondary_nav.attr("aria-expanded", "true");
        });

        $sibling_trigger.addClass("is-active");
      }
    };

  if (opts.state === "false") {
    // Find active menu siblings, find their secondary nav,
    // retain them for making them active again on next toggle
    $triggering_menu = opts.el
      .parent()
      .siblings()
      .find(".is-active");
    $secondary_nav = $(window.document).find(
      "#" + $triggering_menu.attr("aria-controls")
    );

    if ($secondary_nav !== undefined && $secondary_nav.length > 0) {
      $secondary_nav.slideUp(300, function() {
        $secondary_nav.attr("aria-expanded", "false");
      });

      $triggering_menu.removeClass("is-active");
      opts.el.attr("data-state-triggering-menu", $triggering_menu.attr("id"));
    }
    $nav.trigger("nav.menu.slide-open", { parent: $parent, menu: opts.target });
  } else if (opts.state === "true") {
    $nav.trigger("nav.menu.slide-close", {
      parent: $parent,
      menu: opts.target,
      el: opts.el,
      sibling: opts.sibling,
      object: opts.object,
      callback: reinstateActiveMenu
    });
  }
});

$nav.on("nav.open_save_search", function(event, opts) {
  var state = opts.el.attr("aria-expanded");

  if (state === "false") {
    // open the target
    opts.target.attr("aria-hidden", "false");
    opts.el.attr("aria-expanded", "true");
  } else {
    // close the target
    opts.target.attr("aria-hidden", "true");
    opts.el.attr("aria-expanded", "false");
  }
});

$(document).ready(function() {
  if ($nav !== undefined && $nav.length > 0) {
    $.each($nav, function(idx, nav) {
      var $nav_bar = $(nav);
      if ($nav_bar.attr("data-behavior") !== undefined) {
        if ($nav_bar.attr("data-behavior") === "closeOnLoad") {
          closeNavOnLoad($nav_bar);
        }
      }
    });
  }
});

$(window).resize(
  $.throttle(250, function() {
    if ($nav !== undefined && $nav.length > 0) {
      $.each($nav, function(idx, nav) {
        var $nav_bar = $(nav);
        if ($nav_bar.attr("data-behavior") !== undefined) {
          if ($nav_bar.attr("data-behavior") === "closeOnLoad") {
            closeNavOnLoad($nav_bar);
          }
        }
      });
    }
  })
);

// Notification

var $notification = $('[data-object="notification"]'),
  $notification_trigger = $('[data-object-trigger="notification"]'),
  $body = $('body');

$notification_trigger.on('click', function (event) {
  var $el = $(this),
    $this_notification = $body.find($el.attr('data-target')),
    state = $this_notification.attr('data-state'),
    transition_to;

  event.preventDefault();

  if (state === 'is-closed') {
    transition_to = 'notification.open';
  } else {
    transition_to = 'notification.close';
  }

  $this_notification.trigger(transition_to, { el: $el, object: $this_notification, state: state });
});

$notification.on('click', '[data-behavior]', function (event) {
  var $el = $(this),
    $object = $el.closest('[data-object="notification"]'),
    state = $object.attr('data-state'),
    behavior = $el.attr('data-behavior');

  event.preventDefault();
  $el.blur(); // Removes focus

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(' '), function (idx, action) {
    $el.trigger(action, { el: $el, object: $object, state: state });
  });
});

$notification.on('notification.open', function(event, opts) {
  event.preventDefault();

  opts.object.attr('data-state', 'is-open');
  opts.object.attr('aria-hidden', 'false');

  opts.object.trigger('notification.delayed-close', {
    el: opts.el,
    object: opts.object,
    state: opts.state
  });
});

$notification.on('notification.close', function(event, opts) {
  opts.object.attr('data-state', 'is-closed');
  opts.object.attr('aria-hidden', 'true');
});

$notification.on('notification.delayed-close', function(event, opts) {
  setTimeout(function () {
    opts.object.attr('data-state', 'is-closed');
    opts.object.attr('aria-hidden', 'true');
  }, 5000);
});

var $reveal = $('[data-object="reveal"]'),
  $reveal_more = $('[data-object="reveal-more"]'),
  hideReadMoreContent = function () {
    if (! $('body').hasClass('is-print-version')) {
      $reveal_more.readmore({
        speed: 500,
        collapsedHeight: 100,
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
    }
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

// Search

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

// Portions of this code came from http://jsfiddle.net/fozylet/kTAMm/
$('#search-location').autocomplete({
  source: usajSrc,
  minLength: 3,
  open: function () {
    var acData = $(this).data('ui-autocomplete');
    acData
      .menu
      .element
      .find('li')
      .each(function () {
        var me = $(this),
          keywords = acData.term.split(' ').join('|');

        me.html(me.text().replace(new RegExp('(' + keywords + ')', 'gi'), '<strong>$1</strong>'));
      });
  },
  select: function (event, ui) {
    var selectedObj = ui.item;

    $('#search-location').val(selectedObj.label);
    return false;
  }
});

var $show_all = $('[data-object="show-all"]');

$show_all.on('click', '[data-behavior]', function (event) {
  var $el = $(this),
    $object = $el.closest('[data-object="show-all"]'),
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

$show_all.on('show-all.trigger', function(event, opts) {
  // Shows the contents of the accordion and then hides itself.
  // This is a one time shot. Once the content is revealed the user
  // has to navigate away to go back to the original state.

  event.preventDefault();

  if (opts.state === 'true') {
    opts.target.attr('aria-hidden', 'false');

    opts.target.slideDown(function () {
      $('html, body').animate({
        scrollTop: opts.object.offset().top
      });

      opts.el.remove();
    });

  }
});

// Tooltips
// From: https://osvaldas.info/elegant-css-and-jquery-tooltip-responsive-mobile-friendly

var $targets = $('[rel~=tooltip]'),
  $target,
  tip,
  $tooltip,
  pos_left,
  pos_top;

$targets.on('mouseenter', function () {
  $target  = $(this);
  tip     = $target.attr('title');
  $tooltip = $('<div class="usajobs-tooltip" id="tooltip"></div>');

  if (!tip || tip === '') {
    return false;
  }

  $target.removeAttr('title');
  $tooltip.css('opacity', 0)
    .html(tip)
    .appendTo('body');

  var initTooltip = function () {
    if ($(window).width() < $tooltip.outerWidth() * 1.5) {
      $tooltip.css('max-width', $( window ).width() / 2 );
    } else {
      $tooltip.css('max-width', 320);
    }

    pos_left = $target.offset().left + ( $target.outerWidth() / 2 ) - ( $tooltip.outerWidth() / 2 );
    pos_top  = $target.offset().top - $tooltip.outerHeight() - 20;

    if (pos_left < 0) {
      pos_left = $target.offset().left + $target.outerWidth() / 2 - 20;
      $tooltip.addClass('left');
    } else {
      $tooltip.removeClass('left');
    }

    if (pos_left + $tooltip.outerWidth() > $( window ).width()) {
      pos_left = $target.offset().left - $tooltip.outerWidth() + $target.outerWidth() / 2 + 20;
      $tooltip.addClass('right');
    } else {
      $tooltip.removeClass('right');
    }

    if (pos_top < 0) {
      pos_top  = $target.offset().top + $target.outerHeight();
      $tooltip.addClass('top');
    } else {
      $tooltip.removeClass( 'top' );
    }

    $tooltip.css( { left: pos_left, top: pos_top } )
      .animate( { top: '+=10', opacity: 1 }, 50 );
  };

  initTooltip();

  $(window).resize($.throttle( 250, function () {
    initTooltip();
  }));

  var removeTooltip = function () {
    $tooltip.animate( { top: '-=10', opacity: 0 }, 50, function () {
      $( this ).remove();
    });

    $target.attr( 'title', tip );
  };

  $target.on('mouseleave', removeTooltip);
  $tooltip.on('click', removeTooltip );
});
