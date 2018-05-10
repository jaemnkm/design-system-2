(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
  opts.object.attr('data-state', 'is-closed');
  opts.object.attr('aria-hidden', 'true');
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

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
// All select menus or select buttons with either of these classes
// get converted to the chosen style
$('.usajobs-form-select--entry').chosen();

$('.usajobs-button-select').chosen({
  disable_search_threshold: 10,
  inherit_select_classes: true
});

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
// Navigation (top-level-nav)

var $nav = $('[data-object="nav"]'),
  closeNavOnLoad = function ($nav_bar) {
    var width = window.innerWidth,
      $trigger = $nav_bar.find('[data-behavior="nav.menu.search-toggle"]'),
      $parent = $trigger.parent(),
      state = $parent.attr('data-state'),
      $menu = $nav_bar.find('#' + $trigger.attr('aria-controls'));

    if (width < 600 && state === 'is-open') {
      $nav.trigger('nav.menu.slide-close', { parent: $parent, menu: $menu });
    } else if (width >= 600 && state === 'is-closed') {
      $nav.trigger('nav.menu.slide-open', { parent: $parent, menu: $menu });
    }
  };

$nav.on('click', '[data-behavior]', function (event) {
  var $el = $(this),
    $object = $el.closest('[data-object="nav"]'),
    behavior = $el.attr('data-behavior'),
    $target = $(window.document).find('#' + $el.attr('aria-controls')),
    state = $target.attr('aria-expanded'),
    $sibling = $target.siblings('[role="menu"]');

  event.preventDefault();
  $el.blur(); // Removes focus

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(' '), function (idx, action) {
    if (action.match(/^nav/)) {
      $el.trigger(action, { el: $el, object: $object, state: state, target: $target, sibling: $sibling });
    }
  });
});

$nav.on('nav.toggle', function(event, opts) {
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
    $sibling_trigger;

  if (opts.state === 'false') {
    if (opts.sibling !== undefined && opts.sibling.length > 0) {
      opts.sibling
        .hide()
        .attr('aria-expanded', 'false');

      // Find active menu siblings
      opts.el.parent().siblings().find('.is-active').removeClass('is-active');
    }
    $nav.trigger('nav.menu.slide-open', { parent: $parent, menu: opts.target });
  } else if (opts.state === 'true') {
    $nav.trigger('nav.menu.slide-close', { parent: $parent, menu: opts.target });

    if (opts.sibling !== undefined && opts.sibling.length > 0) {
      opts.sibling
        .show()
        .attr('aria-expanded', 'true');

      $sibling_trigger = opts.el.parent().siblings().find('[aria-controls="' + opts.sibling.attr('id') + '"]');
      $sibling_trigger.addClass('is-active');
    }
  }
});

$nav.on('nav.open_save_search', function(event, opts) {
  var state = opts.el.attr('aria-expanded');

  if (state === 'false') {
    // open the target
    opts.target.attr('aria-hidden', 'false');
    opts.el.attr('aria-expanded', 'true');
  } else {
    // close the target
    opts.target.attr('aria-hidden', 'true');
    opts.el.attr('aria-expanded', 'false');
  }
});

$(document).ready(function() {
  if ($nav !== undefined && $nav.length > 0) {
    $.each($nav, function (idx, nav) {
      var $nav_bar = $(nav);
      if ($nav_bar.attr('data-behavior') !== undefined) {
        if ($nav_bar.attr('data-behavior') === 'closeOnLoad') {
          closeNavOnLoad($nav_bar);
        }
      }
    });
  }
});

$(window).resize($.throttle(250, function() {
  if ($nav !== undefined && $nav.length > 0) {
    $.each($nav, function (idx, nav) {
      var $nav_bar = $(nav);
      if ($nav_bar.attr('data-behavior') !== undefined) {
        if ($nav_bar.attr('data-behavior') === 'closeOnLoad') {
          closeNavOnLoad($nav_bar);
        }
      }
    });
  }
}));

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

  if (opts.state == "true") {
    opts.target.attr('aria-hidden', 'false');

    opts.target.slideDown(function () {
      $('html, body').animate({
        scrollTop: opts.object.offset().top
      });

      opts.el.remove();
    });

  }
});

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){

/**
 * Array#filter.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Object=} self
 * @return {Array}
 * @throw TypeError
 */

module.exports = function (arr, fn, self) {
  if (arr.filter) return arr.filter(fn, self);
  if (void 0 === arr || null === arr) throw new TypeError;
  if ('function' != typeof fn) throw new TypeError;
  var ret = [];
  for (var i = 0; i < arr.length; i++) {
    if (!hasOwn.call(arr, i)) continue;
    var val = arr[i];
    if (fn.call(self, val, i, arr)) ret.push(val);
  }
  return ret;
};

var hasOwn = Object.prototype.hasOwnProperty;

},{}],16:[function(require,module,exports){
/**
 * array-foreach
 *   Array#forEach ponyfill for older browsers
 *   (Ponyfill: A polyfill that doesn't overwrite the native method)
 * 
 * https://github.com/twada/array-foreach
 *
 * Copyright (c) 2015-2016 Takuto Wada
 * Licensed under the MIT license.
 *   https://github.com/twada/array-foreach/blob/master/MIT-LICENSE
 */
'use strict';

module.exports = function forEach (ary, callback, thisArg) {
    if (ary.forEach) {
        ary.forEach(callback, thisArg);
        return;
    }
    for (var i = 0; i < ary.length; i+=1) {
        callback.call(thisArg, ary[i], i, ary);
    }
};

},{}],17:[function(require,module,exports){
/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20170427
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

if ("document" in window.self) {

// Full polyfill for browsers with no classList support
// Including IE < Edge missing SVGElement.classList
if (!("classList" in document.createElement("_")) 
	|| document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

(function (view) {

"use strict";

if (!('Element' in view)) return;

var
	  classListProp = "classList"
	, protoProp = "prototype"
	, elemCtrProto = view.Element[protoProp]
	, objCtr = Object
	, strTrim = String[protoProp].trim || function () {
		return this.replace(/^\s+|\s+$/g, "");
	}
	, arrIndexOf = Array[protoProp].indexOf || function (item) {
		var
			  i = 0
			, len = this.length
		;
		for (; i < len; i++) {
			if (i in this && this[i] === item) {
				return i;
			}
		}
		return -1;
	}
	// Vendors: please allow content code to instantiate DOMExceptions
	, DOMEx = function (type, message) {
		this.name = type;
		this.code = DOMException[type];
		this.message = message;
	}
	, checkTokenAndGetIndex = function (classList, token) {
		if (token === "") {
			throw new DOMEx(
				  "SYNTAX_ERR"
				, "An invalid or illegal string was specified"
			);
		}
		if (/\s/.test(token)) {
			throw new DOMEx(
				  "INVALID_CHARACTER_ERR"
				, "String contains an invalid character"
			);
		}
		return arrIndexOf.call(classList, token);
	}
	, ClassList = function (elem) {
		var
			  trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
			, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
			, i = 0
			, len = classes.length
		;
		for (; i < len; i++) {
			this.push(classes[i]);
		}
		this._updateClassName = function () {
			elem.setAttribute("class", this.toString());
		};
	}
	, classListProto = ClassList[protoProp] = []
	, classListGetter = function () {
		return new ClassList(this);
	}
;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
	return this[i] || null;
};
classListProto.contains = function (token) {
	token += "";
	return checkTokenAndGetIndex(this, token) !== -1;
};
classListProto.add = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
	;
	do {
		token = tokens[i] + "";
		if (checkTokenAndGetIndex(this, token) === -1) {
			this.push(token);
			updated = true;
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.remove = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
		, index
	;
	do {
		token = tokens[i] + "";
		index = checkTokenAndGetIndex(this, token);
		while (index !== -1) {
			this.splice(index, 1);
			updated = true;
			index = checkTokenAndGetIndex(this, token);
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.toggle = function (token, force) {
	token += "";

	var
		  result = this.contains(token)
		, method = result ?
			force !== true && "remove"
		:
			force !== false && "add"
	;

	if (method) {
		this[method](token);
	}

	if (force === true || force === false) {
		return force;
	} else {
		return !result;
	}
};
classListProto.toString = function () {
	return this.join(" ");
};

if (objCtr.defineProperty) {
	var classListPropDesc = {
		  get: classListGetter
		, enumerable: true
		, configurable: true
	};
	try {
		objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	} catch (ex) { // IE 8 doesn't support enumerable:true
		// adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
		// modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
		if (ex.number === undefined || ex.number === -0x7FF5EC54) {
			classListPropDesc.enumerable = false;
			objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
		}
	}
} else if (objCtr[protoProp].__defineGetter__) {
	elemCtrProto.__defineGetter__(classListProp, classListGetter);
}

}(window.self));

}

// There is full or partial native classList support, so just check if we need
// to normalize the add/remove and toggle APIs.

(function () {
	"use strict";

	var testElement = document.createElement("_");

	testElement.classList.add("c1", "c2");

	// Polyfill for IE 10/11 and Firefox <26, where classList.add and
	// classList.remove exist but support only one argument at a time.
	if (!testElement.classList.contains("c2")) {
		var createMethod = function(method) {
			var original = DOMTokenList.prototype[method];

			DOMTokenList.prototype[method] = function(token) {
				var i, len = arguments.length;

				for (i = 0; i < len; i++) {
					token = arguments[i];
					original.call(this, token);
				}
			};
		};
		createMethod('add');
		createMethod('remove');
	}

	testElement.classList.toggle("c3", false);

	// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	// support the second argument.
	if (testElement.classList.contains("c3")) {
		var _toggle = DOMTokenList.prototype.toggle;

		DOMTokenList.prototype.toggle = function(token, force) {
			if (1 in arguments && !this.contains(token) === !force) {
				return force;
			} else {
				return _toggle.call(this, token);
			}
		};

	}

	testElement = null;
}());

}

},{}],18:[function(require,module,exports){
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (typeof module != 'undefined') module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


  if (!loaded)
  doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = fns.shift()) listener()
  })

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn)
  }

});

},{}],19:[function(require,module,exports){
'use strict';

// <3 Modernizr
// https://raw.githubusercontent.com/Modernizr/Modernizr/master/feature-detects/dom/dataset.js

function useNative() {
	var elem = document.createElement('div');
	elem.setAttribute('data-a-b', 'c');

	return Boolean(elem.dataset && elem.dataset.aB === 'c');
}

function nativeDataset(element) {
	return element.dataset;
}

module.exports = useNative() ? nativeDataset : function (element) {
	var map = {};
	var attributes = element.attributes;

	function getter() {
		return this.value;
	}

	function setter(name, value) {
		if (typeof value === 'undefined') {
			this.removeAttribute(name);
		} else {
			this.setAttribute(name, value);
		}
	}

	for (var i = 0, j = attributes.length; i < j; i++) {
		var attribute = attributes[i];

		if (attribute) {
			var name = attribute.name;

			if (name.indexOf('data-') === 0) {
				var prop = name.slice(5).replace(/-./g, function (u) {
					return u.charAt(1).toUpperCase();
				});

				var value = attribute.value;

				Object.defineProperty(map, prop, {
					enumerable: true,
					get: getter.bind({ value: value || '' }),
					set: setter.bind(element, name)
				});
			}
		}
	}

	return map;
};


},{}],20:[function(require,module,exports){
// element-closest | CC0-1.0 | github.com/jonathantneal/closest

(function (ElementProto) {
	if (typeof ElementProto.matches !== 'function') {
		ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
			var element = this;
			var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
			var index = 0;

			while (elements[index] && elements[index] !== element) {
				++index;
			}

			return Boolean(elements[index]);
		};
	}

	if (typeof ElementProto.closest !== 'function') {
		ElementProto.closest = function closest(selector) {
			var element = this;

			while (element && element.nodeType === 1) {
				if (element.matches(selector)) {
					return element;
				}

				element = element.parentNode;
			}

			return null;
		};
	}
})(window.Element.prototype);

},{}],21:[function(require,module,exports){
(function (global){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],22:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],23:[function(require,module,exports){
const assign = require('object-assign');
const delegate = require('../delegate');
const delegateAll = require('../delegateAll');

const DELEGATE_PATTERN = /^(.+):delegate\((.+)\)$/;
const SPACE = ' ';

const getListeners = function(type, handler) {
  var match = type.match(DELEGATE_PATTERN);
  var selector;
  if (match) {
    type = match[1];
    selector = match[2];
  }

  var options;
  if (typeof handler === 'object') {
    options = {
      capture: popKey(handler, 'capture'),
      passive: popKey(handler, 'passive')
    };
  }

  var listener = {
    selector: selector,
    delegate: (typeof handler === 'object')
      ? delegateAll(handler)
      : selector
        ? delegate(selector, handler)
        : handler,
    options: options
  };

  if (type.indexOf(SPACE) > -1) {
    return type.split(SPACE).map(function(_type) {
      return assign({type: _type}, listener);
    });
  } else {
    listener.type = type;
    return [listener];
  }
};

var popKey = function(obj, key) {
  var value = obj[key];
  delete obj[key];
  return value;
};

module.exports = function behavior(events, props) {
  const listeners = Object.keys(events)
    .reduce(function(memo, type) {
      var listeners = getListeners(type, events[type]);
      return memo.concat(listeners);
    }, []);

  return assign({
    add: function addBehavior(element) {
      listeners.forEach(function(listener) {
        element.addEventListener(
          listener.type,
          listener.delegate,
          listener.options
        );
      });
    },
    remove: function removeBehavior(element) {
      listeners.forEach(function(listener) {
        element.removeEventListener(
          listener.type,
          listener.delegate,
          listener.options
        );
      });
    }
  }, props);
};

},{"../delegate":25,"../delegateAll":26,"object-assign":22}],24:[function(require,module,exports){
module.exports = function compose(functions) {
  return function(e) {
    return functions.some(function(fn) {
      return fn.call(this, e) === false;
    }, this);
  };
};

},{}],25:[function(require,module,exports){
// polyfill Element.prototype.closest
require('element-closest');

module.exports = function delegate(selector, fn) {
  return function delegation(event) {
    var target = event.target.closest(selector);
    if (target) {
      return fn.call(target, event);
    }
  }
};

},{"element-closest":20}],26:[function(require,module,exports){
const delegate = require('../delegate');
const compose = require('../compose');

const SPLAT = '*';

module.exports = function delegateAll(selectors) {
  const keys = Object.keys(selectors)

  // XXX optimization: if there is only one handler and it applies to
  // all elements (the "*" CSS selector), then just return that
  // handler
  if (keys.length === 1 && keys[0] === SPLAT) {
    return selectors[SPLAT];
  }

  const delegates = keys.reduce(function(memo, selector) {
    memo.push(delegate(selector, selectors[selector]));
    return memo;
  }, []);
  return compose(delegates);
};

},{"../compose":24,"../delegate":25}],27:[function(require,module,exports){
module.exports = function ignore(element, fn) {
  return function ignorance(e) {
    if (element !== e.target && !element.contains(e.target)) {
      return fn.call(this, e);
    }
  };
};

},{}],28:[function(require,module,exports){
module.exports = function once(listener, options) {
  var wrapped = function wrappedOnce(e) {
    e.currentTarget.removeEventListener(e.type, wrapped, options);
    return listener.call(this, e);
  };
  return wrapped;
};


},{}],29:[function(require,module,exports){
'use strict';

var RE_TRIM = /(^\s+)|(\s+$)/g;
var RE_SPLIT = /\s+/;

var trim = String.prototype.trim
  ? function(str) { return str.trim(); }
  : function(str) { return str.replace(RE_TRIM, ''); };

var queryById = function(id) {
  return this.querySelector('[id="' + id.replace(/"/g, '\\"') + '"]');
};

module.exports = function resolveIds(ids, doc) {
  if (typeof ids !== 'string') {
    throw new Error('Expected a string but got ' + (typeof ids));
  }

  if (!doc) {
    doc = window.document;
  }

  var getElementById = doc.getElementById
    ? doc.getElementById.bind(doc)
    : queryById.bind(doc);

  ids = trim(ids).split(RE_SPLIT);

  // XXX we can short-circuit here because trimming and splitting a
  // string of just whitespace produces an array containing a single,
  // empty string
  if (ids.length === 1 && ids[0] === '') {
    return [];
  }

  return ids
    .map(function(id) {
      var el = getElementById(id);
      if (!el) {
        throw new Error('no element with id: "' + id + '"');
      }
      return el;
    });
};

},{}],30:[function(require,module,exports){
'use strict';
const behavior = require('../utils/behavior');
const filter = require('array-filter');
const forEach = require('array-foreach');
const toggle = require('../utils/toggle');
const isElementInViewport = require('../utils/is-in-viewport');

const CLICK = require('../events').CLICK;
const PREFIX = require('../config').prefix;

// XXX match .usa-accordion and .usa-accordion-bordered
const ACCORDION = `.${PREFIX}-accordion, .${PREFIX}-accordion-bordered`;
const BUTTON = `.${PREFIX}-accordion-button[aria-controls]`;
const EXPANDED = 'aria-expanded';
const MULTISELECTABLE = 'aria-multiselectable';

/**
 * Toggle a button's "pressed" state, optionally providing a target
 * state.
 *
 * @param {HTMLButtonElement} button
 * @param {boolean?} expanded If no state is provided, the current
 * state will be toggled (from false to true, and vice-versa).
 * @return {boolean} the resulting state
 */
const toggleButton = (button, expanded) => {
  var accordion = button.closest(ACCORDION);
  if (!accordion) {
    throw new Error(`${BUTTON} is missing outer ${ACCORDION}`);
  }

  expanded = toggle(button, expanded);
  // XXX multiselectable is opt-in, to preserve legacy behavior
  const multiselectable = accordion.getAttribute(MULTISELECTABLE) === 'true';

  if (expanded && !multiselectable) {
    forEach(getAccordionButtons(accordion), other => {
      if (other !== button) {
        toggle(other, false);
      }
    });
  }
};

/**
 * @param {HTMLButtonElement} button
 * @return {boolean} true
 */
const showButton = button => toggleButton(button, true);

/**
 * @param {HTMLButtonElement} button
 * @return {boolean} false
 */
const hideButton = button => toggleButton(button, false);

/**
 * Get an Array of button elements belonging directly to the given
 * accordion element.
 * @param {HTMLElement} accordion
 * @return {array<HTMLButtonElement>}
 */
const getAccordionButtons = accordion => {
  return filter(accordion.querySelectorAll(BUTTON), button => {
    return button.closest(ACCORDION) === accordion;
  });
};

const accordion = behavior({
  [ CLICK ]: {
    [ BUTTON ]: function (event) {
      event.preventDefault();
      toggleButton(this);

      if (this.getAttribute(EXPANDED) === 'true') {
        // We were just expanded, but if another accordion was also just
        // collapsed, we may no longer be in the viewport. This ensures
        // that we are still visible, so the user isn't confused.
        if (!isElementInViewport(this)) this.scrollIntoView();
      }
    },
  },
}, {
  init: root => {
    forEach(root.querySelectorAll(BUTTON), button => {
      const expanded = button.getAttribute(EXPANDED) === 'true';
      toggleButton(button, expanded);
    });
  },
  ACCORDION,
  BUTTON,
  show: showButton,
  hide: hideButton,
  toggle: toggleButton,
  getButtons: getAccordionButtons,
});

/**
 * TODO: for 2.0, remove everything below this comment and export the
 * behavior directly:
 *
 * module.exports = behavior({...});
 */
const Accordion = function (root) {
  this.root = root;
  accordion.on(this.root);
};

// copy all of the behavior methods and props to Accordion
const assign = require('object-assign');
assign(Accordion, accordion);

Accordion.prototype.show = showButton;
Accordion.prototype.hide = hideButton;

Accordion.prototype.remove = function () {
  accordion.off(this.root);
};

module.exports = Accordion;

},{"../config":39,"../events":40,"../utils/behavior":44,"../utils/is-in-viewport":45,"../utils/toggle":49,"array-filter":15,"array-foreach":16,"object-assign":22}],31:[function(require,module,exports){
'use strict';
const behavior = require('../utils/behavior');
const toggle = require('../utils/toggle');

const CLICK = require('../events').CLICK;
const PREFIX = require('../config').prefix;

const HEADER = `.${PREFIX}-banner-header`;
const EXPANDED_CLASS = `${PREFIX}-banner-header-expanded`;

const toggleBanner = function (event) {
  event.preventDefault();
  this.closest(HEADER).classList.toggle(EXPANDED_CLASS);
  return false;
};

module.exports = behavior({
  [ CLICK ]: {
    [ `${HEADER} [aria-controls]` ]: toggleBanner,
  },
});

},{"../config":39,"../events":40,"../utils/behavior":44,"../utils/toggle":49}],32:[function(require,module,exports){
'use strict';
const accordion = require('./accordion');
const behavior = require('../utils/behavior');
const debounce = require('lodash.debounce');
const forEach = require('array-foreach');
const select = require('../utils/select');

const CLICK = require('../events').CLICK;
const PREFIX = require('../config').prefix;

const HIDDEN = 'hidden';
const SCOPE = `.${PREFIX}-footer-big`;
const NAV = `${SCOPE} nav`;
const BUTTON = `${NAV} .${PREFIX}-footer-primary-link`;
const LIST = `${NAV} ul`;

const HIDE_MAX_WIDTH = 600;
const DEBOUNCE_RATE = 180;

const showPanel = function () {
  const list = this.closest(LIST);
  list.classList.remove(HIDDEN);

  // NB: this *should* always succeed because the button
  // selector is scoped to ".{prefix}-footer-big nav"
  const lists = list.closest(NAV)
    .querySelectorAll('ul');

  forEach(lists, el => {
    if (el !== list) {
      el.classList.add(HIDDEN);
    }
  });
};

const resize = debounce(() => {
  const hidden = window.innerWidth < HIDE_MAX_WIDTH;
  forEach(select(LIST), list => {
    list.classList.toggle(HIDDEN, hidden);
  });
}, DEBOUNCE_RATE);

module.exports = behavior({
  [ CLICK ]: {
    [ BUTTON ]: showPanel,
  },
}, {
  // export for use elsewhere
  HIDE_MAX_WIDTH,
  DEBOUNCE_RATE,

  init: target => {
    resize();
    window.addEventListener('resize', resize);
  },

  teardown: target => {
    window.removeEventListener('resize', resize);
  },
});

},{"../config":39,"../events":40,"../utils/behavior":44,"../utils/select":46,"./accordion":30,"array-foreach":16,"lodash.debounce":21}],33:[function(require,module,exports){
module.exports = {
  accordion:  require('./accordion'),
  banner:     require('./banner'),
  footer:     require('./footer'),
  navigation: require('./navigation'),
  password:   require('./password'),
  search:     require('./search'),
  skipnav:    require('./skipnav'),
  validator:  require('./validator'),
};


},{"./accordion":30,"./banner":31,"./footer":32,"./navigation":34,"./password":35,"./search":36,"./skipnav":37,"./validator":38}],34:[function(require,module,exports){
'use strict';
const behavior = require('../utils/behavior');
const forEach = require('array-foreach');
const select = require('../utils/select');
const accordion = require('./accordion');

const CLICK = require('../events').CLICK;
const PREFIX = require('../config').prefix;

const NAV = `.${PREFIX}-nav`;
const NAV_LINKS = `${NAV} a`;
const OPENERS = `.${PREFIX}-menu-btn`;
const CLOSE_BUTTON = `.${PREFIX}-nav-close`;
const OVERLAY = `.${PREFIX}-overlay`;
const CLOSERS = `${CLOSE_BUTTON}, .${PREFIX}-overlay`;
const TOGGLES = [ NAV, OVERLAY ].join(', ');

const ACTIVE_CLASS = 'usa-mobile_nav-active';
const VISIBLE_CLASS = 'is-visible';

const isActive = () => document.body.classList.contains(ACTIVE_CLASS);

const _focusTrap = (trapContainer) => {
  // Find all focusable children
  const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
  const focusableElements = trapContainer.querySelectorAll(focusableElementsString);
  const firstTabStop = focusableElements[ 0 ];
  const lastTabStop = focusableElements[ focusableElements.length - 1 ];

  function trapTabKey (e) {
    // Check for TAB key press
    if (e.keyCode === 9) {

      // SHIFT + TAB
      if (e.shiftKey) {
        if (document.activeElement === firstTabStop) {
          e.preventDefault();
          lastTabStop.focus();
        }

      // TAB
      } else {
        if (document.activeElement === lastTabStop) {
          e.preventDefault();
          firstTabStop.focus();
        }
      }
    }

    // ESCAPE
    if (e.keyCode === 27) {
      toggleNav.call(this, false);
    }
  }

  // Focus first child
  firstTabStop.focus();

  return {
    enable () {
      // Listen for and trap the keyboard
      trapContainer.addEventListener('keydown', trapTabKey);
    },

    release () {
      trapContainer.removeEventListener('keydown', trapTabKey);
    },
  };
};

let focusTrap;

const toggleNav = function (active) {
  const body = document.body;
  if (typeof active !== 'boolean') {
    active = !isActive();
  }
  body.classList.toggle(ACTIVE_CLASS, active);

  forEach(select(TOGGLES), el => {
    el.classList.toggle(VISIBLE_CLASS, active);
  });

  if (active) {
    focusTrap.enable();
  } else {
    focusTrap.release();
  }

  const closeButton = body.querySelector(CLOSE_BUTTON);
  const menuButton = body.querySelector(OPENERS);

  if (active && closeButton) {
    // The mobile nav was just activated, so focus on the close button,
    // which is just before all the nav elements in the tab order.
    closeButton.focus();
  } else if (!active && document.activeElement === closeButton &&
             menuButton) {
    // The mobile nav was just deactivated, and focus was on the close
    // button, which is no longer visible. We don't want the focus to
    // disappear into the void, so focus on the menu button if it's
    // visible (this may have been what the user was just focused on,
    // if they triggered the mobile nav by mistake).
    menuButton.focus();
  }

  return active;
};

const resize = () => {
  const closer = document.body.querySelector(CLOSE_BUTTON);

  if (isActive() && closer && closer.getBoundingClientRect().width === 0) {
    // The mobile nav is active, but the close box isn't visible, which
    // means the user's viewport has been resized so that it is no longer
    // in mobile mode. Let's make the page state consistent by
    // deactivating the mobile nav.
    toggleNav.call(closer, false);
  }
};

const navigation = behavior({
  [ CLICK ]: {
    [ OPENERS ]: toggleNav,
    [ CLOSERS ]: toggleNav,
    [ NAV_LINKS ]: function () {
      // A navigation link has been clicked! We want to collapse any
      // hierarchical navigation UI it's a part of, so that the user
      // can focus on whatever they've just selected.

      // Some navigation links are inside accordions; when they're
      // clicked, we want to collapse those accordions.
      const acc = this.closest(accordion.ACCORDION);
      if (acc) {
        accordion.getButtons(acc).forEach(btn => accordion.hide(btn));
      }

      // If the mobile navigation menu is active, we want to hide it.
      if (isActive()) {
        toggleNav.call(this, false);
      }
    },
  },
}, {
  init () {
    const trapContainer = document.querySelector(NAV);

    if (trapContainer) {
      focusTrap = _focusTrap(trapContainer);
    }

    resize();
    window.addEventListener('resize', resize, false);
  },
  teardown () {
    window.removeEventListener('resize', resize, false);
  },
});

/**
 * TODO for 2.0, remove this statement and export `navigation` directly:
 *
 * module.exports = behavior({...});
 */
const assign = require('object-assign');
module.exports = assign(
  el => navigation.on(el),
  navigation
);

},{"../config":39,"../events":40,"../utils/behavior":44,"../utils/select":46,"./accordion":30,"array-foreach":16,"object-assign":22}],35:[function(require,module,exports){
'use strict';
const behavior = require('../utils/behavior');
const toggleFormInput = require('../utils/toggle-form-input');

const CLICK = require('../events').CLICK;
const PREFIX = require('../config').prefix;

const LINK = `.${PREFIX}-show_password, .${PREFIX}-show_multipassword`;

const toggle = function (event) {
  event.preventDefault();
  toggleFormInput(this);
};

module.exports = behavior({
  [ CLICK ]: {
    [ LINK ]: toggle,
  },
});

},{"../config":39,"../events":40,"../utils/behavior":44,"../utils/toggle-form-input":48}],36:[function(require,module,exports){
'use strict';
const behavior = require('../utils/behavior');
const forEach = require('array-foreach');
const ignore = require('receptor/ignore');
const select = require('../utils/select');

const CLICK = require('../events').CLICK;
const PREFIX = require('../config').prefix;

const BUTTON = '.js-search-button';
const FORM = '.js-search-form';
const INPUT = '[type=search]';
const CONTEXT = 'header'; // XXX
const VISUALLY_HIDDEN = `${PREFIX}-sr-only`;

let lastButton;

const showSearch = function (event) {
  toggleSearch(this, true);
  lastButton = this;
};

const hideSearch = function (event) {
  toggleSearch(this, false);
  lastButton = undefined;
};

const getForm = button => {
  const context = button.closest(CONTEXT);
  return context
    ? context.querySelector(FORM)
    : document.querySelector(FORM);
};

const toggleSearch = (button, active) => {
  const form = getForm(button);
  if (!form) {
    throw new Error(`No ${FORM} found for search toggle in ${CONTEXT}!`);
  }

  button.hidden = active;
  form.classList.toggle(VISUALLY_HIDDEN, !active);

  if (active) {
    const input = form.querySelector(INPUT);
    if (input) {
      input.focus();
    }
    // when the user clicks _outside_ of the form w/ignore(): hide the
    // search, then remove the listener
    const listener = ignore(form, e => {
      if (lastButton) {
        hideSearch.call(lastButton);
      }
      document.body.removeEventListener(CLICK, listener);
    });

    // Normally we would just run this code without a timeout, but
    // IE11 and Edge will actually call the listener *immediately* because
    // they are currently handling this exact type of event, so we'll
    // make sure the browser is done handling the current click event,
    // if any, before we attach the listener.
    setTimeout(() => {
      document.body.addEventListener(CLICK, listener);
    }, 0);
  }
};

const search = behavior({
  [ CLICK ]: {
    [ BUTTON ]: showSearch,
  },
}, {
  init: (target) => {
    forEach(select(BUTTON, target), button => {
      toggleSearch(button, false);
    });
  },
  teardown: (target) => {
    // forget the last button clicked
    lastButton = undefined;
  },
});

/**
 * TODO for 2.0, remove this statement and export `navigation` directly:
 *
 * module.exports = behavior({...});
 */
const assign = require('object-assign');
module.exports = assign(
  el => search.on(el),
  search
);

},{"../config":39,"../events":40,"../utils/behavior":44,"../utils/select":46,"array-foreach":16,"object-assign":22,"receptor/ignore":27}],37:[function(require,module,exports){
'use strict';
const behavior = require('../utils/behavior');
const once = require('receptor/once');

const CLICK = require('../events').CLICK;
const PREFIX = require('../config').prefix;
const LINK = `.${PREFIX}-skipnav[href^="#"]`;

const setTabindex = function (event) {
  // NB: we know because of the selector we're delegating to below that the
  // href already begins with '#'
  const id = this.getAttribute('href').slice(1);
  const target = document.getElementById(id);
  if (target) {
    target.setAttribute('tabindex', 0);
    target.addEventListener('blur', once(event => {
      target.setAttribute('tabindex', -1);
    }));
  } else {
    // throw an error?
  }
};

module.exports = behavior({
  [ CLICK ]: {
    [ LINK ]: setTabindex,
  },
});

},{"../config":39,"../events":40,"../utils/behavior":44,"receptor/once":28}],38:[function(require,module,exports){
'use strict';
const behavior = require('../utils/behavior');
const validate = require('../utils/validate-input');
const debounce = require('lodash.debounce');

const change = function (event) {
  return validate(this);
};

const validator = behavior({
  'keyup change': {
    'input[data-validation-element]': change,
  },
});

/**
 * TODO for 2.0, remove this statement and export `navigation` directly:
 *
 * module.exports = behavior({...});
 */
const assign = require('object-assign');
module.exports = assign(
  el => validator.on(el),
  validator
);

},{"../utils/behavior":44,"../utils/validate-input":50,"lodash.debounce":21,"object-assign":22}],39:[function(require,module,exports){
module.exports = {
  prefix: 'usa',
};

},{}],40:[function(require,module,exports){
module.exports = {
  // This used to be conditionally dependent on whether the
  // browser supported touch events; if it did, `CLICK` was set to
  // `touchstart`.  However, this had downsides:
  //
  // * It pre-empted mobile browsers' default behavior of detecting
  //   whether a touch turned into a scroll, thereby preventing
  //   users from using some of our components as scroll surfaces.
  //
  // * Some devices, such as the Microsoft Surface Pro, support *both*
  //   touch and clicks. This meant the conditional effectively dropped
  //   support for the user's mouse, frustrating users who preferred
  //   it on those systems.
  CLICK: 'click',
};

},{}],41:[function(require,module,exports){
'use strict';
const elproto = window.HTMLElement.prototype;
const HIDDEN = 'hidden';

if (!(HIDDEN in elproto)) {
  Object.defineProperty(elproto, HIDDEN, {
    get: function () {
      return this.hasAttribute(HIDDEN);
    },
    set: function (value) {
      if (value) {
        this.setAttribute(HIDDEN, '');
      } else {
        this.removeAttribute(HIDDEN);
      }
    },
  });
}

},{}],42:[function(require,module,exports){
'use strict';
// polyfills HTMLElement.prototype.classList and DOMTokenList
require('classlist-polyfill');
// polyfills HTMLElement.prototype.hidden
require('./element-hidden');

},{"./element-hidden":41,"classlist-polyfill":17}],43:[function(require,module,exports){
'use strict';
const domready = require('domready');

/**
 * The 'polyfills' define key ECMAScript 5 methods that may be missing from
 * older browsers, so must be loaded first.
 */
require('./polyfills');

const uswds = require('./config');

const components = require('./components');
uswds.components = components;

domready(() => {
  const target = document.body;
  for (let name in components) {
    const behavior = components[ name ];
    behavior.on(target);
  }
});

module.exports = uswds;

},{"./components":33,"./config":39,"./polyfills":42,"domready":18}],44:[function(require,module,exports){
'use strict';
const assign = require('object-assign');
const forEach = require('array-foreach');
const Behavior = require('receptor/behavior');

const sequence = function () {
  const seq = [].slice.call(arguments);
  return function (target) {
    if (!target) {
      target = document.body;
    }
    forEach(seq, method => {
      if (typeof this[ method ] === 'function') {
        this[ method ].call(this, target);
      }
    });
  };
};

/**
 * @name behavior
 * @param {object} events
 * @param {object?} props
 * @return {receptor.behavior}
 */
module.exports = (events, props) => {
  return Behavior(events, assign({
    on:   sequence('init', 'add'),
    off:  sequence('teardown', 'remove'),
  }, props));
};

},{"array-foreach":16,"object-assign":22,"receptor/behavior":23}],45:[function(require,module,exports){
// https://stackoverflow.com/a/7557433
function isElementInViewport (el, win=window,
                              docEl=document.documentElement) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (win.innerHeight || docEl.clientHeight) &&
    rect.right <= (win.innerWidth || docEl.clientWidth)
  );
}

module.exports = isElementInViewport;

},{}],46:[function(require,module,exports){
'use strict';

/**
 * @name isElement
 * @desc returns whether or not the given argument is a DOM element.
 * @param {any} value
 * @return {boolean}
 */
const isElement = value => {
  return value && typeof value === 'object' && value.nodeType === 1;
};

/**
 * @name select
 * @desc selects elements from the DOM by class selector or ID selector.
 * @param {string} selector - The selector to traverse the DOM with.
 * @param {Document|HTMLElement?} context - The context to traverse the DOM
 *   in. If not provided, it defaults to the document.
 * @return {HTMLElement[]} - An array of DOM nodes or an empty array.
 */
module.exports = function select (selector, context) {

  if (typeof selector !== 'string') {
    return [];
  }

  if (!context || !isElement(context)) {
    context = window.document;
  }

  const selection = context.querySelectorAll(selector);
  return Array.prototype.slice.call(selection);
};

},{}],47:[function(require,module,exports){
/**
 * Flips given INPUT elements between masked (hiding the field value) and unmasked
 * @param {Array.HTMLElement} fields - An array of INPUT elements
 * @param {Boolean} mask - Whether the mask should be applied, hiding the field value
 */
module.exports = (field, mask) => {
  field.setAttribute('autocapitalize', 'off');
  field.setAttribute('autocorrect', 'off');
  field.setAttribute('type', mask ? 'password' : 'text');
};

},{}],48:[function(require,module,exports){
'use strict';
const forEach = require('array-foreach');
const resolveIdRefs = require('resolve-id-refs');
const select = require('./select');
const toggleFieldMask = require('./toggle-field-mask');

const CONTROLS = 'aria-controls';
const PRESSED = 'aria-pressed';
const SHOW_ATTR = 'data-show-text';
const HIDE_ATTR = 'data-hide-text';

/**
 * Replace the word "Show" (or "show") with "Hide" (or "hide") in a string.
 * @param {string} showText
 * @return {strong} hideText
 */
const getHideText = showText => {
  return showText.replace(/\bShow\b/i, show => {
    return ('S' === show[ 0 ] ? 'H' : 'h') + 'ide';
  });
};

/**
 * Component that decorates an HTML element with the ability to toggle the
 * masked state of an input field (like a password) when clicked.
 * The ids of the fields to be masked will be pulled directly from the button's
 * `aria-controls` attribute.
 *
 * @param  {HTMLElement} el    Parent element containing the fields to be masked
 * @return {boolean}
 */
module.exports = el => {
  // this is the *target* state:
  // * if the element has the attr and it's !== "true", pressed is true
  // * otherwise, pressed is false
  const pressed = el.hasAttribute(PRESSED)
    && el.getAttribute(PRESSED) !== 'true';

  const fields = resolveIdRefs(el.getAttribute(CONTROLS));
  forEach(fields, field => toggleFieldMask(field, pressed));

  if (!el.hasAttribute(SHOW_ATTR)) {
    el.setAttribute(SHOW_ATTR, el.textContent);
  }

  const showText = el.getAttribute(SHOW_ATTR);
  const hideText = el.getAttribute(HIDE_ATTR) || getHideText(showText);

  el.textContent = pressed ? showText : hideText;
  el.setAttribute(PRESSED, pressed);
  return pressed;
};

},{"./select":46,"./toggle-field-mask":47,"array-foreach":16,"resolve-id-refs":29}],49:[function(require,module,exports){
'use strict';
const EXPANDED = 'aria-expanded';
const CONTROLS = 'aria-controls';
const HIDDEN = 'aria-hidden';

module.exports = (button, expanded) => {

  if (typeof expanded !== 'boolean') {
    expanded = button.getAttribute(EXPANDED) === 'false';
  }
  button.setAttribute(EXPANDED, expanded);

  const id = button.getAttribute(CONTROLS);
  const controls = document.getElementById(id);
  if (!controls) {
    throw new Error(
      'No toggle target found with id: "' + id + '"'
    );
  }

  controls.setAttribute(HIDDEN, !expanded);
  return expanded;
};

},{}],50:[function(require,module,exports){
'use strict';
const dataset = require('elem-dataset');

const PREFIX = require('../config').prefix;
const CHECKED = 'aria-checked';
const CHECKED_CLASS = `${PREFIX}-checklist-checked`;

module.exports = function validate (el) {
  const data = dataset(el);
  const id = data.validationElement;
  const checkList = id.charAt(0) === '#'
    ? document.querySelector(id)
    : document.getElementById(id);

  if (!checkList) {
    throw new Error(
      `No validation element found with id: "${id}"`
    );
  }

  for (const key in data) {
    if (key.startsWith('validate')) {
      const validatorName = key.substr('validate'.length).toLowerCase();
      const validatorPattern = new RegExp(data[ key ]);
      const validatorSelector = `[data-validator="${validatorName}"]`;
      const validatorCheckbox = checkList.querySelector(validatorSelector);
      if (!validatorCheckbox) {
        throw new Error(
          `No validator checkbox found for: "${validatorName}"`
        );
      }

      const checked = validatorPattern.test(el.value);
      validatorCheckbox.classList.toggle(CHECKED_CLASS, checked);
      validatorCheckbox.setAttribute(CHECKED, checked);
    }
  }
};

},{"../config":39,"elem-dataset":19}]},{},[43,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
