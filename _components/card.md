---
layout: styleguide
type: component
title: Card
lead: A sub-component used in many components in the system, the card is a useful metaphor that supports the grouping of information.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design complete
</a>

<h4 class="usa-heading-alt" id="results">Card - Large (v4)</h4>
<div class="preview compact" id="code-1">
  <div class="usajobs-card--large">
    <h2 class="usajobs-card--large__header">Card title</h2>
    <div class="usajobs-card--large__body">
      The body of the card
    </div>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-3">
    Documentation
  </button>
  <div id="doc-3" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Requirements</h4>
    <ul class="usa-content-list">
      <li><strong>Spacing</strong>: A card always includes at least the default size (15px) of padding. Margin can be overrode as necessary to allow cards to fill the viewport on smaller hand-held devices.</li>
      <li><strong>Title</strong>: The title of the card in a list is often a title of the object it describes. Titles and names can be long thus in a card they span the full width of the card.</li>
      <li><strong>Shadow</strong>: Cards always have some box-shadow applied to give the appearance of depth excluding when they are presented in a list of 10 or more where the shadow creates a radiating pattern (see list variation below). The card above is at level 1. Levels can be increased up to level 5 to give greater depth and separation but should only be done so sparingly. Level 1 is the default.</li>
    </ul>

    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>The uses of cards are too numerous to mention.</li>
    </ul>

    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
      <li>Avoid cards for long content. If the focus is reading the content then the card will likely just get in the way and be visual noise.</li>
    </ul>
  </div>
</div>

<h4 class="usa-heading-alt" id="results">Card - List (v3)</h4>
<div class="preview compact" id="code-2">
  <div class="usajobs-card">
    <a href="#card" class="usajobs-card__title" itemprop="title">First item</a>
    <div class="usajobs-card__body">
      <div class="usajobs-card__summary">
        <h4>Summary</h4>
      </div>
      <div class="usajobs-card__details">
        <ul class="usajobs-card__details-list">
          <li class="usajobs-card__item">
            Detailed list item 1
          </li>
          <li class="usajobs-card__item">
            Detailed list item 2
          </li>
          <li class="usajobs-card__item">
            Detailed list item 3
          </li>
        </ul>
      </div>
    </div>
    <div class="usajobs-card__footer">
      <p class="usajobs-card__footer-item">Footer item</p>
    </div>
  </div>
  <div class="usajobs-card">
    <a href="#card" class="usajobs-card__title" itemprop="title">Second item</a>
    <div class="usajobs-card__body">
      <div class="usajobs-card__summary">
        <h4>Summary</h4>
      </div>
      <div class="usajobs-card__details">
        <ul class="usajobs-card__details-list">
          <li class="usajobs-card__item">
            Detailed list item 1
          </li>
          <li class="usajobs-card__item">
            Detailed list item 2
          </li>
          <li class="usajobs-card__item">
            Detailed list item 3
          </li>
        </ul>
      </div>
    </div>
    <div class="usajobs-card__footer">
      <p class="usajobs-card__footer-item">Footer item</p>
    </div>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-3">
    Documentation
  </button>
  <div id="doc-3" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Requirements</h4>
    <ul class="usa-content-list">
      <li>All of the aforementioned card requirements from the Card - Large variation excluding the box shadow. Box shadow on cards that are in a list of 10 or more creates a radiating visual pattern that is distracting and thus should be avoided. It also takes up space that isn't appropriate in a long list.</li>
    </ul>

    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>In a list context where many cards will be right next to one another.</li>
    </ul>
  </div>
</div>
