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

<div class="preview">
  {% include components/joa/v1.2/intro.html %}
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>The links in the "This job is open to" section MUST be bold in order to meet contrast requirements given that the link color is blue and the background is blue.</li>
    </ul>

    <h4 class="usa-heading">Guidelines</h4>
    <ul class="usa-content-list">
      <li><strong>"This job is open to"</strong> is a new section that begins to replace the "Who May Apply" section.</li>
      <li><strong>Who May Apply</strong> continues to appear on the page. It is now found <a href="{{ site.baseurl }}/job_announcement/#whomayapply">at the bottom of the Overview section</a>. There is a link inside of the section that anchors back to "This job is open to" in order to help users through this transitional period where both sections are present. Once agencies have had a chance to adjust to the SIF changes that require the new list of hiring paths and move other "pre-requisites" to their appropriate sections the Who May Apply section will be removed.</li>
      <li><strong>Open &amp; closing dates</strong> are now combined into one field. The clock icon should appear yellow when the closing date is within a week and red when it is within 48 hours.</li>
      <li><strong>Salary</strong> values should not show cents when the rate is per year. For example, "$100,000" instead of "$100,000.00".</li>
      <li><strong>Pay scale</strong> - There must be a space between pay scale and grade(s).</li>
      <li><strong>Grade - multiple</strong> - When a position is open across more than one grade level a dash should be used to separate the lowest and highest grade. For example, "O5 - 09".</li>
      <li><strong>Grade - single</strong> - When a position is open in only one grade level only a single grade level should be shown. For example, "O5".</li>
      <li><strong>Series</strong> number is shown, with leading zero when appropriate, in front of the series name.</li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>
        Use inside a job announcement to introduce the job to the user and to explain who is eligible to apply to this announcement.
      </li>
      <li>
        Not all hiring paths in the "This job is open to" section require meta text describing that eligibility. In testing we found that users were able to self-identify into one or more of these categories. The paths that do have meta text required either a bit of clarification for some sub-sets of job seekers or text to further clarify the label.
      </li>
    </ul>
  </div>
</div>
