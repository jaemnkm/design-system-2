---
layout: styleguide
type: component
title: Reveal
lead: Component for revealing more content.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity under_review">
  Under Review
</a>

<div class="preview">
  <h6 class="usa-heading-alt">Show next</h6>
  <div class="usajobs-show-next" data-object="reveal">
    <a href="#next" class="usa-button usa-button-outline usajobs-show-next__trigger" aria-expanded="false" aria-controls="next-content-1" data-behavior="reveal.show-next">
      Show next
    </a>
    <div id="next-content-1" aria-hidden="true" class="usa-accordion-content">
      <ul class="usa-content-list">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>
        <li>Six</li>
        <li>Seven</li>
        <li>Eight</li>
        <li>Nine</li>
        <li>Ten</li>
      </ul>
      <a href="#next" class="usa-button usa-button-outline usajobs-show-next__trigger" aria-expanded="false" aria-controls="next-content-2" data-behavior="reveal.show-next">
        Show next
      </a>
    </div>
    <div id="next-content-2" aria-hidden="true" class="usa-accordion-content">
      <ul class="usa-content-list">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </ul>
    </div>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-0">
    Documentation
  </button>
  <div id="doc-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use this pattern to show the next N in a list where N is 10 to 25 items in a list. This is a simplistic pagination pattern.</li>
    </ul>

    <h5>When to use something else</h5>
    <ul class="usa-content-list">
      <li>Do not use this pattern for more rigorous pagination needs such as <a href="{{ site.baseurl }}/search/#pagination">search results</a>.</li>
    </ul>

    <h5>Implementation</h5>
    <ul class="usa-content-list">
      <li>The trigger button should be pushed down by page by the content it reveals.</li>
      <li>If there are not N more items to show, where N is 10 or 25, then the trigger button does not appear as there are no more items to reveal.</li>
      <li>The browser should scroll down to the first item in the list.</li>
    </ul>
  </div>
</div>

<div class="preview">
  <h6 class="usa-heading-alt">Show more/Show less</h6>
  <div class="usajobs-show-more" data-object="reveal">
    <a href="#more-less" class="usa-button usa-button-outline usajobs-show-more__trigger" aria-expanded="false" aria-controls="more-applications" data-behavior="reveal.show-toggle">
      Show <span data-toggle-text="Less">More</span>
    </a>
    <div id="more-applications" aria-hidden="true" class="usa-accordion-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-1">
    Documentation
  </button>
  <div id="doc-1" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use this pattern to allow the visibility of the content to be toggled.</li>
    </ul>

    <h5>Implementation</h5>
    <ul class="usa-content-list">
      <li>The browser should scroll down to the first item in the list.</li>
    </ul>
  </div>
</div>

<div class="preview">
  <h6 class="usa-heading-alt">Read more/close with faded text</h6>
  <div class="usajobs-read-more" data-object="reveal-more">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
      More Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-2">
    Documentation
  </button>
  <div id="doc-2" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use this pattern to show some of the content and indicate to the user that there is more content to be revealed.</li>
    </ul>

    <h5>Implementation</h5>
    <ul class="usa-content-list">
      <li>Depends upon <a href="http://jedfoster.com/Readmore.js/">Readmore.js</a>.</li>
    </ul>
  </div>
</div>
