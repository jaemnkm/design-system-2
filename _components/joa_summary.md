---
layout: styleguide
type: component
title: JOA Summary
lead: Summary of the Job Offer Announcement (JOA)
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity under_review">Under Review</a>

<div class="preview">
  <h6 class="usa-heading-alt">Default (v0)</h6>
  <div class="usajobs-joa_summary v0">
    <div class="usajobs-joa_summary-body">
      <ul class="detail">
        <li class="attr"><span class="name">Job:</span> <a href="#joa">Animal Caretaker</a></li>
        <li class="attr"><span class="name">Job Number:</span> ANS-16-CMC-1524181-BU-ORD</li>
        <li class="attr"><span class="name">Agency:</span> Smithsonian</li>
      </ul>
    </div>
  </div>


  <h6 class="usa-heading-alt">Variation (v1)</h6>
  <div class="usajobs-joa_summary v1">
    <div class="usajobs-joa_summary-body">
      <p class="intro">Applying to:</p>
      <ul class="detail">
        <li class="job_title"><a href="#joa">Animal Caretaker</a></li>
        <li class="attr">Department of Veteran Affairs</li>
        <li class="attr">Closes October 15, 2015</li>
      </ul>
      <!-- a class="joa-save">Save Job</a -->
      <a class="joa-anchor">Who may apply</a>
    </div>
  </div>

</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hilien="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>After a user has selected a job listing the JOA Summary should be present as they learn more or apply for the job.</li>
    </ul>
  </div>
</div>
