---
layout: styleguide
type: component
title: Search
lead: A main function of USAJOBS is to provide a clear and effective search. Our search interface is comprised of serveral components including controls, filters, pagination, and results.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design complete
</a>

<h4 class="usa-heading-alt" id="controls">Controls</h4>
<div class="preview">
  <h6 class="usa-heading-alt">Results found</h6>
  <div class="usajobs-grid usajobs-search-controls">
    <div class="usajobs-search-controls__results-count-container">
      <h4 class="usajobs-search-controls__results-count">
        Viewing 1-10 of 1,562 jobs
      </h4>
    </div>
    <div class="usajobs-search-controls__sort-container">
      <label class="usajobs-search-controls__sort-label" for="search_sort">
        Sort by
      </label>
      <select class="usajobs-search-controls__sort-control" id="search_sort" name="search_sort">
        <option value="n/a">Relevance</option>
        <option value="OpenDate">Open Date</option>
        <option value="CloseDate">Close Date</option>
        <option value="OrganizationName">Agency</option>
        <option value="Location">Location</option>
        <option value="PositionTitle">Job Title</option>
        <option value="RemunerationMinimumAmount">Salary Minimum</option>
        <option value="RemunerationMaximumAmount">Salary Maximum</option>
      </select>
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
      <li>When the number of results are relevant to explain to the user the relative success of their query.</li>
    </ul>
    <h5>When not to use</h5>
    <ul class="usa-content-list">
      <li>
        When there are no results (see "No results found").
      </li>
    </ul>
  </div>
</div>

<h4 class="usa-heading-alt" id="no-results">No results found</h4>
<div class="preview">
  <div class="usajobs-search-no-params-highlight">
    <h4 class="usajobs-search-no-params-highlight__title">Please refine your search</h4>
    <p>We want to help you find the right job. Try entering a keyword or location, or use the filters on the right.</p>
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
      <li>Do not show search controls or pagination when no results are displayed.</li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>When zero results are returned by the user's query.</li>
    </ul>
  </div>
</div>

<h4 class="usa-heading-alt" id="pagination">Pagination</h4>
<div class="preview compact">
  <h6 class="usa-heading-alt">First page</h6>
  <ul class="usajobs-search-pagination">
    <li class="usajobs-search-pagination__previous-page-container is-disabled">
      <a class="usajobs-search-pagination__previous-page" data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="#0" title="Go To Previous Page" aria-hidden="true">Previous</a>
    </li>
    <li class="usajobs-search-pagination__page is-active">
      <span>1</span></li>
    <li class="usajobs-search-pagination__page">
      <a data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=2&amp;statusFilter=public" title="Go To Page 2">2</a>
    </li>
    <li class="usajobs-search-pagination__page-condensed">
      &hellip;
    </li>
    <li class="usajobs-search-pagination__page">
      <a data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=62&amp;statusFilter=public" title="Go To Page 62">62</a>
    </li>
    <li class="usajobs-search-pagination__next-page-container">
      <a class="usajobs-search-pagination__next-page" data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=2&amp;statusFilter=public" title="Go To Next Page">
        Next
      </a>
    </li>
  </ul>

  <h6 class="usa-heading-alt">Inner page</h6>
  <ul class="usajobs-search-pagination">
    <li class="usajobs-search-pagination__previous-page-container">
      <a class="usajobs-search-pagination__previous-page" data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults?page=2&amp;statusFilter=public" title="Go To Previous Page">Previous</a>
    </li>
    <li class="usajobs-search-pagination__page">
      <a data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=1&amp;statusFilter=public" title="Go To Page 1">1</a>
    </li>
    <li class="usajobs-search-pagination__page-condensed">
      &hellip;
    </li>
    <li class="usajobs-search-pagination__page">
      <a data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=4&amp;statusFilter=public" title="Go To Page 4">4</a>
    </li>
    <li class="usajobs-search-pagination__page is-active">
      <span>5</span>
    </li>
    <li class="usajobs-search-pagination__page">
      <a data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=6&amp;statusFilter=public" title="Go To Page 6">6</a>
    </li>
    <li class="usajobs-search-pagination__page-condensed">
      &hellip;
    </li>
    <li class="usajobs-search-pagination__page">
      <a data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=589&amp;statusFilter=public" title="Go To Page 589">589</a>
    </li>
    <li class="usajobs-search-pagination__next-page-container">
      <a class="usajobs-search-pagination__next-page" data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=8&amp;statusFilter=public" title="Go To Next Page">
        Next
      </a>
    </li>
  </ul>

  <h6 class="usa-heading-alt">Last page</h6>
  <ul class="usajobs-search-pagination">
    <li class="usajobs-search-pagination__previous-page-container">
      <a class="usajobs-search-pagination__previous-page" data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults?page=61&amp;statusFilter=public" title="Go To Previous Page">Previous</a>
    </li>
    <li class="usajobs-search-pagination__page">
      <a data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=1&amp;statusFilter=public" title="Go To Page 1">1</a>
    </li>
    <li class="usajobs-search-pagination__page-condensed">
      &hellip;
    </li>
    <li class="usajobs-search-pagination__page">
      <a data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=61&amp;statusFilter=public" title="Go To Page 61">61</a>
    </li>
    <li class="usajobs-search-pagination__page is-active">
      <span>62</span>
    </li>
    <li class="usajobs-search-pagination__next-page-container is-disabled">
      <a class="usajobs-search-pagination__next-page" data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="#next" title="Go To Next Page" aria-hidden="true">
        Next
      </a>
    </li>
  </ul>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>The previous and next buttons are hidden with aria-hidden when they are non-functional.</li>
    </ul>

    <h4 class="usa-heading">Implementation</h4>
    <ul class="usa-content-list">
      <li>Below the M breakpoint (600px) the pagination is represented by the next and/or previous buttons.</li>
      <li>Above the M breakpoint there are several rules:
        <ul>
          <li>The first and last page links are always displayed.</li>
          <li>Current page number is always displayed with +/- 1 page to either side.</li>
          <li>When displaying the first and last pages +/- 2 pages are displayed.</li>
          <li>When displaying the first page the Previous button is not displayed.</li>
          <li>When displaying the last page the Next button is not displayed.</li>
          <li>There are only ever 5 page links displayed, including first and last page. All other pages are abbreviated into ellipses.</li>
        </ul>
      </li>
      <li>Pagination should always be shown at the bottom of the page, near the bottom of the list that it paginates.</li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>When it is not feasible to show all ordered data on a single page.</li>
    </ul>
    <h5>Do not use when</h5>
    <ul class="usa-content-list">
      <li>When it is undesirable to have the user pause for navigation. Some alternatives include the infinite scroll pattern or simple un-numbered navigation.</li>
    </ul>
  </div>
</div>

<h4 class="usa-heading-alt" id="results">Results</h4>
<div class="preview compact">
  <div class="usajobs-search">
    <h6 class="usa-heading-alt">Core variation</h6>
    <div class="usajobs-search-results" data-object="search-results">
      <div class="usajobs-search-result--core">
        <a href="https://www.usajobs.gov/GetJob/ViewDetails/450087700" class="usajobs-search-result--core__title" itemprop="title">
          Registered Nurse -5A Medical / Surgical unit
        </a>
        <div class="usajobs-search-result--core__body">
          <div class="usajobs-search-result--core__summary">
            <h4 class="usajobs-search-result--core__agency">
              Veterans Affairs, Veterans Health Administration
            </h4>
            <h5 class="usajobs-search-result--core__department">
              Department of Veterans Affairs
            </h5>
            <h4 class="usajobs-search-result--core__location" itemprop="addressLocality">
              <span class="usajobs-search-result--core__location-link viewmap" data-object-trigger="modal" data-target="#modal-job-map" data-coord-lat="38.89051" data-coord-long="-77.086295" itemprop="addressLocality">
                <i class="fa fa-map-marker"></i> Fremont, CA
              </span>
            </h4>
          </div>
          <div class="usajobs-search-result--core__details">
            <ul class="usajobs-search-result--core__details-list">
              <li class="usajobs-search-result--core__item">
                Starting at $47,065 (GS 9-10)
              </li>
              <li class="usajobs-search-result--core__item usajobs-search-result--core__appt-type">
                Permanent &bull; Full-time
              </li>
              <li class="usajobs-search-result--core__item open-to">
                <p class="usajobs-search-result--core__hiring-path">
                  This job is open to:
                </p>
                <span class="usajobs-search-result--core__uhp-icon public" rel="tooltip" title="This job is open to the public">
                  <i class="fa fa-users"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="usajobs-search-result--core__footer">
          <p class="usajobs-search-result--core__footer-item usajobs-search-result--core__closing-date" title="Opening and closing dates" aria-label="Opening and closing dates">
            <i class="fa fa-clock-o"></i> Open 09/09/2016 to 10/30/2016
          </p>
          <!-- p class="usajobs-search-result--core__footer-item right">
            <a href="#more" class="usajobs-search-result--core__more-jobs-like-this">
              <i class="fa fa-bullhorn"></i> More jobs like this
            </a>
          </p -->
          <p class="usajobs-search-result--core__footer-item usajobs-search-result--core__save-job">
            <a href="#save" class="usajobs-search-result--core__save-job-link" data-behavior="search-results.toggle-save" data-target=".usajobs-search-result--core__save-job-text" data-state="is-unsaved">
              <span class="usajobs-search-result--core__save-job-text">Save job</span>
            </a>
          </p>
        </div>
      </div>
      <div class="usajobs-search-result--core">
        <a href="https://www.usajobs.gov/GetJob/ViewDetails/450087700" class="usajobs-search-result--core__title" itemprop="title">
          Science and Research Director, Northwest Region
        </a>
        <div class="usajobs-search-result--core__body">
          <div class="usajobs-search-result--core__summary">
            <h4 class="usajobs-search-result--core__agency">
              National Oceanic and Atmospheric Administration
            </h4>
            <h5 class="usajobs-search-result--core__department">
              Department of Commerce
            </h5>
            <h4 class="usajobs-search-result--core__location" itemprop="addressLocality">
              <span class="usajobs-search-result--core__location-link viewmap" data-object-trigger="modal" data-target="#modal-job-map" data-name="Seattle, Washington " data-coord-lat="47.60358" data-coord-long="-122.329453" itemprop="addressLocality">
                <i class="fa fa-map-marker"></i> Seattle, Washington
              </span>
            </h4>
          </div>
          <div class="usajobs-search-result--core__details">
            <ul class="usajobs-search-result--core__details-list">
              <li class="usajobs-search-result--core__item">
                Starting at $123,175 (ES 00)
              </li>
              <li class="usajobs-search-result--core__item usajobs-search-result--core__appt-type">
                Permanent &bull; Full-time
              </li>
              <li class="usajobs-search-result--core__item open-to">
                <p class="usajobs-search-result--core__hiring-path">
                  This job is open to:
                </p>
                <span class="usajobs-search-result--core__uhp-icon federal-employees" title="This job is open to current or former federal employees" rel="tooltip">
                  <i class="fa fa-institution"></i>
                </span>
                <span class="usajobs-search-result--core__uhp-icon veterans" title="This jobs is open to veterans" rel="tooltip">
                  <i class="fa fa-shield"></i>
                </span>
                <span class="usajobs-search-result--core__uhp-icon individuals-with-disabilities" title="This job is open to individuals with disabilities" rel="tooltip">
                  <i class="fa fa-wheelchair-alt"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="usajobs-search-result--core__footer">
          <p class="usajobs-search-result--core__footer-item usajobs-search-result--core__closing-date" title="Opening and closing dates" aria-label="Opening and closing dates">
            <i class="fa fa-clock-o"></i> Open 10/24/2016 to 12/03/2016
          </p>
          <!-- p class="usajobs-search-result--core__footer-item right">
            <a href="#more" class="usajobs-search-result--core__more-jobs-like-this">
              <i class="fa fa-bullhorn"></i> More jobs like this
            </a>
          </p -->
          <p class="usajobs-search-result--core__footer-item usajobs-search-result--core__save-job">
            <a href="#save" class="usajobs-search-result--core__save-job-link" data-behavior="search-results.toggle-save" data-target=".usajobs-search-result--core__save-job-text" data-state="is-saved">
              <span class="usajobs-search-result--core__save-job-text">Saved</span>
            </a>
          </p>
        </div>
      </div>
      <div class="usajobs-search-result--core">
        <a href="https://www.usajobs.gov/GetJob/ViewDetails/390086900" class="usajobs-search-result--core__title" itemprop="title">
          Transportation Security Officer (TSO)
        </a>
        <div class="usajobs-search-result--core__body">
          <div class="usajobs-search-result--core__summary">
            <h4 class="usajobs-search-result--core__agency">
              Transportation Security Administration
            </h4>
            <h5 class="usajobs-search-result--core__department">
              Department of Homeland Security
            </h5>
            <h4 class="usajobs-search-result--core__location" itemprop="addressLocality">
              Multiple Locations
            </h4>
          </div>
          <div class="usajobs-search-result--core__details">
            <ul class="usajobs-search-result--core__details-list">
              <li class="usajobs-search-result--core__item">
                Starting at $15.37 (SV D)
              </li>
              <li class="usajobs-search-result--core__item usajobs-search-result--core__appt-type">
                Permanent &bull; Part-time
              </li>
              <li class="usajobs-search-result--core__item open-to">
                <p class="usajobs-search-result--core__hiring-path">
                  This job is open to:
                </p>
                <span class="usajobs-search-result--core__uhp-icon public" rel="tooltip" title="This job is open to the public">
                  <i class="fa fa-users"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="usajobs-search-result--core__footer">
          <p class="usajobs-search-result--core__footer-item usajobs-search-result--core__closing-date" title="Opening and closing dates" aria-label="Opening and closing dates">
            <i class="fa fa-clock-o"></i> Open 04/12/2017 to 06/30/2017
          </p>
          <a href="https://www.test.usajobs.gov/Applicant/ProfileDashboard/Home" class="usajobs-search-result--core__footer-item right application-status status-received">
            Application: Received
          </a>
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
    <h4 class="usa-heading">Requirements</h4>
    <p>The search card component MUST include the following:</p>
    <ul class="usa-content-list">
      <li>Position title
        <ul>
          <li>display position title as a link that opens the job posting (job announcement) in the same window.</li>
          <li>on click, change the link to visit link state (purple link).
            <ul>
              <li>MUST remain in this state for the entire session.</li>
              <li>MUST remain in this state even when the user signs out and signs back in.</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Agency name</li>
      <li>Department name</li>
      <li>Location</li>
      <li>Starting salary & matching starting-ending pay schedule (example: GS13-14)</li>
      <li>Appointment type (formerly known as work type)</li>
      <li>Work schedule</li>
      <li>Hiring paths icons</li>
      <li>The label/description is shown on the hover state</li>
      <li>Opening and closing period</li>
      <li>Save/saved star trigger
        <ul>
          <li>Only show to signed-in users</li>
          <li>Display as a link that will allow users to save and un-save a job posting.</li>
          <li>Follow the <a href="{{ site.baseurl }}/joa-actions/">save/saved star trigger guidelines</a>.</li>
          <li>Do NOT display the save/saved star trigger to signed-out users.</li>
        </ul>
      </li>
    </ul>
    <p>The search card component MAY include the following:</p>
    <ul class="usa-content-list">
      <li>Application status: If the user has a started or finished an application to this job then the application status should appear. The same state names and colors as appear for application status in the profile dashboard should be employed.</li>
    </ul>

    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>To represent a job announcement in a list of announcements.</li>
    </ul>
  </div>
</div>

<div class="preview compact">
  <div class="usajobs-search">
    <h6 class="usa-heading-alt">Mission Critical Occupation variation</h6>
    <div class="usajobs-search-result--card">
      <a href="https://www.usajobs.gov/GetJob/ViewDetails/435870100?PostingChannelID=RESTAPI" class="usajobs-search-result--card__body">
        <h3 class="usajobs-search-result__title" itemprop="title">
            Interdisciplinary (Ecologist/Botanist)
        </h3>
        <div class="usajobs-search-result__summary">
          <div class="usajobs-search-result__summary-body--single-col">
            <h4 class="usajobs-search-result__department">
              Department of the Interior
            </h4>
            <h5 class="usajobs-search-result__agency">
              US Fish and Wildlife Service
            </h5>
            <h4 class="usajobs-search-result__location" itemprop="addressLocality">

              <span class="usajobs-search-result__location-link viewmap" data-object-trigger="modal" data-target="#modal-job-map" data-name=" " data-coord-lat="38.89051" data-coord-long="-77.086295" itemprop="addressLocality">
                <i class="fa fa-map-marker"></i> Fremont, CA
              </span>

            </h4>
            <p class="usajobs-search-result__multi-line">
              Permanent &bull; Full Time &bull;
              Starting at $47,525 &bull; GS07 - 09
            </p>
            <p class="usajobs-search-result__closing-date">
              <i class="fa fa-clock-o is-near-closing"></i> Closes 6/3/2016
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-mco">
    Documentation
  </button>
  <div id="collapsible-mco" aria-hidden="false" class="usa-accordion-content">
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>To represent a job announcement an a Mission Critical Occupation page.</li>
      <li>THIS VARIATION IS TO BE REPLACED BY THE STANDARD CORE VARIATION ABOVE.</li>
    </ul>
  </div>
</div>

<div class="preview compact">
  <div class="usajobs-search">
    <h6 class="usa-heading-alt">Agency Talent Portal variation</h6>
    <div class="usajobs-search-result--atp__container">
      <div class="usajobs-search-result--atp">
        <a href="#user-detail" class="usajobs-search-result--atp__body">
          <h3 class="usajobs-search-result--atp__title" itemprop="title">
            Tony Stark
          </h3>
          <div class="usajobs-search-result--atp__summary">
            <div class="usajobs-search-result--atp__summary-body">
              <h4 class="usajobs-search-result--atp__agency">
                Air Force C2 & Intelligence, Surveillance & Reconnaissance
              </h4>
              <h5 class="usajobs-search-result--atp__department">
                Department of the Air Force
              </h5>
              <p class="usajobs-search-result--atp__grade">
                GS-15
              </p>
              <h4 class="usajobs-search-result--atp__location" itemprop="addressLocality">
                <span class="usajobs-search-result--atp__location-link viewmap" data-object-trigger="modal" data-target="#modal-job-map" data-name=" " data-coord-lat="40.7146" data-coord-long="-74.0071" itemprop="addressLocality">
                  <i class="fa fa-map-marker"></i> New York, NY
                </span>
              </h4>
              <p class="usajobs-search-result--atp__last-updated">
                <i class="fa fa-clock-o"></i> Last updated 10/01/2016
              </p>
            </div>
            <div class="usajobs-search-result--atp__eligibility">
              <div class="usajobs-search-result--atp__uhp-row">
                <div class="usajobs-search-result--atp__uhp">
                  <span class="usajobs-search-result--atp__uhp-icon federal-employees">
                    <i class="fa fa-institution"></i>
                  </span> Federal employee
                </div>
                <div class="usajobs-search-result--atp__doc-pill federal-employees">
                  <i class="fa fa-file"></i> SF-50
                </div>
              </div>
              <div class="usajobs-search-result--atp__uhp-row">
                <div class="usajobs-search-result--atp__uhp">
                  <span class="usajobs-search-result--atp__uhp-icon veterans">
                    <i class="fa fa-shield"></i>
                  </span> Veteran
                </div>
                <div class="usajobs-search-result--atp__doc-pill veterans">
                  <i class="fa fa-file"></i> DD-214
                </div>
              </div>
              <div class="usajobs-search-result--atp__uhp-row">
                <div class="usajobs-search-result--atp__uhp">
                  <span class="usajobs-search-result--atp__uhp-icon individuals-with-disabilities">
                    <i class="fa fa-wheelchair-alt"></i>
                  </span> Individuals with disabilities
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="usajobs-search-result--atp">
        <a href="#user-detail" class="usajobs-search-result--atp__body">
          <h3 class="usajobs-search-result--atp__title" itemprop="title">
            Steve Rogers
          </h3>
          <div class="usajobs-search-result--atp__summary">
            <div class="usajobs-search-result--atp__summary-body">
              <h4 class="usajobs-search-result--atp__agency">
                  U.S. Army Intelligence and Security Command
              </h4>
              <h5 class="usajobs-search-result--atp__department">
                Department of the Army
              </h5>
              <p class="usajobs-search-result--atp__grade">
                GS-15
              </p>
              <h4 class="usajobs-search-result--atp__location" itemprop="addressLocality">
                <span class="usajobs-search-result--atp__location-link viewmap" data-object-trigger="modal" data-target="#modal-job-map" data-name=" " data-coord-lat="40.7146" data-coord-long="-74.0071" itemprop="addressLocality">
                  <i class="fa fa-map-marker"></i> New York, NY
                </span>
              </h4>
              <p class="usajobs-search-result--atp__last-updated">
                <i class="fa fa-clock-o"></i> Last updated 10/01/2016
              </p>
            </div>
            <div class="usajobs-search-result--atp__eligibility">
              <div class="usajobs-search-result--atp__uhp-row">
                <div class="usajobs-search-result--atp__uhp">
                  <span class="usajobs-search-result--atp__uhp-icon federal-employees">
                    <i class="fa fa-institution"></i>
                  </span> Federal employee
                </div>
                <div class="usajobs-search-result--atp__doc-pill federal-employees">
                  <i class="fa fa-file"></i> SF-50
                </div>
              </div>
              <div class="usajobs-search-result--atp__uhp-row">
                <div class="usajobs-search-result--atp__uhp">
                  <span class="usajobs-search-result--atp__uhp-icon veterans">
                    <i class="fa fa-shield"></i>
                  </span> Veteran
                </div>
                <div class="usajobs-search-result--atp__doc-pill veterans">
                  <i class="fa fa-file"></i> DD-214
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-mco">
    Documentation
  </button>
  <div id="collapsible-mco" aria-hidden="false" class="usa-accordion-content">
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>To represent a job announcement in the recruitment tool.</li>
    </ul>
  </div>
</div>

<h4 class="usa-heading-alt" id="teasers">Teasers</h4>
<div class="preview compact">
  <h6 class="usa-heading-alt">Data Science variation</h6>
  <div class="usajobs-search">
    <div class="usajobs-search-results" data-object="search-results">
      <div class="usajobs-search-teaser usajobs-search-teaser--data-science" itemscope itemtype="http://schema.org/WebSite">
        <div class="usajobs-search-teaser__body">
          <h3 class="usajobs-search-teaser__title" itemprop="name">Explore a career in data science.</h3>
          <a href="https://www.usajobs.gov/careerfields/data-science/" class="usa-button usa-button-outline-inverse usajobs-search-teaser__link" itemprop="url" target="_blank">
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div>
  <h6 class="usa-heading-alt">Cyber Security variation</h6>
  <div class="usajobs-search">
    <div class="usajobs-search-results" data-object="search-results">
      <div class="usajobs-search-teaser usajobs-search-teaser--cyber-security" itemscope itemtype="http://schema.org/WebSite">
        <div class="usajobs-search-teaser__body">
          <h3 class="usajobs-search-teaser__title" itemprop="name">Explore a career in cyber security.</h3>
          <a href="https://www.cybercareers.gov/" class="usa-button usa-button-outline-inverse usajobs-search-teaser__link" itemprop="url" target="_blank">
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div>
  <h6 class="usa-heading-alt">Privacy variation</h6>
  <div class="usajobs-search">
    <div class="usajobs-search-results" data-object="search-results">
      <div class="usajobs-search-teaser usajobs-search-teaser--privacy" itemscope itemtype="http://schema.org/WebSite">
        <div class="usajobs-search-teaser__body">
          <h3 class="usajobs-search-teaser__title usajobs-search-teaser--privacy__title" itemprop="name">Help protect privacy rights</h3>
          <p class="usajobs-search-teaser__desc">
            The Federal Privacy Council is looking for privacy professionals interested in the growing use of technology, big data and analytics.
          </p>
          <a href="https://www.fpc.gov/" class="usa-button usa-button-primary usajobs-search-teaser__link" itemprop="url" target="_blank">
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div>
  <h6 class="usa-heading-alt">Event variation</h6>
  <div class="usajobs-search">
    <div class="usajobs-search-result--core">
      {% assign event = site.data.events['va'] %}
      {% include components/event/v1.0/event.html %}
    </div>
  </div>
</div>
<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-mco">
    Documentation
  </button>
  <div id="collapsible-mco" aria-hidden="false" class="usa-accordion-content">
    <h5>Guidelines</h5>
    <ul class="usa-content-list">
      <li>The teaser, when it appears, should appear between the 5th and 6th job result. Ideally it would be loaded via an asynchronous request after results are displayed so that it does not negatively impact search performance.</li>
      <li>Only one teaser should be shown in one set of search results. Currently there is overlap in triggering keywords thus a round robin mechanism should be deployed to rotate between the overlapping teasers. There is also the possibility of overlap in the use of filters. In this case the keyword trigger should win out.</li>
      <li>Links that leave the usajobs.gov domain should open in a new tab.</li>
    </ul>

    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Each teaser appears in search results IF and only if they are relevant to the search. Relevance is defined by keyword for these variants excluding the Event variation which is dependent upon location and/or hiring path.</li>
      <li><strong>Events:</strong>
        <ol>
          <li>Location: A matching event should appear when the location entered into the Location search field and selected from autocomplete matches the location of the event.</li>
          <li>Future enhancement - Hiring path: A matching event should appear when the hiring path filter selected matches one or more of the hiring paths attached to an event.</li>
        </ol>
      </li>
    </ul>

    <h5>When teasers appear</h5>
    <ul class="usa-content-list">
      <li>Teasers should appear as long as the criteria below are met. Their appearance is not based on a session given that these are not currently popular queries.</li>
      <li>Keywords: When the user enters this string into the keyword field the appropriate teaser should appear in their search results.</li>
      <li>Occupations: When the user enters this string into the keyword field AND selects the matching occupation from autocomplete the appropriate teaser should appear in their search results.</li>
      <li>Department/Agency: When the user enters this string into the keyword field AND selects the matching department or agency from autocomplete the appropriate teaser should appear in their search results.</li>
    </ul>
    <div class="usajobs-grid">
      <div class="usa-width-one-half">
        <h6>Data Science: Keywords</h6>
        <ol class="usa-content-list">
          <li>data</li>
          <li>dmat</li>
        </ol>
      </div>
      <div class="usa-width-one-half">
        <h6>Data Science: Occupations</h6>
        <ol class="usa-content-list">
          <li>Bioinformatics Scientists</li>
          <li>Bioinformatics Technicians</li>
          <li>Business Intelligence Specialist</li>
          <li>Chief Data Officer</li>
          <li>Computer and Information Research Scientists</li>
          <li>Data Analyst</li>
          <li>Data Engineer</li>
          <li>Economic Research Analyst</li>
          <li>Enterprise Data Manager</li>
          <li>Health Insurance Analyst</li>
          <li>IT Specialist</li>
          <li>Management and Program Analyst </li>
          <li>Mathematical Analyst</li>
          <li>Operations Research Analyst</li>
          <li>Policy Advisor</li>
          <li>Procurement Analyst</li>
          <li>Public Health Analyst</li>
          <li>Research Analyst</li>
          <li>Social Science Analyst</li>
        </ol>
        <h6>Data Science: Departments &amp; Agencies</h6>
        <ol class="usa-content-list">
          <li>Department of Homeland Security (DHS)</li>
          <li>National Security Agency (NSA)</li>
        </ol>
      </div>
    </div>
    <br />
    <div class="usajobs-grid">
      <div class="usa-width-one-half">
        <h6>Cyber Security: Keywords</h6>
        <ol class="usa-content-list">
          <li>Chief Operating Officer</li>
          <li>cyber</li>
          <li>Deputy Chief Information Security Officer</li>
          <li>federal protective service</li>
          <li>Foreign Service Office Management Specialist</li>
          <li>Forensic Computer Analyst</li>
          <li>fps</li>
          <li>homeland</li>
          <li>informatics</li>
          <li>information</li>
          <li>infosec</li>
          <li>it</li>
          <li>Performance Analyst</li>
          <li>Policy Brand Chief</li>
          <li>security</li>
          <li>Supervisory Management And Program Analyst</li>
          <li>technology</li>
          <li>Telecommunications Specialist</li>
        </ol>
      </div>
      <div class="usa-width-one-half">
        <h6>Cyber Security: Occupations</h6>
        <ol class="usa-content-list">
          <li>Computer Network Support Specialists</li>
          <li>Computer and Information Systems Manager</li>
          <li>Computer Systems Analysts</li>
          <li>Criminal Investigators and Special Agents</li>
          <li>Information Security Analysts</li>
          <li>Network and Computer Systems Administrators</li>
          <li>Police Detectives</li>
          <li>Police Identification and Records Officers</li>
          <li>Security Management Specialists</li>
        </ol>
        <h6>Cyber Security: Departments &amp; Agencies</h6>
        <ol class="usa-content-list">
          <li>Department of Homeland Security (DHS)</li>
          <li>National Security Agency (NSA)</li>
        </ol>
      </div>
    </div>
    <br />
    <div class="usajobs-grid">
      <div class="usa-width-one-half">
        <h6>Privacy: Keywords</h6>
        <ol class="usa-content-list">
          <li>administrative law judge</li>
          <li>ASSISTANT COUNSEL</li>
          <li>Associate Chief Information Officer</li>
          <li>attorney</li>
          <li>CH OF CYBER & ENTERPRISE OPS</li>
          <li>claims</li>
          <li>counsel</li>
          <li>cyber</li>
          <li>data privacy</li>
          <li>Deputy Chief Information Officer</li>
          <li>foia</li>
          <li>health insurance specialist</li>
          <li>informatics</li>
          <li>information</li>
          <li>infosec</li>
          <li>inspector</li>
          <li>it specialist</li>
          <li>j.d.</li>
          <li>judge</li>
          <li>law</li>
          <li>oig</li>
          <li>physical security</li>
          <li>privacy</li>
          <li>security</li>
          <li>social insurance specialist</li>
          <li>Supervisory IT Specialist (PLCYPLN)</li>
          <li>SUPV IT SPECIALIST (NETWORK/CUSTSPT)</li>
        </ol>
      </div>
      <div class="usa-width-one-half">
        <h6>Privacy: Departments &amp; Agencies</h6>
        <ol class="usa-content-list">
          <li>National Security Agency (NSA)</li>
        </ol>
      </div>
    </div>
  </div>
</div>
