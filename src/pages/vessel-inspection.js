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
      eyebrow: "MARINE & OFFSHORE SERVICES",
      title: "Vessel Inspection & Audit",
      description:
        "Professional vessel inspection and audit support designed to assess vessel condition, operational readiness, safety and compliance."
    })}


    <!-- INTRODUCTION -->

    <section class="section">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              VESSEL INSPECTION
            </p>

            <h2>
              Supporting Safe, Compliant & Reliable Vessel Operations
            </h2>

          </div>

        </div>


        <div class="about-page-content">

          <p>
            Ocean Wave Development Company Nigeria Limited
            provides vessel inspection and audit support for
            marine and offshore operations.
          </p>

          <p>
            Our inspection approach focuses on identifying
            operational, technical, safety and compliance
            requirements that may affect vessel performance
            and suitability for service.
          </p>

          <p>
            We support clients in making informed decisions
            before vessel chartering, deployment, acquisition
            and other marine operations.
          </p>

        </div>

      </div>

    </section>


    <!-- INSPECTION SERVICES -->

    <section class="section section-alt">

      <div class="container">

        <div class="section-heading centered">

          <p class="section-label">
            OUR CAPABILITIES
          </p>

          <h2>
            Inspection & Audit Services
          </h2>

          <p>
            Practical inspection and audit support covering
            key areas of vessel condition, safety and
            operational readiness.
          </p>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <div class="service-card-icon">
              01
            </div>

            <h3>
              Pre-Charter Inspection
            </h3>

            <p>
              Assessment of vessel condition, documentation,
              equipment and operational suitability before
              charter engagement.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              02
            </div>

            <h3>
              Pre-Purchase Inspection
            </h3>

            <p>
              Technical and operational assessment to support
              informed vessel acquisition and investment
              decisions.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              03
            </div>

            <h3>
              Vessel Condition Assessment
            </h3>

            <p>
              Review of the vessel's general condition,
              machinery, equipment and operational systems.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              04
            </div>

            <h3>
              HSE Inspection & Audit
            </h3>

            <p>
              Review of health, safety and environmental
              practices supporting safer marine operations.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              05
            </div>

            <h3>
              Documentation Review
            </h3>

            <p>
              Examination of vessel certificates, records,
              statutory documents and relevant operational
              documentation.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              06
            </div>

            <h3>
              Operational Readiness
            </h3>

            <p>
              Assessment of vessel readiness and suitability
              for intended marine and offshore operations.
            </p>

          </article>


        </div>

      </div>

    </section>


    <!-- INSPECTION FOCUS -->

    <section class="section">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              INSPECTION FOCUS
            </p>

            <h2>
              What We Assess
            </h2>

          </div>

        </div>


        <div class="about-page-content">

          <p>
            Our inspection activities can focus on the
            following areas depending on the client's
            operational requirements:
          </p>

        </div>


        <div class="services-grid">

          <article class="service-card">

            <h3>
              Hull & Structural Condition
            </h3>

            <p>
              General condition and visible structural
              integrity of the vessel.
            </p>

          </article>


          <article class="service-card">

            <h3>
              Machinery & Equipment
            </h3>

            <p>
              Review of major machinery, systems and
              operational equipment.
            </p>

          </article>


          <article class="service-card">

            <h3>
              Safety Systems
            </h3>

            <p>
              Assessment of critical safety equipment,
              procedures and emergency preparedness.
            </p>

          </article>


          <article class="service-card">

            <h3>
              Navigation & Communication
            </h3>

            <p>
              Review of relevant navigation and
              communication equipment.
            </p>

          </article>


          <article class="service-card">

            <h3>
              Certification & Records
            </h3>

            <p>
              Review of available statutory, class and
              operational documentation.
            </p>

          </article>


          <article class="service-card">

            <h3>
              Crew & Operational Readiness
            </h3>

            <p>
              Review of crew readiness and operational
              requirements relevant to the assignment.
            </p>

          </article>

        </div>

      </div>

    </section>


    <!-- CTA -->

    <section class="section cta-section">

      <div class="container">

        <div class="cta-content">

          <p class="section-label">
            MARINE ASSURANCE
          </p>

          <h2>
            Need a Vessel Inspection or Audit?
          </h2>

          <p>
            Contact Ocean Wave Development Company Nigeria
            Limited to discuss your vessel inspection,
            audit or marine assurance requirements.
          </p>

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

setupNavigation();