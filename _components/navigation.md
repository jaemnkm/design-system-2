---
layout: styleguide
type: component
title: Navigation
lead: USAJOBS features a consistent header for top-level navigation across the site.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design Complete
</a>

<h6 class="usa-heading-alt">Version 1 Authenticated</h6>
<div class="preview">
  <header class="usajobs-site-header" role="banner" aria-label="header">
    <div class="usa-disclaimer">
      <div class="usa-grid usajobs-disclaimer-official">
        <img class="usa-flag_icon" alt="U.S. flag signifying that this is a United States federal government website" src="{{ site.baseurl }}/img/us_flag_small.png">
        <p>An official website of the United States Government</p>
      </div>
    </div>
    <nav class="usajobs-nav" role="navigation" aria-label="main navigation" data-object="nav">
      <div class="usajobs-nav__body">
        <div class="usajobs-nav__header-container">
          <div class="usajobs-nav__header">
            <div class="usajobs-nav__brand-container">
              <a class="usajobs-nav__brand" href="/">
                <span class="logo" title="USAJOBS logo"></span>
              </a>
            </div>
            <div class="usajobs-nav__menu" id="usajobs-menu">
              <ul role="menubar">
                <li class="usajobs-nav__menu-container usajobs-nav__account" data-state="is-closed">
                  <a class="usajobs-nav__section-link menu-toggle" data-behavior="nav.menu.toggle" role="menuitem" aria-haspopup="true" href="#account" title="Account">
                    <span class="fa fa-user"></span>
                    <span class="usajobs-nav__account_name">QQ</span>
                    <span class="usajobs-nav__first_name">Quadrina</span>
                  </a>
                  <ul class="usajobs-nav__secondary-menu" aria-expanded="false" role="menu" aria-label="submenu">
                    <li role="menuitem"><a href="/Applicant/MyAccount/Home">Home</a></li>
                    <li role="menuitem"><a href="/Applicant/Application/ListApplications">Application Status</a></li>
                    <li role="menuitem"><a href="/Applicant/MyAccount/Documents">Documents</a></li>
                    <li role="menuitem"><a href="/Applicant/MyAccount/Inbox">Inbox</a></li>
                    <li role="menuitem"><a href="/Applicant/Profile/PersonalInformation">Profile</a></li>
                    <li role="menuitem"><a href="/Applicant/Resume/ListResumes">Resumes</a></li>
                    <li role="menuitem"><a href="/Applicant/SavedJobs/ListSavedJobs">Saved Jobs</a></li>
                    <li role="menuitem"><a href="/Applicant/SavedSearches/ListSavedSearches">Saved Searches</a></li>
                    <li role="menuitem"><a href="/Applicant/Account/LogOff">Sign Out</a></li>
                  </ul>
                </li>
                <li class="usajobs-nav__menu-container usajobs-nav__help"> 
                  <a class="usajobs-nav__section-link" href="http://usajobs.github.io/help-center" title="Help">
                    <span class="fa fa-question-circle"></span>
                    Help
                  </a>
                </li>
                <li class="usajobs-nav__menu-container usajobs-nav__menu-search" data-state="is-closed"> 
                  <a data-behavior="nav.menu.search-toggle" aria-controls="usajobs-search-form" class="usajobs-nav__section-link" href="/" title="Job Search">
                    <span class="fa fa-search"></span>
                    Search
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="usajobs-search-form" class="usajobs-nav__search" aria-expanded="false" role="menu">
            <form action="/Search" method="get" novalidate="novalidate" role="search">
              <fieldset>
                <div class="usajobs-nav__search-keywords-container">
                  <label for="search-keyword">
                    <i class="usajobs-nav__search-keywords-icon fa fa-search"></i>
                    Keywords
                  </label>
                  <input id="search-keyword" name="search-keyword" class="usajobs-nav__search-keywords-input" placeholder="Job title, Skills, Agency" type="text" value="" autocomplete="false">
                </div>
                <div class="usajobs-nav__search-location-container">
                  <label for="search-location">
                    <i class="usajobs-nav__search-location-icon fa fa-map-marker"></i>
                    Location
                  </label>
                  <input id="search-location" name="search-location" type="text" class="usajobs-nav__search-location-input" placeholder="City, State, ZIP, or Country">
                  <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                  <input type="hidden" id="AutoCompleteSelected" name="AutoCompleteSelected">
                </div>
                <div class="usajobs-nav__search-button-container">
                  <button class="usa-button usa-button-primary-alt usajobs-nav__search-button">
                    Search
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </header>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
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
      <li>Use the Authenticated variation once the user is signed in.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt">Version 1 Authenticated - Active state (nav item selected)</h6>
<div class="preview">
  <header class="usajobs-site-header" role="banner" aria-label="header">
    <div class="usa-disclaimer">
      <div class="usa-grid usajobs-disclaimer-official">
        <img class="usa-flag_icon" alt="U.S. flag signifying that this is a United States federal government website" src="{{ site.baseurl }}/img/us_flag_small.png">
        <p>An official website of the United States Government</p>
      </div>
    </div>
    <nav class="usajobs-nav" role="navigation" aria-label="main navigation" data-object="nav">
      <div class="usajobs-nav__body">
        <div class="usajobs-nav__header-container">
          <div class="usajobs-nav__header">
            <div class="usajobs-nav__brand-container">
              <a class="usajobs-nav__brand" href="/">
                <span class="logo" title="USAJOBS logo"></span>
              </a>
            </div>
            <div class="usajobs-nav__menu" id="usajobs-menu">
              <ul>
                <li class="usajobs-nav__menu-container usajobs-nav__account" data-state="is-closed">
                  <a class="usajobs-nav__section-link menu-toggle is-active" data-behavior="nav.menu.toggle" aria-haspopup="true" href="#account" title="Account">
                    <span class="fa fa-user"></span>
                    <span class="usajobs-nav__account_name">QQ</span>
                    <span class="usajobs-nav__first_name">Quadrina</span>
                  </a>
                  <ul class="usajobs-nav__secondary-menu" aria-expanded="false" aria-label="submenu">
                    <li><a href="/Applicant/MyAccount/Home">Home</a></li>
                    <li><a href="/Applicant/Application/ListApplications">Application Status</a></li>
                    <li><a href="/Applicant/MyAccount/Documents">Documents</a></li>
                    <li><a href="/Applicant/MyAccount/Inbox">Inbox</a></li>
                    <li><a href="/Applicant/Profile/PersonalInformation">Profile</a></li>
                    <li><a href="/Applicant/Resume/ListResumes">Resumes</a></li>
                    <li><a href="/Applicant/SavedJobs/ListSavedJobs">Saved Jobs</a></li>
                    <li><a href="/Applicant/SavedSearches/ListSavedSearches">Saved Searches</a></li>
                    <li><a href="/Applicant/Account/LogOff">Sign Out</a></li>
                  </ul>
                </li>
                <li class="usajobs-nav__menu-container usajobs-nav__help"> 
                  <a class="usajobs-nav__section-link" href="http://usajobs.github.io/help-center" title="Help">
                    <span class="fa fa-question-circle"></span>
                    Help
                  </a>
                </li>
                <li class="usajobs-nav__menu-container usajobs-nav__menu-search" data-state="is-closed"> 
                  <a data-behavior="nav.menu.search-toggle" aria-controls="usajobs-search-form-v1-active" class="usajobs-nav__section-link" href="/" title="Job Search">
                    <span class="fa fa-search"></span>
                    Search
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="usajobs-search-form-v1-active" class="usajobs-nav__search" aria-expanded="false" role="menu">
            <form action="/Search" method="get" novalidate="novalidate" role="search">
              <fieldset>
                <div class="usajobs-nav__search-keywords-container">
                  <label for="search-keyword">
                    <i class="usajobs-nav__search-keywords-icon fa fa-search"></i>
                    Keywords
                  </label>
                  <input id="search-keyword" name="search-keyword" class="usajobs-nav__search-keywords-input" placeholder="Job title, Skills, Agency" type="text" value="" autocomplete="false">
                </div>
                <div class="usajobs-nav__search-location-container">
                  <label for="search-location">
                    <i class="usajobs-nav__search-location-icon fa fa-map-marker"></i>
                    Location
                  </label>
                  <input id="search-location" name="search-location" type="text" class="usajobs-nav__search-location-input" placeholder="City, State, ZIP, or Country">
                  <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                  <input type="hidden" id="AutoCompleteSelected" name="AutoCompleteSelected">
                </div>
                <div class="usajobs-nav__search-button-container">
                  <button class="usa-button usa-button-primary-alt usajobs-nav__search-button">
                    Search
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </header>
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
      <li>Use the active state variation for account when the user is signed in and in the account section.</li>
      <li>Use the active state variation for help when the user is viewing a page in the Help Center.</li>
      <li>The active state for search is a distinct treatment as it opens the search drawer that contains the search form.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt">Version 1 - Alt A Unauthenticated</h6>
<div class="preview">
  <header class="usajobs-site-header" role="banner" aria-label="header">
    <div class="usa-disclaimer">
      <div class="usa-grid usajobs-disclaimer-official">
        <img class="usa-flag_icon" alt="U.S. flag signifying that this is a United States federal government website" src="{{ site.baseurl }}/img/us_flag_small.png">
        <p>An official website of the United States Government</p>
      </div>
    </div>
    <nav class="usajobs-nav" role="navigation" aria-label="main navigation" data-object="nav">
      <div class="usajobs-nav__body">
        <div class="usajobs-nav__header-container">
          <div class="usajobs-nav__header">
            <div class="usajobs-nav__brand-container">
              <a class="usajobs-nav__brand" href="/">
                <span class="logo" title="USAJOBS logo"></span>
              </a>
            </div>
            <div class="usajobs-nav__menu" id="usajobs-menu">
              <ul>
                <li class="usajobs-nav__menu-container usajobs-nav__account">
                  <a class="usajobs-nav__section-link menu-toggle" href="https://www.usajobs.gov/Applicant/MyAccount/Home/" title="Account">
                    <span class="fa fa-user"></span>
                    <span class="usajobs-nav__account_name">Sign In</span>
                    <span class="usajobs-nav__first_name">Sign In</span>
                  </a>
                </li>
                <li class="usajobs-nav__menu-container usajobs-nav__help"> 
                  <a class="usajobs-nav__section-link" href="http://usajobs.github.io/help-center" title="Help">
                    <span class="fa fa-question-circle"></span>
                    Help
                  </a>
                </li>
                <li class="usajobs-nav__menu-container usajobs-nav__menu-search" data-state="is-closed"> 
                  <a data-behavior="nav.menu.search-toggle" aria-controls="usajobs-search-form-v1-unauth" class="usajobs-nav__section-link" href="/" title="Job Search">
                    <span class="fa fa-search"></span>
                    Search
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="usajobs-search-form-v1-unauth" class="usajobs-nav__search" aria-expanded="false" role="menu">
            <form action="/Search" method="get" novalidate="novalidate" role="search">
              <fieldset>
                <div class="usajobs-nav__search-keywords-container">
                  <label for="search-keyword">
                    <i class="usajobs-nav__search-keywords-icon fa fa-search"></i>
                    Keywords
                  </label>
                  <input id="search-keyword" name="search-keyword" class="usajobs-nav__search-keywords-input" placeholder="Job title, Skills, Agency" type="text" value="" autocomplete="false">
                </div>
                <div class="usajobs-nav__search-location-container">
                  <label for="search-location">
                    <i class="usajobs-nav__search-location-icon fa fa-map-marker"></i>
                    Location
                  </label>
                  <input id="search-location" name="search-location" type="text" class="usajobs-nav__search-location-input" placeholder="City, State, ZIP, or Country">
                  <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                  <input type="hidden" id="AutoCompleteSelected" name="AutoCompleteSelected">
                </div>
                <div class="usajobs-nav__search-button-container">
                  <button class="usa-button usa-button-primary-alt usajobs-nav__search-button">
                    Search
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
          <div class="usajobs-nav__create-account">
            <a href="https://login.test.usajobs.gov/account/Create" class="usajobs-nav__create-account-link">Create an account</a> to get started &mdash; build your profile, create or upload resumes, and apply for jobs.
          </div>
        </div>
      </div>
    </nav>
  </header>
</div>

<!-- h6 class="usa-heading-alt">Version 1 - Alt B Unauthenticated</h6>
<div class="preview compact">
  <header class="usajobs-site-header" role="banner" aria-label="header">
    <div class="usa-disclaimer">
      <div class="usa-grid usajobs-disclaimer-official">
        <img class="usa-flag_icon" alt="U.S. flag signifying that this is a United States federal government website" src="{{ site.baseurl }}/img/us_flag_small.png">
        <p>An official website of the United States Government</p>
      </div>
    </div>
    <nav class="usajobs-nav--v1B" role="navigation" aria-label="main navigation" data-object="nav">
      <div class="usajobs-nav--v1B__body">
        <div class="usajobs-nav--v1B__header-container">
          <div class="usajobs-nav--v1B__header">
            <div class="usajobs-nav--v1B__brand-container">
              <a class="usajobs-nav--v1B__brand" href="/">
                <span class="logo" title="USAJOBS logo"></span>
              </a>
            </div>
            <div class="usajobs-nav--v1B__menu" id="usajobs-menu">
              <ul>
                <li class="usajobs-nav--v1B__menu-container usajobs-nav--v1B__account">
                  <a class="usajobs-nav--v1B__section-link menu-toggle" href="https://www.usajobs.gov/Applicant/MyAccount/Home/" title="Account">
                    <span class="fa fa-user"></span>
                    <span class="usajobs-nav--v1B__sign-in-label">Sign In / Create Account</span>
                  </a>
                </li>
                <li class="usajobs-nav--v1B__menu-container usajobs-nav--v1B__help"> 
                  <a class="usajobs-nav--v1B__section-link" href="http://usajobs.github.io/help-center" title="Help">
                    <span class="fa fa-question-circle"></span>
                    Help
                  </a>
                </li>
                <li class="usajobs-nav--v1B__menu-container usajobs-nav--v1B__menu-search" data-state="is-closed"> 
                  <a data-behavior="nav.menu.search-toggle" aria-controls="usajobs-search-form-v1-unauth" class="usajobs-nav--v1B__section-link" href="/" title="Job Search">
                    <span class="fa fa-search"></span>
                    Search
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="usajobs-search-form-v1-unauth" class="usajobs-nav__search" aria-expanded="false" role="menu">
            <form action="/Search" method="get" novalidate="novalidate" role="search">
              <fieldset>
                <div class="usajobs-nav__search-keywords-container">
                  <label for="search-keyword">
                    <i class="usajobs-nav__search-keywords-icon fa fa-search"></i>
                    Keywords
                  </label>
                  <input id="search-keyword" name="search-keyword" class="usajobs-nav__search-keywords-input" placeholder="Job title, Skills, Agency" type="text" value="" autocomplete="false">
                </div>
                <div class="usajobs-nav__search-location-container">
                  <label for="search-location">
                    <i class="usajobs-nav__search-location-icon fa fa-map-marker"></i>
                    Location
                  </label>
                  <input id="search-location" name="search-location" type="text" class="usajobs-nav__search-location-input" placeholder="City, State, ZIP, or Country">
                  <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                  <input type="hidden" id="AutoCompleteSelected" name="AutoCompleteSelected">
                </div>
                <div class="usajobs-nav__search-button-container">
                  <button class="usa-button usa-button-primary-alt usajobs-nav__search-button">
                    Search
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </header>
</div>

<h6 class="usa-heading-alt">Version 1 - Alt C Unauthenticated</h6>
<div class="preview compact">
  <header class="usajobs-site-header" role="banner" aria-label="header">
    <div class="usa-disclaimer">
      <div class="usa-grid usajobs-disclaimer-official">
        <img class="usa-flag_icon" alt="U.S. flag signifying that this is a United States federal government website" src="{{ site.baseurl }}/img/us_flag_small.png">
        <p>An official website of the United States Government</p>
      </div>
    </div>
    <nav class="usajobs-nav--v1C" role="navigation" aria-label="main navigation" data-object="nav">
      <div class="usajobs-nav--v1C__body">
        <div class="usajobs-nav--v1C__header-container">
          <div class="usajobs-nav--v1C__header">
            <div class="usajobs-nav--v1C__brand-container">
              <a class="usajobs-nav--v1C__brand" href="/">
                <span class="logo" title="USAJOBS logo"></span>
              </a>
            </div>
            <div class="usajobs-nav--v1C__menu" id="usajobs-menu">
              <ul>
                <li class="usajobs-nav--v1C__menu-container usajobs-nav--v1C__account">
                  <a class="usajobs-nav--v1C__section-link menu-toggle" href="https://test.usajobs.gov/Applicant/MyAccount/Home/" title="Account">
                    <span class="fa fa-user"></span>
                    <span class="usajobs-nav--v1C__sign-in-label">Sign In</span>
                  </a>
                </li>
                <li class="usajobs-nav--v1C__menu-container usajobs-nav--v1C__create-account">
                  <a class="usajobs-nav--v1C__section-link menu-toggle" href="https://login.test.usajobs.gov/account/Create" title="Create Account">
                    <span class="fa fa-user-plus"></span>
                    <span class="usajobs-nav--v1C__create-account-label">Create Account</span>
                  </a>
                </li>
                <li class="usajobs-nav--v1C__menu-container usajobs-nav--v1C__help"> 
                  <a class="usajobs-nav--v1C__section-link" href="http://usajobs.github.io/help-center" title="Help">
                    <span class="fa fa-question-circle"></span>
                    Help
                  </a>
                </li>
                <li class="usajobs-nav--v1C__menu-container usajobs-nav--v1C__menu-search" data-state="is-closed"> 
                  <a data-behavior="nav.menu.search-toggle" aria-controls="usajobs-search-form-v1-unauth" class="usajobs-nav--v1C__section-link" href="/" title="Job Search">
                    <span class="fa fa-search"></span>
                    Search
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="usajobs-search-form-v1-unauth" class="usajobs-nav__search" aria-expanded="false" role="menu">
            <form action="/Search" method="get" novalidate="novalidate" role="search">
              <fieldset>
                <div class="usajobs-nav__search-keywords-container">
                  <label for="search-keyword">
                    <i class="usajobs-nav__search-keywords-icon fa fa-search"></i>
                    Keywords
                  </label>
                  <input id="search-keyword" name="search-keyword" class="usajobs-nav__search-keywords-input" placeholder="Job title, Skills, Agency" type="text" value="" autocomplete="false">
                </div>
                <div class="usajobs-nav__search-location-container">
                  <label for="search-location">
                    <i class="usajobs-nav__search-location-icon fa fa-map-marker"></i>
                    Location
                  </label>
                  <input id="search-location" name="search-location" type="text" class="usajobs-nav__search-location-input" placeholder="City, State, ZIP, or Country">
                  <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                  <input type="hidden" id="AutoCompleteSelected" name="AutoCompleteSelected">
                </div>
                <div class="usajobs-nav__search-button-container">
                  <button class="usa-button usa-button-primary-alt usajobs-nav__search-button">
                    Search
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </header>
</div>

<h6 class="usa-heading-alt">Version 1 - Alt D Unauthenticated</h6>
<div class="preview compact">
  <header class="usajobs-site-header" role="banner" aria-label="header">
    <div class="usa-disclaimer">
      <div class="usa-grid usajobs-disclaimer-official">
        <img class="usa-flag_icon" alt="U.S. flag signifying that this is a United States federal government website" src="{{ site.baseurl }}/img/us_flag_small.png">
        <p>An official website of the United States Government</p>
      </div>
    </div>
    <nav class="usajobs-nav--v1D" role="navigation" aria-label="main navigation" data-object="nav">
      <div class="usajobs-nav--v1D__body">
        <div class="usajobs-nav--v1D__header-container">
          <div class="usajobs-nav--v1D__header">
            <div class="usajobs-nav--v1D__brand-container">
              <a class="usajobs-nav--v1D__brand" href="/">
                <span class="logo" title="USAJOBS logo"></span>
              </a>
            </div>
            <div class="usajobs-nav--v1D__menu" id="usajobs-menu">
              <ul>
                <li class="usajobs-nav--v1D__menu-container usajobs-nav--v1D__account">
                  <a class="usajobs-nav--v1D__section-link" href="https://test.usajobs.gov/Applicant/MyAccount/Home/" title="Account">
                    <span class="fa fa-user"></span>
                    <span class="usajobs-nav--v1D__sign-in-label">Sign In</span>
                  </a>
                  <a class="usajobs-nav--v1D__section-link" href="https://login.test.usajobs.gov/account/Create" title="Create Account">
                    <span class="fa fa-user-plus"></span>
                    <span class="usajobs-nav--v1D__create-account-label">Create Account</span>
                  </a>
                </li>
                <li class="usajobs-nav--v1D__menu-container usajobs-nav--v1D__help"> 
                  <a class="usajobs-nav--v1D__section-link" href="http://usajobs.github.io/help-center" title="Help">
                    <span class="fa fa-question-circle"></span>
                    Help
                  </a>
                </li>
                <li class="usajobs-nav--v1D__menu-container usajobs-nav--v1D__menu-search" data-state="is-closed"> 
                  <a data-behavior="nav.menu.search-toggle" aria-controls="usajobs-search-form-v1-unauth" class="usajobs-nav--v1D__section-link" href="/" title="Job Search">
                    <span class="fa fa-search"></span>
                    Search
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="usajobs-search-form-v1-unauth" class="usajobs-nav__search" aria-expanded="false" role="menu">
            <form action="/Search" method="get" novalidate="novalidate" role="search">
              <fieldset>
                <div class="usajobs-nav__search-keywords-container">
                  <label for="search-keyword">
                    <i class="usajobs-nav__search-keywords-icon fa fa-search"></i>
                    Keywords
                  </label>
                  <input id="search-keyword" name="search-keyword" class="usajobs-nav__search-keywords-input" placeholder="Job title, Skills, Agency" type="text" value="" autocomplete="false">
                </div>
                <div class="usajobs-nav__search-location-container">
                  <label for="search-location">
                    <i class="usajobs-nav__search-location-icon fa fa-map-marker"></i>
                    Location
                  </label>
                  <input id="search-location" name="search-location" type="text" class="usajobs-nav__search-location-input" placeholder="City, State, ZIP, or Country">
                  <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                  <input type="hidden" id="AutoCompleteSelected" name="AutoCompleteSelected">
                </div>
                <div class="usajobs-nav__search-button-container">
                  <button class="usa-button usa-button-primary-alt usajobs-nav__search-button">
                    Search
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </header>
</div>

<h6 class="usa-heading-alt">Version 1 - Alt E Unauthenticated</h6>
<div class="preview">
  <header class="usajobs-site-header" role="banner" aria-label="header">
    <div class="usa-disclaimer">
      <div class="usa-grid usajobs-disclaimer-official">
        <img class="usa-flag_icon" alt="U.S. flag signifying that this is a United States federal government website" src="{{ site.baseurl }}/img/us_flag_small.png">
        <p>An official website of the United States Government</p>
      </div>
    </div>
    <nav class="usajobs-nav" role="navigation" aria-label="main navigation" data-object="nav">
      <div class="usajobs-nav__body">
        <div class="usajobs-nav__header-container">
          <div class="usajobs-nav__header">
            <div class="usajobs-nav__brand-container">
              <a class="usajobs-nav--v1E__brand" href="/">
                <span class="logo" title="USAJOBS logo"></span>
              </a>
            </div>
            <div class="usajobs-nav__menu" id="usajobs-menu">
              <ul>
                <li class="usajobs-nav__menu-container usajobs-nav__account">
                  <a class="usajobs-nav__section-link menu-toggle" href="https://www.usajobs.gov/Applicant/MyAccount/Home/" title="Account">
                    <span class="fa fa-user"></span>
                    <span class="usajobs-nav__account_name">Sign In &bull; Join</span>
                    <span class="usajobs-nav__first_name">Sign In &bull; Join now</span>
                  </a>
                </li>
                <li class="usajobs-nav__menu-container usajobs-nav__help"> 
                  <a class="usajobs-nav__section-link" href="http://usajobs.github.io/help-center" title="Help">
                    <span class="fa fa-question-circle"></span>
                    Help
                  </a>
                </li>
                <li class="usajobs-nav__menu-container usajobs-nav__menu-search" data-state="is-closed"> 
                  <a data-behavior="nav.menu.search-toggle" aria-controls="usajobs-search-form-v1-unauth" class="usajobs-nav__section-link" href="/" title="Job Search">
                    <span class="fa fa-search"></span>
                    Search
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="usajobs-search-form-v1-unauth" class="usajobs-nav__search" aria-expanded="false" role="menu">
            <form action="/Search" method="get" novalidate="novalidate" role="search">
              <fieldset>
                <div class="usajobs-nav__search-keywords-container">
                  <label for="search-keyword">
                    <i class="usajobs-nav__search-keywords-icon fa fa-search"></i>
                    Keywords
                  </label>
                  <input id="search-keyword" name="search-keyword" class="usajobs-nav__search-keywords-input" placeholder="Job title, Skills, Agency" type="text" value="" autocomplete="false">
                </div>
                <div class="usajobs-nav__search-location-container">
                  <label for="search-location">
                    <i class="usajobs-nav__search-location-icon fa fa-map-marker"></i>
                    Location
                  </label>
                  <input id="search-location" name="search-location" type="text" class="usajobs-nav__search-location-input" placeholder="City, State, ZIP, or Country">
                  <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                  <input type="hidden" id="AutoCompleteSelected" name="AutoCompleteSelected">
                </div>
                <div class="usajobs-nav__search-button-container">
                  <button class="usa-button usa-button-primary-alt usajobs-nav__search-button">
                    Search
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </header>
</div -->

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use the Unauthenticated variation when the user has not yet signed in.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt">Version 1 - Logo-only</h6>
<div class="preview">
  <header class="usajobs-site-header" role="banner" aria-label="header">
    <div class="usa-disclaimer">
      <div class="usa-grid usajobs-disclaimer-official">
        <img class="usa-flag_icon" alt="U.S. flag signifying that this is a United States federal government website" src="{{ site.baseurl }}/img/us_flag_small.png">
        <p>An official website of the United States Government</p>
      </div>
    </div>
    <nav class="usajobs-nav" role="navigation" aria-label="main navigation" data-object="nav">
      <div class="usajobs-nav__body">
        <div class="usajobs-nav__header-container">
          <div class="usajobs-nav__header">
            <div class="usajobs-nav__brand-container">
              <a class="usajobs-nav__brand" href="/">
                <span class="logo" title="USAJOBS logo"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
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
      <li>Use the Logo-only variation when the user should be prevented from navigating away from the current page. Examples inlcude the sign-in and create account pages.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt">Version 2 (5.6 release) Authenticated</h6>
<div class="preview">
  <header class="usajobs-site-header" role="banner">
    <div class="usa-disclaimer">
      <div class="usa-grid usajobs-disclaimer-official">
        <img class="usa-flag_icon" alt="U.S. flag signifying that this is a United States federal government website" src="{{ site.baseurl }}/img/us_flag_small.png">
        <p>An official website of the United States Government</p>
      </div>
    </div>
    <nav class="usajobs-nav" role="navigation" data-object="nav">
      <div class="usajobs-nav__body">
        <div class="usajobs-nav__header-container">
          <div class="usajobs-nav__header">
            <div class="usajobs-nav__brand-container">
              <a class="usajobs-nav__brand" href="/">
                <span class="logo"></span>
              </a>
            </div>
            <div class="usajobs-nav__menu" id="usajobs-menu">
              <ul>
                <li class="usajobs-nav__menu-container usajobs-nav__account" data-state="is-closed">
                  <a class="usajobs-nav__section-link menu-toggle is-active" data-behavior="nav.menu.toggle" aria-haspopup="true" href="#account" title="Account">
                    <span class="fa fa-user"></span>
                    <span class="usajobs-nav__account_name">QQ</span>
                    <span class="usajobs-nav__first_name">Quadrina</span>
                  </a>
                  <ul class="usajobs-nav__secondary-menu" aria-expanded="false" aria-label="submenu">
                    <li><a href="/Applicant/MyAccount/Home">Home</a></li>
                    <li><a href="/Applicant/Profile/PersonalInformation">Profile</a></li>
                    <li><a href="/Applicant/MyAccount/Documents">Documents</a></li>
                    <li><a href="/Account/Maintenance">Username &amp; Password</a></li>
                    <li><a href="/Applicant/Account/LogOff">Sign Out</a></li>
                  </ul>
                </li>
                <li class="usajobs-nav__menu-container usajobs-nav__help"> 
                  <a class="usajobs-nav__section-link" href="http://usajobs.github.io/help-center" title="Help">
                    <span class="fa fa-question-circle"></span>
                    Help
                  </a>
                </li>
                <li class="usajobs-nav__menu-container usajobs-nav__menu-search" data-state="is-closed"> 
                  <a data-behavior="nav.menu.search-toggle" aria-controls="usajobs-search-form-v2" class="usajobs-nav__section-link" href="/" title="Job Search">
                    <span class="fa fa-search"></span>
                    Search
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="usajobs-search-form-v2" class="usajobs-nav__search" aria-expanded="false" role="menu">
            <form action="/Search" method="get" novalidate="novalidate">
              <fieldset>
                <div class="usajobs-nav__search-keywords-container">
                  <label for="search-keyword">
                    <i class="usajobs-nav__search-keywords-icon fa fa-search"></i>
                    Keywords
                  </label>
                  <input id="search-keyword" name="search-keyword" class="usajobs-nav__search-keywords-input" placeholder="Job title, Skills, Agency" type="text" value="" autocomplete="false">
                </div>
                <div class="usajobs-nav__search-location-container">
                  <label for="search-location">
                    <i class="usajobs-nav__search-location-icon fa fa-map-marker"></i>
                    Location
                  </label>
                  <input id="search-location" name="search-location" type="text" class="usajobs-nav__search-location-input" placeholder="City, State, ZIP, or Country">
                  <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                  <input type="hidden" id="AutoCompleteSelected" name="AutoCompleteSelected">
                </div>
                <div class="usajobs-nav__search-button-container">
                  <button class="usa-button usa-button-primary-alt usajobs-nav__search-button">
                    Search
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </header>
</div>

