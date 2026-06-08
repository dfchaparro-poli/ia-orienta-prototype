window.IAOrienta = window.IAOrienta || {};

window.IAOrienta.renderProfile = function renderProfile({ state }) {
  const profiles = window.IAOrienta.profiles;
  const cards = profiles
    .map((profile) => `
      <button class="option-card ${state.profile === profile ? "selected" : ""}" data-profile="${profile}">
        <span>${profile}</span>
      </button>
    `)
    .join("");

  return `
    <section class="section-stack">
      <div>
        <p class="eyebrow">Paso 1</p>
        <h2>Selecciona tu perfil</h2>
        <p class="lead">El prototipo adapta el lenguaje de orientacion segun el tipo de usuario. La seleccion es temporal y demostrativa.</p>
      </div>
      <div class="grid three">${cards}</div>
      <p class="notice">No hay registro ni autenticacion. Esta seleccion solo vive durante la sesion actual.</p>
    </section>
  `;
};

window.IAOrienta.bindProfile = function bindProfile({ actions, navigate }) {
  document.querySelectorAll("[data-profile]").forEach((button) => {
    button.addEventListener("click", () => {
      actions.setProfile(button.dataset.profile);
      navigate("#/diagnostico");
    });
  });
};
