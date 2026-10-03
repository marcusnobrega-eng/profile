---
layout: archive
permalink: /Developed_Models/
title: "Developed Models"
author_profile: true
lang: en
translation_url: /pt/Developed_Models/
body_class: models-archive-page
models_layout: true
description: "Open-source hydrologic, hydraulic, and stormwater software developed by Marcus N. Gomes Jr."
redirect_from:
  - /md/
  - /Developed_Models.html
---

<section class="models-page">
  <header class="models-intro models-reveal">
    <div class="models-intro__copy">
      <p class="models-eyebrow">Research software · open science</p>
      <p class="models-intro__lead">I build computational tools to understand how water moves, where floods emerge, and how infrastructure can respond.</p>
      <p class="models-intro__text">The collection spans physically based flood simulation, hillslope hydrology, rainfall extremes, green infrastructure, and real-time control.</p>
    </div>
    <nav class="models-intro__links" aria-label="Software resources">
      <a href="https://github.com/marcusnobrega-eng"><i class="fab fa-github" aria-hidden="true"></i> Complete GitHub profile</a>
      <a href="https://marcusnobrega-eng.github.io/HydroPol2D-docs/"><i class="fas fa-book-open" aria-hidden="true"></i> HydroPol2D documentation</a>
      <a href="{{ '/publications/' | relative_url }}"><i class="fas fa-file-alt" aria-hidden="true"></i> Associated publications</a>
    </nav>
    <ol class="models-process" aria-label="Research software workflow">
      <li><span>01</span><strong>Observe</strong><small>Rainfall, terrain, soils, flow</small></li>
      <li><span>02</span><strong>Represent</strong><small>Processes and exchanges</small></li>
      <li><span>03</span><strong>Simulate</strong><small>Hazards across scales</small></li>
      <li><span>04</span><strong>Decide</strong><small>Design and adaptation</small></li>
    </ol>
  </header>

  <section class="models-flagship models-reveal" aria-labelledby="hydropol-title">
    <header class="models-section-heading models-section-heading--flagship">
      <p>01 / Flagship model</p>
      <div>
        <h2 id="hydropol-title">HydroPol2D</h2>
        <p>A distributed model of the water cycle built for flood science across spatial and temporal scales.</p>
      </div>
    </header>
    <div class="models-flagship__grid">
      <div class="models-flagship__copy">
        <p>HydroPol2D couples rainfall, infiltration, groundwater exchange, runoff, urban drainage, channels, reservoirs, pollutant transport, snow, land-surface energy balance, and surface flooding in a raster-based framework.</p>
        <ul class="models-capabilities" aria-label="HydroPol2D capabilities">
          <li><span>Surface and subsurface</span><strong>Coupled hydrology</strong></li>
          <li><span>Local to regional</span><strong>Spatially distributed</strong></li>
          <li><span>Water and pollutants</span><strong>Hydrodynamic routing</strong></li>
        </ul>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/HydroPol2D"><i class="fab fa-github" aria-hidden="true"></i> Repository</a>
          <a class="model-button model-button--secondary" href="https://marcusnobrega-eng.github.io/HydroPol2D-docs/"><i class="fas fa-book-open" aria-hidden="true"></i> Documentation</a>
          <a class="model-button model-button--secondary" href="https://doi.org/10.1016/j.jhydrol.2023.129982"><i class="fas fa-external-link-alt" aria-hidden="true"></i> Journal paper</a>
        </div>
      </div>
      <figure class="models-flagship__media">
        <video autoplay muted loop playsinline controls preload="metadata" poster="{{ '/files/stanford-campus-coupled-states-poster.png' | relative_url }}" aria-label="Eight synchronized HydroPol2D outputs for a coupled simulation of Stanford campus">
          <source src="{{ '/files/stanford-campus-coupled-states.mp4' | relative_url }}" type="video/mp4">
        </video>
        <figcaption><strong>Stanford campus · 10 m coupled simulation</strong><span>Flood depth · velocity · rainfall · infiltration · groundwater · recharge</span></figcaption>
      </figure>
    </div>
  </section>

  <section class="models-portfolio" aria-labelledby="portfolio-title">
    <header class="models-section-heading models-reveal">
      <p>02 / Software portfolio</p>
      <div>
        <h2 id="portfolio-title">Tools across the research workflow</h2>
        <p>Focused models for river hydraulics, green infrastructure, rainfall extremes, control, and design.</p>
      </div>
    </header>

    <div class="models-grid">
      <article class="model-card models-reveal">
        <div class="model-card__content">
          <div class="model-card__top"><span>02</span><i class="fas fa-water" aria-hidden="true"></i></div>
          <p class="model-card__kicker">Full-momentum 1D hydraulics</p>
          <h3>HydroHP-1D</h3>
          <p>Solves the complete one-dimensional Saint-Venant equations across multiple channel geometries and boundary-condition combinations.</p>
          <p class="model-card__scope">Channels · tides · unsteady flow</p>
          <div class="model-card__actions"><a class="model-button model-button--secondary" href="https://github.com/marcusnobrega-eng/HydroHP"><i class="fab fa-github" aria-hidden="true"></i> Repository</a></div>
        </div>
        <figure class="model-card__media"><img src="{{ '/files/HydroHP_1.gif' | relative_url }}" alt="HydroHP-1D unsteady flow simulation showing the evolution of channel states" loading="eager"><figcaption>State evolution in an unsteady-flow simulation.</figcaption></figure>
      </article>

      <article class="model-card models-reveal">
        <div class="model-card__content">
          <div class="model-card__top"><span>03</span><i class="fas fa-seedling" aria-hidden="true"></i></div>
          <p class="model-card__kicker">Infiltration-based LID modeling</p>
          <h3>DRAIN-LID</h3>
          <p>A mixed-form Richards equation solver for continuous, high-resolution simulation of saturated and unsaturated flow in low-impact development systems.</p>
          <p class="model-card__scope">Soil water · infiltration · climate adaptation</p>
          <div class="model-card__actions"><a class="model-button model-button--secondary" href="https://github.com/marcusnobrega-eng/DRAIN-LID"><i class="fab fa-github" aria-hidden="true"></i> Repository</a></div>
        </div>
        <figure class="model-card__media"><img src="https://github.com/user-attachments/assets/cf5fca6c-4d27-4e32-af86-5f17bf0261f6" alt="DRAIN-LID conceptual framework for infiltration-based systems" loading="eager"><figcaption>Surface-subsurface processes represented by DRAIN-LID.</figcaption></figure>
      </article>

      <article class="model-card models-reveal">
        <div class="model-card__content">
          <div class="model-card__top"><span>04</span><i class="fas fa-cloud-rain" aria-hidden="true"></i></div>
          <p class="model-card__kicker">Rainfall extremes and IDF curves</p>
          <h3>GRIDF-BR</h3>
          <p>Processes raster rainfall, extracts extremes, corrects satellite bias, and estimates intensity-duration-frequency curves consistently across Brazil.</p>
          <p class="model-card__scope">Earth observation · extremes · national scale</p>
          <div class="model-card__actions"><a class="model-button" href="https://gridf-470516.projects.earthengine.app/view/gridf-br"><i class="fas fa-external-link-alt" aria-hidden="true"></i> Web app</a><a class="model-button model-button--secondary" href="https://github.com/marcusnobrega-eng/GRIDF"><i class="fab fa-github" aria-hidden="true"></i> Code</a></div>
        </div>
        <figure class="model-card__media"><img src="https://github.com/user-attachments/assets/1090dd66-fa1f-47b7-9207-df39a5387208" alt="GRIDF-BR interface and rainfall-extreme outputs" loading="eager"><figcaption>Nationally consistent rainfall-frequency estimation.</figcaption></figure>
      </article>

      <article class="model-card models-reveal">
        <div class="model-card__content">
          <div class="model-card__top"><span>05</span><i class="fas fa-sliders-h" aria-hidden="true"></i></div>
          <p class="model-card__kicker">Control-oriented stormwater modeling</p>
          <h3>RTC-Stormwater</h3>
          <p>Represents catchments, channels, and reservoirs in state space to test reactive and predictive control of flood quantity and water quality.</p>
          <p class="model-card__scope">Forecasts · reservoirs · real-time control</p>
          <div class="model-card__actions"><a class="model-button model-button--secondary" href="https://github.com/marcusnobrega-eng/RTC---Flood-and-Water-Quality"><i class="fab fa-github" aria-hidden="true"></i> Repository</a></div>
        </div>
        <figure class="model-card__media"><img src="{{ '/files/Graphical_Abstract_MPC-1.png' | relative_url }}" alt="RTC-Stormwater predictive control framework" loading="eager"><figcaption>Forecast-informed control of distributed storage.</figcaption></figure>
      </article>

      <article class="model-card models-reveal">
        <div class="model-card__content">
          <div class="model-card__top"><span>06</span><i class="fas fa-project-diagram" aria-hidden="true"></i></div>
          <p class="model-card__kicker">Bioretention analysis and design</p>
          <h3>TC-Hydro</h3>
          <p>Supports routing, sensitivity analysis, calibration, Monte Carlo simulation, and cost-aware optimization of bioretention systems.</p>
          <p class="model-card__scope">Green infrastructure · uncertainty · cost</p>
          <div class="model-card__actions"><a class="model-button model-button--secondary" href="https://github.com/marcusnobrega-eng/TC-Hydro"><i class="fab fa-github" aria-hidden="true"></i> Repository</a></div>
        </div>
        <figure class="model-card__media"><img src="{{ '/files/Conceptual_Model-1.png' | relative_url }}" alt="TC-Hydro conceptual representation of a bioretention system" loading="eager"><figcaption>Hydrologic processes within a bioretention system.</figcaption></figure>
      </article>
    </div>
  </section>

  <section class="models-registry" aria-labelledby="registry-title">
    <header class="models-section-heading models-reveal">
      <p>03 / Research code</p>
      <div><h2 id="registry-title">Additional models and numerical experiments</h2><p>Compact tools developed for specific questions in terrain preparation, infrastructure design, shallow-water flow, and hillslope hydrology.</p></div>
    </header>
    <div class="models-registry__list">
      <a class="model-registry-item models-reveal" href="https://github.com/marcusnobrega-eng/HydroBathyDEM"><span class="model-registry-item__index">07</span><span><small>Terrain preparation</small><strong>HydroBathyDEM</strong><em>Hydrologic conditioning and bathymetry for model-ready elevation data.</em></span><i class="fab fa-github" aria-hidden="true"></i></a>
      <a class="model-registry-item models-reveal" href="https://github.com/marcusnobrega-eng/LotScaleReservoir"><span class="model-registry-item__index">08</span><span><small>Distributed storage design</small><strong>LotScaleReservoir</strong><em>Lot-scale LID sizing under spatially variable runoff contributions.</em></span><i class="fab fa-github" aria-hidden="true"></i></a>
      <a class="model-registry-item models-reveal" href="https://github.com/marcusnobrega-eng/MoDOBR"><span class="model-registry-item__index">09</span><span><small>Detention pond design</small><strong>MODOBR</strong><em>Hydrologic routing and storage design under clogged outlet conditions.</em></span><i class="fab fa-github" aria-hidden="true"></i></a>
      <div class="model-registry-item models-reveal"><span class="model-registry-item__index">10</span><span><small>Hydraulic networks</small><strong>X-WHAT</strong><em>Network flow and tank optimization using infrastructure and foundation costs.</em></span><i class="fas fa-code" aria-hidden="true"></i></div>
      <a class="model-registry-item models-reveal" href="https://github.com/marcusnobrega-eng/SWE_Solver"><span class="model-registry-item__index">11</span><span><small>Two-dimensional hydraulics</small><strong>SWE-Solver</strong><em>A well-balanced conservative shallow-water equations solver.</em></span><i class="fab fa-github" aria-hidden="true"></i></a>
      <a class="model-registry-item models-reveal" href="https://github.com/marcusnobrega-eng/1D_hsB?tab=readme-ov-file"><span class="model-registry-item__index">12</span><span><small>Hillslope hydrology</small><strong>1D hsB Model</strong><em>Finite-volume Hillslope-Storage-Boussinesq simulation of saturated flow.</em></span><i class="fab fa-github" aria-hidden="true"></i></a>
      <div class="model-registry-item models-reveal"><span class="model-registry-item__index">13</span><span><small>Coupled hillslope processes</small><strong>Coupled hsB-SM Model</strong><em>Atmosphere, soil water, groundwater, baseflow, and surface runoff in development.</em></span><i class="fas fa-code" aria-hidden="true"></i></div>
    </div>
  </section>

  <footer class="models-closing models-reveal">
    <p>Happy to discuss!</p>
    <div><span>Methods, examples, and active repositories are available on GitHub.</span><a href="https://github.com/marcusnobrega-eng">View all repositories <i class="fas fa-arrow-right" aria-hidden="true"></i></a></div>
  </footer>
</section>
