---
layout: styleguide
type: component
title: Footer
lead: USAJOBS uses a large footer that incorporates navigation.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity incomplete">Incomplete</a>

<div class="preview">
  <footer class="usa-footer usa-footer-big usajobs-footer" role="contentinfo">
    <div class="usa-grid usa-footer-return-to-top">
      <a href="#">Return to top</a>
    </div>
    <div class="usa-footer-primary-section">
      <div class="usa-grid-full">
        <nav class="usa-footer-nav usa-width-one-whole">
          <ul class="usa-unstyled-list usa-width-one-fourth usa-footer-primary-content">
            <h4 class="usa-footer-primary-link">Account</h4>
            <li><a href="/Applicant/MyAccount/Home">Profile</a></li>
            <li><a href="/Applicant/Document/ListDocuments">Documents</a></li>
            <li><a href="/Applicant/SavedJobs/ListSavedJobs">Saved Jobs</a></li>
            <li><a href="/Applicant/SavedSearches/ListSavedSearches">Saved Searches</a></li>
            <li><a href="/Applicant/Profile/PersonalInformation">Username &amp; Password</a></li>
            <li><a href="/Account/LogOff">Sign Out</a></li>
          </ul>
          <ul class="usa-unstyled-list usa-width-one-fourth usa-footer-primary-content">
            <h4 class="usa-footer-primary-link">Help</h4>
            <li><a href="https://help.usajobs.gov/index.php/About_Us">About USAJOBS</a></li>
            <li><a href="/Support">Contact Us</a></li>
            <li><a href="https://help.usajobs.gov/index.php/Getting_Started">Get Started</a></li>
            <li><a href="#">How to&hellip;</a></li>
            <li><a href="https://help.usajobs.gov/index.php/USAJobsHelp:Privacy_policy">Privacy</a></li>
            <li><a href="#">Reference</a></li>
          </ul>
          <ul class="usa-unstyled-list usa-width-one-fourth usa-footer-primary-content">
            <h4 class="usa-footer-primary-link">Job Applications</h4>
            <li><a href="/Applicant/Application/ListApplications#inprogress">In Progress</a></li>
            <li><a href="/Applicant/Application/ListApplications#received">Received</a></li>
            <li><a href="/Applicant/Application/ListApplications#referred">Referred</a></li>
            <!-- li><a href="/Applicant/Application/ListApplications#selected">Selected</a></li>
            <li><a href="/Applicant/Application/ListApplications#cancelled">Cancelled</a></li>
            <li><a href="/Applicant/Application/ListApplications#incomplete">Incomplete</a></li>
            <li><a href="/Applicant/Application/ListApplications#not-selected">Not Selected</a></li-->
          </ul>
          <ul class="usa-unstyled-list usa-width-one-fourth usa-footer-primary-content">
            <h4 class="usa-footer-primary-link">Working for the Government</h4>
            <li><a href="https://help.usajobs.gov/index.php/Pay_and_Benefits">Benefits</a></li>
            <li><a href="#unique-hiring-paths">Unique Hiring Paths</a></li>
            <li><a href="https://help.usajobs.gov/index.php/Pay_and_Benefits">Salary</a></li>
            <!-- ul class="usa-unstyled-list usajobs-footer__subsection">
              <li><a href="#federal_employees">Federal Employees</a></li>
              <li><a href="#former_overseas_employees">Former overseas employees</a></li>
              <li><a href="#individuals_with_disabilities">Individuals with Disabilities</a></li>
              <li><a href="#military_spouses">Military Spouses</a></li>
              <li><a href="#peace_corps">Peace Corps / VISTA</a></li>
              <li><a href="#senior_executives">Senior Executives</a></li>
              <li><a href="#students">Students</a></li>
              <li><a href="#veterans">Veterans</a></li>
            </ul-->
          </ul>
        </nav>
      </div>
    </div>

    <div class="usa-footer-secondary_section usa-footer-big-secondary-section">
      <div class="usa-grid">
        <div class="usa-footer-logo usa-width-one-half">
          <img class="usa-footer-logo-img" src="{{site.baseurl}}/img/USAJOBS_logo.png" alt="USAJOBS logo image">
          <!-- h3 class="usa-footer-logo-heading">USAJOBS</h3 -->
          <p class="usajobs-footer__note">
            USAJOBS is a <a href="https://www.opm.gov">United States Office of Personnel Management website</a>.
          </p>
        </div>

        <div class="usa-footer-contact-links usa-width-one-half">
          <div class="usa-social-links">
            <a href="https://www.facebook.com/USAJOBS" class="usajobs-social-link">
              <svg width="26" height="39" role="img" aria-label="Facebook">
                <title>Facebook</title>
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{site.baseurl}}/img/social-icons/svg/facebook25.svg" src="{{site.baseurl}}/img/social-icons/png/facebook25.png" width="26" height="39"></image>
              </svg>
            </a>
            <a href="https://twitter.com/USAJOBS" class="usajobs-social-link">            
              <svg width="26" height="39" role="img" aria-label="Twitter">
                <title>Twitter</title>
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{site.baseurl}}/img/social-icons/svg/twitter16.svg" src="{{site.baseurl}}/img/social-icons/png/twitter16.png" width="26" height="39"></image>
              </svg>
            </a>
            <a href="https://www.youtube.com/user/usajobsapp" class="usajobs-social-link">
              <svg width="26" height="39" role="img" aria-label="YouTube">
                <title>YouTube</title>
                <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/social-icons/svg/youtube15.svg" src="{{site.baseurl}}/img/social-icons/png/youtube15.png" width="26" height="39"></image>
              </svg>
            </a>
          </div>

          <!-- address>
            <h3 class="usa-footer-contact-heading">Agency Contact Center</h3>
            <p>(800) CALL-GOVT</p>
            <a href="mailto:info@agency.gov">info@agency.gov</a>
          </address-->
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
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
    </ul>
    <h5>Do not use when</h5>
    <ul class="usa-content-list">
    </ul>
  </div>
</div>
