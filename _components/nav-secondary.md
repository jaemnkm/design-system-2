---
layout: styleguide
component-layout: profile
type: component
title: Secondary Navigation
lead: Secondary navigation allows for movement within a section or page.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design Complete
</a>

<h6 class="usa-heading-alt">Horizontal (Profile v1)</h6>
<div class="preview">
  <section class="usajobs-canvas">
    <h1>Profile</h1>
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
      <h2>Contact Information</h2>
    </div>
  </section>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-0">
    Documentation
  </button>
  <div id="doc-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Guidelines</h4>
    <ul class="usa-content-list">
      <li>Do not use icons alongside nor within the text of the navigation labels</li>
      <li>Do not use the required asterisk alongside nor within the text of the navigation labels. Please do use the <a href="{{ site.baseurl }}/form-controls#usajobs-form-legend-documentation">form legend</a> component to indicate that the entire section is required.</li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use secondary navigation to allow the user to move laterally to other sub-sections of a section. For example, to move between sub-sections of their Profile.</li>
    </ul>

    <h5>When NOT to use</h5>
    <ul class="usa-content-list">
      <li>Avoid using this component to move within the same page. Typography, including clear section headers, should be enough to allow the user to navigate the page.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt">Vertical (Profile v2)</h6>
<div class="preview compact">
  <section class="usajobs-canvas">
    <main class="usajobs-profile" id="main-content" role="main">
      <div class="usajobs-profile-sidenav has-secondary-nav">
        <ul class="usajobs-profile-sidenav__list">
          <li class="usajobs-profile-sidenav__item usajobs-profile-sidenav__profile-container incomplete">
            <h4 class="usajobs-profile-sidenav__profile-status">Profile Incomplete</h4>
          </li>
          <li class="usajobs-profile-sidenav__item">
            <a href="http://usajobs.github.io/american-discovery-trail/signed-in/home/" class="usajobs-profile-sidenav__link home">
              <span class="usajobs-profile-sidenav__icon">
                <i class="fa fa-home"></i>
              </span>Home
            </a>
          </li>
          <li class="usajobs-profile-sidenav__item is-active">
            <a href="#current-page" class="usajobs-profile-sidenav__link profile">
              <span class="usajobs-profile-sidenav__icon">
                <i class="fa fa-user"></i>
              </span>Profile
            </a>
            <ul class="usajobs-profile-sidenav__sub-menu" data-state="is-open">
              <li class="usajobs-profile-sidenav__sub-item">
                <a href="#contact" class="usajobs-profile-sidenav__sub-link is-active is-required">
                  <span class="usajobs-profile-sidenav__sub-icon is-complete"></span> Contact
                  <span class="usajobs-profile-sidenav__sub-text">
                    Required
                  </span>
                </a>
              </li>
              <li class="usajobs-profile-sidenav__sub-item">
                <a href="http://usajobs.github.io/american-discovery-trail/profile/eligibility/" class="usajobs-profile-sidenav__sub-link is-required">
                  <span class="usajobs-profile-sidenav__sub-icon is-incomplete"></span> Eligibility
                  <span class="usajobs-profile-sidenav__sub-text">
                    Required
                  </span>
                </a>
              </li>
              <li class="usajobs-profile-sidenav__sub-item">
                <a href="http://usajobs.github.io/american-discovery-trail/profile/demographics/" class="usajobs-profile-sidenav__sub-link">
                  <span class="usajobs-profile-sidenav__sub-icon is-complete"></span> Demographics
                </a>
              </li>
              <li class="usajobs-profile-sidenav__sub-item">
                <a href="http://usajobs.github.io/american-discovery-trail/profile/other/" class="usajobs-profile-sidenav__sub-link">
                  <span class="usajobs-profile-sidenav__sub-icon is-incomplete"></span> Other
                </a>
              </li>
            </ul>
          </li>
          <li class="usajobs-profile-sidenav__item">
            <a href="http://usajobs.github.io/american-discovery-trail/documents/" class="usajobs-profile-sidenav__link documents">
              <span class="usajobs-profile-sidenav__icon">
                <i class="fa fa-file"></i>
              </span>Documents
            </a>
          </li>
          <li class="usajobs-profile-sidenav__item">
            <a href="http://usajobs.github.io/american-discovery-trail/username/" class="usajobs-profile-sidenav__link username">
              <span class="usajobs-profile-sidenav__icon">
                <i class="fa fa-lock"></i>
              </span>Username &amp; Password
            </a>
          </li>
        </ul>
      </div>
      <div class="usajobs-content-gutter usajobs-profile__body">
        <h1 class="usajobs-profile__title">
          Profile
        </h1>
        <div class="usajobs-profile__section-contents">
          <h2 class="usajobs-profile__section-title is-complete">
            Contact Information
            <span class="usajobs-profile__required-section">
              Required
            </span>
          </h2>
        </div>
      </div>
    </main>
  </section>
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
      <li>The vertical variation of the secondary navigation replaces the horizontal variation within Account.</li>
      <li>Use when showing both required sub-sections and completion of sub-sections is necessary.</li>
    </ul>

    <h5>When NOT to use</h5>
    <ul class="usa-content-list">
      <li>Do not use this specific variation outside of Account.</li>
    </ul>
  </div>
</div>
