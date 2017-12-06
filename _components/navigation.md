---
layout: styleguide-full-bleed
type: component
title: Navigation
lead: USAJOBS features a consistent header for top-level navigation across the site.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design Complete
</a>

<h6 class="usa-heading-alt">Unauthenticated - Full bleed</h6>
<div class="preview" id="code-1">
  {% include components/nav/unauthenticated-full-bleed.html %}
</div>
<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-0">
    Documentation
  </button>
  <div id="doc-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>Ensure the side navigational system is keyboard accessible. Users should be able to tab through each link.</li>
      <li>Ensure the header which wraps the entire nav has the role set to "banner" and the nav must have a role set to "navigation". Refer to the <a href="https://www.w3.org/WAI/GL/wiki/Using_ARIA_landmarks_to_identify_regions_of_a_page">W3C ARIA landmarks documentation</a>.</li>
      <li>Ensure that the Account menu has the <a href="https://www.w3.org/TR/wai-aria/states_and_properties#aria-haspopup">aria-haspopup</a> attribute set to true. The menu must use the <a href="https://www.w3.org/TR/wai-aria/states_and_properties#aria-expanded">aria-expanded</a> attribute set to false when hidden and true when expanded.</li>
      <li>Ensure that the Search toggle has the <a href="https://www.w3.org/TR/wai-aria/states_and_properties#aria-controls">aria-controls</a> attribute set to the ID name of the search container which uses the <a href="https://www.w3.org/TR/wai-aria/states_and_properties#aria-expanded">aria-expanded</a> attribute set to false when hidden and true when expanded.</li>
    </ul>

    <h4 class="usa-heading">Implementation</h4>
    <ul class="usa-content-list">
      <li>The user's first and last initials are used at the narrowest viewport widths. At the M breakpoint (600px) the full first name of the user is shown.</li>
      <li>Help is hidden until the M breakpoint (600px).</li>
      <li>Padding should be applied to the anchor element (<code>a</code>) to increase the tappable target size. The padding should also reach to the top and bottom of the navigation element.</li>
      <li>Padding around the first element (logo) should reach to the left edge of the page to enlarge the tappable target.</li>
      <li>Padding around the last element (Search) should reach to the right edge of the page to enlarge the tappable target.</li>
      <li>As the user types into the location field an auto-complete box should appear below the input field suggesting locations that match a known list of locations. <a href="https://ac.usajobs.gov/help/operations/acwd">API for locations</a>.</li>
      <li>NOTE: As the user types into the keyword field the browser may show the user's recent searches. The appearance and display of this auto-complete box depends on the browser and is not explicitly styled.</li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use the Unauthenticated full-bleed variation on pages that use the new, wider page shell (1600px; $site-max-width-L).</li>
      <li>Use the active state variation for account when the user is signed in and in the account section (shown below).</li>
      <li>Use the active state variation for help when the user is viewing a page in the Help Center.</li>
      <li>The active state for search is a distinct treatment as it opens the search drawer that contains the search form.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt">Unauthenticated - Banner - post-transition</h6>
<div class="preview" id="code-2">
  {% include components/nav/unauthenticated-banner-post-release.html %}
</div>
<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-1">
    Documentation
  </button>
  <div id="doc-1" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>
        When the banner is in focus it should be dismissible via the keyboard.
      </li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use the unauthenticated banner variation to explain to users our move to login.gov.</li>
    </ul>
  </div>
</div>


<h6 class="usa-heading-alt">Authenticated - Active state variation</h6>
<div class="preview" id="code-3">
  {% include components/nav/authenticated-active-state.html %}
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
      <li>Use the Authenticated variation once the user is signed in.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt">Search variation</h6>
<div class="preview" id="code-4">
  {% include components/nav/search.html %}
</div>
<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-3">
    Documentation
  </button>
  <div id="doc-3" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use the Search variation on the search results page.</li>
    </ul>
  </div>
</div>


<h6 class="usa-heading-alt">Logo-only</h6>
<div class="preview" id="code-5">
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
<div class="preview" id="code-6">
  {% include components/nav/test.html %}
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
