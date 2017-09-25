---
layout: styleguide
type: component
title: Event
lead: Summarizes event details.
event: 'navy'
---

{% assign event = site.data.events[page.event] %}

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design complete
</a>

<div class="preview">
  {% include components/event/v1.0/event.html %}
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-0">
    Documentation
  </button>
  <div id="doc-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Guidelines</h4>
    <ul class="usa-content-list">
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>
        Used on the landing page within a container to highlight events.
      </li>
      <li>
        To be used within search results for queries that include a location and/or hiring path in order to highlight relevant events.
      </li>
    </ul>
  </div>
</div>
