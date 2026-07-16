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

  function projectCard(p) {
    const card = document.createElement("article");
    card.className = "project-card reveal visible";
    card.dataset.id = p.id;

    const tags = p.tags.map((t) => `<span class="tag">${t}</span>`).join("");
    const sectorClass = "sector-" + p.sector.toLowerCase().replace(/\s+/g, "-");

    card.innerHTML = `
      <button type="button" class="project-card-btn" aria-haspopup="dialog" aria-label="Open details for ${p.title}">
        <div class="project-thumb">
          <img loading="lazy" width="640" height="200" src="${p.thumb.src}" alt="${p.thumb.alt}" />
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
    const visible = expanded || activeFilter !== "All" ? byFilter : byFilter.filter((p) => p.featured);

    grid.innerHTML = "";
    visible.forEach((p) => grid.appendChild(projectCard(p)));

    const hiddenCount = byFilter.length - visible.length;
    showAllBtn.hidden = hiddenCount <= 0;
    showAllBtn.textContent = `Show all ${PROJECTS.length} projects`;
    countNote.textContent =
      activeFilter === "All" && !expanded
        ? `Showing ${visible.length} featured projects of ${PROJECTS.length}`
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
  const carouselPrev = document.getElementById("carousel-prev");
  const carouselNext = document.getElementById("carousel-next");
  let slideIndex = 0;
  let slideCount = 0;

  function showSlide(i) {
    slideIndex = (i + slideCount) % slideCount;
    carouselTrack.style.transform = `translateX(-${slideIndex * 100}%)`;
    carouselCounter.textContent = `${slideIndex + 1} / ${slideCount}`;
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
          `<div class="carousel-slide"><img loading="lazy" src="${img.src}" alt="${img.alt}" /></div>`
      )
      .join("");
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

  /* --------------------------------- Footer -------------------------------- */
  const year = document.getElementById("footer-year");
  if (year) year.textContent = new Date().getFullYear();
})();
