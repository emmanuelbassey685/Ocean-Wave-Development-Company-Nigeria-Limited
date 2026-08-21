import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import PageHero from "../components/PageHero.js";
import setupNavigation from "../components/navigationBehavior.js";

import "../css/variables.css";
import "../css/global.css";
import "../css/header.css";
import "../css/footer.css";
import "../css/responsive.css";
import "../css/services.css";
import "../css/page-hero.css";

const app = document.querySelector("#app");

app.innerHTML = `

  ${Header()}

  <main>

    ${PageHero({
      eyebrow: "MARINE & OFFSHORE SERVICES",
      title: "Crewing & Crew Management",
      description:
        "Reliable crew management and personnel support for safe, efficient and compliant marine and offshore operations."
    })}


    <!-- INTRODUCTION -->

    <section class="section">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              CREWING SERVICES
            </p>

            <h2>
              Supporting the People Behind Successful Marine Operations
            </h2>

          </div>

        </div>

        <div class="about-page-content">

          <p>
            Ocean Wave Development Company Nigeria Limited
            provides crewing and crew management support
            for marine and offshore operations.
          </p>

          <p>
            We help clients identify, coordinate and support
            competent personnel required for vessel and
            offshore operations while maintaining focus on
            safety, documentation and operational readiness.
          </p>

          <p>
            Our approach combines personnel coordination,
            documentation support, crew scheduling and
            operational assistance to help clients maintain
            reliable marine operations.
          </p>

        </div>

      </div>

    </section>


    <!-- CREWING SERVICES -->

    <section class="section section-alt">

      <div class="container">

        <div class="section-heading centered">

          <p class="section-label">
            OUR CAPABILITIES
          </p>

          <h2>
            Crewing & Personnel Services
          </h2>

          <p>
            Flexible crew management support tailored to
            vessel and offshore project requirements.
          </p>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <div class="service-card-icon">
              01
            </div>

            <h3>
              Crew Recruitment & Placement
            </h3>

            <p>
              Support with sourcing and coordinating
              suitably qualified marine and offshore
              personnel for specific operational needs.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              02
            </div>

            <h3>
              Crew Management
            </h3>

            <p>
              Coordination of crew requirements,
              assignments, rotations and personnel
              administration.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              03
            </div>

            <h3>
              Crew Documentation
            </h3>

            <p>
              Support with organizing and maintaining
              relevant crew records, certificates and
              operational documentation.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              04
            </div>

            <h3>
              Crew Scheduling
            </h3>

            <p>
              Assistance with crew rotation planning,
              scheduling and mobilization requirements.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              05
            </div>

            <h3>
              Mobilization & Demobilization
            </h3>

            <p>
              Coordination of personnel movement and
              deployment requirements for marine and
              offshore assignments.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              06
            </div>

            <h3>
              Offshore Personnel Support
            </h3>

            <p>
              Personnel coordination and operational
              support for offshore vessel and project
              requirements.
            </p>

          </article>

        </div>

      </div>

    </section>


    <!-- PROCESS -->

    <section class="section">

      <div class="container">

        <div class="section-heading centered">

          <p class="section-label">
            OUR APPROACH
          </p>

          <h2>
            Crew Management Process
          </h2>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <div class="service-card-icon">
              01
            </div>

            <h3>
              Understand the Requirement
            </h3>

            <p>
              We review the vessel, project, position,
              competency and operational requirements.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              02
            </div>

            <h3>
              Personnel Coordination
            </h3>

            <p>
              Suitable personnel are identified and
              coordinated according to the assignment.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              03
            </div>

            <h3>
              Documentation Review
            </h3>

            <p>
              Relevant qualifications, certificates and
              documentation are reviewed as required.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              04
            </div>

            <h3>
              Mobilization
            </h3>

            <p>
              Personnel deployment and mobilization
              requirements are coordinated with the client.
            </p>

          </article>

        </div>

      </div>

    </section>


    <!-- COMPLIANCE -->

    <section class="section section-alt">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              COMPLIANCE & READINESS
            </p>

            <h2>
              Competent People. Proper Documentation. Ready Operations.
            </h2>

          </div>

        </div>


        <div class="about-page-content">

          <p>
            Marine and offshore operations depend heavily
            on competent personnel and properly maintained
            documentation.
          </p>

          <p>
            Our crewing support focuses on helping clients
            maintain organized personnel records and
            coordinate crew requirements relevant to their
            operations.
          </p>

          <p>
            Specific requirements are assessed according
            to the vessel, assignment, client requirements
            and applicable regulations.
          </p>

        </div>

      </div>

    </section>


    <!-- CTA -->

    <section class="section cta-section">

      <div class="container">

        <div class="cta-content">

          <p class="section-label">
            CREWING SUPPORT
          </p>

          <h2>
            Need Reliable Marine Personnel Support?
          </h2>

          <p>
            Contact Ocean Wave Development Company Nigeria
            Limited to discuss your crewing and crew
            management requirements.
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