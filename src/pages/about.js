import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import PageHero from "../components/PageHero.js";
import setupNavigation from "../components/navigationBehavior.js";

import "../css/variables.css";
import "../css/global.css";
import "../css/header.css";
import "../css/footer.css";
import "../css/responsive.css";
import "../css/page-hero.css";

const app = document.querySelector("#app");

app.innerHTML = `

  ${Header()}

  <main>

    ${PageHero({
      eyebrow: "ABOUT OCEAN WAVE",
      title: "Reliable Solutions for Marine, Offshore & Industrial Operations",
      description:
        "Delivering dependable technical, marine, offshore, engineering, procurement and operational support services."
    })}

    <section class="section about-page">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              WHO WE ARE
            </p>

            <h2>
              Ocean Wave Development
              Company Nigeria Limited
            </h2>

          </div>

        </div>

        <div class="about-page-content">

          <p>
            Ocean Wave Development Company Nigeria
            Limited is focused on providing reliable
            services and solutions to clients operating
            across the marine, offshore, oil & gas,
            engineering and industrial sectors.
          </p>

          <p>
            Our capabilities are built around practical
            technical support, marine operations,
            project execution, procurement, logistics
            and facility maintenance.
          </p>

          <p>
            We are particularly focused on Marine &
            Offshore Services, supporting vessel
            chartering, marine technical and engineering
            support, vessel inspection and audit,
            crewing, general marine supplies and
            chandelling.
          </p>

        </div>

      </div>

    </section>

  </main>

  ${Footer()}

`;

setupNavigation();