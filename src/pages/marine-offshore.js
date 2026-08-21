import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import PageHero from "../components/PageHero.js";
import setupNavigation from "../components/navigationBehavior.js";

import "../css/variables.css";
import "../css/global.css";
import "../css/header.css";
import "../css/footer.css";
import "../css/responsive.css";
import "../css/marine-offshore.css";
import "../css/page-hero.css";

const app = document.querySelector("#app");

const marineServices = [
  {
    number: "01",
    title: "Vessel Charter",
    description:
      "Provision of suitable marine vessels for offshore support, transportation, construction and other marine operations.",
    link: "/pages/vessel-charter.html"
  },

  {
    number: "02",
    title: "Marine Technical & Engineering Support",
    description:
      "Technical and engineering support designed to improve vessel reliability, operational efficiency and marine asset performance.",
    link: "/pages/marine-technical.html"
  },

  {
    number: "03",
    title: "Vessel Inspection & Audit",
    description:
      "Marine inspection and audit support to help clients assess vessel condition, compliance, safety and operational readiness.",
    link: "/pages/vessel-inspection.html"
  },

  {
    number: "04",
    title: "Crewing & Crew Management",
    description:
      "Professional crew sourcing, placement and management for marine and offshore operations.",
    link: "/pages/crewing.html"
  },

  {
    number: "05",
    title: "General Marine Supplies",
    description:
      "Supply of marine equipment, operational materials, consumables and other essential marine requirements.",
    link: "/pages/marine-supplies.html"
  },

  {
    number: "06",
    title: "Chandelling",
    description:
      "Reliable provision of provisions, bonded stores, consumables and other vessel requirements.",
    link: "/pages/chandelling.html"
  }
];

function serviceCard(service) {
  return `
    <article class="marine-service-card">

      <div class="marine-service-number">
        ${service.number}
      </div>

      <div class="marine-service-content">

        <h3>
          ${service.title}
        </h3>

        <p>
          ${service.description}
        </p>

        <a
          href="${service.link}"
          class="marine-service-link"
        >
          Learn More
          <span>→</span>
        </a>

      </div>

    </article>
  `;
}

app.innerHTML = `

  ${Header()}

  <main>

    ${PageHero({
      eyebrow: "MARINE & OFFSHORE SERVICES",
      title:
        "Supporting Critical Marine & Offshore Operations",
      description:
        "Reliable vessel, technical, inspection, crewing, supply and operational support for marine and offshore activities."
    })}


    <!-- INTRODUCTION -->

    <section class="section marine-introduction">

      <div class="container">

        <div class="marine-introduction-grid">

          <div>

            <p class="section-label">
              OUR MARINE CAPABILITY
            </p>

            <h2>
              Practical Marine Solutions
              Built Around Your Operation
            </h2>

          </div>

          <div>

            <p>
              Ocean Wave Development Company Nigeria
              Limited provides marine and offshore
              support services to clients operating
              in demanding marine environments.
            </p>

            <p>
              Our services are structured to support
              vessel owners, offshore contractors,
              oil & gas operators, project developers
              and other organizations requiring
              dependable marine resources and
              technical support.
            </p>

          </div>

        </div>

      </div>

    </section>


    <!-- SERVICES -->

    <section class="section marine-capabilities">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              OUR CAPABILITIES
            </p>

            <h2>
              Marine & Offshore Services
            </h2>

          </div>

          <p>
            From vessel charter to technical support,
            inspection, crewing and marine supplies,
            we provide practical solutions for
            operational requirements.
          </p>

        </div>


        <div class="marine-services-grid">

          ${marineServices
            .map(serviceCard)
            .join("")}

        </div>

      </div>

    </section>


    <!-- VESSEL CHARTER FEATURE -->

    <section class="marine-vessel-feature">

      <div class="container">

        <div class="marine-vessel-feature-content">

          <div>

            <p class="section-label">
              VESSEL CHARTER
            </p>

            <h2>
              Marine Assets for
              Offshore Operations
            </h2>

            <p>
              We support vessel charter requirements
              across a range of marine and offshore
              asset categories.
            </p>

            <a
              href="/pages/vessel-charter.html"
              class="btn btn-primary"
            >
              Explore Vessel Charter
            </a>

          </div>


          <div class="vessel-types-list">

            <span>PSV</span>
            <span>AHTS</span>
            <span>ASD TUGS</span>
            <span>ROV VESSEL</span>
            <span>SURVEY VESSEL</span>
            <span>DRILLING RIG</span>
            <span>SEMI-SUBMERSIBLE</span>
            <span>PIPE LAY VESSEL</span>
            <span>HEAVY LIFT VESSEL</span>

          </div>

        </div>

      </div>

    </section>


    <!-- CTA -->

    <section class="section marine-cta">

      <div class="container">

        <div class="marine-cta-box">

          <div>

            <p class="section-label">
              MARINE SUPPORT
            </p>

            <h2>
              Have a Marine or Offshore
              Requirement?
            </h2>

            <p>
              Talk to our team about your vessel,
              marine engineering, inspection,
              crewing or supply requirements.
            </p>

          </div>

          <a
            href="/pages/contact.html"
            class="btn btn-light"
          >
            Request a Consultation
          </a>

        </div>

      </div>

    </section>

  </main>

  ${Footer()}

`;

setupNavigation();