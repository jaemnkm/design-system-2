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
      aria-expanded="true" aria-controls="doc-0">
    Documentation
  </button>
  <div id="doc-0" aria-hidden="false" class="usa-accordion-content">
    <p>Refer to the <a href="https://playbook.cio.gov/designstandards/alerts/">U.S. Web Design Standards on alerts</a> for accessibility and usability guidelines. We have one addendum:</p>

    <h4 class="usa-heading">Usability</h4>
    <ul class="usa-content-list">
      <li>The Standards state: "Allow a user to dismiss a notification wherever appropriate." We believe it is appropriate to globally state that all alerts below the level of error should be dismissible. Errors should not be dismissible because they should only be present when the user cannot continue and/or is required to take action.</li>
    </ul>
  </div>
</div>

<div class="preview">
  <h6 class="usa-heading-alt" id="alert-tip-single">Tip (Single)</h6>
  <div class="usa-alert usajobs-alert usajobs-alert--tip" role="alert" data-object="alert">
    <div class="usajobs-alert__figure">
      <div class="usajobs-alert__icon">
      </div>
    </div>
    <div class="usajobs-alert__body">
      <h4 class="usajobs-alert__title">
        Current or former federal employee?
      </h4>
      <p class="usajobs-alert__text">
        If so, we recommend you upload your SF-50. Many jobs require the SF-50 to verify your federal service.
      </p>
      <div class="usajobs-alert__footer">
        <a href="#add-doc" class="usa-button usa-button-primary">Upload Documents</a>
      </div>
    </div>
    <button class="usajobs-alert__close" data-behavior="alert.close" >
      <span class="usajobs-assistive-text">Close</span>
    </button>
  </div>

  <h6 class="usa-heading-alt" id="alert">Tip (Multiple)</h6>
  <div class="usa-alert usajobs-alert usajobs-alert--tip" role="alert" data-object="alert">
    <div class="usajobs-alert__figure">
      <div class="usajobs-alert__icon">
      </div>
    </div>
    <div class="usajobs-alert__body">
      <div id="alert-1" aria-hidden="false">
        <p class="usajobs-alert__count">1 of 2 Tips</p>
        <h4 class="usajobs-alert__title">
          Do you want to claim veterans' preference?
        </h4>
        <p class="usajobs-alert__text">
          If so, we recommend you upload your DD-214 - it's required if you want to claim veterans' preference.
        </p>
        <div class="usajobs-alert__footer">
          <a href="#next-tip" class="usa-button usa-button-outline" data-behavior="alert.skip" aria-controls="alert-1" data-target-next="alert-2">Skip</a>
          <a href="#add-doc" class="usa-button usa-button-primary">Upload Documents</a>
        </div>
      </div>
      <div id="alert-2" aria-hidden="true">
        <p class="usajobs-alert__count">2 of 2 Tips</p>
        <h4 class="usajobs-alert__title">
          Do you want to claim veterans' preference?
        </h4>
        <p class="usajobs-alert__text">
          If so, we recommend you upload your SF-15 - it's required if you want to claim veterans' preference.
        </p>
        <div class="usajobs-alert__footer">
          <a href="#next-tip" class="usa-button usa-button-outline" data-behavior="alert.back" aria-controls="alert-2" data-target-previous="alert-1">Back</a>
          <a href="#add-doc" class="usa-button usa-button-primary">Upload Documents</a>
        </div>
      </div>
    </div>
    <button class="usajobs-alert__close" data-behavior="alert.close" >
      <span class="usajobs-assistive-text">Close</span>
    </button>
  </div>
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
      <li>To draw attention to a particular piece of functionality.</li>
    </ul>
    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
      <li>A tip should not be used when one of the other <a href="{{ site.baseurl }}/form-controls/">contextual help elements</a> is more approriate.</li>
      <li>A tip should not be used in place of an alert.</li>
    </ul>
    <h5>Guidelines</h5>
    <ul class="usa-content-list">
      <li>
        Each tip is dismissible and include a primary CTA button.
      </li>
      <li>
        The counter (1 of 2 tips) and secondary CTA button (Skip) is only shown if a user has 2 or more tips.
      </li>
      <li>
        Clicking the <strong>Skip</strong> button will trigger the next tip (if applicable). Clicking the <strong>Back</strong> button will show the previous tip (if applicable).
      </li>
      <li>
        <strong>Tip lifespan:</strong> The dismiss and skip buttons do not remove the tip permanently. If a user dismisses or skips a tip, then the tip will be shown again the next time the user restarts their browser (and thus a new browser session is created) or 2 weeks, whichever comes first. The tip will no longer be shown once the suggested action has been taken. For example, the tip will continue to appear until the suggested document upload has been completed.
      </li>
    </ul>

    <h4 class="usa-heading">Examples</h4>
    <h5>DD-214</h5>
    <p>
      This tip is shown if the user indicates in their profile that they are:
    </p>
    <ul class="usajobs-unstyled-list">
      <li>A veteran AND claim veterans' preference.</li>
    </ul>
    <p>
      Regardless of veteran status, this tip will not be shown if the user indicates in their profile that they do NOT claim veterans' preference (selects the "No, I do not claim Veterans' Preference" radio button option). The tip will continue to appear on the Documents page until the document is uploaded.
    </p>
    <h6>Tip Title</h6>
    <p>
      Do you want to claim veterans’ preference?
    </p>
    <h6>Body copy</h6>
    <p>
      If so, we recommend you upload your DD-214 – it’s required if you want to claim veterans’ preference.
    </p>

    <h5>SF-15</h5>
    <p>
      This tip is shown if the user indicates in their profile that they are:
    </p>
    <ul class="usajobs-unstyled-list">
      <li>A veteran AND claim veterans' preference.</li>
    </ul>
    <p>
      Regardless of veteran status, this tip will not be shown if the user indicates in their profile that they do NOT claim veterans' preference (selects the "No, I do not claim Veterans' Preference" radio button option). The tip will continue to appear on the Documents page until the document is uploaded.
    </p>
    <h6>Tip Title</h6>
    <p>
      Do you want to claim veterans’ preference?
    </p>
    <h6>Body copy</h6>
    <p>
      If so, we recommend you upload your SF-15 – agencies will often request this form to verify your veterans’ preference.
    </p>

    <h5>SF-50</h5>
    <p>
      This tip is shown if the user indicates in their profile that they are:
    </p>
    <ul class="usajobs-unstyled-list">
      <li>Currently a federal civilian employee.</li>
      <li>A former federal civilian employee with reinstatement eligibility.</li>
    </ul>
    <p>
      This tip will not be shown if the user indicates in their profile that they are:
    </p>
    <ul class="usajobs-unstyled-list">
      <li>Not and have never been a federal civilian employee.</li>
      <li>A former federal civilian employee but DO NOT have reinstatement eligibility.</li>
    </ul>
    <p>
      The tip will continue to appear on the Documents page until the document is uploaded.
    </p>
    <h6>Tip Title</h6>
    <p>
      Your profile says you are or were a federal employee.
    </p>
    <h6>Body copy</h6>
    <p>
      We recommend you upload your SF-50. Many jobs require the SF-50 to verify your federal service.
    </p>

    <h4 class="usa-heading">Profile Tips and Alerts</h4>
    <h5>Success message - Contact information saved</h5>
    <p>
      This alert displays when a user has updated or completed their contact information, but has not completed their eligibility section.
    </p>
    <h6>Tip Title</h6>
    <p>
      Contact information saved.
    </p>
    <h6>Body copy</h6>
    <p>
     Your contact information has been saved to your profile. You have completed 1 of 2 required sections in your profile. You need to complete the Eligibility section, before you can apply for jobs.
    </p>
    <h6>Call to action</h6>
    <p>Next: Eligibility</p>

    <h5>Info message - No preferences in profile</h5>
    <p>This alert displays when a user has updated their profile but has not specified any preferences.</p>
    <h6>Body copy</h6>
    <p>
      We noticed you don't have any profile preferences. You can improve you search results if you update and use your preferences. Update your preferences.
    </p>

    <h5>Info message - User who have not updated their profile in over 6 months</h5>
    <p>This alert displays for signed in users when they have not updated their profile in over 6 months.</p>
    <h6>Body copy</h6>
    <p>
      It's been over six months since you've signed in. Is your profile up-to-date? Update your profile.
    </p>

  </div>
</div>
