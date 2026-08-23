import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import PageHero from "../components/PageHero.js";
import ServiceCard from "../components/ServiceCard.js";
import setupNavigation from "../components/navigationBehavior.js";

import "../css/variables.css";
import "../css/global.css";
import "../css/header.css";
import "../css/footer.css";
import "../css/responsive.css";
import "../css/page-hero.css";
import "../css/services.css";


const app = document.querySelector("#app");


/* =========================================
   CORE CAPABILITIES
========================================= */

const coreCapabilities = [

  {
    icon: "⚓",
    title: "Offshore Support Services",
    description:
      "Reliable operational support for offshore activities, marine operations and oil and gas facilities."
  },

  {
    icon: "◉",
    title: "Oil & Gas Operations Support",
    description:
      "Practical support services designed to help clients maintain safe, efficient and dependable oil and gas operations."
  },

  {
    icon: "⚙",
    title: "Technical & Engineering Support",
    description:
      "Technical and engineering assistance supporting equipment, facilities, marine assets and operational requirements."
  },

  {
    icon: "▣",
    title: "Equipment & Material Supply",
    description:
      "Supply of operational equipment, materials, consumables and specialized items required for field and offshore activities."
  },

  {
    icon: "⇄",
    title: "Procurement & Logistics",
    description:
      "Coordinated sourcing, procurement, transportation and delivery of critical materials and operational supplies."
  },

  {
    icon: "🔧",
    title: "Maintenance Support",
    description:
      "Maintenance support focused on improving equipment reliability, operational continuity and asset performance."
  }

];


/* =========================================
   AREAS OF SUPPORT
========================================= */

const supportAreas = [

  {
    title: "Upstream Operations",
    description:
      "Support for upstream activities through dependable technical, operational, material and logistics solutions."
  },

  {
    title: "Offshore Facilities",
    description:
      "Operational and technical support for offshore facilities and associated marine infrastructure."
  },

  {
    title: "Marine Oil & Gas Support",
    description:
      "Marine-focused services supporting vessels, offshore activities and oil and gas operations."
  },

  {
    title: "Equipment & Spares",
    description:
      "Sourcing and supply of equipment, spare parts and operational materials required for continuous operations."
  },

  {
    title: "Operational Supplies",
    description:
      "Provision of essential consumables and supplies to support field, marine and offshore operational requirements."
  }

];


/* =========================================
   RENDER CORE CAPABILITIES
========================================= */

function renderCapabilityCards() {

  return coreCapabilities
    .map(capability =>
      ServiceCard(capability)
    )
    .join("");

}


/* =========================================
   RENDER SUPPORT AREAS
========================================= */

function renderSupportAreas() {

  return supportAreas
    .map(area => `
      <article class="support-area-card">

        <div class="support-area-marker">
          <span></span>
        </div>

        <div>

          <h3>
            ${area.title}
          </h3>

          <p>
            ${area.description}
          </p>

        </div>

      </article>
    `)
    .join("");

}


/* =========================================
   PAGE
========================================= */

function renderPage() {

  app.innerHTML = `

    ${Header()}


    <main>

      <!-- ===================================
           HERO
      ==================================== -->

      ${PageHero({
        eyebrow: "OIL & GAS SERVICES",
        title: "Supporting Energy Operations With Confidence",
        description:
          "Reliable technical, operational, marine, procurement and logistics support for oil and gas activities.",
        image: "/images/hero/oil-gas-hero.jpg"
      })}


      <!-- ===================================
           INTRODUCTION
      ==================================== -->

      <section class="section oil-gas-intro">

        <div class="container">

          <div class="section-heading">

            <p class="section-label">
              OIL & GAS SUPPORT
            </p>

            <h2>
              Dependable Support for
              Oil & Gas Operations
            </h2>

            <p>
              Ocean Wave Development Company Nigeria
              Limited provides dependable technical,
              operational and project support services
              to clients across the oil and gas sector.
            </p>

            <p>
              Our capabilities combine marine expertise,
              engineering support, procurement, logistics,
              equipment supply and maintenance solutions
              to help clients maintain efficient and
              reliable operations.
            </p>

          </div>

        </div>

      </section>


      <!-- ===================================
           CORE CAPABILITIES
      ==================================== -->

      <section class="section capabilities-section">

        <div class="container">

          <div class="section-heading centered">

            <p class="section-label">
              OUR CAPABILITIES
            </p>

            <h2>
              Core Oil & Gas Services
            </h2>

            <p>
              Practical solutions designed around the
              technical and operational demands of the
              energy industry.
            </p>

          </div>


          <div class="service-grid">

            ${renderCapabilityCards()}

          </div>

        </div>

      </section>


      <!-- ===================================
           AREAS OF SUPPORT
      ==================================== -->

      <section class="section support-section">

        <div class="container">

          <div class="support-layout">


            <div class="support-content">

              <p class="section-label">
                AREAS OF SUPPORT
              </p>

              <h2>
                Supporting Operations
                Across the Energy Value Chain
              </h2>

              <p>
                We provide flexible support solutions
                tailored to the operational environment,
                project requirements and supply needs
                of our clients.
              </p>

            </div>


            <div class="support-list">

              ${renderSupportAreas()}

            </div>


          </div>

        </div>

      </section>


      <!-- ===================================
           WHY OCEAN WAVE
      ==================================== -->

      <section class="section why-ocean-wave">

        <div class="container">

          <div class="why-layout">


            <div class="why-content">

              <p class="section-label">
                WHY OCEAN WAVE
              </p>

              <h2>
                A Reliable Partner for
                Energy Operations
              </h2>

              <p>
                Ocean Wave Development Company combines
                marine, engineering, procurement and
                operational capabilities to deliver
                practical solutions for demanding
                environments.
              </p>

              <p>
                Our approach is built around reliability,
                professionalism, safety, responsiveness
                and a strong understanding of our clients'
                operational requirements.
              </p>

            </div>


            <div class="why-points">

              <div class="why-point">

                <strong>
                  01
                </strong>

                <div>
                  <h3>
                    Reliable Service
                  </h3>

                  <p>
                    Dependable support focused on
                    operational continuity.
                  </p>
                </div>

              </div>


              <div class="why-point">

                <strong>
                  02
                </strong>

                <div>
                  <h3>
                    Technical Capability
                  </h3>

                  <p>
                    Practical technical and engineering
                    support for complex requirements.
                  </p>
                </div>

              </div>


              <div class="why-point">

                <strong>
                  03
                </strong>

                <div>
                  <h3>
                    Integrated Support
                  </h3>

                  <p>
                    Marine, procurement, logistics and
                    operational capabilities working together.
                  </p>
                </div>

              </div>


              <div class="why-point">

                <strong>
                  04
                </strong>

                <div>
                  <h3>
                    Client Focus
                  </h3>

                  <p>
                    Solutions aligned with each client's
                    operational and project objectives.
                  </p>
                </div>

              </div>

            </div>


          </div>

        </div>

      </section>


      <!-- ===================================
           CTA
      ==================================== -->

      <section class="section service-cta">

        <div class="container">

          <div class="service-cta-content">

            <div>

              <p class="section-label">
                LET'S WORK TOGETHER
              </p>

              <h2>
                Need Reliable Oil & Gas Support?
              </h2>

              <p>
                Talk to our team about your operational,
                technical, procurement or logistics
                requirements.
              </p>

            </div>


            <a
              href="/pages/contact.html"
              class="btn btn-primary"
            >
              Request a Quote
            </a>

          </div>

        </div>

      </section>

    </main>


    ${Footer()}

  `;

}


/* =========================================
   INITIALIZE
========================================= */

renderPage();

setupNavigation();