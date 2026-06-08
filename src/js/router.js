window.IAOrienta = window.IAOrienta || {};

window.IAOrienta.createRouter = function createRouter(routes, shell) {
  const app = document.querySelector("#app");
  const title = document.querySelector("#page-title");
  const nav = document.querySelector("#main-nav");
  const navItems = window.IAOrienta.navItems;

  function renderNav() {
    nav.innerHTML = navItems
      .map((item) => `
        <a class="nav-link" href="${item.path}" data-route="${item.path}">
          <span class="nav-icon" aria-hidden="true">${navIcon(item.icon)}</span>
          <span class="nav-label">${item.label}</span>
        </a>
      `)
      .join("");
  }

  function navIcon(name) {
    const icons = {
      home: '<svg viewBox="0 0 24 24"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.5V20h13v-9.5"/><path d="M9.5 20v-5h5v5"/></svg>',
      user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M5 20c1.5-4 12.5-4 14 0"/></svg>',
      checklist: '<svg viewBox="0 0 24 24"><path d="m4 7 1.6 1.6L9 5"/><path d="M11 7h9"/><path d="m4 14 1.6 1.6L9 12"/><path d="M11 14h9"/><path d="M11 20h6"/></svg>',
      spark: '<svg viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/></svg>',
      grid: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></svg>',
      file: '<svg viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/><path d="M10 13h6"/><path d="M10 17h4"/></svg>',
      book: '<svg viewBox="0 0 24 24"><path d="M5 4h6a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H5z"/><path d="M19 4h-5a3 3 0 0 0-3 3"/><path d="M19 4v13h-5a3 3 0 0 0-3 3"/></svg>',
      heart: '<svg viewBox="0 0 24 24"><path d="M20.8 6.6a5 5 0 0 0-7.1 0L12 8.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 22l8.8-8.3a5 5 0 0 0 0-7.1Z"/></svg>'
    };

    return icons[name] || icons.grid;
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
