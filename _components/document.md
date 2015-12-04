---
layout: styleguide
type: component
title: Document
lead: A way to upload and view documents.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity under_review">
  Under Review
</a>

<h4 class="usa-heading-alt">Thumbnail variation</h4>
<div class="preview">
  <div class="usajobs-document usajobs-document--thumbnail" data-object="document" data-state="is-selectable">
    <div class="usajobs-document__figure" data-behavior="document.toggle" data-target="#toggle-document-1">
      <div class="usajobs-document__figure-overlay">
        <img src="{{ site.baseurl }}/img/document-thumbnails/resume-thumbnail-01-2x.png" class="img-2x" />
      </div>
    </div>
    <div class="usajobs-document__details">
      <p class="usajobs-document__title">
        Director-resume.pdf
      </p>
      <p class="usajobs-document__date">
        Uploaded 02/14/15
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
    <div class="usajobs-document__toggle">
      <input id="select-document-1" type="checkbox" name="doc-1" value="doc-1" class="usajobs-document__input">
      <label id="toggle-document-1" for="select-document-1" class="usajobs-document__selector">
        <span class="usajobs-assistive-text">
          Select Document 1
        </span>
      </label>
    </div>
  </div>
  
  <h6 class="usa-heading-alt">Loading</h6>
  <div class="usajobs-document usajobs-document--thumbnail" data-object="document" data-state="is-loading">
    <div class="usajobs-document__figure" data-behavior="document.toggle" data-target="#toggle-document-1">
      <div class="usajobs-document__figure-overlay">
        <img src="{{ site.baseurl }}/img/document-thumbnails/resume-thumbnail-01-2x.png" class="img-2x" />
      </div>
    </div>
    <div class="usajobs-document__details">
      <p class="usajobs-document__title">
        Director-resume.pdf
      </p>
      <p class="usajobs-document__date">
        Uploaded 02/14/15
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
    <div class="usajobs-document__toggle">
      <input id="select-document-1" type="checkbox" name="doc-1" value="doc-1" class="usajobs-document__input">
      <label id="toggle-document-1" for="select-document-1" class="usajobs-document__selector">
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
    <h4 class="usa-heading">Guidance</h4>
    <ul class="usa-content-list">
      <li>The <strong>View</strong> link opens the full document in a <a href="{{ site.baseurl}}/modals/">modal</a>.</li>
      <li> The <strong>Delete</strong> link will open a dialog in a <a href="{{ site.baseurl}}/modals/">modal</a> asking the user to confirm removal of the document.</li>
      <li>For resume documents that are built with Resume Builder the View link is replaced by an <strong>Edit</strong> link. Clicking that link will open the Resume Builder in a <a href="{{ site.baseurl }}/modals/">modal</a>.</li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Whenever a document has been uploaded to USAJOBS use this component to reflect the document back to the user.</li>
    </ul>

    <h5>Do not use when</h5>
    <ul class="usa-content-list">
      <li>The document has not been provided by the user (i.e. the document is pubished by USAJOBS).</li>
    </ul>
  </div>
</div>

<h4 class="usa-heading-alt">Placeholder variation</h4>
<div class="preview">
  <div class="usajobs-document usajobs-document--placeholder" data-object="document" data-state="is-selectable">
    <div class="usajobs-document__figure" data-behavior="document.toggle" data-target="#toggle-document-2">
      <span class="usajobs-document__placeholder fa fa-file"></span>
    </div>
    <div class="usajobs-document__details">
      <p class="usajobs-document__title">
        Animal-Handler-resume.pdf
      </p>
      <p class="usajobs-document__date">
        Uploaded 03/22/25
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
    <div class="usajobs-document__toggle">
      <input id="select-document-2" type="checkbox" name="doc-2" value="doc-2" class="usajobs-document__input">
      <label id="toggle-document-2" for="select-document-2" class="usajobs-document__selector">
        <span class="usajobs-assistive-text">
          Select Document 2
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
      <li>Use this variation in cases where the document thumbnail does not exist or cannot be loaded.</li>
    </ul>
  </div>
</div>

