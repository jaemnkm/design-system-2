---
layout: styleguide
type: component
title: Modals
lead: USAJOBS uses the modal component to draw attention to actions that require user input.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity incomplete">Incomplete</a>

<div class="preview">
  <a href="#modal-trigger" class="usa-button usajobs-button" data-object-trigger="modal" data-target="#modal-default">Open Modal</a>

  <div class="usajobs-modal" data-object="modal" data-state="is-closed" id="modal-default">
    <div class="usajobs-modal__frame">
      <span class="hidden">Top of Modal Window</span><!-- for accessibility -->
      <div class="usajobs-modal__header">
        <h2 class="usajobs-modal__title">[Modal Header]</h2>
      </div>
      <div class="usajobs-modal__body">
        [modal body content Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.]
      </div>
      <div class="usajobs-modal__footer">
        <a href="#modal-example" class="usajobs-modal__close" data-behavior="modal.close">
          Close <i class="fa-close"></i>
        </a>
      </div>
      <span class="hidden">Bottom of Modal Window</span><!-- for accessiblity -->
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
      <li></li>
    </ul>
  </div>
</div>
