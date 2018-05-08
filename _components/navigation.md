---
layout: styleguide-full-bleed
type: component
title: Navigation
lead: USAJOBS features a consistent header for top-level navigation across the site.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design Complete
</a>

<h6 class="usa-heading-alt"><span class="usa-label">New</span> Unauthenticated (v2)</h6>
<div class="preview full-bleed" id="code-1">
  {% include components/nav/v2/unauth.html %}
</div>
<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-1">
    Documentation
  </button>
  <div id="doc-1" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>Ensure the navigation system is keyboard accessible. Users should be able to tab through each link.</li>
      <li>Ensure the header which wraps the entire nav has the role set to "banner" and the nav must have a role set to "navigation". Refer to the <a href="https://www.w3.org/WAI/GL/wiki/Using_ARIA_landmarks_to_identify_regions_of_a_page">W3C ARIA landmarks documentation</a>.</li>
      <li>Ensure that the Account and Search menu toggles have the <a href="https://www.w3.org/TR/wai-aria/states_and_properties#aria-controls">aria-controls</a> attribute set to the ID name of the container which uses the <a href="https://www.w3.org/TR/wai-aria/states_and_properties#aria-expanded">aria-expanded</a> attribute set to false when hidden and true when expanded.</li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>This variation is full bleed and conforms to the larger 1600px site wide max width. It also shows help at narrow view ports.</li>
    </ul>

    <h4 class="usa-heading">Implementation</h4>
    <ul class="usa-content-list">
      <li>The user's first and last initials are used at the narrowest viewport widths. At the M breakpoint (600px) the full first name of the user is shown.</li>
      <li>Padding should be applied to the anchor element (<code>a</code>) to increase the tappable target size. The padding should also reach to the top and bottom of the navigation element.</li>
      <li>Padding around the first element (logo) should reach to the left edge of the page to enlarge the tappable target.</li>
      <li>Padding around the last element (Search) should reach to the right edge of the page to enlarge the tappable target.</li>
      <li>As the user types into the location field an auto-complete box should appear below the input field suggesting locations that match a known list of locations. <a href="https://ac.usajobs.gov/help/operations/acwd">API for locations</a>.</li>
      <li>As the user types into the keyword field an auto-complete box should appear below the input field suggesting job titles, occupations, agencies &amp; departments, and series that match known lists of those items.</li>
      <li>The active state for search is a distinct treatment as it opens the search drawer that contains the search form.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt"><span class="usa-label">New</span> Authenticated (v2)</h6>
<div class="preview full-bleed" id="code-2">
  {% include components/nav/v2/auth.html %}
</div>
<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-2">
    Documentation
  </button>
  <div id="doc-2" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use this variation when the user is authenticated via login.gov.</li>
      <li>NOTE: This variation is depicting secondary navigation as well for when the user is on their home, profile, documents, or preferences pages.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt">Unauthenticated - Banner - post-transition</h6>
<div class="preview full-bleed" id="code-3">
  {% include components/nav/v2/unauth-banner.html %}
</div>
<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-3">
    Documentation
  </button>
  <div id="doc-3" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>When the banner is in focus it should be dismissible via the keyboard.</li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use the unauthenticated banner variation to explain to users our move to login.gov.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt"><span class="usa-label">New</span> Open Opportunities - Unauthenticated</h6>
<div class="preview full-bleed" id="code-8">
  {% include components/nav/v2/open-opps-unauth.html %}
</div>
<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-8">
    Documentation
  </button>
  <div id="doc-8" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use this variation for the Open Opportunities application.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt"><span class="usa-label">New</span> Open Opportunities - Authenticated</h6>
<div class="preview full-bleed" id="code-9">
  {% include components/nav/v2/open-opps-auth.html %}
</div>
<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-9">
    Documentation
  </button>
  <div id="doc-9" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use this variation for the Open Opportunities application.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt">Logo-only</h6>
<div class="preview full-bleed" id="code-5">
  {% include components/nav/logo-only.html %}
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-4">
    Documentation
  </button>
  <div id="doc-4" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use the Logo-only variation when the user should be prevented from navigating away from the current page. Examples inlcude the sign-in and create account pages.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt">Test &amp; UAT environments</h6>
<div class="preview full-bleed" id="code-6">
  {% include components/nav/v2/test.html %}
</div>
<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-5">
    Documentation
  </button>
  <div id="doc-5" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use this variation in the test and UAT environments to make clear to any user of those systems that this is not the production system.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt">Agency Talent Portal</h6>
<div class="preview" id="code-7">
  {% include components/nav/atp.html %}
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-6">
    Documentation
  </button>
  <div id="doc-6" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>
        For use in the Agency Talent Portal product.
      </li>
    </ul>
  </div>
</div>
