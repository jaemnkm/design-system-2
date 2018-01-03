---
layout: styleguide
type: component
title: Progress indicator
lead: The progress indicator provides the user with context for where they are within a process.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design Complete
</a>

<p>
  The progress indicator is currently in use only within the application guide process. However, it could be reused in other contexts.
</p>

<div class="preview" id="code-1">
  <h6 class="usa-heading-alt">Steps</h6>
  {% include components/progress-indicator/step.html %}
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
      <li>Use a progress indicator when you need the user to complete several steps in a process.</li>
    </ul>
    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
      <li>Do not use this progress indicator for a process with less than 3 steps.</li>
    </ul>
  </div>
</div>

<div class="preview" id="code-2">
  <h6 class="usa-heading-alt">Application guide</h6>
  {% include components/progress-indicator/app-guide.html %}
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
      <li>Use this variation in the application guide process in conjunction with the JOA summary component.</li>
    </ul>
  </div>
</div>
