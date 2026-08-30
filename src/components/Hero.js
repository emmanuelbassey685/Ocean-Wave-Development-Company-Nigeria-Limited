export default function Hero() {
  return `
    <section class="hero" id="home">

      <!-- HERO BACKGROUND IMAGE -->
      <div class="hero-background">
        <img
          src="/images/hero/ocean-wave-hero.png"
          alt="Offshore marine vessel operating near an oil platform"
        />
      </div>

      <!-- IMAGE OVERLAY -->
      <div class="hero-overlay"></div>

      <div class="container hero-content">

        <p class="hero-eyebrow">
          MARINE • OFFSHORE • OIL & GAS
        </p>

        <h1>
          Reliable Marine & Offshore
          <span>Solutions.</span>
        </h1>

        <p class="hero-description">
          Delivering dependable marine, offshore,
          engineering, procurement and technical
          support solutions for demanding operations.
        </p>

        <div class="hero-actions">

          <a
            href="/pages/marine-offshore.html"
            class="btn btn-primary"
          >
            Explore Marine Services
          </a>

          <a
            href="/pages/contact.html"
            class="btn btn-outline"
          >
            Request a Quote
          </a>

        </div>

        <div class="hero-highlights">

          <div class="hero-highlight">

            <span class="highlight-icon">
              ⚓
            </span>

            <div>
              <strong>Marine</strong>
              <span>Offshore Services</span>
            </div>

          </div>

          <div class="hero-highlight">

            <span class="highlight-icon">
              ⚙
            </span>

            <div>
              <strong>Technical</strong>
              <span>Engineering Support</span>
            </div>

          </div>

          <div class="hero-highlight">

            <span class="highlight-icon">
              ✓
            </span>

            <div>
              <strong>Operational</strong>
              <span>Reliability</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  `;
}