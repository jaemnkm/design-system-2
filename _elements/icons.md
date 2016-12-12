---
layout: styleguide
type: component
title: Icons
lead: USAJOBS leverages Font Awesome via the U.S. Standards and in addition defines specific icons for consistent use across the site.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design Complete
</a>

<h2 class="usa-heading">Unique hiring path icons</h2>
<p>
  We use a consistent set of icons to identify users with a particular type of experience. For example, individuals who have served in the military or who have a disability. These icons are often used to help users identify with a particular unique hiring path, often tied to a special hiring authority, which they may be eligible for depending on their experience.
</p>

<div class="preview">
  <ul class="usajobs-unique-hiring-paths__list">
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon public">
        <i class="fa fa-users"></i>
      </div>
      Public
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon federal-employees">
        <i class="fa fa-institution"></i>
      </div>
      Federal employees
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon veterans">
        <i class="fa fa-shield"></i>
      </div>
      Veterans
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon students">
        <i class="fa fa-graduation-cap"></i>
      </div>
      Students &amp; recent graduates
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon individuals-with-disabilities">
        <i class="fa fa-wheelchair-alt"></i>
      </div>
      Individuals with disabilities
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon former-overseas-employees">
        <i class="fa fa-plane"></i>
      </div>
      Former overseas employees
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon land-mgmt">
        <i class="fa fa-tree"></i>
      </div>
      Land Management
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon military-spouses fa-stack">
        <i class="fa fa-circle-o fa-stack-1x is-first"></i>
        <i class="fa fa-circle-o fa-stack-1x is-second"></i>
      </div>
      Military Spouses
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon national-guard">
        <i class="fa fa-flag"></i>
      </div>
      National Guard
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon native-americans">
        <i class="fa fa-sun-o"></i>
      </div>
      Native Americans
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon peace-corps">
        <i class="fa fa-globe"></i>
      </div>
      Peace Corps &amp; Vista
    </li>
    <li class="usajobs-unique-hiring-paths__item">
      <div class="usajobs-unique-hiring-paths__icon ses">
        <i class="fa fa-briefcase"></i>
      </div>
      Senior Executives
    </li>
  </ul>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use each icon in conjunction with a user group that matches the represented set of experience.</li>
      <li>Use whenever a specific unique hiring path is mentioned.</li>
    </ul>
    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
      <li>Do not use these icons in isolation. Icons should appear alongside text describing the unique hiring path.</li>
    </ul>
    <h5>Implementation</h5>
    <ul class="usa-content-list">
      <li>A Sass mixin is provided in _utilities.scss that codifies the icon and color scheme combination for each icon. Use this mixin whenever possible.</li>
    </ul>
  </div>
</div>
