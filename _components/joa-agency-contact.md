---
layout: styleguide
type: component
title: Job announcement agency contact information
lead: Job seekers can find out when and how to contact an agency about a job.
control-number: '468841900'
---

{% assign job = site.data.job-announcements[page.control-number] %}

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design complete
</a>

<div class="preview" style="background-color: #f1f1f1;">
  {% include components/joa/v1.6/agency.html %}
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Guidelines</h4>
    <ul class="usa-content-list">
      <li><strong>"Agency contact information"</strong> is a sub-section of the How to apply section.</li>
      <li>v1.6 adds a <strong>"When to contact the agency"</strong> section that details when and why to contact an agency about a job.</li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use inside the <strong>"How to apply"</strong> section and the agency modal.</li>
    </ul>
  </div>
</div>
