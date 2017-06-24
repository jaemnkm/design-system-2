---
layout: styleguide
type: component
title: Footer
lead: USAJOBS uses a large footer that incorporates navigation.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design Complete
</a>

<h6 class="usa-heading-alt">Version 2</h6>
<div class="preview">
  <footer class="usa-footer usa-footer-big usajobs-footer--v2" role="contentinfo" aria-label="footer" data-object="footer">
    <div class="usa-grid usa-footer-return-to-top">
      <a href="#footer">Return to top</a>
    </div>
    <div class="usa-footer-primary-section">
      <div class="usa-grid-full">
        <nav class="usa-footer-nav usa-width-one-whole">
          <ul class="usa-unstyled-list usa-footer-primary-content usajobs-footer--v2__job_applications">
            <li class="usa-footer-primary-link" data-behavior="footer.toggle" data-state="is-closed" data-target=".home-menu">
              Job Applications
            </li>
            <li class="usajobs-footer--v2__menu-item home-menu is-hidden">
              <a href="/Applicant/Application/ListApplications">All</a>
            </li>
            <li class="usajobs-footer--v2__menu-item home-menu is-hidden">
              <a href="/Applicant/Application/ListApplications#advancing">Advancing</a>
            </li>
            <li class="usajobs-footer--v2__menu-item home-menu is-hidden">
              <a href="/Applicant/Application/ListApplications#paused">Paused</a>
            </li>
            <li class="usajobs-footer--v2__menu-item home-menu is-hidden">
              <a href="/Applicant/Application/ListApplications#stopped">Stopped</a>
            </li>
          </ul>
          <ul class="usa-unstyled-list usa-footer-primary-content usajobs-footer--v2__account">
            <li class="usa-footer-primary-link" data-behavior="footer.toggle" data-state="is-closed" data-target=".account-menu">Account</li>
            <li class="usajobs-footer--v2__menu-item account-menu is-hidden">
              <a href="/Applicant/MyAccount/Home/">Home</a>
            </li>
            <li class="usajobs-footer--v2__menu-item account-menu is-hidden">
              <a href="/Applicant/Profile/">Profile</a>
            </li>
            <li class="usajobs-footer--v2__menu-item account-menu is-hidden">
              <a href="/Applicant/Document/ListDocuments">Documents</a>
            </li>
            <li class="usajobs-footer--v2__menu-item account-menu is-hidden">
              <a href="/Applicant/SavedJobs/ListSavedJobs">Saved Jobs</a>
            </li>
            <li class="usajobs-footer--v2__menu-item account-menu is-hidden">
              <a href="/Applicant/SavedSearches/ListSavedSearches">Saved Searches</a>
            </li>
            <li class="usajobs-footer--v2__menu-item account-menu is-hidden">
              <a href="/Applicant/Profile/PersonalInformation">Username &amp; Password</a>
            </li>
            <li class="usajobs-footer--v2__menu-item account-menu is-hidden">
              <a href="/Account/LogOff">Sign Out</a>
            </li>
          </ul>
          <ul class="usa-unstyled-list usa-footer-primary-content usajobs-footer--v2__help">
            <li class="usa-footer-primary-link" data-behavior="footer.toggle" data-state="is-closed" data-target=".help-menu">Help</li>
            <li class="usajobs-footer--v2__menu-item help-menu is-hidden">
              <a href="http://usajobs.github.io/Help/">Help Center</a>
            </li>
            <li class="usajobs-footer--v2__menu-item help-menu is-hidden">
              <a href="http://usajobs.github.io/Help/about/">About USAJOBS</a>
            </li>
            <li class="usajobs-footer--v2__menu-item help-menu is-hidden">
              <a href="http://usajobs.github.io/Help/contact/">Contact Us</a>
            </li>
            <li class="usajobs-footer--v2__menu-item help-menu is-hidden">
              <a href="http://usajobs.github.io/Help/faq/">FAQs</a>
            </li>
            <li class="usajobs-footer--v2__menu-item help-menu is-hidden">
              <a href="http://usajobs.github.io/Help/get-started/">Get Started</a>
            </li>
            <li class="usajobs-footer--v2__menu-item help-menu is-hidden">
              <a href="http://usajobs.github.io/Help/how-to/">How to&hellip;</a>
            </li>
            <li class="usajobs-footer--v2__menu-item help-menu is-hidden">
              <a href="http://usajobs.github.io/Help/working-in-government/">
                Working in Government
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="usa-footer-secondary_section usa-footer-big-secondary-section">
      <div class="usa-grid">
        <div class="usa-footer-logo usa-width-one-half">
          <span class="logo"></span>
          <p class="usajobs-footer--v1__note">
            USAJOBS is a <a href="https://www.opm.gov">United States Office of Personnel Management</a> website.
          </p>
        </div>

        <div class="usa-footer-contact-links usa-width-one-half">
          <div class="usa-social-links">
            <a href="https://plus.google.com/+usajobs" class="usajobs-social-link">
              <span class="fa fa-google-plus" aria-label="Google Plus"></span>
            </a>
            <a href="https://www.facebook.com/USAJOBS" class="usajobs-social-link">
              <span class="fa fa-facebook" aria-label="Facebook"></span>
            </a>
            <a href="https://www.linkedin.com/company/usajobs" class="usajobs-social-link">
              <span class="fa fa-linkedin" aria-label="LinkedIn"></span>
            </a>
            <a href="https://twitter.com/USAJOBS" class="usajobs-social-link">            
              <span class="fa fa-twitter" aria-label="Twitter"></span>
            </a>
            <a href="https://www.youtube.com/user/usajobsapp" class="usajobs-social-link">
              <span class="fa fa-youtube" aria-label="You Tube"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="usa-grid">
        <div class="usa-footer-logo usa-width-one-whole">
          <ul class="usa-unstyled-list usajobs-footer--v1__subsection-horizontal">
            <li><a href="https://www.opm.gov/about-us/budget-performance/">Budget and Performance</a></li>
            <li><a href="http://www.opm.gov/efoia/">FOIA</a></li>
            <li><a href="https://www.opm.gov/our-inspector-general/">Inspector General</a></li>
            <li><a href="https://www.opm.gov/information-management/no-fear-act/">No Fear Act Data</a></li>
            <li><a href="http://usajobs.github.io/Help/privacy/">Privacy Policy</a></li>
            <li><a href="http://www.usa.gov/">USA.gov</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <p>Our "fat footer" provides secondary navigation for the site. It reflects the new structure of the site and provides a quick and easy way for users to jump to a specific sub-section. It also sensitizes users to the new structure by exposing sub-sections that help explain what can be found in each area of the site.</p>
    <h4 class="usa-heading">Accessibility</h4>
    <p>
      Please refer to the <a href="https://playbook.cio.gov/designstandards/footers/">U.S. Web Design Standards</a> for accessibility and usability guidance.
    </p>

    <h4 class="usa-heading">Implementation</h4>
    <ul class="usa-content-list">
      <li>The "Return to top" link should be an anchor link to the page title (h1) of the current page.</li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>The footer should appear on all pages excluding the Application Guide.</li>
    </ul>

    <h5>Do not use when</h5>
    <ul class="usa-content-list">
      <li>Do NOT add the footer to the Application Guide path. When users are focused on completing their job application we do not want to distract them nor take them off that path.</li>
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt">Version 2 - Job Announcement variation</h6>
<div class="preview">
  <footer class="usa-footer usa-footer-big usajobs-footer--v2" role="contentinfo" aria-label="footer" data-object="footer">
    <div class="usa-grid usa-footer-return-to-top">
      <a href="#footer">Return to top</a>
    </div>
    <div class="usa-footer-primary-section">
      <div class="usa-grid-full">
        <nav class="usa-footer-nav usa-width-one-whole">
          <ul class="usa-unstyled-list usa-footer-primary-content usajobs-footer--v2__job_applications">
            <li class="usa-footer-primary-link" data-behavior="footer.toggle" data-state="is-closed" data-target=".home-menu">
              Job Applications
            </li>
            <li class="usajobs-footer--v2__menu-item home-menu is-hidden">
              <a href="/Applicant/Application/ListApplications">All</a>
            </li>
            <li class="usajobs-footer--v2__menu-item home-menu is-hidden">
              <a href="/Applicant/Application/ListApplications#advancing">Advancing</a>
            </li>
            <li class="usajobs-footer--v2__menu-item home-menu is-hidden">
              <a href="/Applicant/Application/ListApplications#paused">Paused</a>
            </li>
            <li class="usajobs-footer--v2__menu-item home-menu is-hidden">
              <a href="/Applicant/Application/ListApplications#stopped">Stopped</a>
            </li>
          </ul>
          <ul class="usa-unstyled-list usa-footer-primary-content usajobs-footer--v2__account">
            <li class="usa-footer-primary-link" data-behavior="footer.toggle" data-state="is-closed" data-target=".account-menu">Account</li>
            <li class="usajobs-footer--v2__menu-item account-menu is-hidden">
              <a href="/Applicant/Profile/">Profile</a>
            </li>
            <li class="usajobs-footer--v2__menu-item account-menu is-hidden">
              <a href="/Applicant/Document/ListDocuments">Documents</a>
            </li>
            <li class="usajobs-footer--v2__menu-item account-menu is-hidden">
              <a href="/Applicant/SavedJobs/ListSavedJobs">Saved Jobs</a>
            </li>
            <li class="usajobs-footer--v2__menu-item account-menu is-hidden">
              <a href="/Applicant/SavedSearches/ListSavedSearches">Saved Searches</a>
            </li>
            <li class="usajobs-footer--v2__menu-item account-menu is-hidden">
              <a href="/Applicant/Profile/PersonalInformation">Username &amp; Password</a>
            </li>
            <li class="usajobs-footer--v2__menu-item account-menu is-hidden">
              <a href="/Account/LogOff">Sign Out</a>
            </li>
          </ul>
          <ul class="usa-unstyled-list usa-footer-primary-content usajobs-footer--v2__help">
            <li class="usa-footer-primary-link" data-behavior="footer.toggle" data-state="is-closed" data-target=".help-menu">Help</li>
            <li class="usajobs-footer--v2__menu-item help-menu is-hidden">
              <a href="http://usajobs.github.io/Help/">Help Center</a>
            </li>
            <li class="usajobs-footer--v2__menu-item help-menu is-hidden">
              <a href="http://usajobs.github.io/Help/about/">About USAJOBS</a>
            </li>
            <li class="usajobs-footer--v2__menu-item help-menu is-hidden">
              <a href="http://usajobs.github.io/Help/contact/">Contact Us</a>
            </li>
            <li class="usajobs-footer--v2__menu-item help-menu is-hidden">
              <a href="http://usajobs.github.io/Help/faq/">FAQs</a>
            </li>
            <li class="usajobs-footer--v2__menu-item help-menu is-hidden">
              <a href="http://usajobs.github.io/Help/get-started/">Get Started</a>
            </li>
            <li class="usajobs-footer--v2__menu-item help-menu is-hidden">
              <a href="http://usajobs.github.io/Help/how-to/">How to&hellip;</a>
            </li>
            <li class="usajobs-footer--v2__menu-item help-menu is-hidden">
              <a href="http://usajobs.github.io/Help/working-in-government/">
                Working in Government
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="usa-footer-secondary_section usa-footer-big-secondary-section">
      <div class="usa-grid">
        <div class="usa-footer-logo usa-width-one-half">
          <span class="logo"></span>
          <p class="usajobs-footer--v1__note">
            USAJOBS is a <a href="https://www.opm.gov">United States Office of Personnel Management</a> website.
          </p>
        </div>

        <div class="usa-footer-contact-links usa-width-one-half">
          <div class="usa-social-links">
            <a href="https://plus.google.com/+usajobs" class="usajobs-social-link">
              <span class="fa fa-google-plus" aria-label="Google Plus"></span>
            </a>
            <a href="https://www.facebook.com/USAJOBS" class="usajobs-social-link">
              <span class="fa fa-facebook" aria-label="Facebook"></span>
            </a>
            <a href="https://www.linkedin.com/company/usajobs" class="usajobs-social-link">
              <span class="fa fa-linkedin" aria-label="LinkedIn"></span>
            </a>
            <a href="https://twitter.com/USAJOBS" class="usajobs-social-link">            
              <span class="fa fa-twitter" aria-label="Twitter"></span>
            </a>
            <a href="https://www.youtube.com/user/usajobsapp" class="usajobs-social-link">
              <span class="fa fa-youtube" aria-label="You Tube"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="usa-grid">
        <div class="usa-footer-logo usa-width-one-whole">
          <ul class="usa-unstyled-list usajobs-footer--joa__subsection-horizontal">
            <li><a href="https://www.usajobs.gov/Help/equal-employment-opportunity/" id="helpWikiEEOPolicyStatement" target="_blank">EEO Policy Statement</a></li>
            <li>
              <a href="https://www.usajobs.gov/Help/reasonable-accommodation/" id="helpWikiResonableAccommodation" target="_blank">Reasonable Accommodation Policy Statement</a>
            </li>
            <li>
              <a href="https://www.usajobs.gov/Help/working-in-government/unique-hiring-paths/veterans/preference/" id="helpWikiVeteransInformation" target="_blank">Veterans Information</a>
            </li>
            <li>
              <a href="https://www.usajobs.gov/Help/legal-and-regulatory-guidance/" id="helpWikiLegalAndRegulatory" target="_blank">Legal and Regulatory Guidance</a>
            </li>
          </ul>
          <ul class="usa-unstyled-list usajobs-footer--v1__subsection-horizontal">
            <li><a href="https://www.opm.gov/about-us/budget-performance/">Budget and Performance</a></li>
            <li><a href="http://www.opm.gov/efoia/">FOIA</a></li>
            <li><a href="https://www.opm.gov/our-inspector-general/">Inspector General</a></li>
            <li><a href="https://www.opm.gov/information-management/no-fear-act/">No Fear Act Data</a></li>
            <li><a href="http://usajobs.github.io/Help/privacy/">Privacy Policy</a></li>
            <li><a href="http://www.usa.gov/">USA.gov</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
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
      <li>This variation of the footer is used on the job announcement page as it contains a different set of small links at the bottom of the page which are required to include.</li>
    </ul>
  </div>
</div>
