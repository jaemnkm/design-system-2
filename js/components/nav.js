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
