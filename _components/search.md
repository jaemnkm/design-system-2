---
layout: styleguide
type: component
title: Search
lead: A main function of USAJOBS is to provide a clear and effective search. Our search interface is comprised of serveral components including controls, filters, pagination, and results.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity under_review">
  Under Review
</a>

<h4 class="usa-heading-alt" id="controls">Controls</h4>
<div class="preview">
  <h6 class="usa-heading-alt">Results found</h6>
  <div class="usajobs-grid usajobs-search-controls">
    <div class="usajobs-search-controls__results-count">
      <h3>1,562 jobs found</h3>
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
  <div class="usajobs-search-no-results">
    <p>Sorry, no job announcements were found.</p>
    <h4>Search Suggestions</h4>
    <ul>
      <li>Check your spelling.</li>
      <li>Try using more general <a href="http://usajobs.github.io/help-center/how-to/search/advanced/keyword/">keywords</a>.</li>
      <li>For a more specific search try applying <a href="https://www.usajobs.gov/Search/AdvancedSearch">advanced search filters</a>.</li>
      <li>For guidance on our job categories and occupation titles please visit <a href="http://usajobs.github.io/help-center/how-to/search/advanced/occupational-series/">Federal government occupation titles</a>. We may just be using a different name or description for the job you are looking for.</li>
    </ul>
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
      <li>Use the Profile eligibility filter variation when the user unselects all checkboxes and thus has choosen to view no open jobs.</li>
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
      <a data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=62&amp;statusFilter=public" title="Go To Page 62">62</a>
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
              <li class="usajobs-search-result--core__item">
                Permanent
              </li>
              <li class="usajobs-search-result--core__item open-to">
                <span class="usajobs-search-result--core__uhp-icon public" title="This job is open to the public">
                  <i class="fa fa-users"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="usajobs-search-result--core__footer">
          <p class="usajobs-search-result--core__footer-item usajobs-search-result--core__closing-date" title="Opening and closing dates" aria-label="Opening and closing dates">
            <i class="fa fa-clock-o"></i> 9/9/2016 - 9/30/2016
          </p>
          <!-- p class="usajobs-search-result--core__footer-item right">
            <a href="#more" class="usajobs-search-result--core__more-jobs-like-this">
              <i class="fa fa-bullhorn"></i> More jobs like this
            </a>
          </p -->
          <p class="usajobs-search-result--core__footer-item usajobs-search-result--core__save-job">
            <a href="#save" class="usajobs-search-result--core__save-job-link" data-behavior="search-results.toggle-save" data-target=".usajobs-search-result--core__save-job-text" data-state="is-unsaved">
              <span class="usajobs-search-result--core__save-job-text">Save</span>
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
              <li class="usajobs-search-result--core__item">
                Permanent
              </li>
              <li class="usajobs-search-result--core__item open-to">
                <!-- p class="usajobs-search-result--core__hiring-path">
                  This job is open to:
                </p -->
                <span class="usajobs-search-result--core__uhp-icon federal-employees" title="This job is open to current or former federal employees">
                  <i class="fa fa-institution"></i>
                </span>
                <span class="usajobs-search-result--core__uhp-icon veterans" title="This jobs is open to veterans">
                  <i class="fa fa-shield"></i>
                </span>
                <span class="usajobs-search-result--core__uhp-icon individuals-with-disabilities" title="This job is open to individuals with disabilities">
                  <i class="fa fa-wheelchair-alt"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="usajobs-search-result--core__footer">
          <p class="usajobs-search-result--core__footer-item usajobs-search-result--core__closing-date" title="Opening and closing dates" aria-label="Opening and closing dates">
            <i class="fa fa-clock-o"></i> 8/24/2016 - 10/03/2016
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
    </div>

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
