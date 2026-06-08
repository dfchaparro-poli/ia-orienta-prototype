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
        <h2>Que necesitas resolver?</h2>
        <p class="lead">Elige una necesidad para recibir una recomendacion orientativa de herramientas de IA.</p>
      </div>
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
