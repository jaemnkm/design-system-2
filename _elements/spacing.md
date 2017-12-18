---
layout: styleguide
type: element
title: Spacing
lead: USAJOBS defines a nonlinear, geometric progression of spacing to provide a consistent pattern.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design Complete
</a>


<h3>Progression</h3>
<div class="preview" id="progression">
  <div class="usajobs-spacing-example">
    <div class="usajobs-spacing-example__item">
      <div class="usajobs-spacing-example__space XS">&nbsp;</div>
      XS: 0.25rem/2.5px
    </div>
    <div class="usajobs-spacing-example__item">
      <div class="usajobs-spacing-example__space base">&nbsp;</div>
      Base: 0.5rem/5px
    </div>
    <div class="usajobs-spacing-example__item">
      <div class="usajobs-spacing-example__space S">&nbsp;</div>
      S: 1rem/10px - $size-base * 2
    </div>
    <div class="usajobs-spacing-example__item">
      <div class="usajobs-spacing-example__space default">&nbsp;</div>
      Default: 1.5rem/15px - $size-base * 3
    </div>
    <div class="usajobs-spacing-example__item">
      <div class="usajobs-spacing-example__space SM">&nbsp;</div>
      SM: 2rem/20px - $size-base * 4 (use sparingly if at all)
    </div>
    <div class="usajobs-spacing-example__item">
      <div class="usajobs-spacing-example__space M">&nbsp;</div>
      M: 3rem/30px - $size-base * 6
    </div>
    <div class="usajobs-spacing-example__item">
      <div class="usajobs-spacing-example__space L">&nbsp;</div>
      L: 4.5rem/45px - $size-base * 9
    </div>
    <div class="usajobs-spacing-example__item">
      <div class="usajobs-spacing-example__space XL">&nbsp;</div>
      XL: 6rem/60px - $size-M * 2
    </div>
    <div class="usajobs-spacing-example__item">
      <div class="usajobs-spacing-example__space XXL">&nbsp;</div>
      XXL: 7.5rem/75px - $size-default * 5
    </div>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-0">
    Documentation
  </button>
  <div id="doc-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Guidelines</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>All designs and implementations using the USAJOBS design system MUST align to this spacing progression in order for the inter-relationships of components to operate properly.</li>
      <li>The SM (2rem/20px) is an exception that we're trying to remove. Any instances that can be removed should be replaced by either the default or M size.</li>
    </ul>
  </div>
</div>
