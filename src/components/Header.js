import Navigation from "./Navigation.js";

export default function Header() {
  return `
    <header class="site-header">

      <div class="container header-container">

        <!-- Company Logo -->
        <a
          href="/index.html"
          class="logo"
          aria-label="Ocean Wave Development Company Nigeria Limited - Home"
        >

          <span class="logo-mark">
            OW
          </span>

          <span class="logo-text">

            <strong>
              OCEAN WAVE
            </strong>

            <small>
              DEVELOPMENT COMPANY
            </small>

          </span>

        </a>


        <!-- Main Navigation -->
        ${Navigation()}


        <!-- Header CTA -->
        <a
          href="/pages/contact.html"
          class="header-cta"
        >
          Request a Quote
        </a>


        <!-- Mobile Menu -->
        <button
          class="menu-toggle"
          id="menuToggle"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded="false"
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </div>

    </header>
  `;
}