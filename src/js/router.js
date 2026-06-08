window.IAOrienta = window.IAOrienta || {};

window.IAOrienta.createRouter = function createRouter(routes, shell) {
  const app = document.querySelector("#app");
  const title = document.querySelector("#page-title");
  const nav = document.querySelector("#main-nav");
  const navItems = window.IAOrienta.navItems;

  function renderNav() {
    nav.innerHTML = navItems
      .map((item) => `<a class="nav-link" href="${item.path}" data-route="${item.path}">${item.label}</a>`)
      .join("");
  }

  function currentPath() {
    return window.location.hash || "#/";
  }

  function setActiveNav(path) {
    nav.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.toggle("active", link.dataset.route === path);
    });
  }

  function navigate(path) {
    window.location.hash = path;
  }

  function render() {
    const path = routes[currentPath()] ? currentPath() : "#/";
    const route = routes[path];
    title.textContent = route.title;
    app.innerHTML = route.view({ state: shell.state, actions: shell.actions, navigate });
    setActiveNav(path);
    route.afterRender?.({ state: shell.state, actions: shell.actions, navigate });
  }

  renderNav();
  window.addEventListener("hashchange", render);
  render();

  return { navigate, render };
};
