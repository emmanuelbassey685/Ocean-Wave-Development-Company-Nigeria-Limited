import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import PageHero from "../components/PageHero.js";

import "../css/variables.css";
import "../css/global.css";
import "../css/header.css";
import "../css/footer.css";
import "../css/responsive.css";
import "../css/page-hero.css";
import "../css/contact.css";


const app = document.querySelector("#app");


/* =========================================
   CONTACT INFORMATION
========================================= */

const contactInformation = [

  {
    icon: "☎",
    title: "Phone",
    value: "Contact our team",
    link: "tel:+234 80 3779 6941",
    linkText: "Call us"
  },

  {
    icon: "✉",
    title: "Email",
    value: "Send us an enquiry",
    link: "mailto:info@oceanwavedevelopment.com",
    linkText: "Send Email"
  },

  {
    icon: "⌖",
    title: "Location",
    value: "Nigeria",
    link: "#location",
    linkText: "View Location"
  },

  {
    icon: "◷",
    title: "Business Hours",
    value: "Monday – Friday",
    detail: "8:00 AM – 5:00 PM",
    link: null,
    linkText: ""
  }

];


/* =========================================
   RENDER CONTACT INFORMATION
========================================= */

function renderContactInformation() {

  return contactInformation
    .map(info => `

      <article class="contact-info-card">

        <div
          class="contact-info-icon"
          aria-hidden="true"
        >
          ${info.icon}
        </div>

        <div class="contact-info-content">

          <h3>
            ${info.title}
          </h3>

          <p>
            ${info.value}
          </p>

          ${
            info.detail
              ? `
                <span>
                  ${info.detail}
                </span>
              `
              : ""
          }

          ${
            info.link
              ? `
                <a
                  href="${info.link}"
                >
                  ${info.linkText}
                </a>
              `
              : ""
          }

        </div>

      </article>

    `)
    .join("");

}


/* =========================================
   PAGE
========================================= */

function renderPage() {

  app.innerHTML = `

    ${Header()}


    <main>

      <!-- ===================================
           HERO
      ==================================== -->

      ${PageHero({

        eyebrow: "CONTACT OCEAN WAVE",

        title:
          "Let's Build Something Reliable Together",

        description:
          "Talk to our team about your marine, offshore, oil & gas, engineering, procurement, logistics or project requirements.",

        image:
          "/images/hero/ocean-wave-hero.jpg"

      })}


      <!-- ===================================
           INTRODUCTION
      ==================================== -->

      <section class="section contact-intro">

        <div class="container">

          <div class="contact-intro-layout">

            <div class="contact-intro-content">

              <p class="section-label">
                LET'S WORK TOGETHER
              </p>

              <h2>
                Reliable Solutions Start
                With a Conversation
              </h2>

            </div>

            <div>

              <p>
                Ocean Wave Development Company Nigeria
                Limited is ready to discuss your operational,
                technical and project requirements.
              </p>

              <p>
                Whether you need marine and offshore support,
                oil and gas services, engineering solutions,
                procurement, logistics or facility support,
                our team can help develop a practical solution
                for your needs.
              </p>

            </div>

          </div>

        </div>

      </section>


      <!-- ===================================
           CONTACT INFORMATION
      ==================================== -->

      <section class="section contact-information">

        <div class="container">

          <div class="section-heading contact-heading">

            <div>

              <p class="section-label">
                CONTACT INFORMATION
              </p>

              <h2>
                Get in Touch With Our Team
              </h2>

            </div>

            <p>
              Reach out through any of the channels below
              and our team will respond to your enquiry.
            </p>

          </div>


          <div class="contact-info-grid">

            ${renderContactInformation()}

          </div>

        </div>

      </section>


      <!-- ===================================
           REQUEST A QUOTE
      ==================================== -->

      <section class="section quote-section">

        <div class="container">

          <div class="quote-layout">


            <div class="quote-content">

              <p class="section-label">
                REQUEST A QUOTE
              </p>

              <h2>
                Tell Us About Your
                Project or Requirement
              </h2>

              <p>
                Provide some information about your
                requirements and our team can better
                understand how to support you.
              </p>

              <div class="quote-note">

                <strong>
                  Need Marine & Offshore Support?
                </strong>

                <p>
                  Include your vessel, offshore,
                  technical or marine requirements
                  in the project details section.
                </p>

              </div>

            </div>


            <form
              class="contact-form"
              id="quoteForm"
              novalidate
            >

              <div class="form-grid">

                <div class="form-group">

                  <label for="fullName">
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Your full name"
                    autocomplete="name"
                    required
                  >

                </div>


                <div class="form-group">

                  <label for="company">
                    Company
                  </label>

                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company name"
                    autocomplete="organization"
                  >

                </div>


                <div class="form-group">

                  <label for="email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    autocomplete="email"
                    required
                  >

                </div>


                <div class="form-group">

                  <label for="phone">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+234..."
                    autocomplete="tel"
                    required
                  >

                </div>


                <div class="form-group form-group-full">

                  <label for="service">
                    Service Required
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                  >

                    <option
                      value=""
                      selected
                      disabled
                    >
                      Select a service
                    </option>

                    <option value="marine-offshore">
                      Marine & Offshore
                    </option>

                    <option value="oil-gas">
                      Oil & Gas
                    </option>

                    <option value="project-management">
                      Project Management
                    </option>

                    <option value="procurement-logistics">
                      Procurement & Logistics
                    </option>

                    <option value="facility-maintenance">
                      Facility Maintenance
                    </option>

                    <option value="engineering-consultancy">
                      Engineering Consultancy
                    </option>

                    <option value="other">
                      Other Enquiry
                    </option>

                  </select>

                </div>


                <div class="form-group form-group-full">

                  <label for="projectDetails">
                    Project / Requirement Details
                  </label>

                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows="7"
                    placeholder="Tell us about your project, service requirement or enquiry..."
                    required
                  ></textarea>

                </div>

              </div>


              <button
                type="submit"
                class="btn btn-primary form-submit"
              >
                Submit Enquiry
              </button>


              <p
                class="form-message"
                id="formMessage"
                role="status"
                aria-live="polite"
              ></p>

            </form>


          </div>

        </div>

      </section>


      <!-- ===================================
           LOCATION
      ==================================== -->

      <section
        class="section location-section"
        id="location"
      >

        <div class="container">

          <div class="location-layout">

            <div class="location-content">

              <p class="section-label">
                OUR LOCATION
              </p>

              <h2>
                Serving Clients Across Nigeria
              </h2>

              <p>
                Ocean Wave Development Company Nigeria
                Limited supports clients across marine,
                offshore, oil & gas and engineering
                environments.
              </p>

              <p>
                Our team can coordinate project and
                operational requirements across relevant
                locations based on client needs.
              </p>

            </div>


            <div
              class="location-map"
              aria-label="Ocean Wave Development Company location"
            >

              <div class="location-map-content">

                <span
                  class="location-pin"
                  aria-hidden="true"
                >
                  ⌖
                </span>

                <h3>
                  Nigeria
                </h3>

                <p>
                  Ocean Wave Development Company
                  Nigeria Limited
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      <!-- ===================================
           MARINE & OFFSHORE CTA
      ==================================== -->

      <section class="section marine-contact-cta">

        <div class="container">

          <div class="marine-contact-card">

            <div>

              <p class="section-label">
                MARINE & OFFSHORE ENQUIRIES
              </p>

              <h2>
                Need Marine or Offshore Support?
              </h2>

              <p>
                Speak with our team about vessel support,
                charter, marine technical services,
                crewing, marine supplies and chandelling.
              </p>

            </div>

            <a
              href="/pages/marine-offshore.html"
              class="btn btn-primary"
            >
              Explore Marine & Offshore
            </a>

          </div>

        </div>

      </section>


    </main>


    ${Footer()}

  `;

}


/* =========================================
   FORM HANDLING
========================================= */

function setupQuoteForm() {

  const form =
    document.querySelector("#quoteForm");

  const message =
    document.querySelector("#formMessage");


  if (!form || !message) return;


  form.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      if (!form.checkValidity()) {

        form.reportValidity();

        return;

      }


      const formData =
        new FormData(form);


      const name =
        formData.get("fullName");


      message.textContent =
        `Thank you, ${name}. Your enquiry has been received. Our team will contact you shortly.`;

      message.classList.add(
        "success"
      );


      form.reset();

    }
  );

}


/* =========================================
   INITIALIZE
========================================= */

renderPage();

setupQuoteForm();