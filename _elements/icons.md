---
layout: styleguide
type: component
title: Icons
lead: USAJOBS leverages Font Awesome (converted to SVG) and defines specific icons for consistent use across the site.
---

<h2 class="usa-heading">Hiring path icons</h2>
<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design complete
</a>
<p>
  We use a consistent set of icons to identify users with a particular type of experience. For example, individuals who have served in the military or who have a disability. These icons are often used to help users identify with a particular hiring path, often tied to a special hiring authority, which they may be eligible for depending on their experience.
</p>
{% include icons/hiring-paths.svg %}

<div class="preview" id="code-1">
  <ul class="usajobs-unique-hiring-paths__list">
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon public">
        <svg class="usajobs-icon--hiring-path">
          <use xlink:href="#public"></use>
        </svg>
      </div>
      Public
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon">
        <svg class="usajobs-icon--hiring-path">
          <use xlink:href="#federal-employees-competitive"></use>
        </svg>
      </div>
      Federal employees - Competitive
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon">
        <svg class="usajobs-icon--hiring-path">
          <use xlink:href="#federal-employees-excepted"></use>
        </svg>
      </div>
      Federal employees - Excepted
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon">
        <svg class="usajobs-icon--hiring-path">
          <use xlink:href="#internal-to-an-agency"></use>
        </svg>
      </div>
      Internal to an agency
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon">
        <svg class="usajobs-icon--hiring-path">
          <use xlink:href="#federal-employees-transition"></use>
        </svg>
      </div>
      Career transition (ICTAP, RPL)
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon land-mgmt">
        <svg class="usajobs-icon--hiring-path">
          <use xlink:href="#land-mgmt"></use>
        </svg>
      </div>
      Land Management
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon">
        <svg class="usajobs-icon--hiring-path">
          <use xlink:href="#veterans"></use>
        </svg>
      </div>
      Veterans
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon">
        <svg class="usajobs-icon--hiring-path">
          <use xlink:href="#military-spouses"></use>
        </svg>
      </div>
      Military Spouses
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon">
        <svg class="usajobs-icon--hiring-path">
          <use xlink:href="#national-guard"></use>
        </svg>
      </div>
      National Guard
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon">
        <svg class="usajobs-icon--hiring-path">
          <use xlink:href="#students"></use>
        </svg>
      </div>
      Students
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon">
        <svg class="usajobs-icon--hiring-path">
          <use xlink:href="#graduates"></use>
        </svg>
      </div>
      Recent graduates
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon">
        <svg class="usajobs-icon--hiring-path">
          <use xlink:href="#ses"></use>
        </svg>
      </div>
      Senior Executives
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon">
        <svg class="usajobs-icon--hiring-path">
          <use xlink:href="#individuals-with-disabilities"></use>
        </svg>
      </div>
      Individuals with disabilities
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon">
        <svg class="usajobs-icon--hiring-path">
          <use xlink:href="#family-of-overseas-employees"></use>
        </svg>
      </div>
      Family of overseas employees
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon">
        <svg class="usajobs-icon--hiring-path">
          <use xlink:href="#native-americans"></use>
        </svg>
      </div>
      Native Americans
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon">
        <svg class="usajobs-icon--hiring-path">
          <use xlink:href="#peace-corps"></use>
        </svg>
      </div>
      Peace Corps &amp; AmeriCorps VISTA
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon">
        <svg class="usajobs-icon--hiring-path">
          <use xlink:href="#special-authorities"></use>
        </svg>
      </div>
      Speical authorities
    </li>
  </ul>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-0">
    Documentation
  </button>
  <div id="doc-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use each icon in conjunction with a user group that matches the represented set of experience.</li>
      <li>Use whenever a specific hiring path is mentioned.</li>
    </ul>
    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
      <li>Do not use these icons in isolation. Icons should appear alongside text describing the hiring path.</li>
    </ul>
    <h5>Implementation</h5>
    <ul class="usa-content-list">
      <li>These icons are collected in an SVG defs file at <code>includes/icons/hiring-paths.svg</code> and then referenced via the use element.</li>
    </ul>
  </div>
</div>

<h2 class="usa-heading">SVG icon set</h2>
<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-1">
    Documentation
  </button>
  <div id="doc-1" aria-hidden="false" class="usa-accordion-content">
    <h5>Implementation</h5>
    <ul class="usa-content-list">
      <li>
        We've swapped in <a href="https://fontawesome.com/how-to-use/svg-with-js">Font Awesome version 5</a> which is backward compatible with version 4 (with a JS shim) and uses SVG inline instead of an icon font file.
      </li>
    </ul>
  </div>
</div>
