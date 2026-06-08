const IA = window.IAOrienta;

const state = {
  profile: "",
  need: "redactar",
  favorites: [...IA.mockFavorites],
  history: [...IA.mockHistory]
};

const actions = {
  setProfile(profile) {
    state.profile = profile;
    state.history.unshift(`Perfil seleccionado: ${profile}`);
  },
  setNeed(need) {
    state.need = need;
    state.history.unshift(`Necesidad consultada: ${need}`);
  }
};

const routes = {
  "#/": { title: "IA Orienta", view: IA.renderHome },
  "#/perfil": { title: "Seleccion de perfil", view: IA.renderProfile, afterRender: IA.bindProfile },
  "#/diagnostico": { title: "Diagnostico de necesidades", view: IA.renderDiagnosis, afterRender: IA.bindDiagnosis },
  "#/recomendacion": { title: "Recomendador IA", view: IA.renderRecommendation },
  "#/explorador": { title: "Explorador IA", view: IA.renderExplorer },
  "#/prompts": { title: "Biblioteca de Prompts", view: IA.renderPrompts, afterRender: IA.bindPrompts },
  "#/aprendizaje": { title: "Centro de Aprendizaje", view: IA.renderLearning },
  "#/favoritos": { title: "Recursos Favoritos", view: IA.renderFavorites }
};

IA.createRouter(routes, { state, actions });
