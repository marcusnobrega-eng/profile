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

  function setupRecordCounters() {
    const record = document.querySelector(".home-record");
    if (!record) return;
    const counters = Array.from(record.querySelectorAll("[data-count]"));

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      record.classList.add("is-live");
      return;
    }

    counters.forEach((counter) => { counter.textContent = "0"; });

    function run() {
      record.classList.add("is-live");
      counters.forEach((counter, index) => {
        const target = Number(counter.dataset.count);
        const duration = 1500 + Math.min(target, 800) * 0.6;
        const delay = index * 140;
        let start = null;
        function step(now) {
          if (start === null) start = now + delay;
          const progress = Math.min(Math.max((now - start) / duration, 0), 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          counter.textContent = String(Math.round(target * eased));
          if (progress < 1) window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
      });
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        run();
      });
    }, { threshold: 0.45 });
    observer.observe(record);
  }

  function setupResearchMotion() {
    const figures = Array.from(document.querySelectorAll(".rq__viz[data-rq]"));
    if (!figures.length || reduceMotion.matches || !("IntersectionObserver" in window)) return;
    if (typeof Element.prototype.animate !== "function") return;

    const ease = "cubic-bezier(0.45, 0, 0.25, 1)";
    // one property over one loop, as [offset, value] pairs
    const track = (prop, pairs) => pairs.map(([offset, value]) => ({ offset, [prop]: value, easing: ease }));
    // on between two offsets, off elsewhere
    const span = (from, to, on, off) => {
      const pairs = [[0, off]];
      if (from > 0) pairs.push([from, off]);
      pairs.push([from + 0.03, on], [to - 0.03, on], [to, off]);
      if (to < 1) pairs.push([1, off]);
      return track("opacity", pairs);
    };
    const shift = (y) => `translateY(${y}px)`;

    const scenes = {
      grid(fig, add) {
        const obs = Array.from(fig.querySelectorAll(".rq-obs__dot"))
          .map((dot) => [Number(dot.getAttribute("cx")), Number(dot.getAttribute("cy"))]);
        // the fine grid comes back first next to the observations, then farther away
        fig.querySelectorAll(".rq-cell").forEach((cell) => {
          const o = parseFloat(cell.style.getPropertyValue("--o"));
          const x = Number(cell.getAttribute("x")) + 11;
          const y = Number(cell.getAttribute("y")) + 11;
          const d = Math.min(...obs.map(([ox, oy]) => Math.hypot(x - ox, y - oy)));
          const back = 0.57 + Math.min(d / 110, 1) * 0.15;
          add(cell, track("opacity", [[0, o], [0.16, o], [0.26, 0], [back, 0], [back + 0.06, o], [1, o]]));
        });
        fig.querySelectorAll(".rq-coarse").forEach((cell) => {
          const o = parseFloat(cell.style.getPropertyValue("--o"));
          add(cell, track("opacity", [[0, 0], [0.16, 0], [0.26, o], [0.58, o], [0.74, 0], [1, 0]]));
        });
        fig.querySelectorAll(".rq-obs__dot").forEach((dot, i) => {
          const s = 0.36 + (i % 2) * 0.03;
          add(dot, track("transform", [[0, "scale(0)"], [s, "scale(0)"], [s + 0.03, "scale(1.3)"],
            [s + 0.05, "scale(1)"], [0.92, "scale(1)"], [0.96, "scale(0)"], [1, "scale(0)"]]));
        });
        fig.querySelectorAll(".rq-obs__ring").forEach((ring) => {
          const s = ring.classList.contains("rq-obs__ring--late") ? 0.47 : 0.4;
          add(ring, track("opacity", [[0, 0], [s, 0], [s + 0.005, 0.8], [s + 0.1, 0], [1, 0]]));
          add(ring, track("transform", [[0, "scale(1)"], [s, "scale(1)"], [s + 0.1, "scale(4.5)"], [1, "scale(4.5)"]]));
        });
        fig.querySelectorAll(".rq-obs__wave").forEach((wave) => {
          add(wave, track("opacity", [[0, 0], [0.56, 0], [0.57, 0.6], [0.76, 0], [1, 0]]));
          add(wave, track("transform", [[0, "scale(1)"], [0.56, "scale(1)"], [0.76, "scale(15)"], [1, "scale(15)"]]));
        });
      },
      recharge(fig, add) {
        add(fig.querySelector(".rq-rain-layer"), track("opacity", [[0, 1], [0.44, 1], [0.52, 0], [0.95, 0], [1, 1]]));
        add(fig.querySelector(".rq-drops"), track("opacity", [[0, 0], [0.14, 0], [0.2, 1], [0.64, 1], [0.72, 0], [1, 0]]));
        add(fig.querySelector(".rq-pond"), track("transform", [[0, "scale(0.25, 0.6)"], [0.06, "scale(0.25, 0.6)"],
          [0.28, "scale(1, 1)"], [0.46, "scale(0.9, 0.95)"], [0.62, "scale(1.3, 1.45)"], [0.76, "scale(1.05, 1.1)"],
          [0.93, "scale(0.25, 0.6)"], [1, "scale(0.25, 0.6)"]]));
        add(fig.querySelector(".rq-table"), track("transform", [[0, shift(0)], [0.2, shift(0)], [0.62, shift(-44)],
          [0.72, shift(-46)], [0.95, shift(-4)], [1, shift(0)]]));
      },
      storm(fig, add) {
        const sets = [".rq-bars .rq-bar", ".rq-excess .rq-bar"].map((sel) => Array.from(fig.querySelectorAll(sel)));
        sets.forEach((bars) => bars.forEach((bar, i) => {
          const a = `scaleY(${bar.style.getPropertyValue("--a").trim()})`;
          const b = `scaleY(${bar.style.getPropertyValue("--b").trim()})`;
          const lag = i * 0.012;
          add(bar, track("transform", [[0, a], [0.18 + lag, a], [0.36 + lag, b], [0.86, b], [0.96, a], [1, a]]));
        }));
        sets[0].forEach((bar) => add(bar, track("fill", [[0, "#9cc9de"], [0.18, "#9cc9de"], [0.32, "#007c92"],
          [0.86, "#007c92"], [0.96, "#9cc9de"], [1, "#9cc9de"]])));
        add(fig.querySelector(".rq-excess"), track("opacity", [[0, 1], [0.62, 1], [0.7, 0], [0.97, 0], [1, 1]]));
        add(fig.querySelector(".rq-design--new"), track("opacity", [[0, 1], [0.44, 1], [0.48, 0.3], [0.52, 1],
          [0.56, 0.3], [0.6, 1], [1, 1]]));
        add(fig.querySelector(".rq-design--new"), track("transform", [[0, shift(0)], [0.62, shift(0)], [0.74, shift(-38)],
          [0.88, shift(-38)], [0.97, shift(0)], [1, shift(0)]]));
        add(fig.querySelector(".rq-design--old"), track("opacity", [[0, 0], [0.62, 0], [0.7, 0.35], [0.88, 0.35],
          [0.95, 0], [1, 0]]));
      },
    };

    figures.forEach((fig) => {
      const duration = Number(fig.dataset.rqDuration) || 10000;
      const animations = [];
      const add = (el, frames) => {
        if (!el) return;
        const animation = el.animate(frames, { duration, iterations: Infinity, fill: "both" });
        animation.pause();
        animations.push(animation);
      };
      fig.querySelectorAll(".rq__phase").forEach((label) => {
        add(label, span(Number(label.dataset.from), Number(label.dataset.to), 1, 0));
      });
      // steps stay lit once reached, so the ticks read as progress through the loop
      fig.querySelectorAll(".rq__steps i").forEach((tick) => add(tick, span(Number(tick.dataset.from), 0.97, 1, 0.18)));
      if (scenes[fig.dataset.rq]) scenes[fig.dataset.rq](fig, add);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          animations.forEach((animation) => (entry.isIntersecting ? animation.play() : animation.pause()));
        });
      }, { threshold: 0.4 });
      observer.observe(fig);
    });
  }

  setupNavigation();
  updateModelVideoMotion();
  revealSections();
  setupRecordCounters();
  setupResearchMotion();
  document.documentElement.classList.add("home-motion-ready");

  const onMotionPreferenceChange = () => updateModelVideoMotion();
  if (reduceMotion.addEventListener) reduceMotion.addEventListener("change", onMotionPreferenceChange);
  else reduceMotion.addListener(onMotionPreferenceChange);
})();
