window.IAOrienta = window.IAOrienta || {};

window.IAOrienta.renderExplorer = function renderExplorer() {
  const tools = window.IAOrienta.tools;
  const categories = [...new Set(tools.map((tool) => tool.category))];
  const sections = categories
    .map((category) => {
      const cards = tools
        .filter((tool) => tool.category === category)
        .map((tool) => `
          <article class="card tool-card">
            <header>
              <div>
                <p class="eyebrow">${tool.category}</p>
                <h3>${tool.name}</h3>
              </div>
              <span class="tool-icon">${tool.name.slice(0, 2)}</span>
            </header>
            <p>${tool.description}</p>
            <span class="tag">${tool.use}</span>
            <p class="tool-note">Valida resultados y evita compartir información sensible al probar esta categoría.</p>
          </article>
        `)
        .join("");

      return `
        <section class="section-stack">
          <h3>${category}</h3>
          <div class="grid two">${cards}</div>
        </section>
      `;
    })
    .join("");

  return `
    <section class="section-stack">
      <div>
        <p class="eyebrow">Mapa de herramientas</p>
        <h2>Explorador IA</h2>
        <p class="lead">Herramientas organizadas por categoría para comparar usos posibles, límites y decisiones responsables dentro del recorrido académico.</p>
      </div>
      ${sections}
    </section>
  `;
};
