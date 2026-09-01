import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import setupNavigation from "../components/navigationBehavior.js";

import "../css/variables.css";
import "../css/global.css";
import "../css/header.css";
import "../css/footer.css";
import "../css/responsive.css";
import "../css/careers.css";

const app = document.querySelector("#app");

function renderCareersPage() {
  app.innerHTML = `

    ${Header()}

    <main>

      <!-- =========================================
           CAREERS HERO
      ========================================== -->

      <section class="careers-hero">

        <div class="careers-hero-overlay"></div>

        <div class="container careers-hero-content">

          <p class="section-label">
            CAREERS AT OCEAN WAVE
          </p>

          <h1>
            Build Your Career
            <span>With Ocean Wave</span>
          </h1>

          <p>
            Join a team committed to excellence, safety,
            innovation and reliable solutions across the
            marine, offshore, oil & gas and engineering
            sectors.
          </p>

          <a
            href="#career-opportunities"
            class="btn btn-primary"
          >
            Explore Opportunities
          </a>

        </div>

      </section>


      <!-- =========================================
           INTRODUCTION
      ========================================== -->

      <section class="section careers-intro">

        <div class="container careers-intro-grid">

          <div class="careers-intro-content">

            <p class="section-label">
              JOIN OUR TEAM
            </p>

            <h2>
              Grow With a Company
              Built for Excellence
            </h2>

            <p>
              At Ocean Wave Development Company Nigeria
              Limited, we believe our people are at the
              heart of everything we do.
            </p>

            <p>
              We are committed to building a professional
              and collaborative work environment where
              talented individuals can develop their skills,
              contribute their expertise and grow their
              careers.
            </p>

            <p>
              Our operations span marine and offshore
              services, oil & gas support, engineering,
              project management, procurement, logistics
              and facility maintenance.
            </p>

          </div>


          <div class="careers-intro-card">

            <div class="career-highlight">

              <span class="career-icon">
                ⚓
              </span>

              <h3>
                Professional Growth
              </h3>

              <p>
                Opportunities to develop your technical,
                professional and leadership capabilities.
              </p>

            </div>


            <div class="career-highlight">

              <span class="career-icon">
                🛡
              </span>

              <h3>
                Safety First
              </h3>

              <p>
                A strong commitment to safety, quality and
                responsible operations.
              </p>

            </div>


            <div class="career-highlight">

              <span class="career-icon">
                🤝
              </span>

              <h3>
                Teamwork
              </h3>

              <p>
                A collaborative environment where
                expertise and ideas are valued.
              </p>

            </div>

          </div>

        </div>

      </section>


      <!-- =========================================
           WHY WORK WITH US
      ========================================== -->

      <section class="section careers-values">

        <div class="container">

          <div class="section-heading">

            <p class="section-label">
              WHY WORK WITH US
            </p>

            <h2>
              A Workplace Where You Can Make an Impact
            </h2>

            <p>
              We provide opportunities for professionals
              who are passionate about delivering quality
              solutions and making a meaningful contribution
              to our operations.
            </p>

          </div>


          <div class="career-values-grid">

            <article class="career-value-card">

              <span class="career-value-number">
                01
              </span>

              <h3>
                Career Development
              </h3>

              <p>
                Develop your knowledge and experience
                through challenging projects and
                professional opportunities.
              </p>

            </article>


            <article class="career-value-card">

              <span class="career-value-number">
                02
              </span>

              <h3>
                Technical Excellence
              </h3>

              <p>
                Work alongside professionals across
                marine, engineering, offshore and
                energy-related disciplines.
              </p>

            </article>


            <article class="career-value-card">

              <span class="career-value-number">
                03
              </span>

              <h3>
                Safety & Responsibility
              </h3>

              <p>
                Be part of an organization that places
                safety, integrity and responsible
                operations at the forefront.
              </p>

            </article>


            <article class="career-value-card">

              <span class="career-value-number">
                04
              </span>

              <h3>
                Professional Culture
              </h3>

              <p>
                Join a team that values professionalism,
                accountability, collaboration and
                continuous improvement.
              </p>

            </article>

          </div>

        </div>

      </section>


      <!-- =========================================
           CAREER OPPORTUNITIES
      ========================================== -->

      <section
        class="section career-opportunities"
        id="career-opportunities"
      >

        <div class="container">

          <div class="section-heading">

            <p class="section-label">
              CAREER OPPORTUNITIES
            </p>

            <h2>
              Explore Opportunities With Us
            </h2>

            <p>
              We welcome applications from qualified and
              motivated professionals across our areas of
              operation.
            </p>

          </div>


          <div class="career-opportunities-grid">

            <article class="career-job-card">

              <div class="job-card-top">
                <span class="job-category">
                  MARINE & OFFSHORE
                </span>
              </div>

              <h3>
                Marine Engineering
              </h3>

              <p>
                Opportunities for marine engineers and
                technical professionals supporting vessel
                and offshore operations.
              </p>

              <a
                href="#apply"
                class="job-link"
                data-position="Marine Engineering"
              >
                Apply for Position →
              </a>

            </article>


            <article class="career-job-card">

              <div class="job-card-top">
                <span class="job-category">
                  ENGINEERING
                </span>
              </div>

              <h3>
                Mechanical & Electrical Engineering
              </h3>

              <p>
                Technical opportunities supporting
                engineering projects, equipment and
                facility operations.
              </p>

              <a
                href="#apply"
                class="job-link"
                data-position="Mechanical & Electrical Engineering"
              >
                Apply for Position →
              </a>

            </article>


            <article class="career-job-card">

              <div class="job-card-top">
                <span class="job-category">
                  HSE
                </span>
              </div>

              <h3>
                HSE & Safety
              </h3>

              <p>
                Opportunities for professionals committed
                to maintaining high standards of health,
                safety and environmental performance.
              </p>

              <a
                href="#apply"
                class="job-link"
                data-position="HSE & Safety"
              >
                Apply for Position →
              </a>

            </article>


            <article class="career-job-card">

              <div class="job-card-top">
                <span class="job-category">
                  OPERATIONS
                </span>
              </div>

              <h3>
                Vessel Operations & Crewing
              </h3>

              <p>
                Opportunities within vessel operations,
                crew management and marine support
                services.
              </p>

              <a
                href="#apply"
                class="job-link"
                data-position="Vessel Operations & Crewing"
              >
                Apply for Position →
              </a>

            </article>


            <article class="career-job-card">

              <div class="job-card-top">
                <span class="job-category">
                  PROJECTS
                </span>
              </div>

              <h3>
                Project Management
              </h3>

              <p>
                Join professionals responsible for
                coordinating and delivering projects
                efficiently and professionally.
              </p>

              <a
                href="#apply"
                class="job-link"
                data-position="Project Management"
              >
                Apply for Position →
              </a>

            </article>


            <article class="career-job-card">

              <div class="job-card-top">
                <span class="job-category">
                  SUPPLY CHAIN
                </span>
              </div>

              <h3>
                Procurement & Logistics
              </h3>

              <p>
                Opportunities supporting procurement,
                materials management, logistics and
                supply-chain operations.
              </p>

              <a
                href="#apply"
                class="job-link"
                data-position="Procurement & Logistics"
              >
                Apply for Position →
              </a>

            </article>

          </div>

        </div>

      </section>


      <!-- =========================================
           NO CURRENT VACANCIES
      ========================================== -->

      <section class="career-notice">

        <div class="container">

          <div class="career-notice-box">

            <div>

              <p class="section-label">
                FUTURE OPPORTUNITIES
              </p>

              <h2>
                Don't See the Right Position?
              </h2>

              <p>
                We are always interested in connecting
                with talented professionals. You may
                submit your CV for consideration for
                future opportunities.
              </p>

            </div>

            <a
              href="#apply"
              class="btn btn-secondary"
            >
              Submit Your CV
            </a>

          </div>

        </div>

      </section>


      <!-- =========================================
           APPLICATION FORM
      ========================================== -->

      <section
        class="section career-application"
        id="apply"
      >

        <div class="container career-application-grid">

          <div class="application-intro">

            <p class="section-label">
              JOIN OCEAN WAVE
            </p>

            <h2>
              Submit Your Application
            </h2>

            <p>
              Tell us about your experience, expertise and
              career interests. Our team can review your
              information when suitable opportunities
              become available.
            </p>

            <div class="application-contact">

              <strong>
                Career Opportunities
              </strong>

              <span>
                Ocean Wave Development Company Nigeria Limited
              </span>

            </div>

          </div>


          <form
            class="career-form"
            id="careerForm"
          >

            <div class="form-row">

              <div class="form-group">

                <label for="fullName">
                  Full Name
                </label>

                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  required
                />

              </div>


              <div class="form-group">

                <label for="email">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />

              </div>

            </div>


            <div class="form-row">

              <div class="form-group">

                <label for="phone">
                  Phone Number
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                />

              </div>


              <div class="form-group">

                <label for="position">
                  Area of Interest
                </label>

                <select
                  id="position"
                  name="position"
                  required
                >

                  <option value="">
                    Select an area
                  </option>

                  <option value="Marine Engineering">
                    Marine Engineering
                  </option>

                  <option value="Mechanical & Electrical Engineering">
                    Mechanical & Electrical Engineering
                  </option>

                  <option value="HSE & Safety">
                    HSE & Safety
                  </option>

                  <option value="Vessel Operations & Crewing">
                    Vessel Operations & Crewing
                  </option>

                  <option value="Project Management">
                    Project Management
                  </option>

                  <option value="Procurement & Logistics">
                    Procurement & Logistics
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>

            </div>


            <div class="form-group">

              <label for="message">
                Cover Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell us briefly about your experience and career interests"
                required
              ></textarea>

            </div>


            <div class="form-group">

              <label for="cv">
                CV / Resume
              </label>

              <input
                type="file"
                id="cv"
                name="cv"
                accept=".pdf,.doc,.docx"
              />

              <small>
                Accepted formats: PDF, DOC or DOCX.
              </small>

            </div>


            <button
              type="submit"
              class="btn btn-primary"
            >
              Submit Application
            </button>

            <p
              class="form-message"
              id="careerFormMessage"
              aria-live="polite"
            ></p>

          </form>

        </div>

      </section>


      <!-- =========================================
           FINAL CTA
      ========================================== -->

      <section class="career-final-cta">

        <div class="container">

          <div class="career-final-content">

            <p class="section-label">
              YOUR FUTURE STARTS HERE
            </p>

            <h2>
              Be Part of the Ocean Wave Journey
            </h2>

            <p>
              Bring your skills, experience and ambition
              to a growing company delivering reliable
              solutions across the marine, offshore,
              oil & gas and engineering sectors.
            </p>

            <a
              href="#apply"
              class="btn btn-primary"
            >
              Join Our Team
            </a>

          </div>

        </div>

      </section>

    </main>

    ${Footer()}
  `;

  setupCareerForm();
}


/* =========================================
   CAREER FORM
========================================= */

function setupCareerForm() {

  const form =
    document.querySelector("#careerForm");

  const message =
    document.querySelector("#careerFormMessage");

  const position =
    document.querySelector("#position");

  if (!form) return;


  /* Position selection from job cards */

  document
    .querySelectorAll(".job-link")
    .forEach((link) => {

      link.addEventListener("click", () => {

        const selectedPosition =
          link.dataset.position;

        if (selectedPosition) {
          position.value = selectedPosition;
        }

      });

    });


  /* Form submission */

  form.addEventListener("submit", (event) => {

    event.preventDefault();

    message.textContent =
      "Thank you for your interest in Ocean Wave. Your application details have been received on this form.";

    message.classList.add("success");

    form.reset();

  });

}


/* =========================================
   RENDER PAGE
========================================= */

renderCareersPage();


/* =========================================
   INITIALIZE NAVIGATION
========================================= */

setupNavigation();