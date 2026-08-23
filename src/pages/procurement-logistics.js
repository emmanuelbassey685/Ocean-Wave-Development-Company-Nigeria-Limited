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
      eyebrow: "PROCUREMENT & LOGISTICS",
      title: "Reliable Procurement & Logistics Support",
      description:
        "Providing dependable sourcing, procurement, transportation and logistics support for marine, offshore, oil & gas, engineering and industrial operations."
    })}


    <!-- INTRODUCTION -->

    <section class="section">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              PROCUREMENT & LOGISTICS
            </p>

            <h2>
              Connecting Requirements with Reliable Supply
            </h2>

          </div>

        </div>


        <div class="about-page-content">

          <p>
            Ocean Wave Development Company Nigeria Limited
            provides procurement and logistics support to
            clients operating across marine, offshore, oil &
            gas, engineering and industrial environments.
          </p>

          <p>
            We support clients in sourcing equipment, materials,
            spare parts, consumables and other operational
            requirements while coordinating the logistics
            necessary for timely delivery.
          </p>

          <p>
            Our approach focuses on understanding project and
            operational requirements, identifying suitable
            supply sources and coordinating delivery efficiently
            from supplier to final destination.
          </p>

        </div>

      </div>

    </section>


    <!-- PROCUREMENT SERVICES -->

    <section class="section section-alt">

      <div class="container">

        <div class="section-heading centered">

          <p class="section-label">
            PROCUREMENT
          </p>

          <h2>
            Procurement Services
          </h2>

          <p>
            Supporting clients with sourcing and procurement
            of materials and equipment required for efficient
            operations.
          </p>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <div class="service-card-icon">
              01
            </div>

            <h3>
              Marine Equipment & Spares
            </h3>

            <p>
              Sourcing of marine equipment, spare parts and
              operational components required for vessel
              maintenance and operations.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              02
            </div>

            <h3>
              Offshore Equipment
            </h3>

            <p>
              Procurement support for equipment and materials
              required for offshore projects and marine
              operations.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              03
            </div>

            <h3>
              Technical Materials
            </h3>

            <p>
              Sourcing of engineering materials, tools,
              components and technical supplies based on
              project requirements.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              04
            </div>

            <h3>
              General Supplies
            </h3>

            <p>
              Supply of general operational materials,
              consumables and support items for marine and
              industrial activities.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              05
            </div>

            <h3>
              Vendor Coordination
            </h3>

            <p>
              Coordination with suppliers and vendors to
              support quotations, purchasing, documentation
              and delivery requirements.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              06
            </div>

            <h3>
              Material Sourcing
            </h3>

            <p>
              Identification and sourcing of suitable materials
              according to client specifications, quantity and
              delivery requirements.
            </p>

          </article>


        </div>

      </div>

    </section>


    <!-- LOGISTICS SERVICES -->

    <section class="section">

      <div class="container">

        <div class="section-heading centered">

          <p class="section-label">
            LOGISTICS
          </p>

          <h2>
            Logistics & Delivery Support
          </h2>

          <p>
            Coordinating the movement and delivery of materials,
            equipment and supplies to the required destination.
          </p>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <div class="service-card-icon">
              01
            </div>

            <h3>
              Transportation Coordination
            </h3>

            <p>
              Coordination of transportation requirements for
              materials, equipment and project resources.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              02
            </div>

            <h3>
              Freight Coordination
            </h3>

            <p>
              Support for freight and cargo movement to help
              ensure materials reach their intended destination
              efficiently.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              03
            </div>

            <h3>
              Warehousing & Storage
            </h3>

            <p>
              Coordination of appropriate storage and handling
              arrangements for materials and equipment.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              04
            </div>

            <h3>
              Material Delivery
            </h3>

            <p>
              Coordinated delivery of project materials,
              equipment and supplies to designated locations.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              05
            </div>

            <h3>
              Offshore Delivery Support
            </h3>

            <p>
              Logistics coordination for delivering materials
              and supplies to vessels, offshore facilities and
              project locations.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              06
            </div>

            <h3>
              Delivery Tracking
            </h3>

            <p>
              Monitoring of material movement and delivery
              progress to support visibility and accountability.
            </p>

          </article>


        </div>

      </div>

    </section>


    <!-- PROCUREMENT PROCESS -->

    <section class="section section-alt">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              OUR PROCESS
            </p>

            <h2>
              From Requirement to Delivery
            </h2>

          </div>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <div class="service-card-icon">
              01
            </div>

            <h3>
              Requirement
            </h3>

            <p>
              We understand the client's technical,
              operational and project requirements.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              02
            </div>

            <h3>
              Source
            </h3>

            <p>
              Suitable suppliers and sourcing options are
              identified based on the required specifications.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              03
            </div>

            <h3>
              Evaluate
            </h3>

            <p>
              Available options are reviewed against
              specifications, availability and delivery
              requirements.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              04
            </div>

            <h3>
              Procure
            </h3>

            <p>
              Procurement activities are coordinated with
              suppliers and relevant stakeholders.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              05
            </div>

            <h3>
              Deliver
            </h3>

            <p>
              Logistics and delivery are coordinated to move
              materials and equipment to the required location.
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
            Procurement Built Around Operational Needs
          </h2>

          <p>
            We focus on dependable sourcing, effective
            coordination and timely delivery to support
            continuous operations.
          </p>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <h3>
              Reliable Sourcing
            </h3>

            <p>
              Supporting clients in identifying suitable
              supply sources for required materials and
              equipment.
            </p>

          </article>


          <article class="service-card">

            <h3>
              Coordinated Delivery
            </h3>

            <p>
              Connecting procurement activities with logistics
              and delivery requirements.
            </p>

          </article>


          <article class="service-card">

            <h3>
              Operational Support
            </h3>

            <p>
              Helping clients maintain access to materials,
              equipment and supplies needed for their
              operations.
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
            PROCUREMENT & LOGISTICS SUPPORT
          </p>

          <h2>
            Need Procurement or Logistics Support?
          </h2>

          <p>
            Contact Ocean Wave Development Company Nigeria
            Limited to discuss your procurement, sourcing,
            transportation or logistics requirements.
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