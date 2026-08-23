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
      eyebrow: "PROJECTS & CAPABILITIES",
      title: "Delivering Solutions Across Marine, Offshore & Industrial Operations",
      description:
        "Supporting projects through marine services, engineering, procurement, logistics, maintenance and technical expertise."
    })}


    <!-- INTRODUCTION -->

    <section class="section">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              OUR PROJECT CAPABILITIES
            </p>

            <h2>
              Experience Built Around Operational Requirements
            </h2>

          </div>

        </div>


        <div class="about-page-content">

          <p>
            Ocean Wave Development Company Nigeria Limited
            provides integrated support for projects and
            operational activities across the marine, offshore,
            oil & gas, engineering and industrial sectors.
          </p>

          <p>
            Our capabilities bring together marine operations,
            vessel support, engineering consultancy, project
            management, procurement, logistics and facility
            maintenance.
          </p>

          <p>
            We work with clients to understand project
            requirements and provide practical solutions that
            support safe, reliable and efficient execution.
          </p>

        </div>

      </div>

    </section>


    <!-- PROJECT CAPABILITIES -->

    <section class="section section-alt">

      <div class="container">

        <div class="section-heading centered">

          <p class="section-label">
            PROJECT PORTFOLIO
          </p>

          <h2>
            Areas We Support
          </h2>

          <p>
            Our multidisciplinary capabilities allow us to
            support a wide range of projects and operational
            requirements.
          </p>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <div class="service-card-icon">
              01
            </div>

            <h3>
              Marine & Offshore
            </h3>

            <p>
              Vessel charter, marine technical support,
              inspection, crewing, marine supplies and
              offshore operational support.
            </p>

            <a
              href="/pages/marine-offshore.html"
              class="btn btn-outline"
            >
              Explore Marine Services
            </a>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              02
            </div>

            <h3>
              Oil & Gas
            </h3>

            <p>
              Supporting oil and gas operations with technical,
              marine, project, procurement and logistics
              capabilities.
            </p>

            <a
              href="/pages/oil-gas.html"
              class="btn btn-outline"
            >
              Explore Oil & Gas
            </a>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              03
            </div>

            <h3>
              Engineering Projects
            </h3>

            <p>
              Engineering consultancy, technical advisory,
              assessment and project engineering support.
            </p>

            <a
              href="/pages/engineering-consultancy.html"
              class="btn btn-outline"
            >
              Engineering Services
            </a>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              04
            </div>

            <h3>
              Project Management
            </h3>

            <p>
              Planning, coordination, execution monitoring and
              project support across technical and operational
              environments.
            </p>

            <a
              href="/pages/project-management.html"
              class="btn btn-outline"
            >
              Project Management
            </a>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              05
            </div>

            <h3>
              Procurement & Logistics
            </h3>

            <p>
              Sourcing, supplier coordination, transportation,
              material handling and project logistics support.
            </p>

            <a
              href="/pages/procurement-logistics.html"
              class="btn btn-outline"
            >
              Procurement Services
            </a>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              06
            </div>

            <h3>
              Facility Maintenance
            </h3>

            <p>
              Preventive and corrective maintenance,
              inspections and technical facility support.
            </p>

            <a
              href="/pages/facility-maintenance.html"
              class="btn btn-outline"
            >
              Facility Services
            </a>

          </article>


        </div>

      </div>

    </section>


    <!-- PROJECT DELIVERY -->

    <section class="section">

      <div class="container">

        <div class="section-heading centered">

          <p class="section-label">
            PROJECT DELIVERY
          </p>

          <h2>
            From Planning to Execution
          </h2>

          <p>
            Our project support approach is designed to maintain
            clear communication, effective coordination and
            dependable execution.
          </p>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <div class="service-card-icon">
              01
            </div>

            <h3>
              Understand
            </h3>

            <p>
              We identify project objectives, technical
              requirements, operational priorities and
              deliverables.
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
              We establish the resources, activities,
              responsibilities and coordination requirements
              necessary for execution.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              03
            </div>

            <h3>
              Coordinate
            </h3>

            <p>
              We coordinate technical, marine, procurement,
              logistics and operational activities as required.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              04
            </div>

            <h3>
              Execute
            </h3>

            <p>
              Project activities are supported through
              structured execution and operational coordination.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              05
            </div>

            <h3>
              Monitor
            </h3>

            <p>
              Progress, requirements and operational issues are
              monitored to support project objectives.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              06
            </div>

            <h3>
              Deliver
            </h3>

            <p>
              We focus on completing activities according to
              agreed requirements, timelines and operational
              expectations.
            </p>

          </article>


        </div>

      </div>

    </section>


    <!-- PROJECT SECTORS -->

    <section class="section section-alt">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              INDUSTRIES WE SUPPORT
            </p>

            <h2>
              Multidisciplinary Project Support
            </h2>

          </div>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <h3>
              Marine Operations
            </h3>

            <p>
              Supporting vessel operations, marine services,
              offshore activities and related operational
              requirements.
            </p>

          </article>


          <article class="service-card">

            <h3>
              Offshore Operations
            </h3>

            <p>
              Providing technical, marine and logistics support
              for offshore projects and facilities.
            </p>

          </article>


          <article class="service-card">

            <h3>
              Oil & Gas
            </h3>

            <p>
              Supporting project and operational requirements
              within the oil and gas environment.
            </p>

          </article>


          <article class="service-card">

            <h3>
              Engineering
            </h3>

            <p>
              Providing engineering consultancy and technical
              support for projects and operational assets.
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
            START A PROJECT
          </p>

          <h2>
            Let's Discuss Your Project Requirements
          </h2>

          <p>
            Whether you require marine services, engineering,
            procurement, logistics, project management or
            facility support, Ocean Wave Development Company
            Nigeria Limited is ready to discuss your
            requirements.
          </p>

          <a
            href="/pages/contact.html"
            class="btn btn-primary"
          >
            Discuss Your Project
          </a>

        </div>

      </div>

    </section>

  </main>

  ${Footer()}

`;

setupNavigation();