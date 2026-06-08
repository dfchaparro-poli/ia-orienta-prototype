window.IAOrienta = window.IAOrienta || {};

window.IAOrienta.renderLearning = function renderLearning() {
  const learningModules = window.IAOrienta.learningModules;
  const capsules = window.IAOrienta.literacyCapsules
    .map((capsule) => `<li>${capsule}</li>`)
    .join("");
  const modules = learningModules
    .map((module, index) => `
      <article class="card learning-module">
        <span class="tag">Módulo ${index + 1}</span>
        <h3>${module.title}</h3>
        <p>${module.content}</p>
      </article>
    `)
    .join("");

  return `
    <section class="section-stack">
      <div>
        <p class="eyebrow">Alfabetización</p>
        <h2>Centro de Aprendizaje</h2>
        <p class="lead">Módulo principal del prototipo para comprender qué es la IA, cómo elegir herramientas, cómo escribir prompts y cómo validar respuestas.</p>
      </div>
      <article class="notice">
        Antes de usar una respuesta de IA en un trabajo académico, revisa fuentes, privacidad y coherencia con tu propio criterio.
      </article>
      <div class="grid auto">${modules}</div>
      <article class="card">
        <h3>Cápsulas de uso responsable</h3>
        <ul class="timeline">${capsules}</ul>
      </article>
    </section>
  `;
};
