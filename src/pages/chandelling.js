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
      title: "Chandelling Services",
      description:
        "Reliable vessel chandelling and provisioning support for marine, offshore and port operations." 
    })}


    <!-- INTRODUCTION -->

    <section class="section">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              VESSEL CHANDLING
            </p>

            <h2>
              Keeping Vessels Supplied & Operational
            </h2>

          </div>

        </div>

        <div class="about-page-content">

          <p>
            Ocean Wave Development Company Nigeria Limited
            provides chandelling and vessel provisioning
            support to marine and offshore operators.
          </p>

          <p>
            We assist vessel operators and offshore projects
            with the sourcing and delivery of provisions,
            consumables, deck stores, engine stores and
            general vessel requirements.
          </p>

          <p>
            Our objective is to provide dependable supply
            coordination that helps vessels maintain their
            operations while in port, at anchorage or during
            offshore activities.
          </p>

        </div>

      </div>

    </section>


    <!-- CHANDLING SERVICES -->

    <section class="section section-alt">

      <div class="container">

        <div class="section-heading centered">

          <p class="section-label">
            OUR CHANDLING CAPABILITIES
          </p>

          <h2>
            Vessel Provisioning & Stores
          </h2>

          <p>
            Flexible chandelling support based on vessel,
            crew and operational requirements.
          </p>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <div class="service-card-icon">
              01
            </div>

            <h3>
              Fresh Provisions
            </h3>

            <p>
              Supply coordination for fresh food,
              vegetables, fruits and other provisions
              required for vessel operations.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              02
            </div>

            <h3>
              Dry Provisions
            </h3>

            <p>
              Sourcing and delivery of packaged and
              dry food items for vessel crews and
              offshore personnel.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              03
            </div>

            <h3>
              Deck Stores
            </h3>

            <p>
              General deck consumables, ropes, tools,
              cleaning materials and other operational
              deck requirements.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              04
            </div>

            <h3>
              Engine Stores
            </h3>

            <p>
              Consumables, maintenance materials and
              general engine-room supplies required
              for vessel operations.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              05
            </div>

            <h3>
              Cabin & Galley Supplies
            </h3>

            <p>
              General accommodation, galley and
              housekeeping supplies supporting
              crew welfare and vessel operations.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              06
            </div>

            <h3>
              Safety & PPE Supplies
            </h3>

            <p>
              General personal protective equipment
              and safety-related consumables based
              on operational requirements.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              07
            </div>

            <h3>
              Bonded & General Stores
            </h3>

            <p>
              Coordination of general vessel stores
              and other approved operational
              requirements.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              08
            </div>

            <h3>
              Offshore Supply Support
            </h3>

            <p>
              Provisioning and supply coordination
              for offshore vessels and marine projects.
            </p>

          </article>

        </div>

      </div>

    </section>


    <!-- SUPPLY PROCESS -->

    <section class="section">

      <div class="container">

        <div class="section-heading centered">

          <p class="section-label">
            OUR APPROACH
          </p>

          <h2>
            Simple, Reliable Supply Coordination
          </h2>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <div class="service-card-icon">
              01
            </div>

            <h3>
              Receive Requirement
            </h3>

            <p>
              We receive the vessel's provision,
              stores or consumable requirements.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              02
            </div>

            <h3>
              Source & Prepare
            </h3>

            <p>
              Required items are sourced and prepared
              according to the agreed specifications.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              03
            </div>

            <h3>
              Quality & Quantity Check
            </h3>

            <p>
              Supplies are coordinated against the
              requested quantities and specifications.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              04
            </div>

            <h3>
              Delivery to Vessel
            </h3>

            <p>
              Delivery is coordinated according to
              the vessel's location and agreed schedule.
            </p>

          </article>

        </div>

      </div>

    </section>


    <!-- PORT & OFFSHORE SUPPORT -->

    <section class="section section-alt">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              PORT & OFFSHORE SUPPORT
            </p>

            <h2>
              Responsive Support When Your Vessel Needs It
            </h2>

          </div>

        </div>


        <div class="about-page-content">

          <p>
            Vessel schedules can change quickly. Reliable
            supply coordination is therefore important to
            maintaining operational continuity.
          </p>

          <p>
            Ocean Wave works with clients to understand
            vessel schedules, supply requirements and
            delivery locations so that chandelling
            activities can be properly coordinated.
          </p>

          <p>
            Services can be arranged for vessels in port,
            at anchorage or supporting offshore operations,
            subject to location and operational requirements.
          </p>

        </div>

      </div>

    </section>


    <!-- CTA -->

    <section class="section cta-section">

      <div class="container">

        <div class="cta-content">

          <p class="section-label">
            VESSEL PROVISIONING
          </p>

          <h2>
            Need Chandelling Support?
          </h2>

          <p>
            Contact Ocean Wave Development Company Nigeria
            Limited with your vessel provisioning and
            chandelling requirements.
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