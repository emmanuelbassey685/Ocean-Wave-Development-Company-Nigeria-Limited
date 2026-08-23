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
      eyebrow: "ENGINEERING CONSULTANCY",
      title: "Engineering Expertise for Marine, Offshore & Industrial Operations",
      description:
        "Providing practical engineering consultancy, technical advisory and project support to help clients achieve safe, reliable and efficient operations."
    })}


    <!-- INTRODUCTION -->

    <section class="section">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              ENGINEERING CONSULTANCY
            </p>

            <h2>
              Practical Engineering Support for Complex Operations
            </h2>

          </div>

        </div>


        <div class="about-page-content">

          <p>
            Ocean Wave Development Company Nigeria Limited
            provides engineering consultancy and technical
            advisory support for clients operating across
            marine, offshore, oil & gas and industrial
            environments.
          </p>

          <p>
            Our consultancy approach combines engineering
            knowledge, operational understanding and practical
            problem-solving to support clients throughout
            project and operational activities.
          </p>

          <p>
            We can support clients with technical assessments,
            engineering advice, equipment evaluation,
            maintenance engineering and project-related
            technical requirements.
          </p>

        </div>

      </div>

    </section>


    <!-- CONSULTANCY SERVICES -->

    <section class="section section-alt">

      <div class="container">

        <div class="section-heading centered">

          <p class="section-label">
            OUR CAPABILITIES
          </p>

          <h2>
            Engineering Consultancy Services
          </h2>

          <p>
            Technical expertise and advisory support tailored
            to the requirements of marine, offshore and
            industrial operations.
          </p>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <div class="service-card-icon">
              01
            </div>

            <h3>
              Marine Engineering
            </h3>

            <p>
              Engineering support relating to vessels, marine
              systems, machinery and operational requirements.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              02
            </div>

            <h3>
              Offshore Engineering Support
            </h3>

            <p>
              Technical advisory and engineering support for
              offshore projects, facilities and marine
              operations.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              03
            </div>

            <h3>
              Mechanical Engineering
            </h3>

            <p>
              Engineering support covering mechanical
              equipment, machinery and associated operational
              systems.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              04
            </div>

            <h3>
              Technical Advisory
            </h3>

            <p>
              Practical technical advice to support engineering
              decisions, operational planning and project
              execution.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              05
            </div>

            <h3>
              Engineering Assessment
            </h3>

            <p>
              Technical assessment of equipment, systems and
              operational requirements to support informed
              decision-making.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              06
            </div>

            <h3>
              Project Engineering Support
            </h3>

            <p>
              Engineering assistance throughout project
              planning, implementation, coordination and
              technical review.
            </p>

          </article>


        </div>

      </div>

    </section>


    <!-- TECHNICAL SUPPORT AREAS -->

    <section class="section">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              TECHNICAL SUPPORT
            </p>

            <h2>
              Areas of Engineering Support
            </h2>

          </div>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <div class="service-card-icon">
              01
            </div>

            <h3>
              Vessel & Marine Systems
            </h3>

            <p>
              Technical review and support relating to vessel
              systems, machinery and marine equipment.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              02
            </div>

            <h3>
              Machinery & Equipment
            </h3>

            <p>
              Assessment and technical support for machinery,
              equipment and mechanical systems.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              03
            </div>

            <h3>
              Maintenance Engineering
            </h3>

            <p>
              Engineering input supporting maintenance
              planning, equipment reliability and operational
              continuity.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              04
            </div>

            <h3>
              Technical Documentation
            </h3>

            <p>
              Support with technical information, reports,
              specifications and engineering documentation.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              05
            </div>

            <h3>
              Inspection & Assessment
            </h3>

            <p>
              Technical assessment and inspection support for
              equipment, facilities and operational assets.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              06
            </div>

            <h3>
              Project Technical Support
            </h3>

            <p>
              Technical assistance supporting project
              coordination, implementation and engineering
              requirements.
            </p>

          </article>


        </div>

      </div>

    </section>


    <!-- ENGINEERING APPROACH -->

    <section class="section section-alt">

      <div class="container">

        <div class="section-heading centered">

          <p class="section-label">
            OUR APPROACH
          </p>

          <h2>
            Engineering Focused on Practical Results
          </h2>

          <p>
            We approach engineering consultancy with a focus
            on understanding the problem, evaluating available
            options and developing practical solutions.
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
              We first understand the client's operational,
              technical and project requirements.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              02
            </div>

            <h3>
              Assess
            </h3>

            <p>
              Relevant systems, equipment, technical
              information and operational conditions are
              assessed.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              03
            </div>

            <h3>
              Recommend
            </h3>

            <p>
              Practical engineering recommendations are
              developed based on the identified requirements.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              04
            </div>

            <h3>
              Support
            </h3>

            <p>
              We provide technical support during
              implementation and project execution where
              required.
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
            Engineering Support Built Around Your Operations
          </h2>

          <p>
            Our goal is to provide practical technical support
            that contributes to safer, more reliable and more
            efficient operations.
          </p>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <h3>
              Practical Solutions
            </h3>

            <p>
              We focus on engineering recommendations that
              address real operational requirements.
            </p>

          </article>


          <article class="service-card">

            <h3>
              Technical Understanding
            </h3>

            <p>
              Our services are designed around the technical
              demands of marine, offshore and industrial
              environments.
            </p>

          </article>


          <article class="service-card">

            <h3>
              Project Focus
            </h3>

            <p>
              We support clients from technical planning
              through implementation and operational support.
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
            ENGINEERING SUPPORT
          </p>

          <h2>
            Need Engineering Consultancy?
          </h2>

          <p>
            Contact Ocean Wave Development Company Nigeria
            Limited to discuss your engineering, technical
            advisory or project support requirements.
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