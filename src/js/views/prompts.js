window.IAOrienta = window.IAOrienta || {};

window.IAOrienta.renderPrompts = function renderPrompts() {
  const prompts = window.IAOrienta.prompts;
  const cards = prompts
    .map((prompt, index) => `
      <article class="prompt-card">
        <span class="tag">${prompt.category}</span>
        <h3>${prompt.title}</h3>
        <div class="prompt-text" id="prompt-${index}">${prompt.text}</div>
        <button class="copy-button" data-copy="${index}" aria-describedby="prompt-${index}">Copiar</button>
      </article>
    `)
    .join("");

  return `
    <section class="section-stack">
      <div>
        <p class="eyebrow">Práctica guiada</p>
        <h2>Biblioteca de Prompts</h2>
        <p class="lead">Ejemplos listos para adaptar y copiar. Úsalos como punto de partida y reemplaza los campos entre corchetes.</p>
      </div>
      <div class="grid two">${cards}</div>
    </section>
  `;
};

window.IAOrienta.bindPrompts = function bindPrompts() {
  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const prompt = window.IAOrienta.prompts[button.dataset.copy];
      const copied = await copyText(prompt.text);
      button.classList.add("copied");
      button.textContent = copied ? "Copiado" : "Selecciona y copia";
    });
  });
};

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      console.warn("No se pudo usar navigator.clipboard, se intenta copia alternativa.", error);
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  return copied;
}
