window.IAOrienta = window.IAOrienta || {};

window.IAOrienta.renderFavorites = function renderFavorites({ state }) {
  const favorites = state.favorites.map((item) => `<li>${item}</li>`).join("");
  const history = state.history.slice(0, 6).map((item) => `<li>${item}</li>`).join("");

  return `
    <section class="section-stack">
      <div>
        <p class="eyebrow">Simulacion</p>
        <h2>Recursos Favoritos</h2>
        <p class="lead">Vista demostrativa de recursos guardados e historial. No hay persistencia al recargar.</p>
      </div>
      <div class="grid two">
        <article class="card">
          <h3>Recursos guardados</h3>
          <ul class="timeline">${favorites}</ul>
        </article>
        <article class="card">
          <h3>Historial de consultas</h3>
          <ul class="timeline">${history}</ul>
        </article>
      </div>
    </section>
  `;
};
