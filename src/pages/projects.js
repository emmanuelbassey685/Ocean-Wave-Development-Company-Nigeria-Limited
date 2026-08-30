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
import "../css/projects.css";

const app = document.querySelector("#app");

app.innerHTML = `

  ${Header()}

  <main>

    ${PageHero({
      eyebrow: "OUR PROJECTS",
      title: "Delivering Reliable Solutions Across Marine, Offshore & Industrial Operations",
      description:
        "Ocean Wave Development Company Nigeria Limited provides practical technical, marine, engineering, procurement and operational support for clients across diverse industries."
    })}


    <!-- =========================================
         PROJECT INTRODUCTION
    ========================================== -->

    <section class="section projects-intro">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              OUR EXPERIENCE
            </p>

            <h2>
              Supporting Projects From Planning to Execution
            </h2>

          </div>

        </div>


        <div class="projects-intro-content">

          <p>
            Ocean Wave Development Company Nigeria Limited
            supports projects requiring dependable marine,
            offshore, engineering, procurement, logistics
            and facility support services.
          </p>

          <p>
            Our approach combines practical technical
            knowledge, operational coordination and
            reliable supply capabilities to help clients
            achieve safe, efficient and timely project
            delivery.
          </p>

          <p>
            Our project capabilities cover marine and
            offshore operations, oil & gas support,
            engineering consultancy, procurement,
            logistics and facility maintenance.
          </p>

        </div>

      </div>

    </section>


    <!-- =========================================
         PROJECT PORTFOLIO
    ========================================== -->

    <section class="section section-alt">

      <div class="container">

        <div class="section-heading centered">

          <p class="section-label">
            PROJECT PORTFOLIO
          </p>

          <h2>
            Our Areas of Project Support
          </h2>

          <p>
            Flexible project support designed around
            the operational requirements of our clients.
          </p>

        </div>


        <div class="projects-grid">


          <!-- PROJECT 01 -->

          <article class="project-card">

            <div class="project-card-number">
              01
            </div>

            <div class="project-card-content">

              <span class="project-category">
                MARINE & OFFSHORE
              </span>

              <h3>
                Marine & Offshore Operations
              </h3>

              <p>
                Supporting vessel chartering, marine
                technical services, vessel inspection,
                crewing, marine supplies and offshore
                operational requirements.
              </p>

              <a
                href="/pages/marine-offshore.html"
                class="project-link"
              >
                Explore Marine Services →
              </a>

            </div>

          </article>


          <!-- PROJECT 02 -->

          <article class="project-card">

            <div class="project-card-number">
              02
            </div>

            <div class="project-card-content">

              <span class="project-category">
                OIL & GAS
              </span>

              <h3>
                Oil & Gas Support Projects
              </h3>

              <p>
                Providing operational, technical,
                equipment supply, procurement and
                maintenance support for oil and gas
                activities.
              </p>

              <a
                href="/pages/oil-gas.html"
                class="project-link"
              >
                Explore Oil & Gas →
              </a>

            </div>

          </article>


          <!-- PROJECT 03 -->

          <article class="project-card">

            <div class="project-card-number">
              03
            </div>

            <div class="project-card-content">

              <span class="project-category">
                ENGINEERING
              </span>

              <h3>
                Engineering & Technical Projects
              </h3>

              <p>
                Supporting clients with engineering
                consultancy, technical coordination,
                project planning and practical
                engineering solutions.
              </p>

              <a
                href="/pages/engineering-consultancy.html"
                class="project-link"
              >
                Explore Engineering →
              </a>

            </div>

          </article>


          <!-- PROJECT 04 -->

          <article class="project-card">

            <div class="project-card-number">
              04
            </div>

            <div class="project-card-content">

              <span class="project-category">
                PROCUREMENT
              </span>

              <h3>
                Procurement & Logistics
              </h3>

              <p>
                Coordinating procurement, material
                sourcing, transportation and logistics
                support for project and operational
                requirements.
              </p>

              <a
                href="/pages/procurement-logistics.html"
                class="project-link"
              >
                Explore Procurement →
              </a>

            </div>

          </article>


          <!-- PROJECT 05 -->

          <article class="project-card">

            <div class="project-card-number">
              05
            </div>

            <div class="project-card-content">

              <span class="project-category">
                FACILITY MANAGEMENT
              </span>

              <h3>
                Facility Maintenance Projects
              </h3>

              <p>
                Providing maintenance and operational
                support designed to help facilities
                remain safe, functional and efficient.
              </p>

              <a
                href="/pages/facility-maintenance.html"
                class="project-link"
              >
                Explore Maintenance →
              </a>

            </div>

          </article>


          <!-- PROJECT 06 -->

          <article class="project-card">

            <div class="project-card-number">
              06
            </div>

            <div class="project-card-content">

              <span class="project-category">
                PROJECT MANAGEMENT
              </span>

              <h3>
                Project Management & Coordination
              </h3>

              <p>
                Supporting project planning, execution,
                coordination, monitoring and delivery
                across marine, engineering and industrial
                activities.
              </p>

              <a
                href="/pages/project-management.html"
                class="project-link"
              >
                Explore Project Management →
              </a>

            </div>

          </article>


        </div>

      </div>

    </section>


    <!-- =========================================
         PROJECT DELIVERY
    ========================================== -->

    <section class="section">

      <div class="container">

        <div class="section-heading centered">

          <p class="section-label">
            PROJECT DELIVERY
          </p>

          <h2>
            Our Approach to Project Execution
          </h2>

        </div>


        <div class="project-process-grid">


          <article class="process-card">

            <span>
              01
            </span>

            <h3>
              Understand
            </h3>

            <p>
              We understand the client's operational
              requirements, project objectives and
              technical needs.
            </p>

          </article>


          <article class="process-card">

            <span>
              02
            </span>

            <h3>
              Plan
            </h3>

            <p>
              We coordinate resources, suppliers,
              technical requirements and project
              activities.
            </p>

          </article>


          <article class="process-card">

            <span>
              03
            </span>

            <h3>
              Execute
            </h3>

            <p>
              We support practical project execution
              with attention to quality, safety and
              operational requirements.
            </p>

          </article>


          <article class="process-card">

            <span>
              04
            </span>

            <h3>
              Deliver
            </h3>

            <p>
              We focus on reliable delivery and
              effective coordination throughout the
              project lifecycle.
            </p>

          </article>


        </div>

      </div>

    </section>


    <!-- =========================================
         CTA
    ========================================== -->

    <section class="section cta-section">

      <div class="container">

        <div class="cta-content">

          <p class="section-label">
            START YOUR PROJECT
          </p>

          <h2>
            Let's Discuss Your Next Project
          </h2>

          <p>
            Contact Ocean Wave Development Company
            Nigeria Limited to discuss your marine,
            offshore, engineering, procurement or
            industrial project requirements.
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