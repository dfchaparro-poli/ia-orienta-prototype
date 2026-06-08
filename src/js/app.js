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
  "#/perfil": { title: "Selección de perfil", view: IA.renderProfile, afterRender: IA.bindProfile },
  "#/diagnostico": { title: "Diagnóstico de necesidades", view: IA.renderDiagnosis, afterRender: IA.bindDiagnosis },
  "#/recomendacion": { title: "Recomendador IA", view: IA.renderRecommendation },
  "#/explorador": { title: "Explorador IA", view: IA.renderExplorer },
  "#/prompts": { title: "Biblioteca de Prompts", view: IA.renderPrompts, afterRender: IA.bindPrompts },
  "#/aprendizaje": { title: "Centro de Aprendizaje", view: IA.renderLearning },
  "#/favoritos": { title: "Recursos Favoritos", view: IA.renderFavorites }
};

IA.createRouter(routes, { state, actions });

initSidebarMenu();
initBackNavigation();
initMobileTopbarOffset();

function initSidebarMenu() {
  const openButton = document.querySelector("[data-sidebar-open]");
  const closeButton = document.querySelector("[data-sidebar-close]");
  const backdrop = document.querySelector("#sidebar-backdrop");
  const sidebar = document.querySelector("#sidebar");
  const drawerQuery = window.matchMedia("(max-width: 900px)");

  if (!openButton || !closeButton || !backdrop || !sidebar) {
    return;
  }

  function openSidebar() {
    if (!drawerQuery.matches) {
      return;
    }

    document.body.classList.add("sidebar-open");
    backdrop.hidden = false;
    openButton.setAttribute("aria-expanded", "true");
    sidebar.setAttribute("aria-hidden", "false");
    sidebar.inert = false;
    closeButton.focus();
  }

  function closeSidebar() {
    document.body.classList.remove("sidebar-open");
    backdrop.hidden = true;
    openButton.setAttribute("aria-expanded", "false");
    sidebar.setAttribute("aria-hidden", drawerQuery.matches ? "true" : "false");
    sidebar.inert = drawerQuery.matches;
  }

  function syncSidebarMode() {
    if (drawerQuery.matches) {
      closeSidebar();
      return;
    }

    document.body.classList.remove("sidebar-open");
    backdrop.hidden = true;
    openButton.setAttribute("aria-expanded", "false");
    sidebar.setAttribute("aria-hidden", "false");
    sidebar.inert = false;
  }

  openButton.addEventListener("click", openSidebar);
  closeButton.addEventListener("click", closeSidebar);
  backdrop.addEventListener("click", closeSidebar);

  sidebar.addEventListener("click", (event) => {
    if (event.target.closest(".nav-link") || event.target.closest(".brand")) {
      closeSidebar();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSidebar();
    }
  });

  window.addEventListener("hashchange", closeSidebar);
  if (drawerQuery.addEventListener) {
    drawerQuery.addEventListener("change", syncSidebarMode);
  } else {
    drawerQuery.addListener(syncSidebarMode);
  }
  syncSidebarMode();
}

function initBackNavigation() {
  const backButton = document.querySelector("[data-route-back]");

  if (!backButton) {
    return;
  }

  const routeStack = [];
  let currentRoute = window.location.hash || "#/";

  window.addEventListener("hashchange", () => {
    const nextRoute = window.location.hash || "#/";

    if (nextRoute !== currentRoute) {
      routeStack.push(currentRoute);
      currentRoute = nextRoute;
    }
  });

  backButton.addEventListener("click", () => {
    const previousRoute = routeStack.pop();

    if (previousRoute) {
      currentRoute = previousRoute;
      window.location.hash = previousRoute;
      return;
    }

    currentRoute = "#/";
    window.location.hash = "#/";
  });
}

function initMobileTopbarOffset() {
  const topbar = document.querySelector(".topbar");
  const mobileQuery = window.matchMedia("(max-width: 900px)");

  if (!topbar) {
    return;
  }

  function syncOffset() {
    const offset = mobileQuery.matches ? topbar.offsetHeight : 0;
    document.documentElement.style.setProperty("--mobile-topbar-offset", `${offset}px`);
  }

  function scheduleSync() {
    requestAnimationFrame(syncOffset);
  }

  window.addEventListener("resize", scheduleSync);
  window.addEventListener("load", scheduleSync);
  window.addEventListener("hashchange", scheduleSync);

  if (mobileQuery.addEventListener) {
    mobileQuery.addEventListener("change", scheduleSync);
  } else {
    mobileQuery.addListener(scheduleSync);
  }

  scheduleSync();
}
