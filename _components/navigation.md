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
<div class="preview">
  <header class="usajobs-site-header" role="banner" aria-label="header">
    <!-- Gov banner BEGIN -->
    <div class="usa-banner">
      <div class="usa-accordion">
        <header class="usa-banner-header">
          <div class="usa-grid usa-banner-inner usajobs-nav--full_bleed__banner-inner">
          <img src="{{ site.baseurl }}/img/favicons/favicon-57.png" alt="U.S. flag">
          <p>An official website of the United States government</p>
          <button class="usa-accordion-button usa-banner-button"
            aria-expanded="false" aria-controls="gov-banner">
            <span class="usa-banner-button-text">Here's how you know</span>
          </button>
          </div>
        </header>
        <div class="usa-banner-content usa-grid usa-accordion-content" id="gov-banner">
          <div class="usa-banner-guidance-gov usa-width-one-half">
            <img class="usa-banner-icon usa-media_block-img" src="{{ site.baseurl }}/img/icon-dot-gov.svg" alt="Dot gov">
            <div class="usa-media_block-body">
              <p>
                <strong>The .gov means it’s official.</strong>
                <br>
                Federal government websites always use a .gov or .mil domain. Before sharing sensitive information online, make sure you’re on a .gov or .mil site by inspecting your browser’s address (or “location”) bar.
                <br>
                <br>
                There are some exceptions to this rule. During the USAJOBS application process, you may be sent to an agency specific application system that DOES NOT contain a .mil or .gov. Rest assured, if you apply to any job through USAJOBS.gov your information is safe and secure.
              </p>
            </div>
          </div>
          <div class="usa-banner-guidance-ssl usa-width-one-half">
            <img class="usa-banner-icon usa-media_block-img" src="{{ site.baseurl }}/img/icon-https.svg" alt="SSL">
            <div class="usa-media_block-body">
              <p>This site is also protected by an SSL (Secure Sockets Layer) certificate that’s been signed by the U.S. government. The <strong>https://</strong> means all transmitted data is encrypted  — in other words, any information or browsing history that you provide is transmitted securely.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Gov banner END -->
    <nav class="usajobs-nav usajobs-nav--full_bleed" role="navigation" aria-label="main navigation" data-object="nav">
      <div class="usajobs-nav__body usajobs-nav--full_bleed__body">
        <div class="usajobs-nav__header-container">
          <div class="usajobs-nav__header usajobs-nav--full_bleed__header">
            <div class="usajobs-nav__brand-container">
              <a class="usajobs-nav__brand usajobs-nav--full_bleed__brand" href="/">
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
                  <a class="usajobs-nav__section-link" href="http://usajobs.github.io/Help" title="Help">
                    <span class="fa fa-question-circle"></span>
                    Help
                  </a>
                </li>
                <li class="usajobs-nav__menu-container usajobs-nav__menu-search" data-state="is-closed">
                  <a data-behavior="nav.menu.search-toggle" aria-controls="usajobs-search-form-v2-unauth" class="usajobs-nav__section-link" href="/" title="Job Search">
                    <span class="fa fa-search"></span>
                    Search
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="usajobs-search-form-v2-unauth" class="usajobs-nav__search" aria-expanded="false" role="menu">
            <form action="/Search" method="get" novalidate="novalidate" role="search">
              <fieldset class="usajobs-nav--full_bleed__search-body">
                <div class="usajobs-nav__search-keywords-container">
                  <label for="search-keyword">
                    <i class="usajobs-nav__search-keywords-icon fa fa-search"></i>
                    Keywords
                  </label>
                  <input id="search-keyword" name="search-keyword" class="usajobs-nav__search-keywords-input" placeholder="Job title, department &amp; agency, series" type="text" value="" autocomplete="false">
                </div>
                <div class="usajobs-nav__search-location-container">
                  <label for="search-location">
                    <i class="usajobs-nav__search-location-icon fa fa-map-marker"></i>
                    Location
                  </label>
                  <input id="search-location" name="search-location" type="text" class="usajobs-nav__search-location-input" placeholder="City, state, zip, or country">
                  <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                  <input type="hidden" id="AutoCompleteSelected" name="AutoCompleteSelected">
                </div>
                <div class="usajobs-nav__search-button-container usajobs-nav--full_bleed__search-button-container">
                  <button class="usa-button usa-button-primary-alt usajobs-nav__search-button">
                    Search
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
          <div class="usajobs-nav__create-account usajobs-nav--full_bleed__create-account">
            <div class="usajobs-nav--full_bleed__create-account-container">
              <a href="https://login.test.usajobs.gov/account/Create" class="usajobs-nav__create-account-link">Create an account</a> to get started &mdash; build your profile, create or upload resumes, and apply for jobs.
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

<h6 class="usa-heading-alt">Authenticated - Active state variation</h6>
<div class="preview">
  <header class="usajobs-site-header" role="banner" aria-label="header">
    <!-- Gov banner BEGIN -->
    <div class="usa-banner">
      <div class="usa-accordion">
        <header class="usa-banner-header">
          <div class="usa-grid usa-banner-inner usajobs-nav--full_bleed__banner-inner">
          <img src="{{ site.baseurl }}/img/favicons/favicon-57.png" alt="U.S. flag">
          <p>An official website of the United States government</p>
          <button class="usa-accordion-button usa-banner-button"
            aria-expanded="false" aria-controls="gov-banner">
            <span class="usa-banner-button-text">Here's how you know</span>
          </button>
          </div>
        </header>
        <div class="usa-banner-content usa-grid usa-accordion-content" id="gov-banner">
          <div class="usa-banner-guidance-gov usa-width-one-half">
            <img class="usa-banner-icon usa-media_block-img" src="{{ site.baseurl }}/img/icon-dot-gov.svg" alt="Dot gov">
            <div class="usa-media_block-body">
              <p>
                <strong>The .gov means it’s official.</strong>
                <br>
                Federal government websites always use a .gov or .mil domain. Before sharing sensitive information online, make sure you’re on a .gov or .mil site by inspecting your browser’s address (or “location”) bar.
                <br>
                <br>
                There are some exceptions to this rule. During the USAJOBS application process, you may be sent to an agency specific application system that DOES NOT contain a .mil or .gov. Rest assured, if you apply to any job through USAJOBS.gov your information is safe and secure.
              </p>
            </div>
          </div>
          <div class="usa-banner-guidance-ssl usa-width-one-half">
            <img class="usa-banner-icon usa-media_block-img" src="{{ site.baseurl }}/img/icon-https.svg" alt="SSL">
            <div class="usa-media_block-body">
              <p>This site is also protected by an SSL (Secure Sockets Layer) certificate that’s been signed by the U.S. government. The <strong>https://</strong> means all transmitted data is encrypted  — in other words, any information or browsing history that you provide is transmitted securely.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Gov banner END -->
    <nav class="usajobs-nav usajobs-nav--full_bleed" role="navigation" aria-label="main navigation" data-object="nav">
      <div class="usajobs-nav__body usajobs-nav--full_bleed__body">
        <div class="usajobs-nav__header-container">
          <div class="usajobs-nav__header usajobs-nav--full_bleed__header">
            <div class="usajobs-nav__brand-container">
              <a class="usajobs-nav__brand usajobs-nav--full_bleed__brand" href="/">
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
                    <li><a href="/Applicant/Profile/PersonalInformation">Profile</a></li>
                    <li><a href="/Applicant/MyAccount/Documents">Documents</a></li>
                    <li><a href="/Account/Maintenance">Username &amp; Password</a></li>
                    <li><a href="/Applicant/Account/LogOff">Sign Out</a></li>
                  </ul>
                </li>
                <li class="usajobs-nav__menu-container usajobs-nav__help">
                  <a class="usajobs-nav__section-link" href="http://usajobs.github.io/Help" title="Help">
                    <span class="fa fa-question-circle"></span>
                    Help
                  </a>
                </li>
                <li class="usajobs-nav__menu-container usajobs-nav__menu-search" data-state="is-closed">
                  <a data-behavior="nav.menu.search-toggle" aria-controls="usajobs-search-form-v2-auth" class="usajobs-nav__section-link" href="/" title="Job Search">
                    <span class="fa fa-search"></span>
                    Search
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="usajobs-search-form-v2-auth" class="usajobs-nav__search" aria-expanded="false" role="menu">
            <form action="/Search" method="get" novalidate="novalidate" role="search">
              <fieldset class="usajobs-nav--full_bleed__search-body">
                <div class="usajobs-nav__search-keywords-container">
                  <label for="search-keyword">
                    <i class="usajobs-nav__search-keywords-icon fa fa-search"></i>
                    Keywords
                  </label>
                  <input id="search-keyword" name="search-keyword" class="usajobs-nav__search-keywords-input" placeholder="Job title, department &amp; agency, series" type="text" value="" autocomplete="false">
                </div>
                <div class="usajobs-nav__search-location-container">
                  <label for="search-location">
                    <i class="usajobs-nav__search-location-icon fa fa-map-marker"></i>
                    Location
                  </label>
                  <input id="search-location" name="search-location" type="text" class="usajobs-nav__search-location-input" placeholder="City, state, zip, or country">
                  <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                  <input type="hidden" id="AutoCompleteSelected" name="AutoCompleteSelected">
                </div>
                <div class="usajobs-nav__search-button-container usajobs-nav--full_bleed__search-button-container">
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
      <li>Use the Authenticated variation once the user is signed in.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt">Search variation</h6>
<div class="preview">
  <header class="usajobs-site-header" role="banner" aria-label="header">
    <!-- Gov banner BEGIN -->
    <div class="usa-banner">
      <div class="usa-accordion">
        <header class="usa-banner-header">
          <div class="usa-grid usa-banner-inner usajobs-nav--full_bleed__banner-inner">
          <img src="{{ site.baseurl }}/img/favicons/favicon-57.png" alt="U.S. flag">
          <p>An official website of the United States government</p>
          <button class="usa-accordion-button usa-banner-button"
            aria-expanded="false" aria-controls="gov-banner">
            <span class="usa-banner-button-text">Here's how you know</span>
          </button>
          </div>
        </header>
        <div class="usa-banner-content usa-grid usa-accordion-content" id="gov-banner">
          <div class="usa-banner-guidance-gov usa-width-one-half">
            <img class="usa-banner-icon usa-media_block-img" src="{{ site.baseurl }}/img/icon-dot-gov.svg" alt="Dot gov">
            <div class="usa-media_block-body">
              <p>
                <strong>The .gov means it’s official.</strong>
                <br>
                Federal government websites always use a .gov or .mil domain. Before sharing sensitive information online, make sure you’re on a .gov or .mil site by inspecting your browser’s address (or “location”) bar.
                <br>
                <br>
                There are some exceptions to this rule. During the USAJOBS application process, you may be sent to an agency specific application system that DOES NOT contain a .mil or .gov. Rest assured, if you apply to any job through USAJOBS.gov your information is safe and secure.
              </p>
            </div>
          </div>
          <div class="usa-banner-guidance-ssl usa-width-one-half">
            <img class="usa-banner-icon usa-media_block-img" src="{{ site.baseurl }}/img/icon-https.svg" alt="SSL">
            <div class="usa-media_block-body">
              <p>This site is also protected by an SSL (Secure Sockets Layer) certificate that’s been signed by the U.S. government. The <strong>https://</strong> means all transmitted data is encrypted  — in other words, any information or browsing history that you provide is transmitted securely.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Gov banner END -->
    <nav class="usajobs-nav usajobs-nav--full_bleed" role="navigation" aria-label="main navigation" data-object="nav">
      <div class="usajobs-nav__body usajobs-nav--full_bleed__body">
        <div class="usajobs-nav__header-container">
          <div class="usajobs-nav__header usajobs-nav--full_bleed__header">
            <div class="usajobs-nav__brand-container">
              <a class="usajobs-nav__brand usajobs-nav--full_bleed__brand" href="/">
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
                  <a class="usajobs-nav__section-link" href="http://usajobs.github.io/Help" title="Help">
                    <span class="fa fa-question-circle"></span>
                    Help
                  </a>
                </li>
                <li class="usajobs-nav__menu-container usajobs-nav__menu-search" data-state="is-closed">
                  <a data-behavior="nav.menu.search-toggle" aria-controls="usajobs-search-form-v2-unauth" class="usajobs-nav__section-link" href="/" title="Job Search">
                    <span class="fa fa-search"></span>
                    Search
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="usajobs-search-form-v2-unauth" class="usajobs-nav__search" aria-expanded="false" role="menu">
            <form action="/Search" method="get" novalidate="novalidate" role="search">
              <fieldset class="usajobs-nav--full_bleed__search-body">
                <div class="usajobs-nav__search-keywords-container">
                  <label for="search-keyword">
                    <i class="usajobs-nav__search-keywords-icon fa fa-search"></i>
                    Keywords
                  </label>
                  <input id="search-keyword" name="search-keyword" class="usajobs-nav__search-keywords-input" placeholder="Job title, department &amp; agency, series" type="text" value="" autocomplete="false">
                </div>
                <div class="usajobs-nav__search-location-container">
                  <label for="search-location">
                    <i class="usajobs-nav__search-location-icon fa fa-map-marker"></i>
                    Location
                    <a href="#map" class="usajobs-nav__search-map-view">
                      Map view
                    </a>
                  </label>
                  <input id="search-location" name="search-location" type="text" class="usajobs-nav__search-location-input" placeholder="City, state, zip, or country">
                  <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                  <input type="hidden" id="AutoCompleteSelected" name="AutoCompleteSelected">
                </div>
                <div class="usajobs-nav__search-button-container usajobs-nav--full_bleed__search-button-container">
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
      <li>Use the Search variation on the search results page.</li>
    </ul>
  </div>
</div>


<h6 class="usa-heading-alt">Logo-only</h6>
<div class="preview">
  <header class="usajobs-site-header" role="banner" aria-label="header">
    <!-- Gov banner BEGIN -->
    <div class="usa-banner">
      <div class="usa-accordion">
        <header class="usa-banner-header">
          <div class="usa-grid usa-banner-inner usajobs-nav__banner-inner">
          <img src="{{ site.baseurl }}/img/favicons/favicon-57.png" alt="U.S. flag">
          <p>An official website of the United States government</p>
          <button class="usa-accordion-button usa-banner-button"
            aria-expanded="false" aria-controls="gov-banner">
            <span class="usa-banner-button-text">Here's how you know</span>
          </button>
          </div>
        </header>
        <div class="usa-banner-content usa-grid usa-accordion-content" id="gov-banner">
          <div class="usa-banner-guidance-gov usa-width-one-half">
            <img class="usa-banner-icon usa-media_block-img" src="{{ site.baseurl }}/img/icon-dot-gov.svg" alt="Dot gov">
            <div class="usa-media_block-body">
              <p>
                <strong>The .gov means it’s official.</strong>
                <br>
                Federal government websites always use a .gov or .mil domain. Before sharing sensitive information online, make sure you’re on a .gov or .mil site by inspecting your browser’s address (or “location”) bar.
              </p>
            </div>
          </div>
          <div class="usa-banner-guidance-ssl usa-width-one-half">
            <img class="usa-banner-icon usa-media_block-img" src="{{ site.baseurl }}/img/icon-https.svg" alt="SSL">
            <div class="usa-media_block-body">
              <p>This site is also protected by an SSL (Secure Sockets Layer) certificate that’s been signed by the U.S. government. The <strong>https://</strong> means all transmitted data is encrypted  — in other words, any information or browsing history that you provide is transmitted securely.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Gov banner END -->
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

<h6 class="usa-heading-alt">Test &amp; UAT environments</h6>
<div class="preview">
  <header class="usajobs-site-header" role="banner">
    <!-- Gov banner BEGIN -->
    <div class="usa-banner">
      <div class="usa-accordion">
        <header class="usa-banner-header usajobs-nav--vTest__banner-header">
          <div class="usa-grid usa-banner-inner usajobs-nav__banner-inner usajobs-nav--vTest__banner-inner">
            <img src="{{ site.baseurl }}/img/favicons/favicon-57.png" alt="U.S. flag">
            <p>An official website of the United States government</p>
            <button class="usa-accordion-button usa-banner-button"
              aria-expanded="false" aria-controls="gov-banner">
              <span class="usa-banner-button-text">Here's how you know</span>
            </button>
          </div>
          <div class="usa-grid usa-banner-inner usajobs-nav__banner-inner usajobs-nav--vTest__banner-warning">
            <p><i class="fa fa-exclamation-circle"></i> This is a FAKE environment. The jobs and information on this system are not real.</p>
          </div>
        </header>
        <div class="usa-banner-content usa-grid usa-accordion-content" id="gov-banner">
          <div class="usa-banner-guidance-gov usa-width-one-half">
            <img class="usa-banner-icon usa-media_block-img" src="{{ site.baseurl }}/img/icon-dot-gov.svg" alt="Dot gov">
            <div class="usa-media_block-body">
              <p>
                <strong>The .gov means it’s official.</strong>
                <br>
                Federal government websites always use a .gov or .mil domain. Before sharing sensitive information online, make sure you’re on a .gov or .mil site by inspecting your browser’s address (or “location”) bar.
              </p>
            </div>
          </div>
          <div class="usa-banner-guidance-ssl usa-width-one-half">
            <img class="usa-banner-icon usa-media_block-img" src="{{ site.baseurl }}/img/icon-https.svg" alt="SSL">
            <div class="usa-media_block-body">
              <p>This site is also protected by an SSL (Secure Sockets Layer) certificate that’s been signed by the U.S. government. The <strong>https://</strong> means all transmitted data is encrypted  — in other words, any information or browsing history that you provide is transmitted securely.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Gov banner END -->
    <nav class="usajobs-nav usajobs-nav--vTest" role="navigation" data-object="nav">
      <div class="usajobs-nav__body">
        <div class="usajobs-nav__header-container">
          <div class="usajobs-nav__header">
            <div class="usajobs-nav__brand-container">
              <a class="usajobs-nav__brand usajobs-nav--vTest__brand" href="/">
                <span class="logo"></span>
                <span class="test">FAKE <i class="fa fa-exclamation-circle"></i></span>
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
                  <a class="usajobs-nav__section-link" href="http://usajobs.github.io/Help" title="Help">
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
<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use this variation in the test and UAT environments to make clear to any user of those systems that this is not the production system.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt">Agency Talent Portal</h6>
<div class="preview">
  <header class="usajobs-site-header" role="banner" aria-label="header">
    <!-- Gov banner BEGIN -->
    <div class="usa-banner">
      <div class="usa-accordion">
        <header class="usa-banner-header">
          <div class="usa-grid usa-banner-inner usajobs-nav--vATP__banner-inner">
          <img src="{{ site.baseurl }}/img/favicons/favicon-57.png" alt="U.S. flag">
          <p>An official website of the United States government</p>
          <button class="usa-accordion-button usa-banner-button"
            aria-expanded="false" aria-controls="gov-banner">
            <span class="usa-banner-button-text">Here's how you know</span>
          </button>
          </div>
        </header>
        <div class="usa-banner-content usa-grid usa-accordion-content" id="gov-banner">
          <div class="usa-banner-guidance-gov usa-width-one-half">
            <img class="usa-banner-icon usa-media_block-img" src="{{ site.baseurl }}/img/icon-dot-gov.svg" alt="Dot gov">
            <div class="usa-media_block-body">
              <p>
                <strong>The .gov means it’s official.</strong>
                <br>
                Federal government websites always use a .gov or .mil domain. Before sharing sensitive information online, make sure you’re on a .gov or .mil site by inspecting your browser’s address (or “location”) bar.
              </p>
            </div>
          </div>
          <div class="usa-banner-guidance-ssl usa-width-one-half">
            <img class="usa-banner-icon usa-media_block-img" src="{{ site.baseurl }}/img/icon-https.svg" alt="SSL">
            <div class="usa-media_block-body">
              <p>This site is also protected by an SSL (Secure Sockets Layer) certificate that’s been signed by the U.S. government. The <strong>https://</strong> means all transmitted data is encrypted  — in other words, any information or browsing history that you provide is transmitted securely.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Gov banner END -->
    <nav class="usajobs-nav usajobs-nav--vATP" role="navigation" aria-label="main navigation" data-object="nav">
      <div class="usajobs-nav__body usajobs-nav--vATP__body">
        <div class="usajobs-nav__header-container">
          <div class="usajobs-nav__header usajobs-nav--vATP__header">
            <div class="usajobs-nav__header">
              <div class="usajobs-nav__brand-container">
                <a class="usajobs-nav__brand usajobs-nav--vATP__brand" href="/">
                  <span class="logo" title="USAJOBS logo"></span>
                  <span class="usajobs-nav__sub-brand">Agency Talent Portal</span>
                </a>
              </div>
              <div class="usajobs-nav__menu usajobs-nav--vATP__menu" id="usajobs-menu">
                <ul>
                  <li class="usajobs-nav__menu-container usajobs-nav__account usajobs-nav--vATP__account">
                    <a class="usajobs-nav__section-link menu-toggle usajobs-nav--vATP__section-link" href="https://agencyportal.usajobs.gov/Account" title="Account">
                      <span class="fa fa-user"></span>
                      <span class="usajobs-nav__account_name">QQ</span>
                      <span class="usajobs-nav__first_name">Quadrina</span>
                    </a>
                  </li>
                  <!-- li class="usajobs-nav__menu-container usajobs-nav--vATP__help">
                    <a class="usajobs-nav__section-link" href="http://agencyportal.usajobs.gov/Help" title="Help">
                      <span class="fa fa-question-circle"></span>
                      Help
                    </a>
                  </li -->
                  <li class="usajobs-nav__menu-container usajobs-nav__reports">
                    <a class="usajobs-nav__section-link menu-toggle usajobs-nav--vATP__section-link" href="http://agencyportal.usajobs.gov/Report" title="Reports">
                      <span class="fa fa-bar-chart-o"></span>
                      Reports
                    </a>
                  </li>
                  <li class="usajobs-nav__menu-container usajobs-nav__menu-search" data-state="is-closed">
                    <a data-behavior="nav.menu.search-toggle" aria-controls="usajobs-search-form-atp" class="usajobs-nav__section-link usajobs-nav--vATP__section-link" href="/" title="Job Search">
                      <span class="fa fa-search"></span>
                      Resumes
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="usajobs-search-form-atp" class="usajobs-nav__search" aria-expanded="false" role="menu">
            <form action="/ResumeMining" method="get" novalidate="novalidate">
              <fieldset class="usajobs-nav--vATP__search-body">
                <div class="usajobs-nav__search-keywords-container usajobs-nav--vATP__search-keywords-container">
                  <label for="search-keyword">
                    <i class="usajobs-nav__search-keywords-icon fa fa-search"></i>
                    Keywords
                  </label>
                  <input id="search-keyword" name="search-keyword" class="usajobs-nav__search-keywords-input" placeholder="" type="text" value="" autocomplete="false">
                </div>
                <div class="usajobs-nav__search-location-container usajobs-nav--vATP__search-location-container">
                  <label for="search-location">
                    <i class="usajobs-nav__search-location-icon fa fa-map-marker"></i>
                    Location
                  </label>
                  <input id="search-location" name="search-location" type="text" class="usajobs-nav__search-location-input" placeholder="City, state, zip, or country">
                  <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                  <input type="hidden" id="AutoCompleteSelected" name="AutoCompleteSelected">
                </div>
                <div class="usajobs-nav__search-button-container usajobs-nav--vATP__search-button-container">
                  <button class="usa-button usa-button-primary-alt usajobs-nav__search-button">
                    Search resumes
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
      <li>
        For use in the Agency Talent Portal product.
      </li>
    </ul>
  </div>
</div>
