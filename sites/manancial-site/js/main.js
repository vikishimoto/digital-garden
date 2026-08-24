/* ============================================================
   COMPORTAMENTOS GERAIS
   ============================================================ */

/* ---------- Carrossel do Hero ---------- */
function setupCarousel() {
  const root = document.querySelector("[data-carousel]");
  if (!root) return;

  const slides = Array.from(root.querySelectorAll(".carousel__slide"));
  const dotsWrap = root.querySelector(".carousel__dots");
  const prevBtn = root.querySelector(".carousel__nav--prev");
  const nextBtn = root.querySelector(".carousel__nav--next");
  let current = 0;
  let timer;

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "carousel__dot" + (i === 0 ? " is-active" : "");
    dot.setAttribute("aria-label", `Ir para o slide ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function goTo(index) {
    slides[current].classList.remove("is-active");
    dots[current].classList.remove("is-active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("is-active");
    dots[current].classList.add("is-active");
    resetTimer();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(next, 6000);
  }

  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);

  // swipe (mobile)
  let touchStartX = 0;
  root.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  root.addEventListener("touchend", (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 40) diff > 0 ? prev() : next();
  }, { passive: true });

  resetTimer();
}

/* ---------- Reveal on scroll ---------- */
function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((item) => io.observe(item));
}

/* ---------- Divisores "traço-de-asa" ---------- */
function setupWingDividers() {
  const items = document.querySelectorAll(".wing-divider");
  if (!items.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  items.forEach((item) => io.observe(item));
}

/* ---------- Copiar chave PIX ---------- */
function setupPixCopy() {
  const btn = document.querySelector("[data-copy-pix]");
  if (!btn) return;
  const feedback = document.querySelector("[data-copy-feedback]");

  btn.addEventListener("click", async () => {
    const key = btn.getAttribute("data-copy-pix");
    try {
      await navigator.clipboard.writeText(key);
    } catch (e) {
      const temp = document.createElement("textarea");
      temp.value = key;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
    }
    if (feedback) {
      feedback.textContent = "Chave PIX copiada com sucesso.";
      feedback.classList.add("is-visible");
      setTimeout(() => feedback.classList.remove("is-visible"), 2600);
    }
  });
}

/* ---------- Subnav ativa por seção visível (A Igreja) ---------- */
function setupSubnavActive() {
  const links = document.querySelectorAll(".subnav a[href^='#']");
  if (!links.length) return;
  const targets = Array.from(links)
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = "#" + entry.target.id;
          links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === id));
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );
  targets.forEach((t) => io.observe(t));
}

document.addEventListener("DOMContentLoaded", () => {
  setupCarousel();
  setupReveal();
  setupWingDividers();
  setupPixCopy();
  setupSubnavActive();
});
