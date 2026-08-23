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
import "../css/services.css";

const app = document.querySelector("#app");

app.innerHTML = `

  ${Header()}

  <main>

    ${PageHero({
      eyebrow: "FACILITY MAINTENANCE",
      title: "Keeping Facilities Safe, Reliable & Operational",
      description:
        "Providing dependable maintenance and facility support services for marine, offshore, industrial and commercial environments."
    })}


    <!-- INTRODUCTION -->

    <section class="section">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              FACILITY MAINTENANCE
            </p>

            <h2>
              Supporting Reliable Facility Operations
            </h2>

          </div>

        </div>


        <div class="about-page-content">

          <p>
            Ocean Wave Development Company Nigeria Limited
            provides facility maintenance and operational
            support services designed to help clients maintain
            safe, functional and reliable facilities.
          </p>

          <p>
            Our maintenance support can be tailored to the
            requirements of marine, offshore, industrial,
            commercial and project facilities.
          </p>

          <p>
            We focus on preventive maintenance, corrective
            maintenance, facility inspections and general
            technical support to help reduce operational
            disruptions and maintain facility performance.
          </p>

        </div>

      </div>

    </section>


    <!-- MAINTENANCE SERVICES -->

    <section class="section section-alt">

      <div class="container">

        <div class="section-heading centered">

          <p class="section-label">
            OUR SERVICES
          </p>

          <h2>
            Facility Maintenance Services
          </h2>

          <p>
            Practical maintenance support covering essential
            facility systems and operational requirements.
          </p>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <div class="service-card-icon">
              01
            </div>

            <h3>
              Preventive Maintenance
            </h3>

            <p>
              Planned maintenance activities designed to
              identify potential problems and maintain reliable
              facility operation.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              02
            </div>

            <h3>
              Corrective Maintenance
            </h3>

            <p>
              Technical support for addressing equipment,
              facility and operational issues when they occur.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              03
            </div>

            <h3>
              Facility Inspection
            </h3>

            <p>
              Inspection and assessment of facility conditions
              to identify maintenance requirements and
              potential operational risks.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              04
            </div>

            <h3>
              Mechanical Maintenance
            </h3>

            <p>
              Support for mechanical systems, equipment and
              components required for reliable facility
              operations.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              05
            </div>

            <h3>
              Electrical Support
            </h3>

            <p>
              Maintenance support for electrical systems and
              equipment within applicable facility environments.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              06
            </div>

            <h3>
              General Facility Support
            </h3>

            <p>
              General technical and operational support for
              maintaining facility functionality and readiness.
            </p>

          </article>


        </div>

      </div>

    </section>


    <!-- FACILITY SUPPORT AREAS -->

    <section class="section">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              SUPPORT AREAS
            </p>

            <h2>
              Facilities We Support
            </h2>

          </div>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <div class="service-card-icon">
              01
            </div>

            <h3>
              Marine Facilities
            </h3>

            <p>
              Maintenance support for facilities associated
              with marine operations, ports and vessel support
              activities.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              02
            </div>

            <h3>
              Offshore Facilities
            </h3>

            <p>
              Facility support for applicable offshore
              operational environments and project locations.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              03
            </div>

            <h3>
              Industrial Facilities
            </h3>

            <p>
              Maintenance support for industrial facilities,
              equipment and operational infrastructure.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              04
            </div>

            <h3>
              Commercial Facilities
            </h3>

            <p>
              General maintenance and technical support for
              commercial and business facilities.
            </p>

          </article>


        </div>

      </div>

    </section>


    <!-- MAINTENANCE APPROACH -->

    <section class="section section-alt">

      <div class="container">

        <div class="section-heading centered">

          <p class="section-label">
            OUR APPROACH
          </p>

          <h2>
            Planned Maintenance for Better Reliability
          </h2>

          <p>
            Our maintenance approach is built around planning,
            inspection, execution and continuous monitoring.
          </p>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <div class="service-card-icon">
              01
            </div>

            <h3>
              Inspect
            </h3>

            <p>
              Assess facility condition and identify
              maintenance requirements.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              02
            </div>

            <h3>
              Plan
            </h3>

            <p>
              Develop appropriate maintenance activities based
              on operational priorities and requirements.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              03
            </div>

            <h3>
              Execute
            </h3>

            <p>
              Coordinate maintenance activities and technical
              support required to address identified needs.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              04
            </div>

            <h3>
              Monitor
            </h3>

            <p>
              Monitor maintenance results and identify
              opportunities for improved facility reliability.
            </p>

          </article>


        </div>

      </div>

    </section>


    <!-- WHY OCEAN WAVE -->

    <section class="section">

      <div class="container">

        <div class="section-heading centered">

          <p class="section-label">
            WHY OCEAN WAVE
          </p>

          <h2>
            Maintenance Focused on Operational Continuity
          </h2>

          <p>
            We support clients in maintaining facilities that
            are safe, functional and ready for operations.
          </p>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <h3>
              Reliable Support
            </h3>

            <p>
              Practical maintenance assistance aligned with
              facility and operational requirements.
            </p>

          </article>


          <article class="service-card">

            <h3>
              Technical Approach
            </h3>

            <p>
              Maintenance activities are approached with
              attention to equipment condition and operational
              requirements.
            </p>

          </article>


          <article class="service-card">

            <h3>
              Safety Conscious
            </h3>

            <p>
              Supporting maintenance activities with emphasis
              on safe and responsible operational practices.
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
            FACILITY SUPPORT
          </p>

          <h2>
            Need Facility Maintenance Support?
          </h2>

          <p>
            Contact Ocean Wave Development Company Nigeria
            Limited to discuss your facility maintenance and
            technical support requirements.
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