---
layout: styleguide
type: component
title: Form controls
lead: USAJOBS adds or claifies design for contextual help, required/optional field handling, and legend.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity incomplete">
  Incomplete
</a>

<h2 class="usa-heading" id="text-inputs">Contextual Help</h2>
<p class="usa-font-lead">
  Contextual help provides assistance in clarifying the intent of a question or form input.
</p>

<h6 class="usa-heading-alt">Brief help</h6>
<div class="preview">
  <label for="input-type-text">Text input label</label>
  <input id="input-type-text" name="input-type-text" type="text">
  <p class="usajobs-form__help-brief">
    Some concise help text that explains the intent of the form input.
  </p>
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
      <li>A concise explanation of the intent of the question or data being requested can be provided without the need for deeper explanation.</li>
      <li>As a replacement for placeholder text in order to provide an example of the type of data being requested.</li>
    </ul>
    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
      <li>When a more detailed explanation is needed.</li>
      <li>When you want to provide supporting documentation or policy.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt">Detailed Help</h6>
<div class="preview">
  <label for="input-type-text">Text input label</label>
  <input id="input-type-text" name="input-type-text" type="text">
  <div class="usa-accordion-bordered usajobs-form__help-detailed">
    <ul class="usa-unstyled-list">
      <li>
        <div class="usajobs-accordion"> 
          <button class="usa-accordion-button usajobs-form__help-detailed-trigger" aria-expanded="false" aria-controls="collapsible-0">
            <span class="fa fa-question-circle"></span> Help me answer
          </button>
          <div id="collapsible-0" aria-hidden="true" class="usa-accordion-content">
            <p>[Detailed help explaining the intent of the data request.]</p>
        </div>
      </li>
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
      <li>A detailed explanation of the data being requested is necessary.</li>
      <li>Additional context for why the request is being made is desired.</li>
      <li>To replace the existing help icon treatment that links to the Resource Center. It is preferred to bring the help onto the page, ideally with an AJAX request to pull the content from the Resource Center into this help section.</li>
    </ul>
    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
      <li>A more detailed explanation is not necessary.</li>
    </ul>
  </div>
</div>
