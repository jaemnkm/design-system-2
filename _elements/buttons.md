---
layout: styleguide
type: element
title: Buttons
lead: USAJOBS alters the disabled button and adds a secondary button style.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design Complete
</a>

<p>USAJOBS extends the <a href="https://playbook.cio.gov/designstandards/buttons">U.S. Web Design Standards buttons</a> with an alteration to the disabled button and an additional secondary button style.</p>

<h3 class="usa-heading">Disabled Button</h3>
<div class="preview" id="disabled-button">
  <h6 class="usa-heading-alt">Revised disabled button</h6>
  <div class="button_wrapper">
    <button class="usa-button-disabled" disabled>Default</button>
  </div>

  <h6 class="usa-heading-alt">Disabled button on Button Bar background variation</h6>
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
      aria-expanded="true" aria-controls="doc-0">
    Documentation
  </button>
  <div id="doc-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Why these deviations exist</h4>
    <ul class="usa-content-list">
      <li>
        Reducing the opacity of disabled buttons helped the affordance in cases where a button was employed as part of a large component (e.g. <a href="{{site.baseurl}}/document/">Document</a>).
      </li>
      <li>
        If the default disabled button is on a gray background it does not have enough contrast and affordance for being disabled.
      </li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use the default style for all disabled buttons.</li>
    </ul>
  </div>
</div>

<h3 class="usa-heading">Secondary Button</h3>
<div class="preview" id="secondary-button">
  <h6>Alert variation</h6>
  <div class="button_wrapper">
    <button class="usa-button usajobs-button-secondary-alert">Default</button>
    <button class="usa-button usajobs-button-secondary-alert usa-button-active">Active</button>
    <button class="usa-button usajobs-button-secondary-alert usa-button-hover">Hover</button>
    <button class="usa-button usajobs-button-secondary-alert usa-button-focus">Focus</button>
  </div>

  <h6>Alt - Gray variation</h6>
  <div class="button_wrapper">
    <button class="usa-button usajobs-button-gray">Default</button>
    <button class="usa-button usajobs-button-gray usa-button-active">Active</button>
    <button class="usa-button usajobs-button-gray usa-button-hover">Hover</button>
    <button class="usa-button usajobs-button-gray usa-button-focus">Focus</button>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-1">
    Documentation
  </button>
  <div id="doc-1" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>The alert secondary button is intended for destructive actions or actions that will take the user outside of USAJOBS.</li>
      <li>
        The gray button retains a button that had been in the U.S. Design System but was dropped. It's still in use on the site and we'll continue to support use when deemed appropriate.
      </li>
    </ul>
  </div>
</div>

<h3 class="usa-heading">Links as buttons</h3>
<div class="preview" id="links-as-buttons">
  <h6>Alert variation</h6>
  <div class="button_wrapper">
    <a href="#" class="usa-button usa-button-primary">Default</a>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-1">
    Documentation
  </button>
  <div id="doc-1" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use the <code>.usa-button-primary</code> class to style a link like a button.</li>
    </ul>
  </div>
</div>


<h3 id="button-select" class="usa-heading">Button select</h3>
<p class="lead">
  A call-to-action button that reveals a select menu and then executes an action.
</p>
<div class="preview" id="button-select">
    <select id="atp-projects" name="atp-projects" class="usajobs-button-select" data-placeholder="Save to project">
      <option value=""></option>
      <option value="1">Project ABC</option>
      <option value="2">Project BCD</option>
      <option value="3">Project CDE</option>
      <option value="4">Project DEF</option>
      <option value="5">Project EFG</option>
      <option value="6">Project FGH</option>
      <option value="7">Project GHI</option>
      <option value="8">Project HIJ</option>
      <option value="9">Project IJK</option>
      <option value="10">Project JKL</option>
      <option value="11">Project KLM</option>
      <option value="12">Project LMN</option>
      <option value="13">Project MNO</option>
      <option value="14">Project NOP</option>
      <option value="15">Project OPQ</option>
    </select>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-2">
    Documentation
  </button>
  <div id="doc-2" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>For micro-interactions where the user must select from a list and the act of making a selection takes immediate action.</li>
    </ul>
  </div>
</div>
