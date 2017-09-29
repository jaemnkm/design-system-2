---
layout: styleguide
type: component
title: Job announcement - Similar jobs
lead: Job seekers can navigate to other jobs in the same series or related occupations
control-number: '448015600'
---

{% assign job = site.data.job-announcements[page.control-number] %}

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity incomplete">
  Incomplete
</a>

<div class="preview">
  {% include components/joa/v1.6/occupations.html %}
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-0">
    Documentation
  </button>
  <div id="doc-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Guidelines</h4>
    <ul class="usa-content-list">
      <li>Forthcoming</li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Forthcoming</li>
    </ul>
  </div>
</div>
