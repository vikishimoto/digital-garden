/**
 * LAYOUT — cabeçalho e rodapé compartilhados
 * Renderizados via JS a partir de config.js para evitar duplicação
 * de marcação e manter a navegação consistente entre páginas.
 */

function renderHeader(activeId) {
  const el = document.getElementById("site-header");
  if (!el) return;

  const navItems = SITE.nav
    .map(
      (item) => `
      <li>
        <a href="${item.href}" class="nav__link${item.id === activeId ? " is-active" : ""}">
          ${item.label}
        </a>
      </li>`
    )
    .join("");

  el.innerHTML = `
    <header class="header" id="header">
      <div class="header__inner">
        <a href="index.html" class="header__brand" aria-label="${SITE.nome} — página inicial">
          <img src="${SITE.logoMarca}" alt="Símbolo ${SITE.nome}" class="header__mark" />
          <span class="header__wordmark">
            <strong>Catedral</strong>
            <em>Manancial da Palavra</em>
          </span>
        </a>

        <nav class="nav" aria-label="Navegação principal">
          <ul class="nav__list">${navItems}</ul>
        </nav>

        <button class="menu-toggle" id="menuToggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobileNav">
          <span></span><span></span><span></span>
        </button>
      </div>

      <div class="mobile-nav" id="mobileNav">
        <ul class="mobile-nav__list">${navItems}</ul>
      </div>
    </header>
  `;

  setupHeaderBehavior();
}

function setupHeaderBehavior() {
  const header = document.getElementById("header");
  const toggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");

  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("no-scroll", isOpen);
  });

  mobileNav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
    })
  );
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;

  const quickLinks = SITE.nav
    .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
    .join("");

  el.innerHTML = `
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__brand">
          <img src="${SITE.logoMarca}" alt="Símbolo ${SITE.nome}" class="footer__mark" />
          <p class="footer__name">${SITE.nome}</p>
          <p class="footer__address">${SITE.endereco}</p>
        </div>

        <nav class="footer__col" aria-label="Links rápidos">
          <p class="footer__heading">Navegação</p>
          <ul class="footer__list">${quickLinks}</ul>
        </nav>

        <div class="footer__col">
          <p class="footer__heading">Redes sociais</p>
          <ul class="footer__list">
            <li><a href="${SITE.redes.instagramCatedral}" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href="${SITE.redes.youtube}" target="_blank" rel="noopener">YouTube</a></li>
          </ul>
        </div>

        <div class="footer__col">
          <p class="footer__heading">Contato</p>
          <ul class="footer__list">
            <li class="footer__muted">[INSERIR INFORMAÇÃO]</li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p>© ${new Date().getFullYear()} ${SITE.nome}. Todos os direitos reservados.</p>
      </div>
    </footer>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const activeId = document.body.getAttribute("data-page") || "";
  renderHeader(activeId);
  renderFooter();
});
