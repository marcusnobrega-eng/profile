(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function setupNavigation() {
    const nav = document.getElementById("site-nav");
    if (!nav) return;

    const button = nav.querySelector(".greedy-nav__toggle");
    const visible = nav.querySelector(".visible-links");
    const hidden = nav.querySelector(".hidden-links");
    if (!button || !visible || !hidden) return;

    const logo = visible.querySelector(".masthead__menu-item--lg");
    const menuItems = Array.from(visible.children)
      .filter((item) => item !== logo)
      .concat(Array.from(hidden.children));

    function closeMenu() {
      hidden.classList.add("hidden");
      button.classList.remove("close");
      button.setAttribute("aria-expanded", "false");
    }

    function layoutNavigation() {
      closeMenu();
      const compact = window.matchMedia("(max-width: 1100px)").matches;
      menuItems.forEach((item) => (compact ? hidden : visible).appendChild(item));
      button.classList.toggle("hidden", !compact);
    }

    button.addEventListener("click", () => {
      const opening = hidden.classList.contains("hidden");
      hidden.classList.toggle("hidden", !opening);
      button.classList.toggle("close", opening);
      button.setAttribute("aria-expanded", String(opening));
    });

    let resizeFrame = 0;
    window.addEventListener("resize", () => {
      window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(layoutNavigation);
    });

    layoutNavigation();
  }

  function updateModelVideoMotion() {
    document.querySelectorAll(".model-feature video").forEach((video) => {
      if (reduceMotion.matches) video.pause();
      else if (video.autoplay) video.play().catch(() => {});
    });
  }

  function revealSections() {
    const sections = Array.from(document.querySelectorAll(".home-reveal"));
    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10%", threshold: 0.22 });

    sections.forEach((section) => observer.observe(section));
  }

  setupNavigation();
  updateModelVideoMotion();
  revealSections();
  document.documentElement.classList.add("home-motion-ready");

  const onMotionPreferenceChange = () => updateModelVideoMotion();
  if (reduceMotion.addEventListener) reduceMotion.addEventListener("change", onMotionPreferenceChange);
  else reduceMotion.addListener(onMotionPreferenceChange);
})();
