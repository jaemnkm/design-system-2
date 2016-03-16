---
layout: styleguide
type: component
title: JOA Summary
lead: Summary of the Job Opportunity Announcement (JOA)
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity deployed">
  Deployed
</a>

<div class="preview">
  <h6 class="usa-heading-alt">Variation (v1)</h6>
  <div class="usajobs-joa_summary v1">
    <div class="usajobs-joa_summary-body">
      <p class="intro">Applying to:</p>
      <ul class="detail">
        <li class="job_title"><a href="#joa">Animal Caretaker</a></li>
        <li class="attr">Department of Veteran Affairs</li>
        <li class="attr">Closes 10/15/2015</li>
      </ul>
      <!-- a class="joa-save">Save Job</a -->
      <a class="joa-anchor" href="#joa-who_may_apply">Who may apply</a>
    </div>
  </div>

  <h6 class="usa-heading-alt">Text wrap demonstration</h6>
  <div class="usajobs-joa_summary v1">
    <div class="usajobs-joa_summary-body">
      <p class="intro">Applying to:</p>
      <ul class="detail">
        <li class="job_title"><a href="#joa">[Job Title that might be quite long and wrap onto a second line]</a></li>
        <li class="attr">[Agency name that can be up to one hundred characters. Agency name that can be one hundred characters.] </li>
        <li class="attr">Closes 10/15/2015</li>
      </ul>
      <!-- a class="joa-save">Save Job</a -->
      <a class="joa-anchor" href="#joa-who_may_apply">Who may apply</a>
    </div>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Guidelines</h4>
    <ul class="usa-content-list">
      <li>The job title opens the JOA in a new tab.</li>
      <li>The "Who may apply" link opens the JOA in a new tab and anchors to the Who May Apply section within the JOA.</li>
      <li>The level one agency should be the agency listed.</li>
      <li>The date should be in the format MM/DD/YYYY.</li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>After a user has selected a job listing the JOA Summary should be present as they learn more or apply for the job.</li>
    </ul>
  </div>
</div>
