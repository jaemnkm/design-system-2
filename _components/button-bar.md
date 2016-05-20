---
layout: styleguide
type: component
title: Button bar
lead: A container for buttons, links, and calls-to-action.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design Complete
</a>

<div class="preview">
  <h6 class="usa-heading-alt">Default</h6>
  <div class="usajobs-button_bar">
    <div class="usajobs-button_bar__body">
       <button id="save_and_continue" class="usa-button-big usa-button-primary usajobs-button_bar__save">
        Save &amp; Continue
      </button>
      <button id="previous" class="usa-button usa-button-big usa-button-gray">
        Previous
      </button>
    </div>
  </div>

  <h6 class="usa-heading-alt">Slim</h6>
  <div class="usajobs-button_bar--slim">
    <div class="usajobs-button_bar__body">
      <a href="#success" class="usa-button-big usa-button-primary usajobs-button_bar__save">
        Save
      </a>
    </div>
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
      <li>
        Use at the bottom of forms to demarcate the end of the form and highlight the call to action (save, update, next, etc.).
      </li>
      <li>
        Use the default variation to associate two buttons together (previous/next, save/cancel, etc.).
      </li>
      <li>
        Use the slim variation when there is only one button.
      </li>
    </ul>
  </div>
</div>
