---
layout: styleguide
type: component
title: Job announcement introduction
lead: Users can get an overview of a job announcement including clarification on who is eligible to apply to this announcement.
control-number: '468841900'
---

{% assign job = site.data.job-announcements[page.control-number] %}

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity under_review">
  Under Review
</a>

<div class="preview compact">
  {% include components/joa/v1.2/intro.html %}
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Guidelines</h4>
    <ul class="usa-content-list">
      <li></li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>
        Use inside a job announcement to introduce the job to the user and to explain who is eligible to apply to this announcement.
      </li>
    </ul>
  </div>
</div>
