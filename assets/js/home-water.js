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
        // the fine grid and its flow arrows come back first next to the observations, then farther away
        const back = (x, y) => 0.57 + Math.min(Math.min(...obs.map(([ox, oy]) => Math.hypot(x - ox, y - oy))) / 110, 1) * 0.15;
        const fine = (el, x, y, o) => {
          const t = back(x, y);
          add(el, track("opacity", [[0, o], [0.16, o], [0.26, 0], [t, 0], [t + 0.06, o], [1, o]]));
        };
        fig.querySelectorAll(".rq-cell").forEach((cell) => {
          fine(cell, Number(cell.getAttribute("x")) + 11, Number(cell.getAttribute("y")) + 11,
            parseFloat(cell.style.getPropertyValue("--o")));
        });
        fig.querySelectorAll(".rq-arrow--fine").forEach((arrow) => {
          fine(arrow, Number(arrow.dataset.x), Number(arrow.dataset.y), 0.7);
        });
        const coarse = (el, o) => add(el, track("opacity", [[0, 0], [0.16, 0], [0.26, o], [0.58, o], [0.74, 0], [1, 0]]));
        fig.querySelectorAll(".rq-coarse").forEach((cell) => coarse(cell, parseFloat(cell.style.getPropertyValue("--o"))));
        fig.querySelectorAll(".rq-arrow--coarse").forEach((arrow) => coarse(arrow, 0.95));
        // the true river path shows how far the coarse arrows are from it
        add(fig.querySelector(".rq-true-river"), track("opacity", [[0, 0], [0.24, 0], [0.3, 0.95], [0.58, 0.95], [0.66, 0], [1, 0]]));
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
      valley(fig, add) {
        const q = (sel) => fig.querySelector(sel);
        const duration = Number(fig.dataset.rqDuration) || 12000;
        // storm intensity: four layers of streaks switch on and off, so the rain rises to a peak and fades
        const rain = [
          [[0, 1], [0.4, 1], [0.45, 0], [0.95, 0], [1, 1]],
          [[0, 0], [0.05, 0], [0.09, 1], [0.36, 1], [0.42, 0], [1, 0]],
          [[0, 0], [0.12, 0], [0.16, 1], [0.32, 1], [0.38, 0], [1, 0]],
          [[0, 0], [0.18, 0], [0.22, 1], [0.28, 1], [0.33, 0], [1, 0]],
        ];
        rain.forEach((pairs, i) => add(q(`.rq-rain-g--${i + 1}`), track("opacity", pairs)));
        add(q(".rq-cloud"), track("opacity", [[0, 0.85], [0.2, 1], [0.38, 1], [0.48, 0], [0.94, 0], [1, 0.85]]));
        add(q(".rq-cloud"), track("transform", [[0, "translateX(0px)"], [0.38, "translateX(8px)"], [0.48, "translateX(34px)"],
          [0.94, "translateX(-24px)"], [1, "translateX(0px)"]]));
        add(q(".rq-sun"), track("opacity", [[0, 0], [0.56, 0], [0.62, 1], [0.93, 1], [0.97, 0], [1, 0]]));
        add(q(".rq-et"), track("opacity", [[0, 0], [0.6, 0], [0.66, 1], [0.92, 1], [0.96, 0], [1, 0]]));
        fig.querySelectorAll(".rq-crown").forEach((crown) => {
          const [wet, dry] = crown.classList.contains("rq-crown--light") ? ["#7fae80", "#bdb67a"] : ["#5f9268", "#a3a061"];
          add(crown, track("fill", [[0, wet], [0.62, wet], [0.9, dry], [1, wet]]));
        });

        // fields drawn from one clock: [t, recharge/K, river stage (y), wet layer top and bottom below the surface, wetness]
        const states = [
          [0, 0.027, 85, 0, 4, 0.35], [0.08, 0.032, 84, 0, 10, 0.75], [0.22, 0.045, 81, 0, 24, 0.9],
          [0.36, 0.055, 78, 0, 32, 0.85], [0.48, 0.03, 70, 0, 32, 0.8], [0.56, 0.026, 71, 1, 30, 0.7],
          [0.66, 0.012, 80, 4, 26, 0.45], [0.8, -0.004, 86, 9, 22, 0.25], [0.92, -0.012, 88, 13, 20, 0.12],
          [1, 0.027, 85, 0, 4, 0.35],
        ];
        const clock = add(q("svg"), track("opacity", [[0, 1], [1, 1]]));
        const surface = q(".rq-surface");
        const length = surface.getTotalLength();
        const sy = new Array(241);
        let last = { x: 0, y: surface.getPointAtLength(0).y };
        for (let i = 1, x = 0; i <= 960 && x <= 240; i += 1) {
          const p = surface.getPointAtLength((length * i) / 960);
          while (x <= 240 && x <= p.x) {
            sy[x] = p.x > last.x ? last.y + ((p.y - last.y) * (x - last.x)) / (p.x - last.x) : p.y;
            x += 1;
          }
          last = p;
        }
        for (let x = 0; x <= 240; x += 1) if (sy[x] === undefined) sy[x] = sy[x - 1];

        const els = {
          line: q(".rq-table__line"), sat: q(".rq-table__water"), fringe: q(".rq-fringe"), wet: q(".rq-wet"),
          river: q(".rq-river"), well: q(".rq-well__water"), flows: Array.from(fig.querySelectorAll(".rq-flowline")),
        };
        const smooth = (v) => v * v * (3 - 2 * v);
        const stateAt = (t) => {
          let k = 0;
          while (k < states.length - 2 && t > states[k + 1][0]) k += 1;
          const [a, b] = [states[k], states[k + 1]];
          const f = smooth(Math.min(Math.max((t - a[0]) / (b[0] - a[0]), 0), 1));
          return a.map((v, i) => v + (b[i] - v) * f);
        };
        const yBase = 128, xRiver = 179, xDivide = 260;
        const waterTable = (x, nk, stage) => {
          const hr = yBase - stage;
          const h2 = x <= xRiver ? hr * hr + nk * (xRiver * xRiver - x * x)
            : hr * hr + nk * ((xDivide - xRiver) ** 2 - (xDivide - x) ** 2);
          return Math.max(yBase - Math.sqrt(Math.max(h2, 1)), sy[Math.round(x)] + 0.8);
        };
        const xs = Array.from({ length: 61 }, (_, i) => i * 4);
        const pts = (list) => list.map(([x, y]) => `${x} ${y.toFixed(1)}`).join(" L");
        let lastT = -1, lastTime = null, offset = 0;

        const draw = () => {
          const time = Number(clock.currentTime) || 0;
          const t = (time % duration) / duration;
          if (lastTime !== null && time !== lastTime) {
            const [, nkNow, stageNow] = stateAt(t);
            // positive flux: groundwater moves toward the river; negative: the river loses water to the aquifer
            const flux = stageNow - waterTable(64, nkNow, stageNow);
            offset -= (Math.min(Math.abs(time - lastTime), 100) / 1000) * flux * 0.9;
            els.flows.forEach((path) => { path.style.strokeDashoffset = offset.toFixed(2); });
          }
          lastTime = time;
          if (Math.abs(t - lastT) < 0.0005) return;
          lastT = t;
          const [, nk, stage, wetTop, wetBottom, wetness] = stateAt(t);
          const wt = xs.map((x) => [x, waterTable(x, nk, stage)]);
          const line = `M${pts(wt)}`;
          els.line.setAttribute("d", line);
          els.sat.setAttribute("d", `${line} L240 128 L0 128 Z`);
          els.fringe.setAttribute("d", `${line} L${pts(wt.slice().reverse().map(([x, y]) => [x, y - 4.5]))} Z`);
          const top = xs.map((x) => [x, sy[x] + wetTop]);
          const bottom = wt.map(([x, y]) => [x, Math.min(sy[x] + wetBottom, y)]).reverse();
          els.wet.setAttribute("d", `M${pts(top)} L${pts(bottom)} Z`);
          els.wet.style.opacity = wetness.toFixed(3);
          els.river.setAttribute("y", stage.toFixed(2));
          const wellY = waterTable(70, nk, stage);
          els.well.setAttribute("y", wellY.toFixed(1));
          els.well.setAttribute("height", (127 - wellY).toFixed(1));
          const starts = [24, 64, 104];
          els.flows.forEach((path, i) => {
            if (i < 3) {
              const x0 = starts[i];
              path.setAttribute("d", `M${x0} ${(waterTable(x0, nk, stage) + 3).toFixed(1)} Q${(x0 + (176 - x0) * 0.55).toFixed(1)} ${122 - i * 8} ${172 + i * 3} 92.5`);
            } else {
              path.setAttribute("d", `M234 ${(waterTable(234, nk, stage) + 3).toFixed(1)} Q206 110 186 92.5`);
            }
          });
        };
        const loop = () => { draw(); window.requestAnimationFrame(loop); };
        window.requestAnimationFrame(loop);
      },
      pond(fig, add) {
        const sets = [".rq-bars .rq-bar", ".rq-excess .rq-bar"].map((sel) => Array.from(fig.querySelectorAll(sel)));
        sets.forEach((bars) => bars.forEach((bar, i) => {
          const a = `scaleY(${bar.style.getPropertyValue("--a").trim()})`;
          const b = `scaleY(${bar.style.getPropertyValue("--b").trim()})`;
          const lag = i * 0.01;
          // design storm, a larger and earlier storm, a dry spell, then the same storm on the controlled pond
          add(bar, track("transform", [[0, a], [0.18 + lag, a], [0.32 + lag, b], [0.57, b], [0.61, "scaleY(0.03)"],
            [0.66 + lag, "scaleY(0.03)"], [0.74 + lag, b], [0.88, b], [0.96, a], [1, a]]));
        }));
        sets[0].forEach((bar) => add(bar, track("fill", [[0, "#9cc9de"], [0.18, "#9cc9de"], [0.3, "#007c92"],
          [0.9, "#007c92"], [0.96, "#9cc9de"], [1, "#9cc9de"]])));
        add(fig.querySelector(".rq-design"), track("opacity", [[0, 1], [0.4, 1], [0.44, 0.3], [0.48, 1],
          [0.52, 0.3], [0.56, 1], [1, 1]]));
        // pond level: fills below the rim, overtops and floods the street, then under control it is drawn
        // down before the storm and peaks below the rim
        add(fig.querySelector(".rq-pond-water"), track("transform", [[0, shift(34)], [0.04, shift(34)], [0.18, shift(16)],
          [0.22, shift(15)], [0.34, shift(3)], [0.42, shift(-9)], [0.55, shift(-9)], [0.61, shift(8)], [0.68, shift(34)],
          [0.72, shift(34)], [0.82, shift(12)], [0.88, shift(12)], [0.96, shift(34)], [1, shift(34)]]));
        add(fig.querySelector(".rq-flow--in"), track("opacity", [[0, 0.2], [0.04, 1], [0.57, 1], [0.62, 0.2],
          [0.68, 0.2], [0.72, 1], [0.9, 1], [0.96, 0.2], [1, 0.2]]));
        add(fig.querySelector(".rq-flow--out"), track("opacity", [[0, 0.35], [0.6, 0.35], [0.62, 1], [0.92, 1],
          [0.96, 0.35], [1, 0.35]]));
        add(fig.querySelector(".rq-gate"), track("transform", [[0, shift(0)], [0.6, shift(0)], [0.63, shift(-8)],
          [0.74, shift(-8)], [0.78, shift(-4)], [0.92, shift(-4)], [0.96, shift(0)], [1, shift(0)]]));
        add(fig.querySelector(".rq-antenna"), track("opacity", [[0, 0], [0.57, 0], [0.61, 1], [0.93, 1], [0.97, 0], [1, 0]]));
      },
    };

    figures.forEach((fig) => {
      const duration = Number(fig.dataset.rqDuration) || 10000;
      const animations = [];
      const add = (el, frames) => {
        if (!el) return null;
        const animation = el.animate(frames, { duration, iterations: Infinity, fill: "both" });
        animation.pause();
        animations.push(animation);
        return animation;
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
