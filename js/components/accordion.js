/**
 * Accordion
 *
 * An accordion component.
 *
 * @param {jQuery} $el A jQuery html element to turn into an accordion.
 */
function Accordion($el) {
  var self = this;
  this.$root = $el;
  this.$root.on('click', 'button', function(ev) {
    var action = $(this).data('button-action'),
      expanded;

    if (action != 'no-toggle') {
      expanded = JSON.parse($(this).attr('aria-expanded'));
      ev.preventDefault();
      self.hideAll();

      if (!expanded) {
        self.show($(this));
      }
    }
  });
}

Accordion.prototype.$ = function(selector) {
  return this.$root.find(selector);
};

Accordion.prototype.hide = function($button) {
  var selector = $button.attr('aria-controls'),
      $content = this.$('#' + selector);

  $button.attr('aria-expanded', false);
  $content.attr('aria-hidden', true);
};

Accordion.prototype.show = function($button) {
  var selector = $button.attr('aria-controls'),
      $content = this.$('#' + selector);

  $button.attr('aria-expanded', true);
  $content.attr('aria-hidden', false);

  /*
  Backing this out as we don't always want this behavior
  $('html, body').animate({
    scrollTop: $content.offset().top
  });
  */
};

Accordion.prototype.hideAll = function() {
  var self = this;
  this.$('button').each(function() {
    self.hide($(this));
  });
};

/**
 * accordion
 *
 * Initialize a new Accordion component.
 *
 * @param {jQuery} $el A jQuery html element to turn into an accordion.
 */
function accordion($el) {
  return new Accordion($el);
}

$(function() {
  $('[class^=usa-accordion]').each(function() {
    accordion($(this));
  });
});

