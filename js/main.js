/* Portfolio behavior: navigation, scroll effects, projects grid, dialog. No frameworks. */
(function () {
  "use strict";

  /* ---------------------------------- Nav ---------------------------------- */
  const nav = document.getElementById("site-nav");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  navToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  // Close the mobile menu when a link is clicked.
  navMenu.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Shadow under nav after scrolling.
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 12);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ------------------------------- Scrollspy ------------------------------- */
  const navLinks = Array.from(navMenu.querySelectorAll("a[href^='#']"));
  const spyTargets = navLinks
    .map((a) => document.getElementById(a.getAttribute("href").slice(1)))
    .filter(Boolean);

  if ("IntersectionObserver" in window && spyTargets.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((a) =>
            a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id)
          );
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    spyTargets.forEach((t) => spy.observe(t));
  }

  /* ----------------------------- Scroll reveal ----------------------------- */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealEls = document.querySelectorAll(".reveal");
  if (!reduceMotion && "IntersectionObserver" in window) {
    const revealer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    revealEls.forEach((el) => revealer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  /* ------------------------------- Projects -------------------------------- */
  const grid = document.getElementById("projects-grid");
  const filterBar = document.getElementById("projects-filters");
  const showAllBtn = document.getElementById("projects-show-all");
  const countNote = document.getElementById("projects-count");

  let activeFilter = "All";
  let expanded = false;

  // Projects are authored most-recent-first in projects-data.js. The collapsed
  // "All" view shows the newest few; "Show all" reveals the full sequence.
  const DEFAULT_VISIBLE = 6;

  // Screenshots that haven't been added yet fall back to a placeholder instead
  // of a broken-image icon. Drop the real file at the documented path and it
  // appears automatically.
  const PLACEHOLDER = "assets/img/projects/_placeholder.svg";
  const imgFallback = `onerror="this.onerror=null;this.src='${PLACEHOLDER}';this.closest('.project-thumb,.article-cover,.carousel-slide')&&this.closest('.project-thumb,.article-cover,.carousel-slide').classList.add('img-missing')"`;

  function projectCard(p) {
    const card = document.createElement("article");
    card.className = "project-card reveal visible";
    card.dataset.id = p.id;

    const tags = p.tags.map((t) => `<span class="tag">${t}</span>`).join("");
    const sectorClass = "sector-" + p.sector.toLowerCase().replace(/\s+/g, "-");

    card.innerHTML = `
      <button type="button" class="project-card-btn" aria-haspopup="dialog" aria-label="Open details for ${p.title}">
        <div class="project-thumb">
          <img loading="lazy" width="640" height="200" src="${p.thumb.src}" alt="${p.thumb.alt}" ${imgFallback} />
          <span class="sector-badge ${sectorClass}">${p.sector}</span>
        </div>
        <div class="project-body">
          <h3>${p.title}</h3>
          <p class="project-period">${p.period}</p>
          <p class="project-summary">${p.summary}</p>
          <div class="tag-row">${tags}</div>
          <span class="project-more">View details <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
        </div>
      </button>`;

    card.querySelector(".project-card-btn").addEventListener("click", () => openProject(p));
    return card;
  }

  function renderProjects() {
    const byFilter =
      activeFilter === "All" ? PROJECTS : PROJECTS.filter((p) => p.sector === activeFilter);
    // Only the unfiltered "All" view collapses; a sector filter shows its full set.
    const collapsed = activeFilter === "All" && !expanded;
    const visible = collapsed ? byFilter.slice(0, DEFAULT_VISIBLE) : byFilter;

    grid.innerHTML = "";
    visible.forEach((p) => grid.appendChild(projectCard(p)));

    showAllBtn.hidden = visible.length >= byFilter.length;
    showAllBtn.textContent = "Show all projects";
    countNote.textContent = collapsed
      ? `Showing the ${visible.length} most recent projects`
      : `Showing ${visible.length} project${visible.length === 1 ? "" : "s"}`;
  }

  if (filterBar) {
    const sectors = ["All", ...new Set(PROJECTS.map((p) => p.sector))];
    sectors.forEach((s) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip";
      btn.textContent = s;
      btn.setAttribute("aria-pressed", String(s === activeFilter));
      btn.addEventListener("click", () => {
        activeFilter = s;
        filterBar
          .querySelectorAll(".chip")
          .forEach((c) => c.setAttribute("aria-pressed", String(c.textContent === s)));
        renderProjects();
      });
      filterBar.appendChild(btn);
    });

    showAllBtn.addEventListener("click", () => {
      expanded = true;
      renderProjects();
    });

    renderProjects();
  }

  /* ---------------------------- Project dialog ----------------------------- */
  const dialog = document.getElementById("project-dialog");
  const dialogTitle = document.getElementById("project-dialog-title");
  const dialogMeta = document.getElementById("project-dialog-meta");
  const dialogBody = document.getElementById("project-dialog-body");
  const carouselTrack = document.getElementById("carousel-track");
  const carouselCounter = document.getElementById("carousel-counter");
  const carouselCaption = document.getElementById("carousel-caption");
  const carouselPrev = document.getElementById("carousel-prev");
  const carouselNext = document.getElementById("carousel-next");
  let slideIndex = 0;
  let slideCount = 0;
  let currentImages = [];

  function showSlide(i) {
    slideIndex = (i + slideCount) % slideCount;
    carouselTrack.style.transform = `translateX(-${slideIndex * 100}%)`;
    carouselCounter.textContent = `${slideIndex + 1} / ${slideCount}`;
    // Caption describes the current slide; only shown inside the gallery dialog.
    const img = currentImages[slideIndex];
    const caption = img && (img.caption || img.alt);
    carouselCaption.textContent = caption || "";
    carouselCaption.hidden = !caption;
  }

  function openProject(p) {
    dialogTitle.textContent = p.title;

    const meta = [`<span><i class="fa-regular fa-calendar" aria-hidden="true"></i> ${p.period}</span>`];
    if (p.company) {
      meta.push(
        `<span><i class="fa-regular fa-building" aria-hidden="true"></i> <a href="${p.company.url}" target="_blank" rel="noopener">${p.company.name}</a></span>`
      );
    }
    if (p.link) {
      meta.push(
        `<span><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> <a href="${p.link}" target="_blank" rel="noopener">${p.link.replace(/^https?:\/\//, "")}</a></span>`
      );
    }
    dialogMeta.innerHTML = meta.join("");

    carouselTrack.innerHTML = p.images
      .map(
        (img) =>
          `<div class="carousel-slide"><img loading="lazy" src="${img.src}" alt="${img.alt}" ${imgFallback} /></div>`
      )
      .join("");
    currentImages = p.images;
    slideCount = p.images.length;
    const hasMultiple = slideCount > 1;
    carouselPrev.hidden = !hasMultiple;
    carouselNext.hidden = !hasMultiple;
    carouselCounter.hidden = !hasMultiple;
    showSlide(0);

    dialogBody.innerHTML = p.body.join("");
    dialog.showModal();
    dialog.scrollTop = 0;
  }

  carouselPrev.addEventListener("click", () => showSlide(slideIndex - 1));
  carouselNext.addEventListener("click", () => showSlide(slideIndex + 1));
  dialog.addEventListener("keydown", (e) => {
    if (slideCount < 2) return;
    if (e.key === "ArrowLeft") showSlide(slideIndex - 1);
    if (e.key === "ArrowRight") showSlide(slideIndex + 1);
  });

  document.getElementById("project-dialog-close").addEventListener("click", () => dialog.close());
  // Close when clicking the backdrop (outside the dialog panel).
  dialog.addEventListener("click", (e) => {
    const rect = dialog.getBoundingClientRect();
    const inside =
      e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
    if (!inside) dialog.close();
  });

  /* ------------------------ Generic "show more" toggles -------------------- */
  document.querySelectorAll("[data-expands]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.expands);
      target.hidden = false;
      btn.remove();
    });
  });

  /* ----------- Ambient background: particles + constellation + grid scan ----- */
  // Cursor-driven canvas effect. Skipped on touch or reduced-motion, where only
  // the static grid remains. Paused when the tab is hidden.
  (function initBackgroundFx() {
    const canvas = document.getElementById("fx-canvas");
    if (!canvas || reduceMotion || !window.matchMedia("(hover: hover)").matches) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    const rootEl = document.documentElement;
    let width = 0;
    let height = 0;
    let rafId = null;

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      px: window.innerWidth / 2,
      py: window.innerHeight / 2,
      vx: 0,
      vy: 0,
    };
    const particles = [];
    const stars = [];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      stars.length = 0;
      const count = Math.min(90, Math.max(38, Math.floor((width * height) / 18000)));
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          ox: 0,
          oy: 0,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          r: Math.random() * 1.2 + 0.4,
        });
      }
    }

    function emitParticles(x, y, amount) {
      for (let i = 0; i < amount; i++) {
        const speed = Math.random() * 1.3 + 0.2;
        const angle = Math.random() * Math.PI * 2;
        particles.push({
          x: x + (Math.random() - 0.5) * 8,
          y: y + (Math.random() - 0.5) * 8,
          vx: Math.cos(angle) * speed - mouse.vx * 0.04,
          vy: Math.sin(angle) * speed - mouse.vy * 0.04,
          life: 1,
          decay: Math.random() * 0.02 + 0.014,
          size: Math.random() * 2 + 0.6,
          hue: Math.random() > 0.5 ? 222 : 205, // soft periwinkle / sky, no yellow
        });
      }
      if (particles.length > 420) particles.splice(0, particles.length - 420);
    }

    window.addEventListener(
      "pointermove",
      (e) => {
        mouse.vx = e.clientX - mouse.x;
        mouse.vy = e.clientY - mouse.y;
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        const speed = Math.hypot(mouse.vx, mouse.vy);
        emitParticles(mouse.x, mouse.y, Math.min(5, 1 + Math.floor(speed / 9)));
      },
      { passive: true }
    );

    function drawStars() {
      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < -20) s.x = width + 20;
        if (s.x > width + 20) s.x = -20;
        if (s.y < -20) s.y = height + 20;
        if (s.y > height + 20) s.y = -20;

        const dx = s.x - mouse.px;
        const dy = s.y - mouse.py;
        const dist = Math.hypot(dx, dy);
        let px = s.x;
        let py = s.y;
        if (dist < 160) {
          const f = (160 - dist) / 160;
          px += (dx / Math.max(dist, 1)) * f * 16;
          py += (dy / Math.max(dist, 1)) * f * 16;
        }
        s.ox += (px - s.ox - s.x) * 0.12;
        s.oy += (py - s.oy - s.y) * 0.12;
        s.dx = s.x + s.ox;
        s.dy = s.y + s.oy;
      }

      for (let i = 0; i < stars.length; i++) {
        const a = stars[i];
        for (let j = i + 1; j < stars.length; j++) {
          const b = stars[j];
          const dx = a.dx - b.dx;
          const dy = a.dy - b.dy;
          const d = Math.hypot(dx, dy);
          if (d < 112) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(148, 163, 184, ${(1 - d / 112) * 0.13})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(a.dx, a.dy);
            ctx.lineTo(b.dx, b.dy);
            ctx.stroke();
          }
        }
        const cd = Math.hypot(a.dx - mouse.px, a.dy - mouse.py);
        if (cd < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(165, 180, 252, ${(1 - cd / 150) * 0.25})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(a.dx, a.dy);
          ctx.lineTo(mouse.px, mouse.py);
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.fillStyle = cd < 150 ? "rgba(199, 210, 254, 0.75)" : "rgba(148, 163, 184, 0.4)";
        ctx.arc(a.dx, a.dy, a.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function drawParticles() {
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.life -= p.decay;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 85%, 74%, ${p.life * 0.6})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `hsla(${p.hue}, 90%, 72%, 0.5)`;
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      mouse.px += (mouse.x - mouse.px) * 0.1;
      mouse.py += (mouse.y - mouse.py) * 0.1;
      rootEl.style.setProperty("--mx", `${mouse.px}px`);
      rootEl.style.setProperty("--my", `${mouse.py}px`);
      drawStars();
      drawParticles();
      rafId = requestAnimationFrame(animate);
    }

    function start() {
      if (!rafId) rafId = requestAnimationFrame(animate);
    }
    function stop() {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
    start();
  })();

  /* --------------------------------- Footer -------------------------------- */
  const year = document.getElementById("footer-year");
  if (year) year.textContent = new Date().getFullYear();
})();
