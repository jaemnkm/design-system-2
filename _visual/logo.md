---
layout: styleguide
title: Logo
order: 03
lead: USAJOBS has an updated logo as part of the next generation redesign of the site.
---

<a href="{{ site.baseurl }}/getting-started/#maturity" class="usa-label maturity design_complete">
  Design Complete
</a>

<h3 class="usa-heading">USAJOBS Logo - PNG</h3>
<div class="preview" id="logo-png">
  <h6 class="usa-heading-alt">Red</h6>
  <img src="../img/logo/png/red-2x.png" />

  <h6 class="usa-heading-alt">Black</h6>
  <img src="../img/logo/png/black-2x.png" />

  <h6 class="usa-heading-alt">White</h6>
  <div class="usa-color-text usa-color-primary-darkest">
    <img src="../img/logo/png/white-2x.png" />
  </div>
</div>

<h3 class="usa-heading">USAJOBS Logo - SVG</h3>
<div class="preview" id="logo-svg">
  <h6 class="usa-heading-alt">Red</h6>
  <img src="../img/logo/svg/red-2x.svg" class="usajobs-img-2x-doc" />

  <h6 class="usa-heading-alt">Black</h6>
  <img src="../img/logo/svg/black-2x.svg" class="usajobs-img-2x-doc" />

  <h6 class="usa-heading-alt">White</h6>
  <div class="usa-color-text usa-color-primary-darkest">
    <img src="../img/logo/svg/white-2x.svg" class="usajobs-img-2x-doc" />
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="logo-0">
    Documentation
  </button>
  <div id="logo-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>
        WCAG (Web Content Accessibility Guidelines) ensure that content is accessible by everyone, regardless of disability or user device. To meet these standards, text and interactive elements should have a color contrast ratio of <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">at least 4.5:1</a>. This ensures that viewers who cannot see the full color spectrum are able to read the text.
      </li>
    </ul>

    <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>
        The red version of the logo should be used as the default. The white version should be used on dark backgrounds when the red version would not pass the aforementioned contrast guidelines.
      </li>
      <li>
        In addition to the issues of contrast or color blindness, placing areas of brightly colored hues together can be hard for users with color vision to read. Bright colors cause an afterimage effect which when two colors are together can cause them to interfere with one another causing "visual vibration". While the red version of the logo is dark it is still unadvisable to place it on a bright background. Our recommendation is to use the white version of the logo on any colored background.
      </li>
    </ul>

    <h4 class="usa-heading">Implementation</h4>
    <ul class="usa-content-list">
      <li>
        The SVG version of the logo should be used for the USAJOBS site and whenever it will appear online. SVG has reasonable <a href="http://caniuse.com/svg">browser support</a> and the PNG versions can act as a backup.
      </li>
      <li>
        The logo should be responsive and scale down as necessary. The PNG versions should NEVER be scaled beyond the dimensions of the original image (376px wide by 90px tall). The SVG image can scale in this manner if necessary but, the original apsect ratio should be respected. When the logo appears in <a href="../navigation/">navigation</a> it has specific size requirements.
      </li>
      <li>
        The PNG versions of the image have already been optimized using image compression best practices.
      </li>
    </ul>
  </div>
</div>

<h3 class="usa-heading">Open Opportunities Logo - PNG</h3>
<div class="preview" id="open-opps-png">
  <img src="../img/logo/png/open-opportunities-2x.png" />
</div>

<h3 class="usa-heading">Open Opportunities Logo - SVG</h3>
<div class="preview" id="open-opps-svg">
  <img src="../img/logo/svg/open-opportunities-2x.svg" class="usajobs-img-2x-doc" />
</div>
