---
layout: modals
type: component
title: Modals
lead: USAJOBS uses the modal component to draw attention to actions that require user input.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity under_review">Under Review</a>

<h4 class="usa-heading-alt">Default Modal</h4>
<div class="preview">
  <a href="#modal-trigger" class="usa-button usajobs-button" data-object-trigger="modal" data-target="#modal-demo">Open Default Modal</a>

  <div class="usajobs-modal" data-object="modal" data-state="is-closed" id="modal-default" aria-hidden="true" role="dialog" aria-labelledby="usajobs-modal-heading" aria-describedby="usajobs-modal-description">
    <div class="usajobs-modal__dialog">
      <div class="usajobs-modal__content">
        <div id="usajobs-modal-description" class="usajobs-assistive-text">
          Beginning of a dialog window for the [form name] form. It begins with a heading 2
          called &quot;[Modal Header]&quot;. Escape will cancel and close the window.
        </div>
        <div class="usajobs-modal__header">
          <h2 id="usajobs-modal-heading" class="usajobs-modal__title">[Modal Header]</h2>
        </div>
        <div class="usajobs-modal__body">
          [modal body content Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.]
        </div>
        <div class="usajobs-modal__footer">
          <button class="usa-button-big usa-button-outline" data-behavior="modal.close">Cancel</button>
          <button class="usa-button-big usa-button-primary" data-behavior="modal.close">Go</button>
        </div>
        <div class="usajobs-modal__actions">
          <button class="usajobs-modal__close" data-behavior="modal.close" >
            <span class="usajobs-assistive-text">Close</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>Modal should have the <code>role="dialog"</code> attribute.</li>
      <li>Content behind the modal should not scroll while the modal is open.</li>
      <li>Modal should have an <code>aria-labelledby</code> attribute where the value is the ID of the modal title (you don't need or want the #).</li>
      <li>Modal should have an <code>aria-describedby</code> attribute where the value is the ID of a div that contains a description of the modal (you don't need or want the #).</li>
      <li>Pressing the ESC key should close the modal and return the focus to the element that triggered the modal.</li>
      <li>If the modal contains a form, pressing the Enter key should submit that form.</li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>When the focus on the user must be focused on a single, or limited number, of elements. For example, when confirming or canceling a required action.</li>
      <li>The flow the user is in would otherwise be interrupted by a distinct page.</li>
    </ul>
    <h5>Do not use when</h5>
    <ul class="usa-content-list">
      <li>Content that must be linkable (have a distinct URL) or searchable.</li>
      <li>The contents of the modal is a form longer than 4 fields.</li>
    </ul>

    <h4 class="usa-heading">Guidelines</h4>
    <ul class="usa-content-list">
      <li><strong>Retain form input</strong>: All data entered into a modal should be retained until the modal is submitted. Thus if a user enters data, dismisses the modal, and then reopens the modal the form data should be populated in the form fields.</li>
    </ul>
  </div>
</div>

<h4 class="usa-heading-alt">Alert variations</h4>
<div class="preview">
  <h6 class="usa-heading-alt">Modal - Info variation</h6>
  <a href="#modal-trigger" class="usa-button usajobs-button" data-object-trigger="modal" data-target="#modal-info-demo">Open info modal</a>

  <h6 class="usa-heading-alt">Modal - Delete account variation</h6>
  <a href="#modal-trigger" class="usa-button usajobs-button usa-button-secondary" data-object-trigger="modal" data-target="#modal-delete-account">Delete Account</a>

  <h6 class="usa-heading-alt">Modal - Delete document variation</h6>
  <a href="#modal-trigger" class="usa-button usajobs-button usa-button-secondary" data-object-trigger="modal" data-target="#modal-delete-document">Delete Document</a>
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
      <li>When an action is required by the user before they may continue.</li>
      <li>When it is necessary to redirect the user to another part of the site.</li> 
    </ul>

    <h4 class="usa-heading">Guidelines</h4>
    <ul class="usa-content-list">
      <li>These modals are simply containers for an <a href="{{site.baseurl}}/alerts/">alert</a>. Thus the modal should adhere to the guidelines for the appropriate alert.</li>
      <li>Modals that manage destructive actions should be triggered by a <a href="{{site.baseurl}}/buttons/">red, secondary button</a> and should use the error alert style. However, unlike the deafult error alert these modals should allow the user to dismiss them.</a>
    </ul>
  </div>
</div>

<h4 class="usa-heading-alt">Form variations</h4>
<div class="preview">
  <h6 class="usa-heading-alt">Modal - Default with full form</h6>
  <a href="#modal-trigger" class="usa-button usajobs-button" data-object-trigger="modal" data-target="#modal-wide-demo">Open</a>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>Unfortunately, we have a number of these modals and we should excise them as quickly as possible. Content behind these modal has to scroll to support the egregious form lengths on mobile devices.</li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Never. Long forms do not belong in modals.</li>
    </ul>

    <h4 class="usa-heading">Guidelines</h4>
    <ul class="usa-content-list">
      <li>Do not create new instances of modals that contain long forms.</li>
      <li><strong>Retain form input</strong>: All data entered into a modal should be retained until the modal is submitted. Thus if a user enters data, dismisses the modal, and then reopens the modal the form data should be populated in the form fields.</li>
    </ul>
  </div>
</div>

