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


const technicalServices = [
  {
    number: "01",
    title: "Marine Engineering Support",
    description:
      "Technical engineering assistance supporting vessel machinery, systems and marine operations."
  },

  {
    number: "02",
    title: "Vessel Technical Support",
    description:
      "Practical technical support to help maintain vessel reliability, operational readiness and performance."
  },

  {
    number: "03",
    title: "Maintenance Support",
    description:
      "Planned and preventive maintenance support for marine machinery, equipment and operational systems."
  },

  {
    number: "04",
    title: "Troubleshooting & Diagnostics",
    description:
      "Technical troubleshooting and diagnostic support for marine machinery and equipment issues."
  },

  {
    number: "05",
    title: "Technical Inspection",
    description:
      "Technical assessment of vessel systems and equipment to identify operational and maintenance requirements."
  },

  {
    number: "06",
    title: "Operational Readiness",
    description:
      "Support for preparing marine assets and equipment for safe and efficient operational deployment."
  }
];


function technicalCard(service) {

  return `
    <article class="technical-card">

      <div class="technical-number">
        ${service.number}
      </div>

      <div>

        <h3>
          ${service.title}
        </h3>

        <p>
          ${service.description}
        </p>

      </div>

    </article>
  `;

}


app.innerHTML = `

  ${Header()}

  <main>

    ${PageHero({
      eyebrow: "MARINE & OFFSHORE SERVICES",

      title: "Marine Technical & Engineering Support",

      description:
        "Reliable technical and engineering support for vessels and offshore marine operations."
    })}


    <!-- INTRODUCTION -->

    <section class="section technical-introduction">

      <div class="container">

        <div class="technical-introduction-grid">

          <div>

            <p class="section-label">
              TECHNICAL CAPABILITY
            </p>

            <h2>
              Keeping Marine Assets
              Operational & Reliable
            </h2>

          </div>


          <div>

            <p>
              Marine operations depend on reliable
              machinery, equipment, systems and
              technical personnel.
            </p>

            <p>
              Ocean Wave Development Company
              Nigeria Limited provides practical
              technical and engineering support
              designed to help clients maintain
              operational reliability and readiness.
            </p>

          </div>

        </div>

      </div>

    </section>


    <!-- SERVICES -->

    <section class="section technical-services">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              OUR TECHNICAL SERVICES
            </p>

            <h2>
              Marine Engineering Support
            </h2>

          </div>

          <p>
            Technical assistance across vessel
            machinery, maintenance, inspection,
            troubleshooting and operational
            readiness.
          </p>

        </div>


        <div class="technical-grid">

          ${technicalServices
            .map(technicalCard)
            .join("")}

        </div>

      </div>

    </section>


    <!-- SUPPORT AREAS -->

    <section class="section technical-support">

      <div class="container">

        <div class="technical-support-grid">


          <div class="technical-support-content">

            <p class="section-label">
              TECHNICAL SUPPORT AREAS
            </p>

            <h2>
              Supporting the Systems
              Behind Marine Operations
            </h2>

            <p>
              Our technical support approach is
              focused on helping clients identify
              technical requirements, address
              equipment issues and improve the
              operational readiness of marine assets.
            </p>

            <a
              href="/pages/contact.html?service=marine-technical"
              class="btn btn-primary"
            >
              Request Technical Support
            </a>

          </div>


          <div class="support-list">

            <div class="support-item">
              <span>01</span>
              <strong>
                Main & Auxiliary Machinery
              </strong>
            </div>

            <div class="support-item">
              <span>02</span>
              <strong>
                Marine Electrical Systems
              </strong>
            </div>

            <div class="support-item">
              <span>03</span>
              <strong>
                Pumps & Mechanical Systems
              </strong>
            </div>

            <div class="support-item">
              <span>04</span>
              <strong>
                Deck Machinery & Equipment
              </strong>
            </div>

            <div class="support-item">
              <span>05</span>
              <strong>
                Safety & Operational Systems
              </strong>
            </div>

            <div class="support-item">
              <span>06</span>
              <strong>
                Technical Documentation
              </strong>
            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- PROCESS -->

    <section class="section technical-process">

      <div class="container">

        <div class="section-heading">

          <div>

            <p class="section-label">
              OUR APPROACH
            </p>

            <h2>
              Practical Technical Support
            </h2>

          </div>

        </div>


        <div class="technical-process-grid">


          <div class="technical-process-step">

            <span>01</span>

            <h3>
              Assess
            </h3>

            <p>
              Understand the technical condition,
              operational requirement or equipment
              challenge.
            </p>

          </div>


          <div class="technical-process-step">

            <span>02</span>

            <h3>
              Diagnose
            </h3>

            <p>
              Identify potential causes and determine
              the appropriate technical response.
            </p>

          </div>


          <div class="technical-process-step">

            <span>03</span>

            <h3>
              Support
            </h3>

            <p>
              Provide practical technical assistance
              and coordinate the required resources.
            </p>

          </div>


          <div class="technical-process-step">

            <span>04</span>

            <h3>
              Improve
            </h3>

            <p>
              Support improved reliability,
              maintenance planning and operational
              readiness.
            </p>

          </div>


        </div>

      </div>

    </section>


    <!-- CTA -->

    <section class="section technical-cta">

      <div class="container">

        <div class="technical-cta-box">

          <div>

            <p class="section-label">
              MARINE ENGINEERING SUPPORT
            </p>

            <h2>
              Need Technical Support
              for Your Marine Operation?
            </h2>

            <p>
              Contact Ocean Wave Development
              Company Nigeria Limited to discuss
              your technical or engineering
              requirements.
            </p>

          </div>


          <a
            href="/pages/contact.html?service=marine-technical"
            class="btn btn-light"
          >
            Contact Our Team
          </a>

        </div>

      </div>

    </section>


  </main>

  ${Footer()}

`;

setupNavigation();