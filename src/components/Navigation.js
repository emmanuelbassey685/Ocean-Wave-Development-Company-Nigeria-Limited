export default function Navigation() {
  return `
    <nav
      class="main-navigation"
      id="mainNavigation"
      aria-label="Main navigation"
    >

      <ul>

        <li>
          <a href="/index.html">
            Home
          </a>
        </li>

        <li>
          <a href="/pages/about.html">
            About
          </a>
        </li>

        <!-- SERVICES -->
        <li class="nav-dropdown">

          <button
            class="nav-dropdown-toggle"
            type="button"
            aria-expanded="false"
          >
            Services
            <span class="dropdown-arrow">▾</span>
          </button>

          <ul class="dropdown-menu">

            <li>
              <a href="/pages/services.html">
                All Services
              </a>
            </li>

            <li>
              <a href="/pages/marine-offshore.html">
                Marine & Offshore
              </a>
            </li>

            <li>
              <a href="/pages/oil-gas.html">
                Oil & Gas
              </a>
            </li>

            <li>
              <a href="/pages/project-management.html">
                Project Management
              </a>
            </li>

            <li>
              <a href="/pages/procurement-logistics.html">
                Procurement & Logistics
              </a>
            </li>

            <li>
              <a href="/pages/facility-maintenance.html">
                Facility Maintenance
              </a>
            </li>

            <li>
              <a href="/pages/engineering-consultancy.html">
                Engineering Consultancy
              </a>
            </li>

          </ul>

        </li>


        <!-- MARINE -->
        <li class="nav-dropdown">

          <button
            class="nav-dropdown-toggle"
            type="button"
            aria-expanded="false"
          >
            Marine
            <span class="dropdown-arrow">▾</span>
          </button>

          <ul class="dropdown-menu">

            <li>
              <a href="/pages/marine-offshore.html">
                Marine & Offshore
              </a>
            </li>

            <li>
              <a href="/pages/vessel-charter.html">
                Vessel Charter
              </a>
            </li>

            <li>
              <a href="/pages/marine-technical.html">
                Marine Technical & Engineering
              </a>
            </li>

            <li>
              <a href="/pages/vessel-inspection.html">
                Vessel Inspection & Audit
              </a>
            </li>

            <li>
              <a href="/pages/crewing.html">
                Crewing / Crew Management
              </a>
            </li>

            <li>
              <a href="/pages/marine-supplies.html">
                Marine Supplies
              </a>
            </li>

            <li>
              <a href="/pages/chandelling.html">
                Chandelling
              </a>
            </li>

          </ul>

        </li>


        <!-- PROJECTS -->
        <li>
          <a href="/pages/projects.html">
            Projects
          </a>
        </li>


        <!-- CONTACT -->
        <li>
          <a href="/pages/contact.html">
            Contact
          </a>
        </li>

      </ul>

    </nav>
  `;
}