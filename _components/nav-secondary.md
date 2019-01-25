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

<div class="preview compact">
  <section class="usajobs-canvas">
    <h6 class="usa-heading-alt">Horizontal (Profile v3)</h6>
    {% include components/nav/secondary/v3/account.html %}

    <h6 class="usa-heading-alt">Horizontal (Help v3)</h6>
    {% include components/nav/secondary/v3/help.html %}

    <h6 class="usa-heading-alt">
      <span class="usa-label">New</span> Horizontal (Profile v3 for Open Opps users)
    </h6>
    <div style="background-color: #f1f1f1; padding-bottom: 5rem;">
      {% include components/nav/secondary/v3/account-open-opps.html %}
    </div>

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
        Use when the Account name (Profile v3 variation) or Help (Help v3 variation) are selected in the <a href="{{ site.baseurl }}/navigation/">top navigation</a>, respectively. Use the Profile v3 for Open Opps users variation when a user is in an Open Opps session.
      </li>
      <li>Both variations should be fixed to the top of the viewport as the user scrolls.</li>
      <li>The Open Opps variation should navigate the user back to their Open Opps profile or, failing that, https://openopps.usajobs.gov/home</li>
    </ul>

    <h5>When NOT to use</h5>
    <ul class="usa-content-list">
      <li>Do not use this specific variation outside of Account and Help.</li>
    </ul>

  </div>
</div>

<h6 class="usa-heading-alt">Horizontal (Profile v1)</h6>
<div class="preview">
  <section class="usajobs-canvas">
    <h1>Profile</h1>
    {% include components/nav/secondary/v1/account.html %}
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
