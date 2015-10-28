---
layout: modals
type: component
title: Modals
lead: USAJOBS uses the modal component to draw attention to actions that require user input.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity under_review">Under Review</a>

<div class="preview">
  <a href="#modal-trigger" class="usa-button usajobs-button" data-object-trigger="modal" data-target="#modal-demo">Open Modal</a>

  <div class="usajobs-modal" data-object="modal" data-state="is-closed" id="modal-default" aria-hidden="true" role="dialog" aria-labelledby="usajobs-modal-heading" aria-describedby="usajobs-modal-description">
    <div id="usajobs-modal-description" class="usajobs-assistive-text">
      Beginning of a dialog window for the contact form. It begins with a heading 2
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
    </ul>
  </div>
</div>
