---
layout: styleguide
component-layout: profile
type: component
title: Secondary Navigation
lead: Secondary navigation allows for movement within a section or page.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design Complete
</a>

<h6 class="usa-heading-alt"><span class="usa-label">New</span> Horizontal (Profile v3)</h6>
<div class="preview compact">
  <section class="usajobs-canvas">
    {% include components/secondary-nav/v3/account.html %}
  </section>
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
      <li>
      </li>
    </ul>

    <h5>When NOT to use</h5>
    <ul class="usa-content-list">
      <li>Do not use this specific variation outside of Account.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt">Vertical (Profile v2)</h6>
<div class="preview compact">
  <section class="usajobs-canvas">
    {% include components/secondary-nav/v2/account.html %}
  </section>
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
      <li>The vertical variation of the secondary navigation replaces the horizontal variation within Account.</li>
      <li>Use when showing both required sub-sections and completion of sub-sections is necessary.</li>
    </ul>

    <h5>When NOT to use</h5>
    <ul class="usa-content-list">
      <li>Do not use this specific variation outside of Account.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt">Horizontal (Profile v1)</h6>
<div class="preview">
  <section class="usajobs-canvas">
    <h1>Profile</h1>
    {% include components/secondary-nav/v1/account.html %}
    <div class="content">
      <h2>Contact Information</h2>
    </div>
  </section>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-0">
    Documentation
  </button>
  <div id="doc-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Guidelines</h4>
    <ul class="usa-content-list">
      <li>Do not use icons alongside nor within the text of the navigation labels</li>
      <li>Do not use the required asterisk alongside nor within the text of the navigation labels. Please do use the <a href="{{ site.baseurl }}/form-controls#usajobs-form-legend-documentation">form legend</a> component to indicate that the entire section is required.</li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use secondary navigation to allow the user to move laterally to other sub-sections of a section. For example, to move between sub-sections of their Profile.</li>
    </ul>

    <h5>When NOT to use</h5>
    <ul class="usa-content-list">
      <li>Avoid using this component to move within the same page. Typography, including clear section headers, should be enough to allow the user to navigate the page.</li>
    </ul>
  </div>
</div>
