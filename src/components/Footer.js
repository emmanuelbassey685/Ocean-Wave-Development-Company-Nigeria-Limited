export default function Footer() {
  return `
    <footer class="site-footer">

      <div class="container footer-grid">

        <div class="footer-brand">

          <div class="logo footer-logo">

            <span class="logo-mark">
              OW
            </span>

            <span class="logo-text">
              <strong>OCEAN WAVE</strong>
              <small>
                DEVELOPMENT COMPANY
              </small>
            </span>

          </div>

          <p>
            Marine, offshore, engineering and
            operational support solutions.
          </p>

        </div>

        <div>
          <h3>Services</h3>

          <a href="#marine">
            Marine & Offshore
          </a>

          <a href="#oil-gas">
            Oil & Gas
          </a>

          <a href="#project-management">
            Project Management
          </a>

          <a href="#procurement">
            Procurement & Logistics
          </a>

        </div>

        <div>
          <h3>Company</h3>

          <a href="#about">
            About Us
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

        <div>
          <h3>Contact</h3>

          <p>
            Nigeria
          </p>

          <a href="#contact">
            Request a Quote
          </a>

        </div>

      </div>

      <div class="footer-bottom">

        <div class="container">

          <p>
            © ${new Date().getFullYear()}
            Ocean Wave Development Company Nigeria Limited.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  `;
}