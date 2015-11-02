---
layout: notifications
type: component
title: Notifications
lead: A distinct messaging style intended for helpful confirmations.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity under_review">
  Under Review
</a>

<div class="preview">
  <h6 class="usa-heading-alt">Success</h6>
  <a href="#notification-trigger" class="usa-button usajobs-button" data-object-trigger="notification" data-target="#notification-demo">Show Notification</a>

  <div class="usajobs-notification usajobs-notification--success" role="alert" data-object="notification" data-state="is-closed">
    <div class="usajobs-notification__figure">
      <div class="usajobs-notification__icon">
      </div>
    </div>
    <div class="usajobs-notification__body">
      <h3 class="usa-notification-heading">
        Application Progress Saved
      </h3>
      <p class="usa-notification-text">
        Animal-Handling-Resume.pdf has been attached to your application.
      </p>
    </div>
    <button class="usajobs-notification__close" data-behavior="notification.close" >
      <span class="usajobs-assistive-text">Close</span>
    </button>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Implementation</h4>
    <ul class="usa-content-list">
      <li>The notification animates in from the left and automatically fades out.</li>
      <li>The notification is anchored to the left edge and towards the bottom of the viewport.</li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Notifications are ideally used for brief, temporary messaging around a specific microinteraction within a page.</li>
      <li>Notifications are intended to build trust in the system by increasing the level of feedback coming from the system without being overwhelming or intrusive.</li>
    </ul>

    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
      <li>Use an <a href="{{ site.baseurl }}/alerts/">Alert</a> for messaging that needs to be more prominent (e.g. completing a step in a process).</li>
      <li>Use a <a href="{{ site.baseurl }}/modals/">Modal</a> when the message demands that the user take action.</li>
    </ul>

    <h4 class="usa-heading">Guidance</h4>
    <p>
      Contents of notification messages, like all messaging, should be brief and concise. 
    </p>
  </div>
</div>

