---
layout: styleguide
type: component
title: Navigation
lead: USAJOBS features a consistent header for top-level navigation across the site.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity under_review">
  Under Review
</a>

<h6 class="usa-heading-alt">Unauthenticated</h6>
<div class="preview">
  <header class="usajobs-site-header" role="banner">
    <div class="usa-disclaimer">
      <span class="usajobs-disclaimer-official">
        <img class="usa-flag_icon" alt="U.S. flag signifying that this is a United States federal government website" src="{{ site.baseurl }}/img/us_flag_small.png">
        An official website of the United States Government
      </span>
    </div>
    <nav class="usajobs-nav v1" role="navigation" data-object="nav" data-state="is-closed" data-target="#usajobs-menu">
      <div class="usajobs-nav__body">
        <div class="usajobs-nav__header">
          <div class="usajobs-nav__brand-container">
            <a class="usajobs-nav__brand" href="/">
              <img src="{{ site.baseurl }}/img/USAJOBS_logo.png" alt="USAJOBS Logo" class="logo">
            </a>
          </div>
          <div class="usajobs-nav__extended-menu" id="usajobs-menu">
            <ul class="usajobs-nav__menu">
              <li class="usajobs-nav__secondary-menu-container" data-state="is-closed">
                <a data-behavior="nav.menu.toggle" aria-haspopup="true" class="menu-toggle" href="/" title="Job Search">
                  Job Search
                </a>
                <ul class="usajobs-nav__secondary-menu" aria-expanded="false" role="menu">
                  <li><a ref="/">Basic Search</a></li>
                  <li><a href="/Search/AdvancedSearch">Advanced Search</a></li>
                  <li><a href="/Search/GeoSearch">Map Search (BETA)</a></li>
                </ul>
              </li>
              <li class="usajobs-nav__secondary-menu-container" data-state="is-closed">
                <a data-behavior="nav.menu.toggle" aria-haspopup="true" class="menu-toggle" href="" title="My Account">
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
                <a href="http://help.sqa.usajobs.gov/index.php/Main_Page" class="menu-toggle" data-behavior="nav.menu.toggle" aria-haspopup="true" title="Job Resources">
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
  </header>
</div>

<h6 class="usa-heading-alt">Authenticated</h6>
<div class="preview">
  <header class="usajobs-site-header" role="banner">
    <div class="usa-disclaimer">
      <span class="usajobs-disclaimer-official">
        <img class="usa-flag_icon" alt="U.S. flag signifying that this is a United States federal government website" src="{{ site.baseurl }}/img/us_flag_small.png">
        An official website of the United States Government
      </span>
    </div>
    <nav class="usajobs-nav v1" role="navigation" data-object="nav" data-state="is-closed" data-target="#usajobs-menu">
      <div class="usajobs-nav__body">
        <div class="usajobs-nav__header">
          <div class="usajobs-nav__brand-container">
            <a class="usajobs-nav__brand" href="/">
              <img src="{{ site.baseurl }}/img/USAJOBS_logo.png" alt="USAJOBS Logo" class="logo">
            </a>
          </div>
          <div class="usajobs-nav__extended-menu" id="usajobs-menu">
            <ul class="usajobs-nav__menu">
              <li class="usajobs-nav__secondary-menu-container" data-state="is-closed">
                <a data-behavior="nav.menu.toggle" aria-haspopup="true" class="menu-toggle" href="/" title="Job Search">
                  Job Search
                </a>
                <ul class="usajobs-nav__secondary-menu" aria-expanded="false" role="menu">
                  <li><a ref="/">Basic Search</a></li>
                  <li><a href="/Search/AdvancedSearch">Advanced Search</a></li>
                  <li><a href="/Search/GeoSearch">Map Search (BETA)</a></li>
                </ul>
              </li>
              <li class="usajobs-nav__secondary-menu-container" data-state="is-closed">
                <a data-behavior="nav.menu.toggle" aria-haspopup="true" class="menu-toggle" href="" title="My Account">
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
                <a href="http://help.sqa.usajobs.gov/index.php/Main_Page" class="menu-toggle" data-behavior="nav.menu.toggle" aria-haspopup="true" title="Job Resources">
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
  </header>
</div>

<h6 class="usa-heading-alt">Authenticated - Active state (nav item selected)</h6>
<div class="preview">
  <header class="usajobs-site-header" role="banner">
    <div class="usa-disclaimer">
      <span class="usajobs-disclaimer-official">
        <img class="usa-flag_icon" alt="U.S. flag signifying that this is a United States federal government website" src="{{ site.baseurl }}/img/us_flag_small.png">
        An official website of the United States Government
      </span>
    </div>
    <nav class="usajobs-nav v1" role="navigation" data-object="nav" data-state="is-closed" data-target="#usajobs-menu">
      <div class="usajobs-nav__body">
        <div class="usajobs-nav__header">
          <div class="usajobs-nav__brand-container">
            <a class="usajobs-nav__brand" href="/">
              <img src="{{ site.baseurl }}/img/USAJOBS_logo.png" alt="USAJOBS Logo" class="logo">
            </a>
          </div>
          <div class="usajobs-nav__extended-menu" id="usajobs-menu">
            <ul class="usajobs-nav__menu">
              <li class="usajobs-nav__secondary-menu-container" data-state="is-closed">
                <a data-behavior="nav.menu.toggle" aria-haspopup="true" class="menu-toggle" href="/" title="Job Search">
                  Job Search
                </a>
                <ul class="usajobs-nav__secondary-menu" aria-expanded="false" role="menu">
                  <li><a ref="/">Basic Search</a></li>
                  <li><a href="/Search/AdvancedSearch">Advanced Search</a></li>
                  <li><a href="/Search/GeoSearch">Map Search (BETA)</a></li>
                </ul>
              </li>
              <li class="usajobs-nav__secondary-menu-container" data-state="is-closed">
                <a data-behavior="nav.menu.toggle" aria-haspopup="true" class="menu-toggle is-active" href="" title="My Account">
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
                <a href="http://help.sqa.usajobs.gov/index.php/Main_Page" class="menu-toggle" data-behavior="nav.menu.toggle" aria-haspopup="true" title="Job Resources">
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
  </header>
</div>

<h6 class="usa-heading-alt">Version 2 Authenticated</h6>
<div class="preview">
  <header class="usajobs-site-header" role="banner">
    <div class="usa-disclaimer">
      <span class="usajobs-disclaimer-official">
        <img class="usa-flag_icon" alt="U.S. flag signifying that this is a United States federal government website" src="{{ site.baseurl }}/img/us_flag_small.png">
        An official website of the United States Government
      </span>
    </div>
    <nav class="usajobs-nav--v2" role="navigation" data-object="nav">
      <div class="usajobs-nav--v2__body">
        <div class="usajobs-nav--v2__header-container">
          <div class="usajobs-nav--v2__header">
            <div class="usajobs-nav--v2__brand-container">
              <a class="usajobs-nav--v2__brand" href="/">
                <img src="{{ site.baseurl }}/img/USAJOBS_logo.png" alt="USAJOBS Logo" class="logo">
              </a>
            </div>
            <div class="usajobs-nav--v2__menu" id="usajobs-menu">
              <ul>
                <li class="usajobs-nav--v2__menu-container usajobs-nav--v2__account">
                  <a class="usajobs-nav--v2__section-link" href="/Applicant/MyAccount/Home" title="Account">
                    <span class="fa fa-user"></span>
                    <span class="usajobs-nav--v2__account_name">QQ</span>
                    <span class="usajobs-nav--v2__first_name">Quadrina</span>
                  </a>
                </li>
                <li class="usajobs-nav--v2__menu-container usajobs-nav--v2__help"> 
                  <a class="usajobs-nav--v2__section-link" href="http://help.sqa.usajobs.gov/index.php/Main_Page" title="Help">
                    <span class="fa fa-question-circle"></span>
                    Help
                  </a>
                </li>
                <li class="usajobs-nav--v2__menu-container usajobs-nav--v2__menu-search" data-state="is-closed" data-target="#usajobs-search-form-v2">
                  <a data-behavior="nav.menu.search-toggle" aria-haspopup="true" class="usajobs-nav--v2__section-link" href="/" title="Job Search">
                    <span class="fa fa-search"></span>
                    Search
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="usajobs-search-form-v2" class="usajobs-nav--v2__search" aria-expanded="false" role="menu">
            <form action="/Search" method="get" novalidate="novalidate">
              <fieldset>
                <div class="usajobs-nav--v2__search-keywords-container">
                  <label for="search-keyword-v2">
                    <i class="usajobs-nav--v2__search-keywords-icon fa fa-search"></i>
                    Keywords
                  </label>
                  <input id="search-keyword-v2" name="search-keyword" class="usajobs-nav--v2__search-keywords-input" placeholder="Job title, Skills, Agency" type="text" value="" autocomplete="false">
                </div>
                <div class="usajobs-nav--v2__search-location-container">
                  <label for="search-location-v2">
                    <i class="usajobs-nav--v2__search-location-icon fa fa-map-marker"></i>
                    Location
                  </label>
                  <input id="search-location-v2" name="search-location" type="text" class="usajobs-nav--v2__search-location-input" placeholder="City, State, ZIP, or Country">
                  <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                  <input type="hidden" id="AutoCompleteSelected" name="AutoCompleteSelected">
                </div>
                <div class="usajobs-nav--v2__search-button-container">
                  <button class="usa-button usa-button-primary-alt usajobs-nav--v2__search-button">
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

<h6 class="usa-heading-alt">Version 2 Authenticated - Alternate</h6>
<div class="preview">
  <header class="usajobs-site-header" role="banner" aria-label="header">
    <div class="usa-disclaimer">
      <span class="usajobs-disclaimer-official">
        <img class="usa-flag_icon" alt="U.S. flag signifying that this is a United States federal government website" src="{{ site.baseurl }}/img/us_flag_small.png">
        An official website of the United States Government
      </span>
    </div>
    <nav class="usajobs-nav--v2" role="navigation" aria-label="main navigation" data-object="nav">
      <div class="usajobs-nav--v2__body">
        <div class="usajobs-nav--v2__header-container">
          <div class="usajobs-nav--v2__header">
            <div class="usajobs-nav--v2__brand-container">
              <a class="usajobs-nav--v2__brand" href="/">
                <img src="{{ site.baseurl }}/img/USAJOBS_logo.png" alt="USAJOBS Logo" class="logo">
              </a>
            </div>
            <div class="usajobs-nav--v2__menu" id="usajobs-menu">
              <ul>
                <li class="usajobs-nav--v2__menu-container usajobs-nav--v2__account" data-state="is-closed">
                  <a class="usajobs-nav--v2__section-link menu-toggle" data-behavior="nav.menu.toggle" aria-haspopup="true" href="#account" title="Account">
                    <span class="fa fa-user"></span>
                    <span class="usajobs-nav--v2__account_name">QQ</span>
                    <span class="usajobs-nav--v2__first_name">Quadrina</span>
                  </a>
                  <ul class="usajobs-nav--v2__secondary-menu" aria-expanded="false" role="menu">
                    <li><a href="/Applicant/MyAccount/Home">Home</a></li>
                    <li><a href="/Applicant/MyAccount/Profile">Profile</a></li>
                    <li><a href="/Applicant/MyAccount/Documents">Documents</a></li>
                    <li><a href="/Applicant/MyAccount/Account">Username &amp; Password</a></li>
                    <li><a href="/Applicant/Profile/">Sign Out</a></li>
                  </ul>
                </li>
                <li class="usajobs-nav--v2__menu-container usajobs-nav--v2__help"> 
                  <a class="usajobs-nav--v2__section-link" href="http://help.sqa.usajobs.gov/index.php/Main_Page" title="Help">
                    <span class="fa fa-question-circle"></span>
                    Help
                  </a>
                </li>
                <li class="usajobs-nav--v2__menu-container usajobs-nav--v2__menu-search" data-state="is-closed" data-target="#usajobs-search-form-v2-alt">
                  <a data-behavior="nav.menu.search-toggle" aria-haspopup="true" class="usajobs-nav--v2__section-link" href="/" title="Job Search">
                    <span class="fa fa-search"></span>
                    Search
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="usajobs-search-form-v2-alt" class="usajobs-nav--v2__search" aria-expanded="false" role="menu">
            <form action="/Search" method="get" novalidate="novalidate" role="search">
              <fieldset>
                <div class="usajobs-nav--v2__search-keywords-container">
                  <label for="search-keyword-v2-alt">
                    <i class="usajobs-nav--v2__search-keywords-icon fa fa-search"></i>
                    Keywords
                  </label>
                  <input id="search-keyword-v2-alt" name="search-keyword" class="usajobs-nav--v2__search-keywords-input" placeholder="Job title, Skills, Agency" type="text" value="" autocomplete="false">
                </div>
                <div class="usajobs-nav--v2__search-location-container">
                  <label for="search-location-v2-alt">
                    <i class="usajobs-nav--v2__search-location-icon fa fa-map-marker"></i>
                    Location
                  </label>
                  <input id="search-location-v2-alt" name="search-location" type="text" class="usajobs-nav--v2__search-location-input" placeholder="City, State, ZIP, or Country">
                </div>
                <div class="usajobs-nav--v2__search-button-container">
                  <button class="usa-button usa-button-primary-alt usajobs-nav--v2__search-button">
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
      <li>The word "Profile" is visible until the SM breakpoint at which time the user's first name is shown. The first name can comfortably accommodate 17 characters before the overflow is hidden.</li>
      <li>Padding should be applied to the anchor element (<code>a</code>) to increase the tappable target size. The padding should also reach to the top and bottom of the navigation element.</li>
      <li>Padding around the first element (logo) should reach to the left edge of the page to enlarge the tappable target.</li>
      <li>Padding around the last element (Search) should reach to the right edge of the page to enlarge the tappable target.</li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use the Unauthenticated variation when the user has not yet signed in. Use the Authenticated variation once the user is signed in.</li>
    </ul>
  </div>
</div>
