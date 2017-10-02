---
layout: styleguide
type: component
title: Job announcement - Similar jobs
lead: Job seekers can navigate to other jobs in the same series or related occupations
control-number: '448015600'
---

{% assign job = site.data.job-announcements[page.control-number] %}

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_review">
  Design review
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
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>The links in this section MUST be either bold or 19px in order to meet contrast requirements given that the link color is blue and the background is blue.</li>
    </ul>

    <h4 class="usa-heading">Guidelines</h4>
    <ul class="usa-content-list">
      <li>This is a new section (as of release 6.6) and a revision to that section that adds mission critical occupations.</li>
    </ul>
    <h5>Job family (Series)</h5>
    <ul class="usa-content-list">
      <li>Displays each series associated with the job.</li>
      <li>The series will have a blue dot prefix (triggered by the class <code>.is-mco</code>) when it is a series defined as mission critical. The list of mission critical series matches the series displayed on the landing page.</li>
    </ul>

    <h5>Related occupations</h5>
    <ul class="usa-content-list">
      <li>Displays up to 6 SOC occupations that match the job and the count of total jobs, including this one, that search returns for that occupation.</li>
    </ul>

    <h5>Explore...</h5>
    <ul class="usa-content-list">
      <li>Highlights mission critical occupations using either the <a href="https://usajobs.github.io/ATP-Support/job-announcement-playbook/details/similar-jobs/#mission-critical-code">Mission critical code</a> or a fall-back URL as defined below.
      </li>
      <li>
        If there are 1 or more jobs tagged using the Mission critical code then the link points to search results with that filter applied. A pill is added to represent that tag using the value of the tag name.
      </li>
      <li>
        If there are 0 jobs tagged using the Mission critical code then each tag has a "fallback" URL as follows:
        <ol>
          <li>Cybersecurity: https://www.cybercareers.gov/</li>
          <li>Data Science: https://www.usajobs.gov/careerfields/data-science/</li>
          <li>Economist: https://www.usajobs.gov/Search/ExploreOpportunities/?Series=0110</li>
          <li>Grants Management: https://www.usajobs.gov/Search?j=1109</li>
          <li>Privacy: https://www.fpc.gov/</li>
          <li>Program/Project Management: https://www.usajobs.gov/Search?j=0340</li>
          <li>STEM: No fallback - do not show the link</li>
        </ol>
      </li>
    </ul>
    <h5>Job that are in high demand... (Key)</h5>
    <ul class="usa-content-list">
      <li>The key for series should only appear when there is a series in the job family list that is defined as mission critical.</li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Appears between the <strong>"Duties"</strong> and <strong>"Requirements"</strong> sections of the job announcement.</li>
    </ul>
  </div>
</div>
