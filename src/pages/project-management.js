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
      eyebrow: "PROJECT MANAGEMENT",
      title: "Delivering Projects with Structure, Control & Reliability",
      description:
        "Providing coordinated project management support for marine, offshore, oil & gas, engineering and industrial projects."
    })}


    <!-- INTRODUCTION -->

    <section class="section">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              PROJECT MANAGEMENT
            </p>

            <h2>
              Coordinated Project Delivery from Planning to Completion
            </h2>

          </div>

        </div>


        <div class="about-page-content">

          <p>
            Ocean Wave Development Company Nigeria Limited
            provides project management support designed to
            help clients plan, coordinate and execute projects
            effectively.
          </p>

          <p>
            Our approach brings together technical coordination,
            procurement, logistics, resources, quality, safety
            and project monitoring to support controlled and
            efficient project delivery.
          </p>

          <p>
            We support projects across marine, offshore, oil &
            gas, engineering and industrial environments,
            working with clients and project stakeholders to
            maintain clear communication, accountability and
            operational focus.
          </p>

        </div>

      </div>

    </section>


    <!-- PROJECT MANAGEMENT CAPABILITIES -->

    <section class="section section-alt">

      <div class="container">

        <div class="section-heading centered">

          <p class="section-label">
            OUR CAPABILITIES
          </p>

          <h2>
            Project Management Services
          </h2>

          <p>
            Practical project coordination and management
            support throughout the project lifecycle.
          </p>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <div class="service-card-icon">
              01
            </div>

            <h3>
              Project Planning & Scheduling
            </h3>

            <p>
              Development of project plans, schedules,
              activities, milestones and delivery priorities
              aligned with project objectives.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              02
            </div>

            <h3>
              Project Coordination
            </h3>

            <p>
              Coordination of project teams, contractors,
              suppliers and other stakeholders to maintain
              effective project execution.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              03
            </div>

            <h3>
              Technical Coordination
            </h3>

            <p>
              Coordination of engineering and technical
              activities required to support project
              implementation and operational requirements.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              04
            </div>

            <h3>
              Procurement Coordination
            </h3>

            <p>
              Support for procurement activities, material
              requirements, supplier coordination and delivery
              tracking.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              05
            </div>

            <h3>
              Logistics & Resource Management
            </h3>

            <p>
              Coordination of equipment, materials, personnel
              and logistics required to keep project activities
              progressing efficiently.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              06
            </div>

            <h3>
              HSE & Quality Coordination
            </h3>

            <p>
              Support for health, safety, environmental and
              quality requirements throughout project
              activities.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              07
            </div>

            <h3>
              Progress Monitoring & Reporting
            </h3>

            <p>
              Monitoring project activities, milestones,
              deliverables and progress while providing clear
              project reporting.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              08
            </div>

            <h3>
              Project Closeout
            </h3>

            <p>
              Support for completion, documentation,
              handover, outstanding activities and project
              closeout requirements.
            </p>

          </article>


        </div>

      </div>

    </section>


    <!-- DELIVERY APPROACH -->

    <section class="section">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              OUR APPROACH
            </p>

            <h2>
              Structured Project Delivery
            </h2>

          </div>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <div class="service-card-icon">
              01
            </div>

            <h3>
              Plan
            </h3>

            <p>
              Define project objectives, scope, resources,
              schedules, deliverables and priorities.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              02
            </div>

            <h3>
              Coordinate
            </h3>

            <p>
              Align project teams, contractors, suppliers,
              technical resources and stakeholders.
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
              Support controlled implementation of project
              activities in accordance with approved plans.
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
              Track progress, resources, quality, safety,
              milestones and project performance.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              05
            </div>

            <h3>
              Closeout
            </h3>

            <p>
              Complete outstanding activities, documentation,
              handover and project closeout requirements.
            </p>

          </article>


        </div>

      </div>

    </section>


    <!-- WHY OCEAN WAVE -->

    <section class="section section-alt">

      <div class="container">

        <div class="section-heading centered">

          <p class="section-label">
            WHY OCEAN WAVE
          </p>

          <h2>
            Focused on Reliable Project Execution
          </h2>

          <p>
            Our project management approach is built around
            coordination, communication, accountability and
            practical execution.
          </p>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <h3>
              Integrated Coordination
            </h3>

            <p>
              Connecting technical, procurement, logistics
              and operational activities within the project.
            </p>

          </article>


          <article class="service-card">

            <h3>
              Clear Communication
            </h3>

            <p>
              Maintaining effective communication between
              clients, project teams and other stakeholders.
            </p>

          </article>


          <article class="service-card">

            <h3>
              Operational Focus
            </h3>

            <p>
              Supporting practical project execution with
              attention to schedule, resources, safety and
              quality.
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
            PROJECT SUPPORT
          </p>

          <h2>
            Have a Project You Need to Deliver?
          </h2>

          <p>
            Contact Ocean Wave Development Company Nigeria
            Limited to discuss your project management and
            execution requirements.
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