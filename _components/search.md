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
      <p>Found 1,562 job annoucements</p>
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
        <option value="PositionTitle">Job Title</option>
        <option value="RemunerationMinimumAmount">Salary Minimum</option>
        <option value="RemunerationMaximumAmount">Salary Maximum</option>
      </select>
    </div>
  </div>

  <h6 class="usa-heading-alt">No results found</h6>
  <div class="usajobs-grid usajobs-search-controls">
    <div class="usajobs-search-controls__results-count">
      <p>Sorry, no job announcements were found.</p>
      <h4>Search Suggestions</h4>
      <ul>
        <li>Check your spelling.</li>
        <li>Try using more general <a href="https://help.usajobs.gov/index.php/Keyword_Tips">keywords</a>.</li>
        <li>For a more specific search try applying <a href="https://www.usajobs.gov/Search/AdvancedSearch">advanced search filters</a>.</li>
        <li>For guidance on our job categories and occupation titles please visit <a href="https://help.usajobs.gov/index.php/What_occupations_are_available_in_the_federal_government">Federal government occupation titles</a>. We may just be using a different name or description for the job you are looking for.</li>

      </ul>
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
    <li class="usajobs-search-pagination__page">
      <a data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=3&amp;statusFilter=public" title="Go To Page 3">3</a>
    </li>
    <li class="usajobs-search-pagination__page">
      <a data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=4&amp;statusFilter=public" title="Go To Page 4">4</a>
    </li>
    <li class="usajobs-search-pagination__page">
      <a data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=5&amp;statusFilter=public" title="Go To Page 5">5</a>
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
      <a data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=3&amp;statusFilter=public" title="Go To Page 3">3</a>
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
    <li class="usajobs-search-pagination__page">
      <a data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=7&amp;statusFilter=public" title="Go To Page 7">7</a>
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
      <a data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=58&amp;statusFilter=public" title="Go To Page 58">58</a>
    </li>
    <li class="usajobs-search-pagination__page">
      <a data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=59&amp;statusFilter=public" title="Go To Page 59">59</a>
    </li>
    <li class="usajobs-search-pagination__page">
      <a data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=60&amp;statusFilter=public" title="Go To Page 60">60</a>
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
      <li>Below the ML breakpoint the pagination is represented by the next and/or previous buttons.</li>
      <li>Above the ML breakpoint the current page number is displayed with +/- 2 pages to either side excluding the first or last 4 pages.</li> 
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


