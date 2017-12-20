---
layout: styleguide-full-bleed
type: component
title: Footer
lead: USAJOBS uses a large footer that incorporates navigation.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design Complete
</a>

<h6 class="usa-heading-alt">Core - Authenticated (v3)</h6>
<div class="preview full-bleed" id="code-1">
  {% include components/footer/v3/authenticated.html %}
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-0">
    Documentation
  </button>
  <div id="doc-0" aria-hidden="false" class="usa-accordion-content">
    <p>Our "fat footer" provides secondary navigation for the site. It reflects the new structure of the site and provides a quick and easy way for users to jump to a specific sub-section. It also sensitizes users to the new structure by exposing sub-sections that help explain what can be found in each area of the site.</p>
    <h4 class="usa-heading">Accessibility</h4>
    <p>
      Please refer to the <a href="https://playbook.cio.gov/designstandards/footers/">U.S. Web Design Standards</a> for accessibility and usability guidance.
    </p>

    <h4 class="usa-heading">Implementation</h4>
    <ul class="usa-content-list">
      <li>The "Return to top" link should be an anchor link to the page title (h1) of the current page.</li>
      <li>The "Sign Out" link is dropped when the user is not authenticated.</li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>The footer should appear on all pages excluding the Application Guide.</li>
    </ul>

    <h5>Do not use when</h5>
    <ul class="usa-content-list">
      <li>Do NOT add the footer to the Application Guide path. When users are focused on completing their job application we do not want to distract them nor take them off that path.</li>
    </ul>

    <h4 class="usa-heading">Version details</h4>
    <ul class="usa-content-list">
      <li>Version 3 reverts the use of font awesome and utilizes SVGs with PNG fallbacks. In order to remove font awesome versions 1 and 2 of the footer are no longer supported.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt">Core - Job Announcement variation (v3)</h6>
<div class="preview full-bleed" id="code-2">
  {% include components/footer/v3/authenticated-joa.html %}
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-1">
    Documentation
  </button>
  <div id="doc-1" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>This variation of the footer is used on the job announcement page as it contains a different set of small links at the bottom of the page which are required to include.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt">Open Opportunities (v3)</h6>
<div class="preview full-bleed" id="code-2">
  {% include components/footer/v3/open-opps.html %}
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-1">
    Documentation
  </button>
  <div id="doc-1" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>This variation of the footer is used in the Open Opportunities application.</li>
    </ul>
  </div>
</div>
