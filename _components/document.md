---
layout: styleguide
type: component
title: Document
lead: A way to upload and view documents.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity under_review">
  Under Review
</a>

<div class="preview">
  <h6 class="usa-heading-alt">Placeholder variation</h6>
  <div class="usajobs-document usajobs-document--placeholder" data-object="document">
    <div class="usajobs-document__figure">
      <span class="usajobs-document__placeholder fa fa-file"></span>
    </div>
    <div class="usajobs-document__details">
      <p class="usajobs-document__title">
        Animal-Handler-resume.pdf
      </p>
      <p class="usajobs-document__date">
        Uploaded 03/12/15
      </p>
      <ul class="usajobs-document__controls">
        <li class="ctrl">
          <a class="view" href="#view">View</a>
        </li>
        <li class="pipe">|</li>
        <li class="ctrl">
          <a class="delete" href="#delete">Delete</a>
        </li>
      </ul>
    </div>
    <div class="usajobs-document__toggle" data-behavior="document.toggle">
      <input id="select-document-1" type="checkbox" name="doc-1" value="doc-1" class="usajobs-document__input">
      <label for="select-document-1" class="usajobs-document__selector">
        <span class="usajobs-assistive-text">
          Select Document 1
        </span>
      </label>
    </div>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Guidelines</h4>
    <ul class="usa-content-list">
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
    </ul>
  </div>
</div>
