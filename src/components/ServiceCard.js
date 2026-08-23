export default function ServiceCard({
  icon = "⚙",
  title = "",
  description = ""
}) {
  return `
    <article class="service-card">

      <div class="service-card-icon" aria-hidden="true">
        ${icon}
      </div>

      <div class="service-card-content">

        <h3>
          ${title}
        </h3>

        <p>
          ${description}
        </p>

      </div>

    </article>
  `;
}