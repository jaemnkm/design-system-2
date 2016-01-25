---
layout: styleguide
type: component
title: Form controls
lead: USAJOBS adds or clarifies design for contextual help, required/optional field handling, and legend.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity under_review">
  Under Review
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
    <h5>Guidance</h5>
    <ul class="usa-content-list">
      <li>Help text must not begin with a "-" (dash) or other punctuation.</li>
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

<h2 class="usa-heading" id="text-inputs">Labels</h2>
<p>
  Labels are simple text descriptions of data being requested and are found in close proximity to a form input that requests that data.
</p>
<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>Guidance</h5>
    <ul class="usa-content-list">
      <li>Labels are concise text that describes the data being requested by a form input.</li>
      <li>Labels should appear directly above form controls as seen in the <a href="https://playbook.cio.gov/designstandards/form-controls/">U.S. Web Design Standards</a>.
      <li>Labels do NOT end in a colon.</li>
    </ul>
  </div>
</div>

<h6 id="usajobs-form-field-indicator-documentation" class="usa-heading-alt">Required/Optional Field Indicator</h6>
<div class="preview">
  <label for="first-name">First name <span class="usa-additional_text">Optional</span></label>
  <input id="first-name" name="first-name" type="text">
  <label for="last-name">Last name <span class="usa-additional_text">Required</span></label>
  <input id="last-name" name="last-name" type="text" required="" aria-required="true">
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
      <li>When the majority of form fields are either required or optional and thus specific fields must be identified as the opposite (optional or required).</li>
      <li>In place of a red asterisk.</li>
    </ul>
    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
      <li>If all fields are required or optional consider the <a href="#usajobs-form-legend-documentation">form legend</a> to communicate that to the user.</li>
    </ul>
  </div>
</div>

<h6 id="usajobs-form-legend-documentation" class="usa-heading-alt">Legend</h6>
<div class="preview">
  <form name="example" aria-labelled-by="usajobs-form-heading-0" class="usajobs-form">
    <h2 id="usajobs-form-heading-0" class="usajobs-form__title">
      [Form Title]
      <span class="usajobs-form__legend">All fields are required</span>
    </h2>
    <fieldset>
      <label for="first-name">First name</label>
      <input id="first-name" name="first-name" type="text">
      <label for="last-name">Last name</label>
      <input id="last-name" name="last-name" type="text"> 
    </fieldset> 
  </form>
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
      <li>When all fields for a form are required.</li>
    </ul>
    <h5>When not to use</h5>
    <ul class="usa-content-list">
      <li>For forms where the majority of fields are required or optional use the <a href="#usajobs-form-field-indicator-documentation">Required/Optional Field Indicator</a> to label the state of the fields in the minority.</li>
    </ul>
  </div>
</div>
