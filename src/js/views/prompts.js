window.IAOrienta = window.IAOrienta || {};

window.IAOrienta.renderPrompts = function renderPrompts() {
  const prompts = window.IAOrienta.prompts;
  const cards = prompts
    .map((prompt) => `
      <article class="prompt-card">
        <span class="tag">${prompt.category}</span>
        <h3>${prompt.title}</h3>
        <div class="prompt-text">${prompt.text}</div>
        <button class="copy-button" data-copy>Simular copia</button>
      </article>
    `)
    .join("");

  return `
    <section class="section-stack">
      <div>
        <p class="eyebrow">Practica guiada</p>
        <h2>Biblioteca de Prompts</h2>
        <p class="lead">Ejemplos listos para adaptar. La copia se simula para conservar el alcance del prototipo.</p>
      </div>
      <div class="grid two">${cards}</div>
    </section>
  `;
};

window.IAOrienta.bindPrompts = function bindPrompts() {
  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("copied");
      button.textContent = "Copiado simulado";
    });
  });
};
