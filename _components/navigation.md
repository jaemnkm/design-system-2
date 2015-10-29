---
layout: styleguide
type: component
title: Navigation
lead: USAJOBS features a consistent header for top-level navigation across the site.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design Complete
</a>

<h6 class="usa-heading-alt">Unauthenticated (v1)</h6>
<div class="preview">
  <nav class="usajobs-nav v1" role="navigation" data-object="nav" data-state="is-closed" data-target="#usajobs-menu">
    <div class="usajobs-nav__body">
      <div class="usajobs-nav__header">
        <div class="usajobs-nav__brand-container">
          <a class="usajobs-nav__brand" href="/">
            <img src="{{ site.baseurl }}/img/usajobs-sm2.png" alt="USAJOBS Logo" class="logo">
          </a>
        </div>
        <div class="usajobs-nav__extended-menu" id="usajobs-menu">
          <ul class="usajobs-nav__menu">
            <li class="usajobs-nav__secondary-menu-container" data-state="is-closed">
              <a accesskey="S" data-behavior="nav.menu.toggle" aria-haspopup="true" class="menu-toggle" href="/" title="Job Search">
                Job Search
              </a>
              <ul class="usajobs-nav__secondary-menu" aria-expanded="false" role="menu">
                <li><a ref="/">Basic Search</a></li>
                <li><a href="/Search/AdvancedSearch">Advanced Search</a></li>
                <li><a href="/Search/GeoSearch">Map Search (BETA)</a></li>
              </ul>
            </li>
            <li class="usajobs-nav__secondary-menu-container" data-state="is-closed">
              <a accesskey="A" data-behavior="nav.menu.toggle" aria-haspopup="true" class="menu-toggle" href="" title="My Account">
                My Account
              </a>
              <ul class="usajobs-nav__secondary-menu" aria-expanded="false" role="menu">
                <li><a href="/Applicant/MyAccount/Home">My Account - Main Page</a></li>
                <li><a href="/Applicant/Profile/PersonalInformation">Profile</a></li>
                <li><a href="/Applicant/Resume/ListResumes">Resumes</a></li>
                <li><a href="/Applicant/SavedSearches/ListSavedSearches">Saved Searches</a></li>
                <li><a href="/Applicant/MyAccount/Inbox">Inbox</a></li>
                <li><a href="/Applicant/SavedJobs/ListSavedJobs">Saved Jobs</a></li>
                <li><a href="/Applicant/Document/ListDocuments">Saved Documents</a></li>
                <li><a href="/Applicant/Application/ListApplications">Application Status</a></li>
              </ul>
            </li>
            <li class="usajobs-nav__secondary-menu-container" data-state="is-closed">
              <a accesskey="R" href="http://help.sqa.usajobs.gov/index.php/Main_Page" class="menu-toggle" data-behavior="nav.menu.toggle" aria-haspopup="true" title="Job Resources">
                Job Resources
              </a>
              <ul class="usajobs-nav__secondary-menu" aria-expanded="false" role="menu">
                <li><a href="http://help.sqa.usajobs.gov/index.php/Main_Page">Resource Center - Main Page</a></li>
                <li><a href="http://help.sqa.usajobs.gov/index.php/Forms">Supplemental Forms</a></li>
                <li><a href="http://help.sqa.usajobs.gov/index.php/Individuals_with_Disabilities">Individuals with Disabilities</a></li>
                <li><a href="/Veterans">Veterans</a></li>
                <li><a href="/StudentsAndGrads">Students and Recent Graduates</a></li>
                <li><a href="/SeniorExecutives">Senior Executives</a></li>
                <li><a href="/ResourceCenter/SpotlightsAll">Spotlights</a></li>
                <li><a href="http://help.sqa.usajobs.gov/index.php/Top_Ten_FAQ" onblur="timedMenuClose();" target="_blank">FAQs</a></li>
              </ul>
            </li>
            <li><a href="/Home/Support">Support</a></li>
          </ul>
        </div>
        <ul class="usajobs-nav__account">
          <li><a class="sign_in" href="/Applicant/MyAccount/Home">Sign In</a></li>
          <li class="pipe">|</li>
          <li>
            <a class="create_account" href="https://login.sqa.usajobs.gov/Account/Create">
              Create Account
            </a>
          </li>
          <li class="usajobs-nav__menu-toggle">
            <button type="button" class="usa-button-gray usajobs-nav__menu-toggle-button navbar-toggle toggle-switch" data-behavior="nav.toggle" aria-expanded="false" aria-controls="#usajobs-menu">
              Menu
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

<h6 class="usa-heading-alt">Authenticated (v1)</h6>
<div class="preview">
  <nav class="usajobs-nav v1" role="navigation" data-object="nav" data-state="is-closed" data-target="#usajobs-menu">
    <div class="usajobs-nav__body">
      <div class="usajobs-nav__header">
        <div class="usajobs-nav__brand-container">
          <a class="usajobs-nav__brand" href="/">
            <img src="{{ site.baseurl }}/img/usajobs-sm2.png" alt="USAJOBS Logo" class="logo">
          </a>
        </div>
        <div class="usajobs-nav__extended-menu" id="usajobs-menu">
          <ul class="usajobs-nav__menu">
            <li class="usajobs-nav__secondary-menu-container" data-state="is-closed">
              <a accesskey="S" data-behavior="nav.menu.toggle" aria-haspopup="true" class="menu-toggle" href="/" title="Job Search">
                Job Search
              </a>
              <ul class="usajobs-nav__secondary-menu" aria-expanded="false" role="menu">
                <li><a ref="/">Basic Search</a></li>
                <li><a href="/Search/AdvancedSearch">Advanced Search</a></li>
                <li><a href="/Search/GeoSearch">Map Search (BETA)</a></li>
              </ul>
            </li>
            <li class="usajobs-nav__secondary-menu-container" data-state="is-closed">
              <a accesskey="A" data-behavior="nav.menu.toggle" aria-haspopup="true" class="menu-toggle" href="" title="My Account">
                My Account
              </a>
              <ul class="usajobs-nav__secondary-menu" aria-expanded="false" role="menu">
                <li><a href="/Applicant/MyAccount/Home">My Account - Main Page</a></li>
                <li><a href="/Applicant/Profile/PersonalInformation">Profile</a></li>
                <li><a href="/Applicant/Resume/ListResumes">Resumes</a></li>
                <li><a href="/Applicant/SavedSearches/ListSavedSearches">Saved Searches</a></li>
                <li><a href="/Applicant/MyAccount/Inbox">Inbox</a></li>
                <li><a href="/Applicant/SavedJobs/ListSavedJobs">Saved Jobs</a></li>
                <li><a href="/Applicant/Document/ListDocuments">Saved Documents</a></li>
                <li><a href="/Applicant/Application/ListApplications">Application Status</a></li>
              </ul>
            </li>
            <li class="usajobs-nav__secondary-menu-container" data-state="is-closed">
              <a accesskey="R" href="http://help.sqa.usajobs.gov/index.php/Main_Page" class="menu-toggle" data-behavior="nav.menu.toggle" aria-haspopup="true" title="Job Resources">
                Job Resources
              </a>
              <ul class="usajobs-nav__secondary-menu" aria-expanded="false" role="menu">
                <li><a href="http://help.sqa.usajobs.gov/index.php/Main_Page">Resource Center - Main Page</a></li>
                <li><a href="http://help.sqa.usajobs.gov/index.php/Forms">Supplemental Forms</a></li>
                <li><a href="http://help.sqa.usajobs.gov/index.php/Individuals_with_Disabilities">Individuals with Disabilities</a></li>
                <li><a href="/Veterans">Veterans</a></li>
                <li><a href="/StudentsAndGrads">Students and Recent Graduates</a></li>
                <li><a href="/SeniorExecutives">Senior Executives</a></li>
                <li><a href="/ResourceCenter/SpotlightsAll">Spotlights</a></li>
                <li><a href="http://help.sqa.usajobs.gov/index.php/Top_Ten_FAQ" onblur="timedMenuClose();" target="_blank">FAQs</a></li>
              </ul>
            </li>
            <li><a href="/Home/Support">Support</a></li>
          </ul>
        </div>
        <ul class="usajobs-nav__account">
          <li>
            <a class="account-logged_in" href="/Applicant/MyAccount/Home">
              <span class="account-icon"><i class="fa fa-user"></i></span>
              <span class="account-name">Andy</span>
            </a>
          </li>
          <li class="usajobs-nav__menu-toggle">
            <button type="button" class="usa-button-gray usajobs-nav__menu-toggle-button navbar-toggle toggle-switch" data-behavior="nav.toggle" aria-expanded="false" aria-controls="#usajobs-menu">
              Menu
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Implementation</h4>
    <ul class="usa-content-list">
      <li>Padding should be applied to the anchor element (<code>a</code>) to increase the tappable target size. The padding should also reach to the top and bottom of the navigation element.</li>
      <li>Padding around the first element (logo) should reach to the left edge of the page to enlarge the tappable target.</li>
      <li>Padding around the last element (Create Account or User name) should reach to the right edge of the page to enlarge the tappable target.</li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use the Unauthenticated variation when the user has not yet signed in. Use the Authenticated variation once the user is signed in.</li>
    </ul>
  </div>
</div>
