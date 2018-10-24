---
layout: styleguide
type: component
title: Job announcement actions
lead: Users can print, share, or save a job announcement.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity deployed">
  Deployed
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
      <div class="usajobs-joa-actions__share usajobs-joa-actions-share">
        <button class="usajobs-joa-actions-share__trigger" id="joa-share" href="#share" data-behavior="joa-actions.toggle-share" aria-haspopup="true">
          <i class="fa fa-share-alt"></i> Share
        </button>
        <ul class="usajobs-joa-actions-share__list" id="joa-share-menu" aria-hidden="true" aria-labeledby="joa-share">
          <li class="usajobs-joa-actions-share__item">
            <a href="mailto:?subject=USAJOBS Job Announcement - [job title]&body=Read more about [job title ] at https://www.usajobs.gov/GetJob/ViewDetails/437919000" class="usajobs-joa-actions-share__link email" data-behavior="joa-actions.close-share" data-target="#joa-share-menu">
              <i class="fa fa-envelope-square"></i> <span class="sr-only">Email</span>
            </a>
          </li>
          <li class="usajobs-joa-actions-share__item">
            <a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.usajobs.gov%2FGetJob%2FViewDetails%2F444821100%2F%3Fshare%3Dfacebook&t=USAJOBS%20-%20Job%20Announcement" class="usajobs-joa-actions-share__link facebook" target="_blank" data-behavior="joa-actions.close-share" data-target="#joa-share-menu">
              <i class="fa fa-facebook-square"></i> <span class="sr-only">Facebook</span>
            </a>
          </li>
          <li class="usajobs-joa-actions-share__item">
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.usajobs.gov%2FGetJob%2FViewDetails%2F444821100%2F%3Fshare%3Dlinkedin&title=USAJOBS%20-%20Job%20Announcement&ro=false&summary=&source=" class="usajobs-joa-actions-share__link linkedin" target="_blank" data-behavior="joa-actions.close-share" data-target="#joa-share-menu">
              <i class="fa fa-linkedin-square"></i> <span class="sr-only">LinkedIn</span>
            </a>
          </li>
          <li class="usajobs-joa-actions-share__item">
            <a href="https://twitter.com/intent/tweet?text=USAJOBS%20-%20Job%20Announcement%20https%3A%2F%2Fwww.usajobs.gov%2FGetJob%2FViewDetails%2F444821100%2F%3Fshare%3Dtwitter&source=webclient" class="usajobs-joa-actions-share__link twitter" target="_blank" data-behavior="joa-actions.close-share" data-target="#joa-share-menu">
              <i class="fa fa-twitter-square"></i> <span class="sr-only">Twitter</span>
            </a>
          </li>
          <li class="usajobs-joa-actions-share__item">
            <a href="#joa-share-menu" data-shorten-url="https://www.usajobs.gov/GetJob/ViewDetails/437919000" class="usajobs-joa-actions-share__link link" data-behavior="joa-actions.shorten-link" data-target="#joa-share-menu">
              <i class="fa fa-chain"></i> <span class="sr-only">Shorten link</span>
            </a>
          </li>
        </ul>
      </div>
      <a class="usajobs-joa-actions__save" href="#save" data-behavior="joa-actions.toggle-save" data-state="is-unsaved">
        Save
      </a>
    </div>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-0">
    Documentation
  </button>
  <div id="doc-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Guidelines</h4>
    <h5>Print</h5>
    <ul class="usa-content-list">
      <li>
        Clicking "Print" opens the job announcement print-preview view in the same window.
      </li>
    </ul>

    <h5>Share</h5>
    <ul class="usa-content-list">
      <li>
        Clicking "Share" toggles a popup menu of choices.
      </li>
      <li>
        Clicking any of the choices opens a new window that shares the URL of the job announcement via that service (email, Facebook, Google+, LinkedIn, Twitter, or TinyURL) and closes the share menu.
      </li>
    </ul>

    <h5>Save</h5>
    <ul class="usa-content-list">
      <li>
        A job announcement that has not been saved starts out in the state shown above with the text "Save" and the unfilled star icon.
      </li>
      <li>
        Clicking "Save" or the star icon will update the text to "Saved" and fill the icon. The job should be saved at that time to the user's list of Saved Jobs.
      </li>
      <li>
        Clicking "Saved" or the star icon will update the text to "Save" and un-fill the icon. The jobs hould be removed at that time from the user's list of Saved Jobs.
      </li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>
        Use inside a job announcement to allow the user to apply to, print, save, or share the job.
      </li>
    </ul>
  </div>
</div>
