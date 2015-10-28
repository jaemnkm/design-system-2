---
layout: shell
title: Shell
lead:  The outer container of the grid along with common page layouts.
---

<div class="usajobs-grid">
  <div class="usajobs-width-one-whole">
    <h2 class="usa-heading">1 main content well with 1 right rail</h2>
  </div>
</div>

<div class="usajobs-grid usajobs-grid-example usajobs-grid-example-blank">
  <div class="usajobs-width-one-whole">
    <div class="usa-grid-example usa-grid-example-blank">
      <h3>Navigation</h3>
    </div>
  </div>
  <section class="usajobs-content-well">
    <div class="usa-grid-example usa-grid-example-blank">
      <h3>Main content well</h3>
      <p>
        <strong>Content well continued</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </section>
  <aside class="usajobs-rightrail">
    <div class="usa-grid-example usa-grid-example-blank">
      <h3>Right Rail</h3>
      <ul>
        <li><strong>Right Rail list</strong></li>
        <li>A list</li>
        <li>of stuff</li>
        <li>over here</li>
        <li>in the right rail.</li>
      </ul>
    </div>
  </aside>
</div>

<div class="usajobs-grid">
  <div class="usajobs-width-one-whole">
    <div class="usa-accordion-bordered usa-accordion-docs">
      <button class="usa-button-unstyled usa-accordion-button"
          aria-expanded="true" aria-controls="collapsible-0">
        Documentation
      </button>
      <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
        <h4 class="usa-heading">Implementation</h4>
        <ul class="usa-content-list">
          <li>The <code>.usajobs-shell</code> element is a container that acts as the shell of the page, locking the page content at a particular width.</li>
          <li>The page shell locks at 1200px/75em wide.</li>
          <li>The page gutter size is 1.5rem/15px below the ML breakpoint (768px) and grows to 3rem(30px from that breakpoint on.</li>
          <li>The <code>.usajobs-grid</code> should be used within the page shell.</li>
        </ul>
      </div>
    </div>
  </div>
</div>
