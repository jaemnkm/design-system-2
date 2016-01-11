---
layout: styleguide
type: element
title: Buttons
lead: USAJOBS alters the disabled button and adds a secondary button style.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design Complete
</a>

<h3 class="usa-heading">Disabled Button</h3>
<div class="preview">
  <div class="button_wrapper">
    <button class="usa-button-disabled" disabled>Default</button>
  </div>

  <h6 class="usa-heading-alt">Disabled Button on Button Bar background variation</h6>
  <div class="usajobs-button_bar">
    <div class="usajobs-button_bar__body">
      <button type="submit" class="usa-button-big usa-button-primary usajobs-button_bar__save" disabled>
        Save &amp; Continue
      </button>
    </div>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Why these deviations exist</h4>
    <p>
      If the default disabled button is on a gray background it does not have enough contrast and affordance for being disabled. Reducing the opacity of the default button also helped us in unforseen cases such as the Document component where a button was employed.
    </p>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>
        When the disabled button sits on a gray background.
      </li>
    </ul>
  </div>
</div>

<h3 class="usa-heading">Secondary Buttons</h3>
<div class="preview">
  <h6>Alert variation</h6>
  <div class="button_wrapper">
    <button class="usa-button-big usajobs-button-secondary-alert">Default</button>
    <button class="usa-button-big usajobs-button-secondary-alert usa-button-active">Active</button>
    <button class="usa-button-big usajobs-button-secondary-alert usa-button-hover">Hover</button>
    <button class="usa-button-big usajobs-button-secondary-alert usa-button-focus">Focus</button>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>The alert secondary button is intended for destructive actions or actions that will take the user outside of USAJOBS.</li>
    </ul>
  </div>
</div>

