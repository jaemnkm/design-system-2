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
    $target = $object.find('#' + $input.attr('aria-controls'));

  $target.slideDown(function () {
    $target.attr('aria-hidden', 'false');
  });
});

$form_hide_fields.on('change', function() {
  var $input = $(this),
    $object = $input.parent().closest('[data-object="usajobs-form"]'),
    $target = $object.find('#' + $input.attr('aria-controls'));

  $target.slideUp(function () {
    $target.attr('aria-hidden', 'true');
  });
});
