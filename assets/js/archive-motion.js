(function () {
  "use strict";

  const elements = Array.from(document.querySelectorAll(
    ".publications-intro, .publication-group__header, .publication-list__item, .news-intro, .news-year, .news-item, .talks-intro, .talk-year, .talk-list__item, .models-reveal, #main > .sidebar"
  ));
  if (!elements.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  elements.forEach((element, index) => {
    if (element.classList.contains("publication-list__item") || element.classList.contains("news-item") || element.classList.contains("talk-list__item") || element.classList.contains("model-card") || element.classList.contains("model-registry-item")) {
      element.style.setProperty("--reveal-delay", `${(index % 3) * 45}ms`);
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

  elements.forEach((element) => observer.observe(element));
  document.documentElement.classList.add("archive-motion-ready");
})();
