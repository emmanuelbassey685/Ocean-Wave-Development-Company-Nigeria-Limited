export default function VesselCard(vessel) {
  return `
    <article class="vessel-card">

      <div class="vessel-card-image">

        <img
          src="${vessel.image}"
          alt="${vessel.name}"
          loading="lazy"
        >

        <span class="vessel-type">
          ${vessel.type}
        </span>

      </div>


      <div class="vessel-card-body">

        <p class="vessel-category">
          MARINE ASSET
        </p>

        <h3>
          ${vessel.name}
        </h3>

        <p class="vessel-description">
          ${vessel.description}
        </p>


        <ul class="vessel-capabilities">

          ${vessel.capabilities
            .map(
              capability => `
                <li>
                  <span>✓</span>
                  ${capability}
                </li>
              `
            )
            .join("")}

        </ul>


        <a
          href="/pages/contact.html?service=vessel-charter&vessel=${vessel.id}"
          class="vessel-card-link"
        >
          Request Vessel
          <span>→</span>
        </a>

      </div>

    </article>
  `;
}