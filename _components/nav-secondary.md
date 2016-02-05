---
layout: styleguide
type: component
title: Secondary Navigation
lead: Secondary navigation allows for movement within a section or page.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity under_review">
  Under Review
</a>

<h6 class="usa-heading-alt">Profile v1</h6>
<div class="preview">
  <nav class="usajobs-nav-secondary" role="navigation" data-object="nav-secondary" data-target="#usajobs-nav-secondary-menu--profile">
    <div class="usajobs-nav-secondary__body" id="usajobs-menu-profile">
      <ul class="usajobs-nav-secondary__menu">
        <li class="usajobs-nav-secondary__container"> 
          <a class="usajobs-nav-secondary__item is-active" href="#contact">
            Contact
          </a>
        </li>
        <li class="usajobs-nav-secondary__container"> 
          <a class="usajobs-nav-secondary__item" href="#eligibility">
            Eligibility
          </a>
        </li>
        <li class="usajobs-nav-secondary__container"> 
          <a class="usajobs-nav-secondary__item" href="#demographics">
            Demographics
          </a>
        </li>
        <li class="usajobs-nav-secondary__container"> 
          <a class="usajobs-nav-secondary__item" href="#account">
            Account
          </a>
        </li>
        <li class="usajobs-nav-secondary__container"> 
          <a class="usajobs-nav-secondary__item" href="#other">
            Other
          </a>
        </li>
        <li class="usajobs-nav-secondary__container more is-hidden"> 
          <a class="usajobs-nav-secondary__more-toggle" href="#more" data-behavior="nav-secondary.toggle" data-target="#usajobs-nav-secondary-menu--profile"><i class="fa fa-plus"></i></a>
          <ul class="usajobs-nav-secondary__more-container" id="usajobs-nav-secondary-menu--profile" data-state="is-closed">
          </ul>
        </li>
      </ul>
    </div>
  </nav>
  <div class="content">
    <h1>Profile</h1>
    <h2>Contact Information</h2>
    <p><span class="fa fa-check-circle"></span> Completed</p>
  </div>
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
      <li>Use secondary navigation to allow the user to move laterally to other sub-sections of a section. For example, to move to parts of their Profile or parts of a Job Annoucement.</li>
    </ul>
  </div>
</div>
