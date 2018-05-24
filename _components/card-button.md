---
layout: styleguide
type: component
title: Card button
lead: A component used in forms to augment the tap/clickable area of checkboxes and radio buttons.
---

{% assign hiring-paths = site.data.hiring-paths.v5 %}
{% include icons/hiring-paths.svg %}

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design complete
</a>

<h4 class="usa-heading-alt" id="results">Card Button -- Slim (v1)</h4>
<div class="preview" id="code-1">
  <ul class="usajobs-card-buttons">
      {% for path in hiring-paths %}
      {%   assign path_name = path[0] %}
      {%   assign section = hiring-paths[path_name] %}
      {%  assign id = forloop.index0 %}
    <li class="usajobs-card-button--slim">
      <input type="checkbox" value="{{ id }}" name="hiring_paths[]" id="hiring_path_ids_{{ id }}">
      <label for="hiring_path_ids_{{ id }}">
        <div class="usajobs-unique-hiring-paths__icon">
          <svg class="usajobs-icon--hiring-path">
            <use xlink:href="#{{ section.icon }}"></use>
          </svg>
        </div>
        {{ section.title }}
        <span class="usajobs-card-button__sub-text usajobs-card-button--slim__sub-text-with-icon">
          {{ section.subtext }}
        </span>
      </label>
    </li>
    {% endfor %}
  </ul>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-3">
    Documentation
  </button>
  <div id="doc-3" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Requirements</h4>
    <ul class="usa-content-list">
    </ul>

    <h5>When to use</h5>
    <ul class="usa-content-list">
    </ul>

    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
    </ul>
  </div>
</div>
