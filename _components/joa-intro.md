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

<div class="preview" style="background-color: #f1f1f1;">
  {% include components/joa/v1.5/intro.html %}
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
      <li><strong>Grade - multiple</strong> - When a position is open across more than one grade level a dash should be used to separate the lowest and highest grade. For example, "05 - 09".</li>
      <li><strong>Grade - single</strong> - When a position is open in only one grade level only a single grade level should be shown. For example, "05".</li>
      <li><strong>Series</strong> number is shown, with leading zero when appropriate, in front of the series name.</li>
    </ul>

    <h5>Locations</h5>
    <ul class="usa-content-list">
      <li>4 locations are displayed at all view points with any additional locations hidden behind a <a href="{{ site.baseurl }}/reveal/">reveal</a> show more/less toggle. Expanding the toggle reveals all additional locations. Collapsing the toggle hides those additional locations.</li>
      <li>The number of vacancies is required via section 1105 of Title 5, U.S.C. and thus must be specified and displayed next to each duty location.</li>
    </ul>

    <h5>Application closing types</h5>
    <p>There are four ways that an application can close. The following lists those types and provides the text that should be shown:</p>
    <ul class="usa-content-list">
      <li>Closing date: No additional text is shown.</li>
      <li>Closing time: You must complete this application process and submit any required documents by xx:xx pm. Eastern Time on the closing date of this announcement.</li>
      <li>Open continuous: This job is open continuously and will remain open for an extended period of time. We will fill jobs as they become available. <a href="http://usajobs.github.io/Help/how-to/job-announcement/closing-types/#open-continuous">Learn more</a>.</li>
      <li>Applicant cut-off: This job will close when we have received <strong>[ApplicationCutOff #] applications</strong> which may be sooner then the closing date. <a href="http://usajobs.github.io/Help/how-to/job-announcement/closing-types/#applicant-cut-off">Learn more</a>. (This variation is shown above.)</li>
    </ul>

    <h5>Second announcement type</h5>
    <p>
      If a second announcement is also open to different set of hiring paths then that announcement is indicated below the "This job is open to" section.
    </p>
    <ul class="usa-content-list">
      <li>
        If the second announcement is open to multiple hiring paths then the top most in the list is selected. For example, if a job is open to only merit promotion eligible Federal Employees and is currently being displayed and that same job is open to the public and an addition hiring path the second announcement link would indicate the open to the public icon and text. The ordering for selection is as shown above.
      </li>
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
