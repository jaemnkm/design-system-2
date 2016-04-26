---
layout: styleguide
type: component
title: Document
lead: A way to upload and view documents.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity under_review">
  Under Review
</a>

<h4 class="usa-heading-alt" id="thumbnail">Thumbnail</h4>
<div class="preview">
  <h6 class="usa-heading-alt">Single-Select</h6>
  <div class="usajobs-grid">
    <div class="usajobs-width-one-half">
      <div class="usajobs-document usajobs-document--thumbnail" data-object="document" data-state="is-selectable">
        <div class="usajobs-document__figure" data-behavior="document.select" data-target="#toggle-resume-1">
          <div class="usajobs-document__figure-overlay">
            <img src="{{ site.baseurl }}/img/document-thumbnails/resume-thumbnail-01-2x.png" class="img-2x" />
          </div>
        </div>
        <a href="#view" class="usajobs-document__view" data-behavior="document.view">View</a>
        <div class="usajobs-document__details">
          <p class="usajobs-document__title">
            Director-resume.pdf
          </p>
          <p class="usajobs-document__date">
            Uploaded 02/14/15
          </p>
          <ul class="usajobs-document__controls">
            <li class="ctrl">
              <a class="edit" href="#edit"><i class="fa fa-edit"></i> Edit</a>
            </li>
          </ul>
        </div>
        <div class="usajobs-document__toggle">
          <input id="select-resume-1" type="radio" name="resume" value="resume-1" class="usajobs-document__input" data-behavior="document.select-radio">
          <label id="toggle-resume-1" for="select-resume-1" class="usajobs-document__selector">
            <span class="usajobs-assistive-text">
              Select Resume 1
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="usajobs-width-one-half">
      <div class="usajobs-document usajobs-document--thumbnail" data-object="document" data-state="is-selectable">
        <div class="usajobs-document__figure" data-behavior="document.select" data-target="#toggle-resume-2">
          <div class="usajobs-document__figure-overlay">
            <img src="{{ site.baseurl }}/img/document-thumbnails/resume-thumbnail-01-2x.png" class="img-2x" />
          </div>
        </div>
        <a href="#view" class="usajobs-document__view" data-behavior="document.view">View</a>
        <div class="usajobs-document__details">
          <p class="usajobs-document__title">
            Director-resume.pdf
          </p>
          <p class="usajobs-document__date">
            Uploaded 02/14/15
          </p>
          <ul class="usajobs-document__controls">
            <li class="ctrl">
              <a class="edit" href="#edit"><i class="fa fa-edit"></i> Edit</a>
            </li>
          </ul>
        </div>
        <div class="usajobs-document__toggle">
          <input id="select-resume-2" type="radio" name="resume" value="resume-2" class="usajobs-document__input" data-behavior="document.select-radio">
          <label id="toggle-resume-2" for="select-resume-2" class="usajobs-document__selector">
            <span class="usajobs-assistive-text">
              Select Resume 2
            </span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <h6 class="usa-heading-alt">Multi-Select</h6>
  <form name="multi-select">
    <div class="usajobs-document usajobs-document--thumbnail" data-object="document" data-state="is-selectable">
      <div class="usajobs-document__figure" data-behavior="document.toggle" data-target="#toggle-document-3">
        <div class="usajobs-document__figure-overlay">
          <img src="{{ site.baseurl }}/img/document-thumbnails/doc-thumbnail-01-2x.jpeg" class="img-2x" />
        </div>
      </div>
      <a href="#view" class="usajobs-document__view" data-behavior="document.view">View</a>
      <div class="usajobs-document__details">
        <p class="usajobs-document__title">My-Federal-Form.jpg</p>
        <p class="usajobs-document__date">Uploaded 02/14/15</p>
        <ul class="usajobs-document__controls">
          <li class="ctrl">
            <a class="edit" href="#edit"><i class="fa fa-edit"></i> Edit</a>
          </li>
        </ul>
        <p class="usajobs-document__type">SF-50</p>
      </div>
      <div class="usajobs-document__toggle">
        <input id="document-3" type="checkbox" name="document-3" value="doc-3" class="usajobs-document__input"> 
        <label id="toggle-document-3" for="document-3" class="usajobs-document__selector" data-behavior="document.toggle-checkbox">
          <span class="usajobs-assistive-text">
            Select Document 3
          </span>
        </label>
      </div>
    </div>
  </form>

  <h6 class="usa-heading-alt">Add</h6>
  <div class="usajobs-document usajobs-document--add" data-object="document" data-state="is-selectable">
    <button class="usa-button-gray usajobs-document__trigger" data-object-trigger="modal" data-target="#modal-addResume">
      <div class="usajobs-document__add-icon fa fa-plus-circle"></div>
      Add a resume
    </button>
  </div>

  <h6 class="usa-heading-alt">Loading</h6>
  <div class="usajobs-document usajobs-document--thumbnail" data-object="document" data-state="is-loading">
    <div class="usajobs-document__figure" data-behavior="document.select" data-target="#toggle-document-1">
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
          <a class="delete" href="#delete"><i class="fa fa-times"></i> Delete</a>
        </li>
      </ul>
    </div>
    <div class="usajobs-document__toggle">
      <input id="select-document-1" type="radio" name="doc-1" value="doc-1" class="usajobs-document__input" data-behavior="document.select-radio">
      <label id="toggle-document-1" for="select-document-1" class="usajobs-document__selector">
        <span class="usajobs-assistive-text">
          Select Document 1
        </span>
      </label>
    </div>
  </div>

  <h6 class="usa-heading-alt">Disabled</h6>
  <div class="usajobs-grid">
    <div class="usajobs-width-one-half">
      <div class="usajobs-document usajobs-document--thumbnail" data-object="document" data-state="is-disabled">
        <div class="usajobs-document__figure" data-behavior="document.select" data-target="#toggle-document-4">
          <div class="usajobs-document__figure-overlay">
            <img src="{{ site.baseurl }}/img/document-thumbnails/resume-thumbnail-01-2x.png" class="img-2x" />
          </div>
        </div>
        <a href="#view" class="usajobs-document__view" data-behavior="document.view">View</a>
        <div class="usajobs-document__details">
          <p class="usajobs-document__title">
            Director-resume.pdf
          </p>
          <p class="usajobs-document__date">
            Uploaded 02/14/15
          </p>
          <ul class="usajobs-document__controls">
            <li class="ctrl">
              <a class="delete" href="#delete"><i class="fa fa-times"></i> Delete</a>
            </li>
          </ul>
        </div>
        <div class="usajobs-document__toggle">
          <input id="select-document-4" type="radio" name="doc-4" value="doc-4" class="usajobs-document__input" data-behavior="document.select-radio" disabled>
          <label id="toggle-document-4" for="select-document-4" class="usajobs-document__selector">
            <span class="usajobs-assistive-text">
              Select Document 4
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="usajobs-width-one-half">
      <div class="usajobs-document usajobs-document--add" data-object="document" data-state="is-disabled" title="You have reached your document limit. You cannot add a new document until you delete an existing document from your account.">
        <button class="usa-button-gray usajobs-document__trigger" data-object-trigger="modal" data-target="#modal-addResume" disabled>
          <div class="usajobs-document__add-icon fa fa-plus-circle"></div>
          Add a resume
        </button>
      </div>
    </div>
  </div>

  <h6 class="usa-heading-alt">Corrupt</h6>
  <div class="usajobs-document usajobs-document--thumbnail" data-object="document" data-state="is-corrupt">
    <div class="usajobs-document__figure" data-behavior="document.select" data-target="#toggle-document-5">
      <div class="usajobs-document__figure-overlay">
        <img src="{{ site.baseurl }}/img/document-thumbnails/resume-thumbnail-01-2x.png" class="img-2x" />
      </div>
    </div>
    <a class="usajobs-document__reupload" href="#reupload">Re-Upload</a>
    <div class="usajobs-document__details">
      <p class="usajobs-document__title">
        Director-resume.pdf
      </p>
      <p class="usajobs-document__date">
        Uploaded 02/14/15
      </p>
      <ul class="usajobs-document__controls">
        <li class="ctrl">
          <a class="delete" href="#delete"><i class="fa fa-times"></i> Delete</a>
        </li>
      </ul>
    </div>
    <div class="usajobs-document__toggle">
      <input id="select-document-5" type="radio" name="doc-5" value="doc-5" class="usajobs-document__input" data-behavior="document.select-radio" disabled>
      <label id="toggle-document-5" for="select-document-5" class="usajobs-document__selector">
        <span class="usajobs-assistive-text">
          Select Document 5
        </span>
      </label>
    </div>
  </div>

  <h6 class="usa-heading-alt">Incomplete</h6>
  <div class="usajobs-document usajobs-document--thumbnail" data-object="document" data-state="is-incomplete">
    <div class="usajobs-document__figure" data-behavior="document.select" data-target="#toggle-document-6">
      <div class="usajobs-document__figure-overlay">
        <img src="{{ site.baseurl }}/img/document-thumbnails/resume-thumbnail-02-2x.png" class="img-2x" />
      </div>
    </div>
    <div class="usajobs-document__details">
      <p class="usajobs-document__error">Incomplete</p>
      <p class="usajobs-document__title">My-resume.pdf</p>
      <p class="usajobs-document__date">Built 03/18/10</p>
      <ul class="usajobs-document__controls">
        <li class="ctrl">
          <a class="edit" href="#edit"><i class="fa fa-edit"></i> Edit</a>
        </li>
        <li class="ctrl">
          <a class="delete" href="#delete"><i class="fa fa-times"></i> Delete</a>
        </li>
      </ul>
    </div>
    <div class="usajobs-document__toggle">
      <input id="select-document-6" type="radio" name="doc-6" value="doc-6" class="usajobs-document__input" data-behavior="document.select-radio" disabled>
      <label id="toggle-document-6" for="select-document-6" class="usajobs-document__selector">
        <span class="usajobs-assistive-text">
          Select Document 6
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
      <li>The first line of the document details is the user-provided title of the document.</li>
      <li>The second line of a document, NOT a resume, is the document type which is one of:
        <ul>
          <li>Cover Letter</li>
          <li>DD-214</li>
          <li>ECQ</li>
          <li>OF-306</li>
          <li>Other</li>
          <li>SF-15</li>
          <li>SF-50</li>
          <li>Transcript</li>
          <li>Veteran Other</li>
        </ul>
      </li>
      <li>Resumes either uploaded or created by the resume builder do not get a document type in Application Guide.</li> 
      <li>The third line of a document is the date the document was uploaded. This line of text is in the format "Uploaded [date]". Resumes created by Resume Builder are in the format "Built [date]".</li>
      <li>The <strong>View</strong> link opens the full document in a <a href="{{ site.baseurl}}/modals/">modal</a>.</li>
      <li> The <strong>Delete</strong> link will open a dialog in a <a href="{{ site.baseurl}}/modals/">modal</a> asking the user to confirm removal of the document.</li>
      <li>For resume documents that are built with Resume Builder the View link is replaced by an <strong>Edit</strong> link. Clicking that link will open the Resume Builder in a <a href="{{ site.baseurl }}/modals/">modal</a>.</li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Whenever a document has been uploaded to USAJOBS use this component to reflect the document back to the user.</li>
      <li>Use the single-select version, which contains a radio button input, when only a single document can be selected from a series of documents (i.e. resume).</li>
      <li>Use the multi-select version, which contains a checkobx input, when multiple documents can be selected from a series of documents.</li>
      <li>Use the loading animation when the document has been uploaded and the thumbnail is loading into this component.</li>
    </ul>

    <h5>Do not use when</h5>
    <ul class="usa-content-list">
      <li>The document has not been provided by the user (i.e. the document is pubished by USAJOBS).</li>
    </ul>
  </div>
</div>

<h4 class="usa-heading-alt" id="placeholder">Placeholder variation</h4>
<div class="preview">
  <h6 class="usa-heading-alt">Application Guide - Multi-select</h6>
  <div class="usajobs-grid">
    <div class="usajobs-width-one-half">
      <div class="usajobs-document usajobs-document--placeholder" data-object="document" data-state="is-selectable">
        <div class="usajobs-document__figure" data-behavior="document.toggle" data-target="#toggle-document-2">
          <span class="usajobs-document--placeholder__icon word"></span>
        </div>
        <a href="#view" class="usajobs-document__view" data-behavior="document.view">View</a>
        <div class="usajobs-document__details">
          <p class="usajobs-document__title">Exec-Core.doc</p>
          <p class="usajobs-document__date">
            Uploaded 03/14/45
          </p>
          <ul class="usajobs-document__controls">
            <li class="ctrl">
              <a class="edit" href="#edit"><i class="fa fa-edit"></i> Edit</a>
            </li>
          </ul>
          <p class="usajobs-document__type">ECQ</p>
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
    <div class="usajobs-width-one-half">
      <div class="usajobs-document usajobs-document--placeholder" data-object="document" data-state="is-selectable">
        <div class="usajobs-document__figure" data-behavior="document.toggle" data-target="#toggle-document-7">
          <span class="usajobs-document--placeholder__icon image"></span>
        </div>
        <a href="#view" class="usajobs-document__view" data-behavior="document.view">View</a>
        <div class="usajobs-document__details">
          <p class="usajobs-document__title">My OPM form.jpg</p>
          <p class="usajobs-document__date">
            Uploaded 03/18/10
          </p>
          <ul class="usajobs-document__controls">
            <li class="ctrl">
              <a class="edit" href="#edit"><i class="fa fa-edit"></i> Edit</a>
            </li>
          </ul>
          <p class="usajobs-document__type">SF-50</p>
        </div>
        <div class="usajobs-document__toggle">
          <input id="select-document-7" type="checkbox" name="doc-7" value="doc-7" class="usajobs-document__input">
          <label id="toggle-document-7" for="select-document-7" class="usajobs-document__selector">
            <span class="usajobs-assistive-text">
              Select Document 7
            </span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <h6 class="usa-heading-alt">Account - Documents - Other</h6>
  <div class="usajobs-grid">
    <div class="usajobs-width-one-half">
      <div class="usajobs-document usajobs-document--placeholder" data-object="document">
        <div class="usajobs-document__figure" data-behavior="document.view" data-target="#view-document-8">
          <span class="usajobs-document--placeholder__icon pdf"></span>
        </div>
        <a href="#view" class="usajobs-document__view" data-behavior="document.view">View</a>
        <div class="usajobs-document__details">
          <p class="usajobs-document__title">Pending discharge on letterhead.pdf</p>
          <p class="usajobs-document__date">
            Uploaded 03/12/75
          </p>
          <ul class="usajobs-document__controls">
            <li class="ctrl">
              <a class="edit" href="#edit"><i class="fa fa-edit"></i> Edit</a>
            </li>
            <li class="ctrl">
              <a class="duplicate" href="#duplicate"><i class="fa fa-copy"></i> Duplicate</a>
            </li>
            <li class="ctrl">
              <a class="delete" href="#delete"><i class="fa fa-times"></i> Delete</a>
            </li>
          </ul>
          <p class="usajobs-document__type">Veteran Other</p>
        </div>
      </div>
    </div>
    <div class="usajobs-width-one-half">
      <div class="usajobs-document usajobs-document--placeholder" data-object="document">
        <div class="usajobs-document__figure" data-behavior="document.view" data-target="#view-document-9">
          <span class="usajobs-document--placeholder__icon text"></span>
        </div>
        <a href="#view" class="usajobs-document__view" data-behavior="document.view">View</a>
        <div class="usajobs-document__details">
          <p class="usajobs-document__title">Latest-Cover-Letter.txt</p>
          <p class="usajobs-document__date">
            Uploaded 03/18/16
          </p>
          <ul class="usajobs-document__controls">
            <li class="ctrl">
              <a class="edit" href="#edit"><i class="fa fa-edit"></i> Edit</a>
            </li>
            <li class="ctrl">
              <a class="duplicate" href="#duplicate"><i class="fa fa-copy"></i> Duplicate</a>
            </li>
            <li class="ctrl">
              <a class="delete" href="#delete"><i class="fa fa-times"></i> Delete</a>
            </li>
          </ul>
          <p class="usajobs-document__type">Cover Letter</p>
        </div>
      </div>
    </div>
  </div>

  <h6 class="usa-heading-alt">Account - Documents - Resumes</h6>
  <div class="usajobs-grid">
    <div class="usajobs-width-one-half">
      <div class="usajobs-document usajobs-document--placeholder" data-object="document">
        <div class="usajobs-document__figure" data-behavior="document.view" data-target="#view-document-10">
          <span class="usajobs-document--placeholder__icon pdf"></span>
        </div>
        <a href="#view" class="usajobs-document__view" data-behavior="document.view">View</a>
        <div class="usajobs-document__details">
          <p class="usajobs-document__title">TSA resume.pdf</p>
          <p class="usajobs-document__date">
            Uploaded 04/26/16
          </p>
          <ul class="usajobs-document__controls">
            <li class="ctrl">
              <a class="edit" href="#edit"><i class="fa fa-edit"></i> Edit</a>
            </li>
            <li class="ctrl">
              <a class="duplicate" href="#duplicate"><i class="fa fa-copy"></i> Duplicate</a>
            </li>
            <li class="ctrl">
              <a class="delete" href="#delete"><i class="fa fa-times"></i> Delete</a>
            </li>
          </ul>
          <div class="usajobs-document__searchable">
            <input id="document-10-searchable" type="checkbox" name="document-10-searchable" value="document-10-searchable" checked="">
            <label for="document-10-searchable">Searchable</label>
            <p class="usajobs-document__searchable-date">
              until 04/26/17
              <a href="#extend" class="usajobs-document__searchable-extend">Extend for 1 year</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="usajobs-width-one-half">
      <div class="usajobs-document usajobs-document--placeholder" data-object="document">
        <div class="usajobs-document__figure" data-behavior="document.view" data-target="#view-document-11">
          <span class="usajobs-document--placeholder__icon text"></span>
        </div>
        <a href="#view" class="usajobs-document__view" data-behavior="document.view">View</a>
        <div class="usajobs-document__details">
          <p class="usajobs-document__title">Latest-Cover-Letter.txt</p>
          <p class="usajobs-document__date">
            Uploaded 03/18/16
          </p>
          <ul class="usajobs-document__controls">
            <li class="ctrl">
              <a class="edit" href="#edit"><i class="fa fa-edit"></i> Edit</a>
            </li>
            <li class="ctrl">
              <a class="duplicate" href="#duplicate"><i class="fa fa-copy"></i> Duplicate</a>
            </li>
            <li class="ctrl">
              <a class="delete" href="#delete"><i class="fa fa-times"></i> Delete</a>
            </li>
          </ul>
          <div class="usajobs-document__searchable">
            <input id="document-11-searchable" type="checkbox" name="document-11-searchable" value="document-11-searchable">
            <label for="document-11-searchable">Searchable</label>
          </div>
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

