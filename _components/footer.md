---
layout: styleguide
type: component
title: Footer
lead: USAJOBS uses a large footer that incorporates navigation.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity under_review">
  Under Review
</a>

<h6 class="usa-heading-alt">Version 1</h6>
<div class="preview">
  <footer class="usa-footer usa-footer-big usajobs-footer--v1" role="contentinfo" aria-label="footer" data-object="footer">
    <div class="usa-grid usa-footer-return-to-top">
      <a href="#footer">Return to top</a>
    </div>
    <div class="usa-footer-primary-section">
      <div class="usa-grid-full">
        <nav class="usa-footer-nav usa-width-one-whole">
          <div class="usajobs-footer--v1__content-container">
            <ul class="usa-unstyled-list usa-footer-primary-content">
              <li class="usa-footer-primary-link" data-behavior="footer.toggle" data-state="is-closed" data-target=".home-menu">
                Job Applications
              </li>
              <li class="usajobs-footer--v1__menu-item home-menu is-hidden">
                <a href="/Applicant/Application/ListApplications">All</a>
              </li>
              <li class="usajobs-footer--v1__menu-item home-menu is-hidden">
                <a href="/Applicant/Application/ListApplications#advancing">Advancing</a>
              </li>
              <li class="usajobs-footer--v1__menu-item home-menu is-hidden">
                <a href="/Applicant/Application/ListApplications#paused">Paused</a>
              </li>
              <li class="usajobs-footer--v1__menu-item home-menu is-hidden">
                <a href="/Applicant/Application/ListApplications#stopped">Stopped</a>
              </li>
            </ul>
            <ul class="usa-unstyled-list usa-footer-primary-content usajobs-footer--v1__account">
              <li class="usa-footer-primary-link" data-behavior="footer.toggle" data-state="is-closed" data-target=".account-menu">Account</li>
              <li class="usajobs-footer--v1__menu-item account-menu is-hidden">
                <a href="/Applicant/SavedJobs/ListSavedJobs">Saved Jobs</a>
              </li>
              <li class="usajobs-footer--v1__menu-item account-menu is-hidden">
                <a href="/Applicant/SavedSearches/ListSavedSearches">Saved Searches</a>
              </li>
              <li class="usajobs-footer--v1__menu-item account-menu is-hidden">
                <a href="/Applicant/Profile/PersonalInformation">Username &amp; Password</a>
              </li>
              <li class="usajobs-footer--v1__menu-item account-menu is-hidden">
                <a href="/Account/LogOff">Sign Out</a>
              </li>
              <li class="usajobs-footer--v1__menu-item account-menu is-hidden">
                <a class="usajobs-footer--v1__subsection-title" href="/Applicant/Profile/">
                  Profile
                </a>
                <ul class="usa-unstyled-list usajobs-footer--v1__subsection">
                  <li><a href="#profile-background">Background</a></li>
                  <li><a href="#profile-education">Education</a></li>
                  <li><a href="#profile-experience">Experience</a></li>
                  <li><a href="#profile-contact_info">Contact Info</a></li>
                </ul>
              </li>
              <li class="usajobs-footer--v1__menu-item account-menu is-hidden">
                <a class="usajobs-footer--v1__subsection-title" href="/Applicant/Document/ListDocuments">Documents</a>
                <ul class="usa-unstyled-list usajobs-footer--v1__subsection">
                  <li><a href="/Applicant/Document/ListDocuments#cover-letters">Cover Letters</a></li>
                  <li><a href="/Applicant/Document/ListDocuments#forms">Forms</a></li>
                  <li><a href="/Applicant/Document/ListDocuments#resumes">Resumes</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="usajobs-footer--v1__content-container">
            <ul class="usa-unstyled-list usa-footer-primary-content">
              <li class="usa-footer-primary-link" data-behavior="footer.toggle" data-state="is-closed" data-target=".help-menu">Help</li>
              <li class="usajobs-footer--v1__menu-item help-menu is-hidden">
                <a href="https://help.usajobs.gov/">Help Center</a>
              </li>
              <li class="usajobs-footer--v1__menu-item help-menu is-hidden">
                <a href="https://help.usajobs.gov/index.php/About_Us">About USAJOBS</a>
              </li>
              <li class="usajobs-footer--v1__menu-item help-menu is-hidden">
                <a href="https://help.usajobs/gov/Support#Miscellaneous-Other">Contact Us</a>
              </li>
              <li class="usajobs-footer--v1__menu-item help-menu is-hidden">
                <a href="https://help.usajobs.gov/index.php/Getting_Started">Get Started</a>
              </li>
              <li class="usajobs-footer--v1__menu-item help-menu is-hidden">
                <a href="#">Reference</a>
              </li>
              <li class="usajobs-footer--v1__menu-item help-menu is-hidden">
                <a class="usajobs-footer--v2__subsection-title" href="https://help.usajobs.gov/index.php/FAQs">FAQs</a>
                <ul class="usa-unstyled-list usajobs-footer--v2__subsection">
                  <li><a href="#how-to">Can my resume exceed two pages?</a></li>
                  <li><a href="#how-to">Do I need security clearance for a Federal job?</a></li>
                  <li><a href="#how-to">Is my resume scanned for keywords?</a></li>
                </ul>
              </li>
              <li class="usajobs-footer--v1__menu-item help-menu is-hidden">
                <a class="usajobs-footer--v2__subsection-title" href="https://help.usajobs.gov/index.php/How_To">How to&hellip;</a>
                <ul class="usa-unstyled-list usajobs-footer--v2__subsection">
                  <li><a href="#how-to">Apply for a job</a></li>
                  <li><a href="#how-to">Save a questionnaire</a></li>
                  <li><a href="#how-to">Search for Jobs</a></li>
                </ul>
              </li>
            </ul>
            <ul class="usa-unstyled-list usa-footer-primary-content">
              <li class="usa-footer-primary-link" data-behavior="footer.toggle" data-state="is-closed" data-target=".gov-menu">Working for the Government</li>
              <li class="usajobs-footer--v1__menu-item gov-menu is-hidden">
                <a href="https://help.usajobs.gov/index.php/Working_for_the_government">Overview</a>
              </li>
              <li class="usajobs-footer--v1__menu-item gov-menu is-hidden">
                <a href="https://help.usajobs.gov/index.php/Pay_and_Benefits">Benefits</a>
              </li>
              <li class="usajobs-footer--v1__menu-item gov-menu is-hidden">
                <a href="https://help.usajobs.gov/index.php/Pay_and_Benefits">Salary</a>
              </li>
              <li class="usajobs-footer--v1__menu-item gov-menu is-hidden"> 
                <a class="usajobs-footer--v1__subsection-title" href="#unique-hiring-paths">
                  Unique Hiring Paths
                </a>
                <ul class="usa-unstyled-list usajobs-footer--v1__subsection">
                  <li><a href="#federal_employees">Federal Employees</a></li>
                  <li><a href="#former_overseas_employees">Former overseas employees</a></li>
                  <li><a href="#individuals_with_disabilities">Individuals with Disabilities</a></li>
                  <li><a href="#military_spouses">Military Spouses</a></li>
                  <li><a href="#peace_corps">Peace Corps / VISTA</a></li>
                  <li><a href="#senior_executives">Senior Executives</a></li>
                  <li><a href="#students">Students</a></li>
                  <li><a href="#veterans">Veterans</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <div class="usa-footer-secondary_section usa-footer-big-secondary-section">
      <div class="usa-grid">
        <div class="usa-footer-logo usa-width-one-half">
          <img class="usa-footer-logo-img" src="{{site.baseurl}}/img/logo/footer-white.png" alt="USAJOBS logo image">
          <!-- h2 class="usa-footer-logo-heading">USAJOBS</h2 -->
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
            <li><a href="https://help.usajobs.gov/index.php/USAJobsHelp:Privacy_policy">Privacy Policy</a></li>
            <li><a href="http://www.usa.gov/">USA.gov</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>

<h6 class="usa-heading-alt">Version 2</h6>
<div class="preview">
  <footer class="usa-footer usa-footer-big usajobs-footer--v2" role="contentinfo" aria-label="footer" data-object="footer">
    <div class="usa-grid usa-footer-return-to-top">
      <a href="#footer">Return to top</a>
    </div>
    <div class="usa-footer-primary-section">
      <div class="usa-grid-full">
        <nav class="usa-footer-nav usa-width-one-whole">
          <ul class="usa-unstyled-list usa-footer-primary-content">
            <li class="usa-footer-primary-link" data-behavior="footer.toggle" data-state="is-closed" data-target=".home-menu">Home</li>
            </li>
            <li class="usajobs-footer--v2__menu-item overview-link home-menu is-hidden">
              <a href="/Applicant/">Account</a>
            </li>
            <li class="usajobs-footer--v2__menu-item home-menu is-hidden">
              <a class="usajobs-footer--v2__subsection-title" href="/Applicant/Application/ListApplications">Job Applications</a>
              <ul class="usa-unstyled-list usajobs-footer--v2__subsection">
                <li><a href="/Applicant/Application/ListApplications#advancing">Advancing</a></li>
                <li><a href="/Applicant/Application/ListApplications#paused">Paused</a></li>
                <li><a href="/Applicant/Application/ListApplications#stopped">Stopped</a></li>
              </ul>
            </li>
            <li class="usajobs-footer--v2__menu-item home-menu is-hidden">
              <a href="/Applicant/SavedJobs/ListSavedJobs">Saved Jobs</a>
            </li>
            <li class="usajobs-footer--v2__menu-item home-menu is-hidden">
              <a href="/Applicant/SavedSearches/ListSavedSearches">Saved Searches</a>
            </li>
          </ul>
          <ul class="usa-unstyled-list usa-footer-primary-content">
            <li class="usa-footer-primary-link" data-behavior="footer.toggle" data-state="is-closed" data-target=".profile-menu">Profile</li>
            <li class="usajobs-footer--v2__menu-item overview-link profile-menu is-hidden">
              <a href="#profile">Overview</a>
            </li>
            <li class="usajobs-footer--v2__menu-item profile-menu is-hidden">
              <a href="#profile-background">Background</a>
            </li>
            <li class="usajobs-footer--v2__menu-item profile-menu is-hidden">
              <a href="#profile-education">Education</a>
            </li>
            <li class="usajobs-footer--v2__menu-item profile-menu is-hidden">
              <a href="#profile-experience">Experience</a>
            </li>
            <li class="usajobs-footer--v2__menu-item profile-menu is-hidden">
              <a href="#profile-contact_info">Contact Info</a>
            </li>
          </ul>
          <ul class="usa-unstyled-list usa-footer-primary-content">
            <li class="usa-footer-primary-link" data-behavior="footer.toggle" data-state="is-closed" data-target=".documents-menu">Documents</li>
            <li class="usajobs-footer--v2__menu-item overview-link documents-menu is-hidden">
              <a href="#profile-documents">All</a>
            </li>
            <li class="usajobs-footer--v2__menu-item documents-menu is-hidden">
              <a href="#profile-documents">Cover Letters</a>
            </li>
            <li class="usajobs-footer--v2__menu-item documents-menu is-hidden">
              <a href="#profile-documents">Forms</a>
            </li>
            <li class="usajobs-footer--v2__menu-item documents-menu is-hidden">
              <a href="#profile-documents">Resumes</a>
            </li>
          </ul>
          <ul class="usa-unstyled-list usa-footer-primary-content">
            <li class="usa-footer-primary-link" data-behavior="footer.toggle" data-state="is-closed" data-target=".username-menu">Username &amp; Password</li>
            <li class="usajobs-footer--v2__menu-item overview-link username-menu is-hidden">
              <a href="#/Account/Username">Overview</a>
            </li>
            <li class="usajobs-footer--v2__menu-item username-menu is-hidden">
              <a href="/Account/LogOff">Sign Out</a>
            </li>
          </ul>
          <div class="usajobs-footer--v2__content-container">
            <ul class="usa-unstyled-list usa-footer-primary-content usajobs-footer--v2__help">
              <li class="usa-footer-primary-link" data-behavior="footer.toggle" data-state="is-closed" data-target=".help-menu">Help</li>
              <li class="usajobs-footer--v2__menu-item overview-link help-menu is-hidden">
                <a href="https://help.usajobs.gov/">Overview</a>
              </li>
              <li class="usajobs-footer--v2__menu-item help-menu is-hidden">
                <a href="https://help.usajobs.gov/index.php/About_Us">About USAJOBS</a>
              </li>
              <li class="usajobs-footer--v2__menu-item help-menu is-hidden">
                <a href="https://help.usajobs/gov/Support#Miscellaneous-Other">Contact Us</a>
              </li>
              <li class="usajobs-footer--v2__menu-item help-menu is-hidden">
                <a href="https://help.usajobs.gov/index.php/Getting_Started">Get Started</a>
              </li>
              <li class="usajobs-footer--v2__menu-item help-menu is-hidden">
                <a class="usajobs-footer--v2__subsection-title" href="https://help.usajobs.gov/index.php/FAQs">FAQs</a>
                <ul class="usa-unstyled-list usajobs-footer--v2__subsection">
                  <li><a href="#how-to">Can my resume exceed two pages?</a></li>
                  <li><a href="#how-to">Do I need security clearance for a Federal job?</a></li>
                  <li><a href="#how-to">Is my resume scanned for keywords?</a></li>
                </ul>
              </li>
              <li class="usajobs-footer--v2__menu-item help-menu is-hidden">
                <a class="usajobs-footer--v2__subsection-title" href="https://help.usajobs.gov/index.php/How_To">How to&hellip;</a>
                <ul class="usa-unstyled-list usajobs-footer--v2__subsection">
                  <li><a href="#how-to">Apply for a job</a></li>
                  <li><a href="#how-to">Save a questionnaire</a></li>
                  <li><a href="#how-to">Search for Jobs</a></li>
                </ul>
              </li>
              <li class="usajobs-footer--v2__menu-item help-menu is-hidden">
                <a href="https://help.usajobs/gov/index.php/Reference">Reference</a>
              </li>
            </ul>
            <ul class="usa-unstyled-list usa-footer-primary-content usajobs-footer--v2__working_for_the_government">
              <li class="usa-footer-primary-link" data-behavior="footer.toggle" data-state="is-closed" data-target=".gov-menu">Working for the Government</li>
              <li class="usajobs-footer--v2__menu-item overview-link gov-menu is-hidden">
                <a href="https://help.usajobs.gov/index.php/Working_for_the_government">
                  Overview
                </a>
              </li>
              <li class="usajobs-footer--v2__menu-item gov-menu is-hidden">
                <a href="https://help.usajobs.gov/index.php/Pay_and_Benefits">Benefits</a>
              </li>
              <li class="usajobs-footer--v2__menu-item gov-menu is-hidden">
                <a href="https://help.usajobs.gov/index.php/Pay_and_Benefits">Salary</a>
              </li>
              <li class="usajobs-footer--v2__menu-item gov-menu is-hidden">
                <a class="usajobs-footer--v2__subsection-title" href="#unique_hiring_paths">
                  Unique Hiring Paths
                </a>
                <ul class="usa-unstyled-list usajobs-footer--v2__subsection">
                  <li><a href="#federal_employees">Federal Employees</a></li>
                  <li><a href="#former_overseas_employees">Former overseas employees</a></li>
                  <li><a href="#individuals_with_disabilities">Individuals with Disabilities</a></li>
                  <li><a href="#military_spouses">Military Spouses</a></li>
                  <li><a href="#peace_corps">Peace Corps / VISTA</a></li>
                  <li><a href="#senior_executives">Senior Executives</a></li>
                  <li><a href="#students">Students</a></li>
                  <li><a href="#veterans">Veterans</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <div class="usa-footer-secondary_section usa-footer-big-secondary-section">
      <div class="usa-grid">
        <div class="usa-footer-logo usa-width-one-half">
          <img class="usa-footer-logo-img" src="{{site.baseurl}}/img/USAJOBS_logo.png" alt="USAJOBS logo image">
          <p class="usajobs-footer--v2__note">
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

          <!-- address>
            <h3 class="usa-footer-contact-heading">Agency Contact Center</h3>
            <p>(800) CALL-GOVT</p>
            <a href="mailto:info@agency.gov">info@agency.gov</a>
          </address-->
        </div>
      </div>
      <div class="usa-grid">
        <div class="usa-footer-logo usa-width-one-whole">
          <ul class="usa-unstyled-list usajobs-footer--v2__subsection-horizontal">
            <li><a href="https://www.opm.gov/about-us/budget-performance/">Budget and Performance</a></li>
            <li><a href="http://www.opm.gov/efoia/">FOIA</a></li>
            <li><a href="https://www.opm.gov/our-inspector-general/">Inspector General</a></li>
            <li><a href="https://www.opm.gov/information-management/no-fear-act/">No Fear Act Data</a></li>
            <li><a href="https://help.usajobs.gov/index.php/USAJobsHelp:Privacy_policy">Privacy Policy</a></li>
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
      <li>Do NOT add the footer to the Application Guide path. When users are focused on applying to a job we do not want to distract them.</li>
    </ul>
  </div>
</div>
