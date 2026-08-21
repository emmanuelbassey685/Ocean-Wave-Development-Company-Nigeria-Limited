import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import PageHero from "../components/PageHero.js";
import VesselCard from "../components/VesselCard.js";
import setupNavigation from "../components/navigationBehavior.js";

import vessels from "../data/vessels.js";

import "../css/variables.css";
import "../css/global.css";
import "../css/header.css";
import "../css/footer.css";
import "../css/responsive.css";
import "../css/vessels.css";
import "../css/page-hero.css";


const app = document.querySelector("#app");


function renderVessels(filter = "all") {

  const filteredVessels =
    filter === "all"
      ? vessels
      : vessels.filter(
          vessel =>
            vessel.category === filter
        );

  return filteredVessels
    .map(vessel => VesselCard(vessel))
    .join("");

}


app.innerHTML = `

  ${Header()}

  <main>


    ${PageHero({
      eyebrow: "VESSEL CHARTER",
      title:
        "Marine Assets for Demanding Offshore Operations",

      description:
        "Access suitable vessels and offshore marine assets for supply, towing, survey, subsea, construction and other specialized operations."
    })}


    <!-- INTRODUCTION -->

    <section class="section vessel-introduction">

      <div class="container">

        <div class="vessel-introduction-grid">

          <div>

            <p class="section-label">
              VESSEL CHARTER SOLUTIONS
            </p>

            <h2>
              The Right Vessel
              for the Right Operation
            </h2>

          </div>


          <div>

            <p>
              Ocean Wave Development Company Nigeria
              Limited supports vessel charter requirements
              across a broad range of marine and offshore
              operations.
            </p>

            <p>
              Our vessel charter solutions are designed
              around operational requirements, project
              specifications, location, duration and
              technical needs.
            </p>

          </div>

        </div>

      </div>

    </section>


    <!-- VESSEL CATALOGUE -->

    <section class="section vessel-catalogue">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              OUR FLEET CATEGORIES
            </p>

            <h2>
              Vessel Charter Options
            </h2>

          </div>

          <p>
            Explore the marine and offshore asset
            categories available through our
            chartering support.
          </p>

        </div>


        <div class="vessel-filters">        

        <button
          class="vessel-filter active"
          data-filter="all"
        >
          All
        </button>

        <button
          class="vessel-filter"
          data-filter="supply"
        >
          PSV
        </button>

        <button
          class="vessel-filter"
          data-filter="towing"
        >
          AHTS & Tugs
        </button>

        <button
          class="vessel-filter"
          data-filter="subsea"
        >
          ROV
        </button>

        <button
          class="vessel-filter"
          data-filter="survey"
        >
          Survey
        </button>

        <button
          class="vessel-filter"
          data-filter="rigs"
        >
          Rigs
        </button>

        <button
          class="vessel-filter"
          data-filter="construction"
        >
          Construction
        </button>

      </div>


      <div
        class="vessel-grid"
        id="vesselGrid"
      >

        ${renderVessels()}

      </div>

      </div>

    </section>


    <!-- CHARTER PROCESS -->

    <section class="section charter-process">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              HOW IT WORKS
            </p>

            <h2>
              Simple Vessel Charter Process
            </h2>

          </div>

        </div>


        <div class="charter-process-grid">


          <div class="process-step">

            <span>01</span>

            <h3>
              Tell Us Your Requirement
            </h3>

            <p>
              Share your vessel type, project
              location, duration and operational
              requirements.
            </p>

          </div>


          <div class="process-step">

            <span>02</span>

            <h3>
              Vessel Matching
            </h3>

            <p>
              We identify suitable vessel options
              based on your technical and
              operational requirements.
            </p>

          </div>


          <div class="process-step">

            <span>03</span>

            <h3>
              Review & Selection
            </h3>

            <p>
              Review available vessel options,
              specifications and commercial
              arrangements.
            </p>

          </div>


          <div class="process-step">

            <span>04</span>

            <h3>
              Charter & Mobilization
            </h3>

            <p>
              Proceed with the selected vessel
              and coordinate the required
              mobilization arrangements.
            </p>

          </div>


        </div>

      </div>

    </section>


    <!-- CTA -->

    <section class="section charter-cta">

      <div class="container">

        <div class="charter-cta-box">

          <div>

            <p class="section-label">
              NEED A VESSEL?
            </p>

            <h2>
              Let's Discuss Your
              Vessel Requirement
            </h2>

            <p>
              Tell us what you need and our team
              can help identify a suitable marine
              asset for your operation.
            </p>

          </div>


          <a
            href="/pages/contact.html?service=vessel-charter"
            class="btn btn-light"
          >
            Request a Vessel
          </a>

        </div>

      </div>

    </section>


  </main>


  ${Footer()}

`;

const vesselGrid =
  document.querySelector("#vesselGrid");

const filterButtons =
  document.querySelectorAll(".vessel-filter");


filterButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      const filter =
        button.dataset.filter;

      filterButtons.forEach(item => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      vesselGrid.innerHTML =
        renderVessels(filter);

    }
  );

});

setupNavigation();