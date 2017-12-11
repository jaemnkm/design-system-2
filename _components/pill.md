---
layout: styleguide
type: component
title: Pills
lead: Pills provide a visually consistent way to indicate state throughout our applications.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design Complete
</a>

<p>
  We use pills to indicate the status of a job application, an opportunity, or a search.
</p>

<div class="preview" id="code-1">
  <h6 class="usa-heading-alt">Elongated pill - Application status</h6>
  {% include components/pills/application-status.html %}

  <h6 class="usa-heading-alt">Elongated pill - Opportunity status</h6>
  {% include components/pills/opportunity-status.html %}
</div>
<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-0">
    Documentation
  </button>
  <div id="doc-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use pills when you need to indicate the state of an object/component</li>
    </ul>
    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
      <li>Do not use pills for non-state or status.</li>
    </ul>
  </div>
</div>

<div class="preview" id="code-2">
  <h6 class="usa-heading-alt">Stocky pill - Search</h6>
  {% include components/pills/search.html %}
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
      <li>Use this variation of pill for indicating the state of a search or transaction (transient state).</li>
      <li>The green variation here represents a value that came from the user's profile preferences. The gray variation is a value matches the value of a filter that the user has applied to their search results.</li>
    </ul>
    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
      <li>Do not use pills for non-state or status.</li>
    </ul>
  </div>
</div>
