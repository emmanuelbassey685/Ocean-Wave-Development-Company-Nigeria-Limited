export default function PageHero({
  eyebrow = "",
  title = "",
  description = "",
  image = "/images/hero/ocean-wave-hero.jpg"
}) {
  return `
    <section
      class="page-hero"
      style="background-image: url('${image}');"
    >

      <div class="page-hero-overlay"></div>

      <div class="container page-hero-container">

        <div class="page-hero-content">

          ${
            eyebrow
              ? `
                <p class="page-hero-eyebrow">
                  ${eyebrow}
                </p>
              `
              : ""
          }

          <h1>
            ${title}
          </h1>

          ${
            description
              ? `
                <p class="page-hero-description">
                  ${description}
                </p>
              `
              : ""
          }

        </div>

      </div>

    </section>
  `;
}