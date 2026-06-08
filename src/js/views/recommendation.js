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
        <div>
          <h3>Alternativas</h3>
          <ul class="alternative-list">${alternatives}</ul>
        </div>
        <div class="prompt-text"><strong>Prompt sugerido:</strong> ${recommendation.prompt}</div>
      </article>
      <div class="grid two">
        <a class="ghost-button" href="#/explorador">Explorar mas herramientas</a>
        <a class="ghost-button" href="#/prompts">Ver biblioteca de prompts</a>
      </div>
    </section>
  `;
};
