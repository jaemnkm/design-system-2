---
layout: styleguide
type: component
title: Job annoucement actions
lead: Users can print, share, or save a job announcment.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity under_review">
  Under Review
</a>

<div class="preview compact">
  <div class="usajobs-joa-actions" data-object="joa-actions">
    <div class="usajobs-joa-actions__col-apply">
      <a href="https://login.usajobs.gov/account/signin" class="usa-button-primary usa-button-big usajobs-joa-actions__apply">Apply</a>
    </div>
    <div class="usajobs-joa-actions__col-sub-actions">
      <a class="usajobs-joa-actions__print" href="https://www.usajobs.gov/GetJob/PrintPreview/437919000">
        <i class="fa fa-print"></i> Print
      </a>
      <a class="usajobs-joa-actions__share" href="#share" data-object-trigger="modal" data-target="#modal-share-joa">
        <i class="fa fa-share-alt"></i> Share
      </a>
      <a class="usajobs-joa-actions__save" href="#save" data-behavior="joa-actions.toggle-save" data-state="is-unsaved">
        Save
      </a>
    </div>
  </div>
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
        Use inside a job announcement to allow the user to apply to, print, save, or share the job.
      </li>
    </ul>
  </div>
</div>
