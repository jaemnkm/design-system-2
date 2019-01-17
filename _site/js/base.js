/*global Modernizr */

var USAJOBS = USAJOBS || {};
USAJOBS.Base = USAJOBS.Base || {};

USAJOBS.Base = (function (window) {
  "use strict";

  var $ = window.jQuery,

  svgFallback = function () {
    if (!Modernizr.svg) {
      $("img[src$='.svg']")
        .attr("src", "/" + $(this).attr("src").split("/").pop().replace("svg", "png"));
    }
  },

  initialize = function () {
    svgFallback();
  };
  // end var

  return {
    init: initialize
  };
}(window));

$(document).ready(function () {
  "use strict";

  USAJOBS.Base.init();
});
