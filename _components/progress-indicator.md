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
  This progress indicator is currently in use only within the application guide process. However, it could be reused in other contexts.
</p>

<h6 class="usa-heading-alt">Progress indicator v1</h6>
<div class="preview" id="code-1">
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

<h6 class="usa-heading-alt">Progress indicator v1 in context of the Application guide</h6>
<div class="preview" id="code-2">
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

<h6 class="usa-heading-alt">Progress indicator alt v1</h6>
<p>
  This progress bar will be used in the new user on-boarding experience.
</p>

<div class="preview" id="code-3">
  <h6 class="usa-heading-alt">Step 1</h6>
  {% include components/progress-indicator/progress-bar.html step="1" %}

  <h6 class="usa-heading-alt">Step 2</h6>
  {% include components/progress-indicator/progress-bar.html step="2" %}

  <h6 class="usa-heading-alt">Step 3</h6>
  {% include components/progress-indicator/progress-bar.html step="3" %}
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-3">
    Documentation
  </button>
  <div id="doc-3" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use this progress indicator when the number of steps is small (less than 3 ideally) and there is not a need for the user to go back.</li>
    </ul>
    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
      <li>Do not use this progress indicator for a process with more than 3 steps.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt">Steps v1</h6>
<div class="preview" id="code-4">
  {% include components/progress-indicator/step-indicator.html %}
</div>
<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-4">
    Documentation
  </button>
  <div id="doc-4" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>
        Use the step indicators when you want to highlight steps but don't need a full progress indicator in the current context. For example, these step indicators are used in new user onboarding when showing an initial summary of the steps the user will go through on subsequent pages.
      </li>
    </ul>
    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
      <li>Do not use step indicators for other numbering contexts. An ordered list will suffice in most instances.</li>
      <li>Do not use step indicators instead of one of the progress indicators above.</li>
    </ul>

    <h4 class="usa-heading">Implementation</h4>
    <ul class="usa-content-list">
      <li>The steps utilize an ordered list to stick to semantic UI standards.</li>
    </ul>
  </div>
</div>
