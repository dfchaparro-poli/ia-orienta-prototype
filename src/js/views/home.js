window.IAOrienta = window.IAOrienta || {};

window.IAOrienta.renderHome = function renderHome() {
  const highlights = window.IAOrienta.learningHighlights
    .map((item) => `
      <article class="card learning-card">
        <h3>${item.title}</h3>
        <p>${item.content}</p>
      </article>
    `)
    .join("");
  const capsules = window.IAOrienta.literacyCapsules
    .slice(0, 3)
    .map((capsule) => `<span class="tag">${capsule}</span>`)
    .join("");

  return `
    <section class="section-stack home-stack">
      <div class="hero">
        <div>
          <p class="eyebrow">Prototipo interactivo</p>
          <h2>IA Orienta guía el primer uso responsable de herramientas de inteligencia artificial.</h2>
          <p class="lead">Esta experiencia académica ayuda a identificar necesidades, recomendar herramientas, practicar prompts y aprender criterios básicos para usar IA con sentido crítico.</p>
          <div class="metric-row">
            <span class="tag">Alfabetización IA</span>
            <span class="tag">Recomendación simulada</span>
            <span class="tag">Prompts listos</span>
          </div>
          <a class="button" href="#/perfil">Comenzar</a>
        </div>
        <div class="hero-panel" aria-label="Laboratorio visual de aprendizaje con IA"></div>
      </div>

      <section class="section-stack" aria-labelledby="learn-title">
        <div>
          <p class="eyebrow">Ruta de alfabetización</p>
          <h2 id="learn-title">¿Qué aprenderás?</h2>
          <p class="lead">El prototipo no solo sugiere herramientas: enseña criterios para decidir, preguntar, revisar y usar IA con responsabilidad.</p>
        </div>
        <div class="grid auto">${highlights}</div>
        <div class="literacy-strip" aria-label="Cápsulas educativas">${capsules}</div>
      </section>
    </section>
  `;
};
