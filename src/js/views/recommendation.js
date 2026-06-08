window.IAOrienta = window.IAOrienta || {};

window.IAOrienta.renderRecommendation = function renderRecommendation({ state }) {
  const needs = window.IAOrienta.needs;
  const recommendations = window.IAOrienta.recommendations;
  const selectedNeed = needs.find((need) => need.id === state.need) || needs[0];
  const recommendation = recommendations[selectedNeed.id];
  const alternatives = recommendation.alternatives
    .map((tool) => `<li><span class="tag">${tool}</span></li>`)
    .join("");

  return `
    <section class="section-stack">
      <div>
        <p class="eyebrow">Resultado simulado</p>
        <h2>Recomendación para ${selectedNeed.label.toLowerCase()}</h2>
        <p class="lead">Esta recomendación es demostrativa y debe validarse según contexto, privacidad y criterios académicos.</p>
      </div>
      <article class="recommendation-card">
        <div class="recommendation-title">
          <div>
            <p class="eyebrow">Recomendado</p>
            <h3>${recommendation.main}</h3>
          </div>
          <span class="tag">Mejor ajuste inicial</span>
        </div>
        <p>${recommendation.reason}</p>
        <section class="why-tool" aria-label="Por qué esta herramienta">
          <h3>¿Por qué esta herramienta?</h3>
          <div class="grid three">
            <div>
              <strong>Qué hace</strong>
              <p>${recommendation.does}</p>
            </div>
            <div>
              <strong>Cuándo usarla</strong>
              <p>${recommendation.when}</p>
            </div>
            <div>
              <strong>Limitaciones</strong>
              <p>${recommendation.limitations}</p>
            </div>
          </div>
        </section>
        <div>
          <h3>Alternativas</h3>
          <ul class="alternative-list">${alternatives}</ul>
        </div>
        <div class="prompt-text"><strong>Prompt sugerido:</strong> ${recommendation.prompt}</div>
        <p class="notice">La recomendación orienta la elección, pero la calidad depende de tus datos, contexto y validación posterior.</p>
      </article>
      <div class="grid two">
        <a class="ghost-button" href="#/explorador">Explorar más herramientas</a>
        <a class="ghost-button" href="#/prompts">Ver biblioteca de prompts</a>
      </div>
    </section>
  `;
};
