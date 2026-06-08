window.IAOrienta = window.IAOrienta || {};

window.IAOrienta.renderDiagnosis = function renderDiagnosis({ state }) {
  const needs = window.IAOrienta.needs;
  const cards = needs
    .map((need) => `
      <button class="option-card ${state.need === need.id ? "selected" : ""}" data-need="${need.id}">
        <span>
          <strong>${need.label}</strong><br>
          <small class="muted">${need.detail}</small>
        </span>
      </button>
    `)
    .join("");

  return `
    <section class="section-stack">
      <div>
        <p class="eyebrow">Paso 2</p>
        <h2>¿Qué necesitas resolver?</h2>
        <p class="lead">Elige una necesidad para recibir una recomendación orientativa y aprender por qué una herramienta puede ajustarse a ese caso.</p>
      </div>
      <p class="notice">Seleccionar una herramienta empieza por definir la tarea: no todas las IA sirven para lo mismo ni tienen las mismas limitaciones.</p>
      <div class="grid two">${cards}</div>
    </section>
  `;
};

window.IAOrienta.bindDiagnosis = function bindDiagnosis({ actions, navigate }) {
  document.querySelectorAll("[data-need]").forEach((button) => {
    button.addEventListener("click", () => {
      actions.setNeed(button.dataset.need);
      navigate("#/recomendacion");
    });
  });
};
