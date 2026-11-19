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
          river: q(".rq-river"), well: q(".rq-well__water"), vadose: q(".rq-vadose-clip"), flows: Array.from(fig.querySelectorAll(".rq-flowline")),
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
          // roots live in the vadose zone only: clip them between the surface and the water table
          els.vadose.setAttribute("d", `M${pts(xs.map((x) => [x, sy[x] - 3]))} L${pts(wt.slice().reverse())} Z`);
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

  // Hero: a small local-inertial (Bates et al., 2010) flood model of a riverside neighborhood, run live in the page.
  // A rainstorm first overwhelms the street inlets (pluvial flooding); later the upstream flood wave arrives and
  // the river overflows into the riverside park and the lowest streets (fluvial flooding); then the water drains.
  function setupHeroFlood() {
    const figure = document.querySelector("[data-hero-flood]");
    const canvas = figure && figure.querySelector("canvas");
    const ctx = canvas && canvas.getContext("2d");
    if (!ctx) return;
    const statusEl = figure.querySelector("[data-flood-status]");
    const statusLabels = statusEl.dataset.labels.split("|");

    const NX = 220, NY = 150, N = NX * NY, DX = 5, G = 9.81;
    const PERIOD = 24;            // seconds of real time per event
    const SIM_SPEED = 120;        // simulated seconds per real second (48 simulated minutes per event)
    const z = new Float32Array(N), h = new Float32Array(N), nMan = new Float32Array(N);
    const qx = new Float32Array(N), qy = new Float32Array(N);
    // land use: 0 lot, 1 street, 2 avenue, 3 yard, 4 park and floodplain, 5 field, 6 channel, 7 building
    const use = new Uint8Array(N);
    const yc = (x) => 116 + 9 * Math.sin(x / 38 + 0.6) + 3.5 * Math.sin(x / 12);
    const sag = (x, y, cx, cy, r, depth) => depth * Math.exp(-((x - cx) ** 2 + (y - cy) ** 2) / (2 * r * r));

    for (let j = 0; j < NY; j += 1) {
      for (let i = 0; i < NX; i += 1) {
        const k = j * NX + i;
        const d = j - yc(i);
        const zb = 0.004 * (NX - i);
        let e;
        if (Math.abs(d) < 4) { e = zb - 1 + 1.6 * (d / 4) ** 2; use[k] = 6; h[k] = Math.max(0, zb - 0.1 - e); }
        else if (d >= 4) { e = zb + 0.6 + 0.03 * (d - 4); use[k] = 5; }
        else if (d > -20) { e = zb + 0.6 + 0.008 * (-d - 4); use[k] = 4; }
        else {
          e = zb + 0.73 + 0.018 * (-d - 20) + 0.12 * Math.sin(i / 23) * Math.sin(j / 17)
            - sag(i, j, 88, 52, 7, 0.32) - sag(i, j, 152, 70, 6, 0.28) - sag(i, j, 40, 30, 5, 0.22);
          const vStreet = i % 22 < 2 || i % 66 < 3, hStreet = j % 18 < 2 || (j >= 40 && j < 43);
          const riverside = d > -23;
          use[k] = riverside ? 2 : vStreet || hStreet ? (i % 66 < 3 || (j >= 40 && j < 43) ? 2 : 1) : 0;
          if (use[k] === 1 || use[k] === 2) e -= 0.12;
        }
        z[k] = e;
        nMan[k] = use[k] === 6 ? 0.03 : use[k] === 1 || use[k] === 2 ? 0.02 : use[k] === 4 || use[k] === 5 ? 0.05 : 0.035;
      }
    }

    // blocks between streets: residential (houses with back yards), commercial (larger buildings) or parks
    const buildings = [], trees = [];
    const inCity = (i, j) => i >= 0 && i < NX && j >= 0 && j < NY && j - yc(i) <= -24;
    const hash = (a, b) => { const s = Math.sin(a * 127.1 + b * 311.7) * 43758.5453; return s - Math.floor(s); };
    const place = (x, y, w, hh, type) => {
      for (let i = x; i < x + w; i += 1) for (let j = y; j < y + hh; j += 1) if (!inCity(i, j)) return;
      buildings.push({ x, y, w, h: hh, type });
      for (let i = x; i < x + w; i += 1) for (let j = y; j < y + hh; j += 1) { const k = j * NX + i; use[k] = 7; z[k] += 5; }
    };
    for (let bx = 0; bx < NX; bx += 22) {
      for (let by = 0; by < NY; by += 18) {
        const x0 = bx + (bx % 66 === 0 ? 3 : 2), x1 = bx + 22, y0 = by + 2, y1 = by + 18;
        const r = hash(bx, by);
        const avenue = bx % 66 === 0 || bx % 66 === 44 || (by <= 40 && by + 18 > 40);
        if (r < 0.12) {
          for (let n = 0; n < 9; n += 1) {
            const tx = x0 + 2 + hash(n, bx) * (x1 - x0 - 4), ty = y0 + 2 + hash(by, n) * (y1 - y0 - 4);
            if (inCity(Math.round(tx), Math.round(ty))) trees.push([tx, ty, 1.3 + hash(n, n + bx) * 1.2]);
          }
          for (let i = x0; i < x1; i += 1) for (let j = y0; j < y1; j += 1) if (inCity(i, j) && use[j * NX + i] === 0) use[j * NX + i] = 4;
        } else if (avenue && r < 0.62) {
          const w = x1 - x0 - 4, mid = Math.floor(w / 2);
          place(x0 + 2, y0 + 2, mid - 1, y1 - y0 - 4, "large");
          place(x0 + 2 + mid + 1, y0 + 2, w - mid - 1, Math.floor((y1 - y0 - 4) * (0.5 + 0.4 * r)), "large");
        } else {
          for (let x = x0 + 1; x + 3 <= x1 - 1; x += 4) {
            place(x, y0 + 1, 3, 3, "house");
            place(x, y1 - 4, 3, 3, "house");
          }
          for (let i = x0; i < x1; i += 1) for (let j = y0 + 4; j < y1 - 4; j += 1) if (inCity(i, j) && use[j * NX + i] === 0) use[j * NX + i] = 3;
        }
      }
    }
    for (let n = 0; n < 46; n += 1) {      // trees along the riverside park
      const tx = hash(n, 7) * NX, ty = yc(tx) - 6 - hash(7, n) * 12;
      trees.push([tx, ty, 1.4 + hash(n, 3) * 1.4]);
    }
    const inflowCells = [];
    for (let j = 0; j < NY; j += 1) if (use[j * NX] === 6) inflowCells.push(j * NX);

    const palette = [[239, 235, 227], [218, 215, 208], [210, 207, 200], [229, 233, 219], [221, 232, 212],
      [228, 231, 215], [216, 224, 205], [236, 232, 224]];
    const base = new Uint8ClampedArray(N * 3);
    for (let k = 0; k < N; k += 1) {
      const c = palette[use[k]];
      base[k * 3] = c[0]; base[k * 3 + 1] = c[1]; base[k * 3 + 2] = c[2];
    }

    const rainCol = new Float32Array(NX);
    // water colour and opacity by depth, in 1 cm classes up to 2.55 m
    const waterLUT = new Float32Array(256 * 4);
    for (let n = 0; n < 256; n += 1) {
      const d = n / 100, t = Math.pow(Math.min(d / 1.6, 1), 0.55);
      const alpha = d < 0.06 ? Math.max(0, (d - 0.01) / 0.05) * 0.38 : Math.min(0.9, 0.38 + (d - 0.06) * 2.6);
      waterLUT.set([178 - 150 * t, 222 - 104 * t, 236 - 86 * t, alpha], n * 4);
    }
    const grid = document.createElement("canvas");
    grid.width = NX; grid.height = NY;
    const gctx = grid.getContext("2d");
    const image = gctx.createImageData(NX, NY);
    let hMax = 1;

    // theta-weighted flux (de Almeida et al., 2012): blending each face's previous flux with its two neighbours
    // damps the checkerboard oscillation of the plain local-inertial scheme
    const THETA = 0.8, SIDE = 0.5 * (1 - THETA);
    const qxOld = new Float32Array(N), qyOld = new Float32Array(N);
    function step(dt, rain, cx, inflow) {
      const c = G * dt;
      qxOld.set(qx); qyOld.set(qy);
      for (let j = 0; j < NY; j += 1) {
        const row = j * NX;
        for (let i = 0; i < NX - 1; i += 1) {
          const a = row + i, b = a + 1;
          if (use[a] === 7 || use[b] === 7) { qx[a] = 0; continue; }
          const ea = z[a] + h[a], eb = z[b] + h[b];
          const hf = Math.max(ea, eb) - Math.max(z[a], z[b]);
          if (hf <= 0.002) { qx[a] = 0; continue; }
          const n = 0.5 * (nMan[a] + nMan[b]);
          const q0 = i > 0 && i < NX - 2 ? THETA * qxOld[a] + SIDE * (qxOld[a - 1] + qxOld[a + 1]) : qxOld[a];
          const q = (q0 - c * hf * (eb - ea) / DX) / (1 + c * n * n * Math.abs(qxOld[a]) / (hf * hf * Math.cbrt(hf)));
          const qmax = hf * Math.sqrt(G * hf);          // Froude limit keeps shallow cells stable
          qx[a] = q > qmax ? qmax : q < -qmax ? -qmax : q;
        }
      }
      for (let j = 0; j < NY - 1; j += 1) {
        const row = j * NX;
        for (let i = 0; i < NX; i += 1) {
          const a = row + i, b = a + NX;
          if (use[a] === 7 || use[b] === 7) { qy[a] = 0; continue; }
          const ea = z[a] + h[a], eb = z[b] + h[b];
          const hf = Math.max(ea, eb) - Math.max(z[a], z[b]);
          if (hf <= 0.002) { qy[a] = 0; continue; }
          const n = 0.5 * (nMan[a] + nMan[b]);
          const q0 = j > 0 && j < NY - 2 ? THETA * qyOld[a] + SIDE * (qyOld[a - NX] + qyOld[a + NX]) : qyOld[a];
          const q = (q0 - c * hf * (eb - ea) / DX) / (1 + c * n * n * Math.abs(qyOld[a]) / (hf * hf * Math.cbrt(hf)));
          const qmax = hf * Math.sqrt(G * hf);
          qy[a] = q > qmax ? qmax : q < -qmax ? -qmax : q;
        }
      }
      const inlet = 7e-6 * dt, soak = 4.5e-6 * dt, lots = 1.5e-6 * dt;
      if (rain > 0) for (let i = 0; i < NX; i += 1) rainCol[i] = dt * rain * (0.65 + 0.55 * Math.exp(-((i - cx) ** 2) / 4000));
      hMax = 0.05;
      for (let j = 0; j < NY; j += 1) {
        for (let i = 0; i < NX; i += 1) {
          const k = j * NX + i;
          const u = use[k];
          if (u === 7) continue;
          let dq = 0;
          if (i > 0) dq += qx[k - 1];
          if (i < NX - 1) dq -= qx[k];
          if (j > 0) dq += qy[k - NX];
          if (j < NY - 1) dq -= qy[k];
          let v = h[k] + (dt * dq) / DX;
          if (rain > 0) v += rainCol[i];
          if (u === 1 || u === 2) v -= inlet;          // storm-drain inlets
          else if (u === 3 || u === 4 || u === 5) v -= soak;
          else if (u === 0) v -= lots;
          h[k] = v > 0 ? v : 0;
          if (h[k] > hMax) hMax = h[k];
        }
      }
      const add = (inflow * dt) / (DX * DX * inflowCells.length);
      inflowCells.forEach((k) => { h[k] += add; });
      for (let j = 0; j < NY; j += 1) { const k = j * NX + NX - 1; if (use[k] === 6 || use[k] === 4) h[k] *= 0.5; }
    }

    let W = 0, H = 0, dpr = 1;
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.round(canvas.clientWidth * dpr); H = Math.round(canvas.clientHeight * dpr);
      if (W && H && (canvas.width !== W || canvas.height !== H)) { canvas.width = W; canvas.height = H; }
    }

    let clock = 0, lastStatus = -1;
    const raindrops = Array.from({ length: 46 }, () => [Math.random(), Math.random(), 0.6 + Math.random() * 0.8]);

    function render(phase, rainOn) {
      if (!W || !H) { resize(); if (!W || !H) return; }
      const data = image.data;
      for (let k = 0; k < N; k += 1) {
        let r = base[k * 3], g = base[k * 3 + 1], b = base[k * 3 + 2];
        const d = h[k];
        if (d > 0.012 && use[k] !== 7) {
          const n = (d > 2.55 ? 255 : (d * 100) | 0) * 4, a = waterLUT[n + 3];
          r = r * (1 - a) + waterLUT[n] * a;
          g = g * (1 - a) + waterLUT[n + 1] * a;
          b = b * (1 - a) + waterLUT[n + 2] * a;
        }
        data[k * 4] = r; data[k * 4 + 1] = g; data[k * 4 + 2] = b; data[k * 4 + 3] = 255;
      }
      gctx.putImageData(image, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(grid, 0, 0, W, H);
      const sx = W / NX, sy = H / NY;

      // park trees, then buildings with a soft shadow
      trees.forEach(([tx, ty, tr]) => {
        ctx.fillStyle = "rgba(95, 146, 104, 0.55)";
        ctx.beginPath(); ctx.arc(tx * sx, ty * sy, tr * sx, 0, Math.PI * 2); ctx.fill();
      });
      ctx.fillStyle = "rgba(46, 45, 41, 0.09)";
      buildings.forEach((bd) => ctx.fillRect((bd.x + 0.6) * sx, (bd.y + 0.6) * sy, bd.w * sx, bd.h * sy));
      ctx.lineWidth = 0.7 * dpr;
      buildings.forEach((bd) => {
        const x0 = bd.x * sx, y0 = bd.y * sy, w = bd.w * sx, hh = bd.h * sy;
        ctx.fillStyle = bd.type === "house" ? "#f3ede3" : "#e2ded8";
        ctx.strokeStyle = bd.type === "house" ? "rgba(143, 106, 88, 0.45)" : "rgba(46, 45, 41, 0.3)";
        ctx.fillRect(x0, y0, w, hh); ctx.strokeRect(x0, y0, w, hh);
        if (bd.type === "house") {
          ctx.beginPath(); ctx.moveTo(x0 + w * 0.15, y0 + hh / 2); ctx.lineTo(x0 + w * 0.85, y0 + hh / 2); ctx.stroke();
        } else {
          ctx.fillStyle = "rgba(46, 45, 41, 0.07)";
          ctx.fillRect(x0 + w * 0.3, y0 + hh * 0.3, w * 0.25, hh * 0.25);
        }
      });

      // light rain over the city while it rains
      if (rainOn > 0.05) {
        ctx.strokeStyle = `rgba(79, 147, 179, ${0.35 * rainOn})`;
        ctx.beginPath();
        raindrops.forEach((drop) => {
          drop[1] = (drop[1] + 0.012 * drop[2]) % 1;
          const x0 = drop[0] * W, y0 = drop[1] * H * 0.8;
          ctx.moveTo(x0, y0); ctx.lineTo(x0 - 2 * dpr, y0 + 8 * dpr);
        });
        ctx.stroke();
      }

      const status = phase < 0.34 ? 0 : phase < 0.68 ? 1 : 2;
      if (status !== lastStatus) { statusEl.textContent = statusLabels[status]; lastStatus = status; }
      figure.classList.toggle("is-raining", rainOn > 0.05);
    }

    const bell = (x, a, b) => (x <= a || x >= b ? 0 : Math.sin((Math.PI * (x - a)) / (b - a)) ** 2);
    function advance(realDt) {
      clock += realDt;
      const phase = (clock % PERIOD) / PERIOD;
      const rain = bell(phase, 0.05, 0.32);
      const cx = 30 + 160 * Math.min(Math.max((phase - 0.05) / 0.27, 0), 1);
      const inflow = 12 + 85 * Math.exp(-(((phase - 0.5) / 0.11) ** 2));
      let remaining = SIM_SPEED * realDt, guard = 0;
      while (remaining > 0 && guard < 6) {
        const dt = Math.min(remaining, 1, (0.5 * DX) / Math.sqrt(G * hMax));
        step(dt, 6e-5 * rain, cx, inflow);
        remaining -= dt; guard += 1;
      }
      render(phase, rain);
    }

    resize();
    if ("ResizeObserver" in window) new ResizeObserver(resize).observe(canvas);
    else window.addEventListener("resize", resize);

    if (reduceMotion.matches) {
      for (let n = 0; n < 200; n += 1) step(0.8, 6e-5, 110, 12);
      render(0.2, 0);
      return;
    }

    // the loop keeps ticking but does no work while the figure is off screen (browsers pause it in hidden tabs)
    let visible = true, last = 0;
    function frame(now) {
      if (visible && !document.hidden) {
        const dt = last ? Math.min((now - last) / 1000, 0.05) : 0.016;
        advance(dt);
        last = now;
      } else {
        last = 0;
      }
      window.requestAnimationFrame(frame);
    }
    new IntersectionObserver((entries) => { visible = entries[0].isIntersecting; }, { threshold: 0.05 }).observe(figure);
    window.requestAnimationFrame(frame);
  }

  setupNavigation();
  updateModelVideoMotion();
  revealSections();
  setupRecordCounters();
  setupResearchMotion();
  setupHeroFlood();
  document.documentElement.classList.add("home-motion-ready");

  const onMotionPreferenceChange = () => updateModelVideoMotion();
  if (reduceMotion.addEventListener) reduceMotion.addEventListener("change", onMotionPreferenceChange);
  else reduceMotion.addListener(onMotionPreferenceChange);
})();
