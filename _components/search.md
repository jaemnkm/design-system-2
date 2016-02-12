---
layout: styleguide
type: component
title: Search
lead: A main function of USAJOBS is to provide a clear and effective search. Our search interface is comprised of serveral components including controls, filters, pagination, and results.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity incomplete">
  Incomplete
</a>

<h6 class="usa-heading-alt" id="controls">Controls</h6>
<div class="preview">
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
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
    </ul>
    <h5>Do not use when</h5>
    <ul class="usa-content-list">
    </ul>
  </div>
</div>

<h6 class="usa-heading-alt" id="pagination">Pagination</h6>
<div class="preview compact">
  <ul class="usajobs-search-pagination">
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
    <li class="usajobs-search-pagination__page">
      <a data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=6&amp;statusFilter=public" title="Go To Page 6">6</a>
    </li>
    <li class="usajobs-search-pagination__page">
      <a data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=7&amp;statusFilter=public" title="Go To Page 7">7</a>
    </li>
    <li class="usajobs-search-pagination__page">
      <a data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=8&amp;statusFilter=public" title="Go To Page 8">8</a>
    </li>
    <li class="usajobs-search-pagination__next-page-container">
      <a class="usajobs-search-pagination__next-page" data-ajax="true" data-ajax-begin="ajaxLoading" data-ajax-complete="UpdatePartialViewsNew" data-ajax-failure="ajaxFailed" data-ajax-mode="replace" data-ajax-success="ajaxComplete" data-ajax-update="#results" href="/Search/GetPageResults/?page=2&amp;statusFilter=public" title="Go To Next Page">
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
    <h4 class="usa-heading">Implementation</h4>
    <ul class="usa-content-list">
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
    </ul>
    <h5>Do not use when</h5>
    <ul class="usa-content-list">
    </ul>
  </div>
</div>


