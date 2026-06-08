window.IAOrienta = window.IAOrienta || {};

window.IAOrienta.renderLearning = function renderLearning() {
  const learningModules = window.IAOrienta.learningModules;
  const modules = learningModules
    .map((module, index) => `
      <article class="card">
        <span class="tag">Modulo ${index + 1}</span>
        <h3>${module.title}</h3>
        <p>${module.content}</p>
      </article>
    `)
    .join("");

  return `
    <section class="section-stack">
      <div>
        <p class="eyebrow">Alfabetizacion</p>
        <h2>Centro de Aprendizaje</h2>
        <p class="lead">Contenidos breves para comprender posibilidades, limites y buenas practicas al usar IA.</p>
      </div>
      <div class="grid auto">${modules}</div>
    </section>
  `;
};
