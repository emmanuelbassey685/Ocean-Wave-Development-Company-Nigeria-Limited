import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Footer from "./components/Footer.js";
import setupNavigation from "./components/navigationBehavior.js";

import "./css/variables.css";
import "./css/global.css";
import "./css/header.css";
import "./css/hero.css";
import "./css/footer.css";
import "./css/responsive.css";
import "./css/services.css";
import "./css/vessels.css";

const app = document.querySelector("#app");

function renderApp() {
  app.innerHTML = `
    ${Header()}

    <main>
      ${Hero()}

      <section class="section home-intro">
        <div class="container">

          <p class="section-label">
            OCEAN WAVE DEVELOPMENT COMPANY
          </p>

          <h2>
            Reliable Marine, Offshore &
            Engineering Solutions
          </h2>

          <p>
            Ocean Wave Development Company Nigeria
            Limited provides dependable marine,
            offshore, oil & gas, engineering,
            procurement, logistics and facility
            support services.
          </p>

          <a
            href="/pages/marine-offshore.html"
            class="btn btn-primary"
          >
            Explore Marine & Offshore
          </a>

        </div>
      </section>

    </main>

    ${Footer()}
  `;
}

renderApp();

setupNavigation();

/* =========================================
   NAVIGATION DROPDOWNS
========================================= */

const dropdownToggles =
  document.querySelectorAll(
    ".nav-dropdown-toggle"
  );


dropdownToggles.forEach(toggle => {

  toggle.addEventListener("click", event => {

    event.preventDefault();

    const dropdown =
      toggle.closest(".nav-dropdown");

    const isOpen =
      dropdown.classList.contains("open");


    /*
     * Close all other dropdowns
     */

    document
      .querySelectorAll(".nav-dropdown.open")
      .forEach(item => {

        if (item !== dropdown) {

          item.classList.remove("open");

          const button =
            item.querySelector(
              ".nav-dropdown-toggle"
            );

          button?.setAttribute(
            "aria-expanded",
            "false"
          );

        }

      });


    /*
     * Toggle current dropdown
     */

    dropdown.classList.toggle(
      "open",
      !isOpen
    );

    toggle.setAttribute(
      "aria-expanded",
      !isOpen
    );

  });

});