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
      title: "Marine Supplies & General Supplies",
      description:
        "Reliable sourcing and supply of marine equipment, spare parts, consumables, safety products and general operational materials."
    })}


    <!-- INTRODUCTION -->

    <section class="section">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              MARINE SUPPLY SERVICES
            </p>

            <h2>
              Reliable Supplies for Marine & Offshore Operations
            </h2>

          </div>

        </div>


        <div class="about-page-content">

          <p>
            Ocean Wave Development Company Nigeria Limited
            provides marine and general supply support to
            vessel operators, offshore contractors, marine
            companies and industrial clients.
          </p>

          <p>
            We support clients with the sourcing,
            coordination and delivery of operational
            materials required for vessel maintenance,
            offshore activities and marine projects.
          </p>

          <p>
            Our supply capability is designed to help
            clients reduce procurement delays and maintain
            operational continuity.
          </p>

        </div>

      </div>

    </section>


    <!-- SUPPLY CATEGORIES -->

    <section class="section section-alt">

      <div class="container">

        <div class="section-heading centered">

          <p class="section-label">
            OUR SUPPLY CAPABILITIES
          </p>

          <h2>
            Marine & Offshore Supply Categories
          </h2>

          <p>
            We can source and coordinate a broad range of
            supplies according to vessel and project
            requirements.
          </p>

        </div>


        <div class="services-grid">


          <article class="service-card">

            <div class="service-card-icon">
              01
            </div>

            <h3>
              Deck & Mooring Equipment
            </h3>

            <p>
              Deck equipment, mooring accessories,
              ropes, shackles and other operational
              marine equipment.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              02
            </div>

            <h3>
              Marine Spare Parts
            </h3>

            <p>
              Sourcing of machinery, engine and equipment
              spare parts for marine and offshore
              operations.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              03
            </div>

            <h3>
              Tools & Workshop Equipment
            </h3>

            <p>
              Hand tools, workshop equipment and
              maintenance materials supporting vessel
              and industrial operations.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              04
            </div>

            <h3>
              PPE & Safety Equipment
            </h3>

            <p>
              Personal protective equipment and general
              safety supplies for marine and offshore
              personnel.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              05
            </div>

            <h3>
              Firefighting & Emergency Supplies
            </h3>

            <p>
              Fire safety and emergency response
              equipment and related operational supplies.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              06
            </div>

            <h3>
              Electrical & Instrumentation
            </h3>

            <p>
              Electrical components, instrumentation
              materials and related technical supplies.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              07
            </div>

            <h3>
              Engine & Machinery Supplies
            </h3>

            <p>
              Consumables and spare components supporting
              marine engines and auxiliary machinery.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              08
            </div>

            <h3>
              General Vessel Consumables
            </h3>

            <p>
              General consumables and operational materials
              required for day-to-day vessel activities.
            </p>

          </article>

        </div>

      </div>

    </section>


    <!-- PROCUREMENT PROCESS -->

    <section class="section">

      <div class="container">

        <div class="section-heading centered">

          <p class="section-label">
            OUR APPROACH
          </p>

          <h2>
            From Requirement to Delivery
          </h2>

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
              We review the client's equipment,
              material or supply requirements.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              02
            </div>

            <h3>
              Sourcing
            </h3>

            <p>
              Appropriate suppliers and sourcing
              options are identified according to
              the requirement.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              03
            </div>

            <h3>
              Coordination
            </h3>

            <p>
              Orders, specifications and delivery
              requirements are coordinated with
              relevant parties.
            </p>

          </article>


          <article class="service-card">

            <div class="service-card-icon">
              04
            </div>

            <h3>
              Delivery
            </h3>

            <p>
              Materials are coordinated for delivery
              according to the agreed project or
              operational requirements.
            </p>

          </article>

        </div>

      </div>

    </section>


    <!-- GENERAL SUPPLIES -->

    <section class="section section-alt">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              GENERAL SUPPLIES
            </p>

            <h2>
              Supporting More Than the Vessel
            </h2>

          </div>

        </div>


        <div class="about-page-content">

          <p>
            Beyond marine-specific equipment, Ocean Wave
            can support clients with general operational
            supplies required for offshore projects,
            workshops, facilities and industrial activities.
          </p>

          <p>
            Supply requirements can be assessed based on
            technical specifications, quantity, delivery
            location and project timelines.
          </p>

        </div>

      </div>

    </section>


    <!-- CTA -->

    <section class="section cta-section">

      <div class="container">

        <div class="cta-content">

          <p class="section-label">
            MARINE PROCUREMENT
          </p>

          <h2>
            Have a Marine Supply Requirement?
          </h2>

          <p>
            Send us your material or equipment
            requirements and let Ocean Wave support
            your procurement needs.
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