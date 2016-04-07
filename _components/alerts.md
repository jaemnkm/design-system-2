---
layout: styleguide
type: component
title: Alerts
lead: USAJOBS has adopted a different visual style to our alerts that deviate from the U.S. Web Design Standards.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design Complete
</a>

<div class="preview">
  <h6 class="usa-heading-alt">Success</h6>
  <div class="usa-alert usajobs-alert usajobs-alert--success" role="alert" data-object="alert">
    <div class="usajobs-alert__figure">
      <div class="usajobs-alert__icon">
      </div>
    </div>
    <div class="usajobs-alert__body">
      <h3 class="usa-alert-heading">
        Application Progress Saved
      </h3>
      <p class="usa-alert-text">
        Your application progress has been saved to My Account > <a href="#app_status">Application Status</a>.
      </p>
    </div>
    <button class="usajobs-alert__close" data-behavior="alert.close" >
      <span class="usajobs-assistive-text">Close</span>
    </button>
  </div>

  <h6 class="usa-heading-alt">Information</h6>
  <div class="usa-alert usajobs-alert usajobs-alert--info" role="alert" data-object="alert">
    <div class="usajobs-alert__figure">
      <div class="usajobs-alert__icon">
      </div>
    </div>
    <div class="usajobs-alert__body">
      <p class="usa-alert-text">
        Your demographic information will not be sent to the hiring manager responsible for this position. It is used solely for statistical purposes to assist the agency in the development of recruiting plans and to ensure the agency is reaching all segments of the population.
      </p>
    </div>
    <button class="usajobs-alert__close" data-behavior="alert.close" >
      <span class="usajobs-assistive-text">Close</span>
    </button>
  </div>

  <h6 class="usa-heading-alt">Warning</h6>
  <div class="usa-alert usajobs-alert usajobs-alert--warning" role="alert" data-object="alert">
    <div class="usajobs-alert__figure">
      <div class="usajobs-alert__icon">
      </div>
    </div>
    <div class="usajobs-alert__body">
      <p class="usa-alert-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <button class="usajobs-alert__close" data-behavior="alert.close" >
      <span class="usajobs-assistive-text">Close</span>
    </button>
  </div>

  <h6 class="usa-heading-alt">Warning with footer</h6>
  <div class="usa-alert usajobs-alert usajobs-alert--warning" role="alert" data-object="alert">
    <div class="usajobs-alert__figure">
      <div class="usajobs-alert__icon">
      </div>
    </div>
    <div class="usajobs-alert__body">
      <h3 class="usa-alert-heading">
        Your password is about to expire!
      </h3>
      <p class="usa-alert-text">
        Your password will expire on 04/01/2016. Please change your password now.
      </p>
      <div class="usajobs-alert__footer">
        <button class="usa-button usa-button-primary" data-behavior="modal.close">
          Change password
        </button>
      </div>
    </div>
    <button class="usajobs-alert__close" data-behavior="alert.close" >
      <span class="usajobs-assistive-text">Close</span>
    </button>
  </div>

  <h6 class="usa-heading-alt">Error</h6>
  <div class="usa-alert usajobs-alert usajobs-alert--error" role="alert" data-object="alert">
    <div class="usajobs-alert__figure">
      <div class="usajobs-alert__icon">
      </div>
    </div>
    <div class="usajobs-alert__body">
      <p class="usa-alert-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <p>Refer to the <a href="https://playbook.cio.gov/designstandards/alerts/">U.S. Web Design Standards on alerts</a> for accessibility and usability guidelines. We have one addendum:</p>

    <h4 class="usa-heading">Usability</h4>
    <ul class="usa-content-list">
      <li>The Standards state: "Allow a user to dismiss a notification wherever appropriate." We believe it is appropriate to globally state that all alerts below the level of error should be dismissible. Errors should not be dismissible because they should only be present when the user cannot continue and/or is required to take action.</li>
    </ul>
  </div>
</div>

