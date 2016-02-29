---
layout: styleguide
type: component
title: Navigation
lead: USAJOBS features a consistent header for top-level navigation across the site.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity under_review">
  Under Review
</a>

<h6 class="usa-heading-alt">Version 1 Authenticated</h6>
<div class="preview">
  <header class="usajobs-site-header" role="banner" aria-label="header">
    <div class="usa-disclaimer">
      <span class="usajobs-disclaimer-official">
        <img class="usa-flag_icon" alt="U.S. flag signifying that this is a United States federal government website" src="{{ site.baseurl }}/img/us_flag_small.png">
        An official website of the United States Government
      </span>
    </div>
    <nav class="usajobs-nav" role="navigation" aria-label="main navigation" data-object="nav">
      <div class="usajobs-nav__body">
        <div class="usajobs-nav__header-container">
          <div class="usajobs-nav__header">
            <div class="usajobs-nav__brand-container">
              <a class="usajobs-nav__brand" href="/">
                <img src="{{ site.baseurl }}/img/USAJOBS_logo.png" alt="USAJOBS Logo" class="logo">
              </a>
            </div>
            <div class="usajobs-nav__menu" id="usajobs-menu">
              <ul>
                <li class="usajobs-nav__menu-container usajobs-nav__account" data-state="is-closed">
                  <a class="usajobs-nav__section-link menu-toggle" data-behavior="nav.menu.toggle" aria-haspopup="true" href="#account" title="Account">
                    <span class="fa fa-user"></span>
                    <span class="usajobs-nav__account_name">QQ</span>
                    <span class="usajobs-nav__first_name">Quadrina</span>
                  </a>
                  <ul class="usajobs-nav__secondary-menu" aria-expanded="false" role="menu">
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
                  <a class="usajobs-nav__section-link" href="http://help.sqa.usajobs.gov/index.php/Main_Page" title="Help">
                    <span class="fa fa-question-circle"></span>
                    Help
                  </a>
                </li>
                <li class="usajobs-nav__menu-container usajobs-nav__menu-search" data-state="is-closed" data-target="#usajobs-search-form-v2-alt">
                  <a data-behavior="nav.menu.search-toggle" aria-haspopup="true" class="usajobs-nav__section-link" href="/" title="Job Search">
                    <span class="fa fa-search"></span>
                    Search
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="usajobs-search-form-v2-alt" class="usajobs-nav__search" aria-expanded="false" role="menu">
            <form action="/Search" method="get" novalidate="novalidate" role="search">
              <fieldset>
                <div class="usajobs-nav__search-keywords-container">
                  <label for="search-keyword-v2-alt">
                    <i class="usajobs-nav__search-keywords-icon fa fa-search"></i>
                    Keywords
                  </label>
                  <input id="search-keyword-v2-alt" name="search-keyword" class="usajobs-nav__search-keywords-input" placeholder="Job title, Skills, Agency" type="text" value="" autocomplete="false">
                </div>
                <div class="usajobs-nav__search-location-container">
                  <label for="search-location-v2-alt">
                    <i class="usajobs-nav__search-location-icon fa fa-map-marker"></i>
                    Location
                  </label>
                  <input id="search-location-v2-alt" name="search-location" type="text" class="usajobs-nav__search-location-input" placeholder="City, State, ZIP, or Country">
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
    <h4 class="usa-heading">Implementation</h4>
    <ul class="usa-content-list">
      <li>The user's first and last initials are used at the narrowest viewport widths. At the M breakpoint (600px) the full first name of the user is shown.</li>
      <li>Help is hidden until the M breakpoint (600px).</li>
      <li>Padding should be applied to the anchor element (<code>a</code>) to increase the tappable target size. The padding should also reach to the top and bottom of the navigation element.</li>
      <li>Padding around the first element (logo) should reach to the left edge of the page to enlarge the tappable target.</li>
      <li>Padding around the last element (Search) should reach to the right edge of the page to enlarge the tappable target.</li>
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
      <span class="usajobs-disclaimer-official">
        <img class="usa-flag_icon" alt="U.S. flag signifying that this is a United States federal government website" src="{{ site.baseurl }}/img/us_flag_small.png">
        An official website of the United States Government
      </span>
    </div>
    <nav class="usajobs-nav" role="navigation" aria-label="main navigation" data-object="nav">
      <div class="usajobs-nav__body">
        <div class="usajobs-nav__header-container">
          <div class="usajobs-nav__header">
            <div class="usajobs-nav__brand-container">
              <a class="usajobs-nav__brand" href="/">
                <img src="{{ site.baseurl }}/img/USAJOBS_logo.png" alt="USAJOBS Logo" class="logo">
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
                  <ul class="usajobs-nav__secondary-menu" aria-expanded="false" role="menu">
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
                  <a class="usajobs-nav__section-link" href="http://help.sqa.usajobs.gov/index.php/Main_Page" title="Help">
                    <span class="fa fa-question-circle"></span>
                    Help
                  </a>
                </li>
                <li class="usajobs-nav__menu-container usajobs-nav__menu-search" data-state="is-closed" data-target="#usajobs-search-form-v2-alt">
                  <a data-behavior="nav.menu.search-toggle" aria-haspopup="true" class="usajobs-nav__section-link" href="/" title="Job Search">
                    <span class="fa fa-search"></span>
                    Search
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="usajobs-search-form-v2-alt" class="usajobs-nav__search" aria-expanded="false" role="menu">
            <form action="/Search" method="get" novalidate="novalidate" role="search">
              <fieldset>
                <div class="usajobs-nav__search-keywords-container">
                  <label for="search-keyword-v2-alt">
                    <i class="usajobs-nav__search-keywords-icon fa fa-search"></i>
                    Keywords
                  </label>
                  <input id="search-keyword-v2-alt" name="search-keyword" class="usajobs-nav__search-keywords-input" placeholder="Job title, Skills, Agency" type="text" value="" autocomplete="false">
                </div>
                <div class="usajobs-nav__search-location-container">
                  <label for="search-location-v2-alt">
                    <i class="usajobs-nav__search-location-icon fa fa-map-marker"></i>
                    Location
                  </label>
                  <input id="search-location-v2-alt" name="search-location" type="text" class="usajobs-nav__search-location-input" placeholder="City, State, ZIP, or Country">
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

<h6 class="usa-heading-alt">Version 1 Unauthenticated</h6>
<div class="preview">
  <header class="usajobs-site-header" role="banner" aria-label="header">
    <div class="usa-disclaimer">
      <span class="usajobs-disclaimer-official">
        <img class="usa-flag_icon" alt="U.S. flag signifying that this is a United States federal government website" src="{{ site.baseurl }}/img/us_flag_small.png">
        An official website of the United States Government
      </span>
    </div>
    <nav class="usajobs-nav" role="navigation" aria-label="main navigation" data-object="nav">
      <div class="usajobs-nav__body">
        <div class="usajobs-nav__header-container">
          <div class="usajobs-nav__header">
            <div class="usajobs-nav__brand-container">
              <a class="usajobs-nav__brand" href="/">
                <img src="{{ site.baseurl }}/img/USAJOBS_logo.png" alt="USAJOBS Logo" class="logo">
              </a>
            </div>
            <div class="usajobs-nav__menu" id="usajobs-menu">
              <ul>
                <li class="usajobs-nav__menu-container usajobs-nav__account" data-state="is-closed">
                  <a class="usajobs-nav__section-link menu-toggle" href="https://www.usajobs.gov/Applicant/MyAccount/Home/" title="Account">
                    <span class="fa fa-user"></span>
                    <span class="usajobs-nav__account_name">Sign In</span>
                    <span class="usajobs-nav__first_name">Sign In</span>
                  </a>
                </li>
                <li class="usajobs-nav__menu-container usajobs-nav__help"> 
                  <a class="usajobs-nav__section-link" href="http://help.sqa.usajobs.gov/index.php/Main_Page" title="Help">
                    <span class="fa fa-question-circle"></span>
                    Help
                  </a>
                </li>
                <li class="usajobs-nav__menu-container usajobs-nav__menu-search" data-state="is-closed" data-target="#usajobs-search-form-v2-alt">
                  <a data-behavior="nav.menu.search-toggle" aria-haspopup="true" class="usajobs-nav__section-link" href="/" title="Job Search">
                    <span class="fa fa-search"></span>
                    Search
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="usajobs-search-form-v2-alt" class="usajobs-nav__search" aria-expanded="false" role="menu">
            <form action="/Search" method="get" novalidate="novalidate" role="search">
              <fieldset>
                <div class="usajobs-nav__search-keywords-container">
                  <label for="search-keyword-v2-alt">
                    <i class="usajobs-nav__search-keywords-icon fa fa-search"></i>
                    Keywords
                  </label>
                  <input id="search-keyword-v2-alt" name="search-keyword" class="usajobs-nav__search-keywords-input" placeholder="Job title, Skills, Agency" type="text" value="" autocomplete="false">
                </div>
                <div class="usajobs-nav__search-location-container">
                  <label for="search-location-v2-alt">
                    <i class="usajobs-nav__search-location-icon fa fa-map-marker"></i>
                    Location
                  </label>
                  <input id="search-location-v2-alt" name="search-location" type="text" class="usajobs-nav__search-location-input" placeholder="City, State, ZIP, or Country">
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
      <li>Use the Unauthenticated variation when the user has not yet signed in.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt">Version 2 (5.6 release) Authenticated</h6>
<div class="preview">
  <header class="usajobs-site-header" role="banner">
    <div class="usa-disclaimer">
      <span class="usajobs-disclaimer-official">
        <img class="usa-flag_icon" alt="U.S. flag signifying that this is a United States federal government website" src="{{ site.baseurl }}/img/us_flag_small.png">
        An official website of the United States Government
      </span>
    </div>
    <nav class="usajobs-nav" role="navigation" data-object="nav">
      <div class="usajobs-nav__body">
        <div class="usajobs-nav__header-container">
          <div class="usajobs-nav__header">
            <div class="usajobs-nav__brand-container">
              <a class="usajobs-nav__brand" href="/">
                <img src="{{ site.baseurl }}/img/USAJOBS_logo.png" alt="USAJOBS Logo" class="logo">
              </a>
            </div>
            <div class="usajobs-nav__menu" id="usajobs-menu">
              <ul>
                <li class="usajobs-nav__menu-container usajobs-nav__account">
                  <a class="usajobs-nav__section-link" href="/Applicant/MyAccount/Home" title="Account">
                    <span class="fa fa-user"></span>
                    <span class="usajobs-nav__account_name">QQ</span>
                    <span class="usajobs-nav__first_name">Quadrina</span>
                  </a>
                </li>
                <li class="usajobs-nav__menu-container usajobs-nav__help"> 
                  <a class="usajobs-nav__section-link" href="http://help.sqa.usajobs.gov/index.php/Main_Page" title="Help">
                    <span class="fa fa-question-circle"></span>
                    Help
                  </a>
                </li>
                <li class="usajobs-nav__menu-container usajobs-nav__menu-search" data-state="is-closed" data-target="#usajobs-search-form-v2">
                  <a data-behavior="nav.menu.search-toggle" aria-haspopup="true" class="usajobs-nav__section-link" href="/" title="Job Search">
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
                  <label for="search-keyword-v2">
                    <i class="usajobs-nav__search-keywords-icon fa fa-search"></i>
                    Keywords
                  </label>
                  <input id="search-keyword-v2" name="search-keyword" class="usajobs-nav__search-keywords-input" placeholder="Job title, Skills, Agency" type="text" value="" autocomplete="false">
                </div>
                <div class="usajobs-nav__search-location-container">
                  <label for="search-location-v2">
                    <i class="usajobs-nav__search-location-icon fa fa-map-marker"></i>
                    Location
                  </label>
                  <input id="search-location-v2" name="search-location" type="text" class="usajobs-nav__search-location-input" placeholder="City, State, ZIP, or Country">
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
