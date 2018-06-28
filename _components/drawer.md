---
layout: styleguide
type: component
title: Drawer
lead: A component that extends the standard multi-selectable accordion with distinct visual styling to handle a drawer face and larger, more complex drawer contents.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design complete
</a>

<h4 class="usa-heading-alt" id="drawer-v1">Drawer (v1)</h4>
<div class="preview compact" id="code-1">
  <ul class="usa-accordion-bordered usajobs-drawers" aria-multiselectable="true">
    <li class="usajobs-drawer">
      <button class="usa-accordion-button usajobs-drawer-button" aria-expanded="true" aria-controls="b-a1">
        Doctorate Degree
      </button>
      <dl class="usajobs-drawer-face">
        <dt>Tufts University</dt>
        <dd>May 2018</dd>
      </dl>
      <div id="b-a1" class="usa-accordion-content usajobs-drawer-content">
        <div class="usajobs-grid">
          <div class="usajobs-width-one-half">
            <ul class="usajobs-drawer-content__list">
              <li class="usajobs-drawer-content__item">
                <h5 class="usajobs-drawer-content__item-label">
                  City or Town
                </h5>
                <p>
                  Medford
                </p>
              </li>
              <li class="usajobs-drawer-content__item">
                <h5 class="usajobs-drawer-content__item-label">
                  Postal code
                </h5>
                <p>
                  02155
                </p>
              </li>
            </ul>
          </div>
          <div class="usajobs-width-one-half">
            <ul class="usajobs-drawer-content__list">
              <li class="usajobs-drawer-content__item">
                <h5 class="usajobs-drawer-content__item-label">
                  State, Territory, or Province
                </h5>
                <p>
                  Massachusetts
                </p>
              </li>
              <li class="usajobs-drawer-content__item">
                <h5 class="usajobs-drawer-content__item-label">
                  Country
                </h5>
                <p>
                  United States
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="usajobs-grid">
          <div class="usajobs-width-one-whole">
            <h5 class="usajobs-drawer-content__item-label">
              Relevant coursework, licensures, and certifications
            </h5>
            <p class="usajobs-drawer-content__item-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi arcu libero, tristique in rhoncus a, facilisis nec orci. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ornare pellentesque ex ac scelerisque.
            </p>
          </div>
        </div>
        <div class="usajobs-button-bar--split">
          <div class="usajobs-button-bar__body">
            <a id="btn-delete" class="usajobs-button-bar__delete" href="#open-modal">Delete</a>
            <button id="btn-edit-education" class="usa-button usajobs-button-bar__edit">Edit</button>
          </div>
        </div>
      </div>
    </li>
    <li class="usajobs-drawer">
      <button class="usa-accordion-button usajobs-drawer-button" aria-expanded="false" aria-controls="b-a2">
        Master's Degree
      </button>
      <dl class="usajobs-drawer-face">
        <dt>University of Michigan</dt>
        <dd>June 2014</dd>
      </dl>
      <div id="b-a2" class="usa-accordion-content usajobs-drawer-content">
        <ul class="usajobs-drawer-content__list">
          <li class="usajobs-drawer-content__item">
            <h5 class="usajobs-drawer-content__item-label">
              City or Town
            </h5>
            <p>
              Ann Arbor
            </p>
          </li>
        </ul>
      </div>
    </li>
    <li class="usajobs-drawer">
      <button class="usa-accordion-button usajobs-drawer-button" aria-expanded="false" aria-controls="b-a3">
        Bachelor's Degree
      </button>
      <dl class="usajobs-drawer-face">
        <dt>University of Maryland</dt>
        <dd>June 2006</dd>
      </dl>
      <div id="b-a3" class="usa-accordion-content usajobs-drawer-content">
        <ul class="usajobs-drawer-content__list">
          <li class="usajobs-drawer-content__item">
            <h5 class="usajobs-drawer-content__item-label">
              City or Town
            </h5>
            <p>
              College Park
            </p>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-1">
    Documentation
  </button>
  <div id="doc-1" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Usability</h4>
    <ul class="usa-content-list">
      <li><strong>Affordance</strong>: The drawer trigger needs to have sufficient affordance. That is achieved by the combination of the drawer handle (plus/minus button) and the drawer title (primary blue to match links) in close proximity to one another (same line) in a list of similar items (other drawers). This combination of elements should be retained otherwise the drawer may lack the affordance for users to know that this component will reveal additional content.</li>
      <li><strong>Title</strong>: The title of the drawer in a list is often a title of the object it describes. Titles and names can be long thus in a drawer, as in a card, they span the full width of the component. Titles should be truncated coming out of the database rather than inserted into the component and allowed to line wrap. Because titles can wrap due to their length they should not be underlined.</li>
      <li><strong>Shadow</strong>: The drawer content has an inset shadow to strengthen the relationship between the drawer button plus face and the drawer contents.</li>
    </ul>

    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>This variation of drawers can be used when you want to list content where more context may be needed to differentiate the items in a list. In other words, if the user may need to see some details about the object being described in order to discern one from the other in a list. Examples include job applications and elements of a user's profile (education, experience, languages, references, etc.)</li>
    </ul>

    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
      <li>Avoid drawers when the details are vast. For example, we specifically did not employ this pattern in search results where the details of a job are too numerous to include within a drawer. It's less about number of items revealed and more about the length of the content within the drawer. If the drawer contents could be in their own view/page then perhaps a list of links would be preferred.</li>
    </ul>
  </div>
</div>

{% include icons/jtbd.svg %}
<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity under_review">
  Under review
</a>
<h4 class="usa-heading-alt" id="drawer-with-icon">Drawer with alt handle and icon</h4>
<div class="preview compact" id="code-2">
  <ul class="usa-accordion usajobs-drawers">
    <li class="usajobs-drawer">
      <button class="usa-accordion-button usajobs-drawer-button usajobs-drawer-button--with-icon usajobs-drawer-button--alt-handle has-no-face" aria-expanded="true" aria-controls="apply">
        <div class="usajobs-drawer-button--with-icon__figure">
          <svg class="usajobs-icon">
            <use xlink:href="#apply-to-a-job-ive-already-found"></use>
          </svg>
        </div>
        <div class="usajobs-drawer-button--with-icon__button-text">
          Apply to a job I've already found
        </div>
      </button>
      <div id="apply" class="usa-accordion-content usajobs-drawer-content">
        <h4>Did you know you can save up to 25 jobs?</h4>
        <p>
          You can also sign up to get an email when a saved job is about to close.
        </p>
        <p>
          <a href="https://www.usajobs.gov/Applicant/ProfileDashboard/Home/?c=saved-job" class="usa-button">
            See your saved jobs
          </a>
        </p>
        <p>
          <a href="https://www.usajobs.gov/Help/how-to/job-announcement/save/">
            More on how to save a job
          </a>
        </p>
      </div>
    </li>
    <li class="usajobs-drawer">
      <button class="usa-accordion-button usajobs-drawer-button usajobs-drawer-button--with-icon usajobs-drawer-button--alt-handle has-no-face" aria-expanded="false" aria-controls="finish">
        <div class="usajobs-drawer-button--with-icon__figure">
          <svg class="usajobs-icon">
            <use xlink:href="#profile"></use>
          </svg>
        </div>
        <div class="usajobs-drawer-button--with-icon__button-text">
          Finish my profile &amp; make it searchable so agencies can find me
        </div>
      </button>
      <div id="finish" class="usa-accordion-content usajobs-drawer-content">
        <p>
          If you make your resume searchable, your profile is automatically searchable too.
        </p>
        <h4>Why should you do this?</h4>
        <p>
          Recruiters can search your profile and resume to match your work preferences and background with the jobs they're looking to fill.
        </p>
        <p>
          <a href="https://www.usajobs.gov/Help/faq/search/profile/">
            Learn more about how we use your profile information.
          </a>
        </p>
        <p>
          <a href="https://www.usajobs.gov/Help/how-to/account/documents/resume/searchable/">
            Learn how to make your resume searchable
          </a>
        </p>
      </div>
    </li>
  </ul>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="doc-2">
    Documentation
  </button>
  <div id="doc-2" aria-hidden="false" class="usa-accordion-content">
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>This variation of drawers can be used when you have clear actions supported by iconography.</li>
    </ul>
  </div>
</div>
