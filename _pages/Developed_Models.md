---
permalink: /Developed_Models/
title: "Developed Models"
author_profile: true
lang: en
translation_url: /pt/Developed_Models/
redirect_from:
  - /md/
  - /Developed_Models.html
---

<section class="models-page">
  <div class="models-hero">
    <p class="models-eyebrow">Open-source hydrologic, hydraulic, and stormwater tools</p>
    <h2>Selected models and code from my research workflow</h2>
    <p>These tools connect numerical modeling, green infrastructure design, flood routing, digital twins, and decision support. Most are research codes developed around published studies, teaching material, or ongoing collaborations.</p>
  </div>

  <div class="models-grid">
    <article class="model-card model-card--featured">
      <div class="model-card__content">
        <div class="model-card__header">
          <p class="model-card__kicker">Distributed hydrology and hydraulics</p>
          <h3>HydroPol2D</h3>
        </div>
        <p>HydroPol2D is a fully distributed hydrologic-hydrodynamic model for flood-related simulations, water-quality routing, dam-break scenarios, rain-on-the-grid events, and urban drainage applications.</p>
        <ul class="model-card__features">
          <li>Raster-based terrain, land-use, and soil inputs</li>
          <li>Rain-on-the-grid, hydrograph, stage, dam-break, and control boundary conditions</li>
          <li>Green-Ampt infiltration, Penman-Monteith evapotranspiration, groundwater exchange, calibration, and sensitivity analysis</li>
        </ul>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/HydroPol2D">Repository</a>
        </div>
      </div>
      <div class="model-card__media model-card__media--stack">
        <figure>
          <img src="https://marcusnobrega-eng.github.io/profile//files/Rain_on_the_grid.gif" alt="Rain-on-the-grid simulation with urban drainage influence in Sao Paulo, Brazil">
          <figcaption>Rain-on-the-grid simulation in an urban catchment.</figcaption>
        </figure>
        <figure>
          <img src="https://marcusnobrega-eng.github.io/profile//files/dam_break.gif" alt="Dam-break collapse scenario in a city in Pernambuco, Brazil">
          <figcaption>Dam-break collapse scenario in Northeast Brazil.</figcaption>
        </figure>
      </div>
    </article>

    <article class="model-card">
      <div class="model-card__content">
        <p class="model-card__kicker">Full-momentum 1D hydraulics</p>
        <h3>HydroHP-1D</h3>
        <p>HydroHP-1D solves the one-dimensional full momentum de Saint-Venant equations for multiple channel shapes and boundary-condition combinations.</p>
        <ul class="model-card__features">
          <li>Rectangular, triangular, trapezoidal, parabolic, circular, irregular, and composite cross-sections</li>
          <li>Flexible Manning roughness conceptualizations</li>
          <li>Inflow, Nash, tidal outlet, stage hydrographs, and combined boundary conditions</li>
        </ul>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/HydroHP">Repository</a>
        </div>
      </div>
      <div class="model-card__media">
        <figure>
          <img src="https://marcusnobrega-eng.github.io/profile//files/HydroHP_1.gif" alt="HydroHP-1D unsteady-state simulation">
          <figcaption>State evolution in an unsteady-state simulation.</figcaption>
        </figure>
      </div>
    </article>

    <article class="model-card">
      <div class="model-card__content">
        <p class="model-card__kicker">Infiltration-based LID modeling</p>
        <h3>DRAIN-LID</h3>
        <p>DRAIN-LID is a mixed-form Richards equation solver for one-dimensional saturated and unsaturated flow in low-impact development systems, designed for continuous high-resolution simulations over long periods.</p>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/DRAIN-LID">Repository</a>
        </div>
      </div>
      <div class="model-card__media">
        <figure>
          <img src="https://github.com/user-attachments/assets/cf5fca6c-4d27-4e32-af86-5f17bf0261f6" alt="DRAIN-LID conceptual framework">
          <figcaption>DRAIN-LID conceptual framework.</figcaption>
        </figure>
      </div>
    </article>

    <article class="model-card">
      <div class="model-card__content">
        <p class="model-card__kicker">Rainfall extremes and IDF curves</p>
        <h3>GRIDF-BR</h3>
        <p>GRIDF-BR is a set of Python and MATLAB tools for processing rasterized rainfall products, extracting extremes, bias-correcting satellite datasets, and computing intensity-duration-frequency curves for Brazil.</p>
        <div class="model-card__actions">
          <a class="model-button" href="https://gridf-470516.projects.earthengine.app/view/gridf-br">Web app</a>
          <a class="model-button model-button--secondary" href="https://github.com/marcusnobrega-eng/GRIDF">Code</a>
        </div>
      </div>
      <div class="model-card__media">
        <figure>
          <img src="https://github.com/user-attachments/assets/1090dd66-fa1f-47b7-9207-df39a5387208" alt="GRIDF-BR toolbox">
          <figcaption>GRIDF-BR toolbox interface and outputs.</figcaption>
        </figure>
      </div>
    </article>

    <article class="model-card model-card--text">
      <div class="model-card__content">
        <p class="model-card__kicker">DEM conditioning and bathymetry preparation</p>
        <h3>HydroBathyDEM</h3>
        <p>HydroBathyDEM is a Python toolbox for adapting existing digital elevation models into hydrologic-hydrodynamic conditioned DEMs. It supports workflows where terrain data need to be prepared for flood, river, and surface-flow modeling applications.</p>
        <ul class="model-card__features">
          <li>Hydrologic-hydrodynamic DEM conditioning workflow</li>
          <li>River-aware terrain and bathymetry preparation</li>
          <li>Python-based tooling for preprocessing model-ready elevation data</li>
        </ul>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/HydroBathyDEM">Repository</a>
        </div>
      </div>
    </article>

    <article class="model-card">
      <div class="model-card__content">
        <p class="model-card__kicker">Control-oriented stormwater modeling</p>
        <h3>RTC-Stormwater</h3>
        <p>RTC-Stormwater linearizes hydrologic and hydrodynamic equations for catchments, reservoirs, and channels, providing a state-space modeling framework for reactive and predictive control algorithms.</p>
        <ul class="model-card__features">
          <li>Kinematic and diffusive-wave routing components</li>
          <li>Model predictive control, linear quadratic regulators, and linear quadratic integrators</li>
          <li>Reservoir mass and energy conservation equations</li>
        </ul>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/RTC---Flood-and-Water-Quality">Repository</a>
        </div>
      </div>
      <div class="model-card__media">
        <figure>
          <img src="https://marcusnobrega-eng.github.io/profile//files/Graphical_Abstract_MPC-1.png" alt="RTC-Stormwater conceptual framework">
          <figcaption>RTC-Stormwater control framework.</figcaption>
        </figure>
      </div>
    </article>

    <article class="model-card">
      <div class="model-card__content">
        <p class="model-card__kicker">Bioretention analysis and design</p>
        <h3>TC-Hydro</h3>
        <p>TC-Hydro supports bioretention design, routing, sensitivity analysis, calibration, Monte Carlo simulation, and cost-aware design optimization using Excel-VBA and MATLAB implementations.</p>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/TC-Hydro">Repository</a>
        </div>
      </div>
      <div class="model-card__media">
        <figure>
          <img src="https://marcusnobrega-eng.github.io/profile//files/Conceptual_Model-1.png" alt="TC-Hydro conceptual model">
          <figcaption>TC-Hydro conceptual model.</figcaption>
        </figure>
      </div>
    </article>

    <article class="model-card model-card--text">
      <div class="model-card__content">
        <p class="model-card__kicker">Lot-scale LID reservoir design</p>
        <h3>LotScaleReservoir</h3>
        <p>LotScaleReservoir contains the software developed for the study on accounting for spatial runoff variability in LID design for urban catchments. The tool supports lot-scale reservoir and low-impact development design where runoff contribution varies across urban parcels.</p>
        <ul class="model-card__features">
          <li>Catchment-aware lot-scale reservoir sizing</li>
          <li>Software companion to the spatial runoff variability LID design paper</li>
          <li>Design workflow for urban catchment mitigation and adaptation studies</li>
        </ul>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/LotScaleReservoir">Repository</a>
        </div>
      </div>
    </article>

    <article class="model-card model-card--compact">
      <div class="model-card__content">
        <p class="model-card__kicker">Detention pond design</p>
        <h3>MODOBR</h3>
        <p>MODOBR is an Excel-VBA retention pond design algorithm focused on hydrologic routing, maximum ponding depth, and clogged-device design conditions.</p>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/MoDOBR">Repository</a>
        </div>
      </div>
      <div class="model-card__media">
        <figure>
          <img src="https://github.com/user-attachments/assets/03e8fba3-7ac8-4494-91c6-bc36c4ab8526" alt="MODOBR model workflow">
        </figure>
      </div>
    </article>

    <article class="model-card model-card--compact">
      <div class="model-card__content">
        <p class="model-card__kicker">Hydraulic networks and structural sizing</p>
        <h3>X-WHAT</h3>
        <p>X-WHAT solves hydraulic network flow while optimizing tanks using pipeline, reservoir, and foundation costs with lateral wind stress assumptions.</p>
      </div>
      <div class="model-card__media">
        <figure>
          <img src="https://marcusnobrega-eng.github.io/profile//files/General_user_algorithm-1.png" alt="X-WHAT algorithm">
        </figure>
      </div>
    </article>

    <article class="model-card model-card--compact">
      <div class="model-card__content">
        <p class="model-card__kicker">Numerical shallow-water equations</p>
        <h3>SWE-Solver</h3>
        <p>A simple, well-balanced, conservative shallow-water equations solver for visualizing two-dimensional fluid dynamics problems using a four-point explicit numerical scheme.</p>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/SWE_Solver">Repository</a>
        </div>
      </div>
      <div class="model-card__media">
        <figure>
          <img src="https://github.com/user-attachments/assets/a2b137cc-7131-4c10-b446-600bc91911e5" alt="SWE-Solver instantaneous dam-break propagation">
        </figure>
      </div>
    </article>

    <article class="model-card model-card--compact">
      <div class="model-card__content">
        <p class="model-card__kicker">Hillslope-storage Boussinesq modeling</p>
        <h3>1D hsB Model</h3>
        <p>A finite-volume implementation of a one-dimensional Hillslope-Storage-Boussinesq model for saturated flow in porous media under hillslope-width controls.</p>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/1D_hsB?tab=readme-ov-file">Repository</a>
        </div>
      </div>
      <div class="model-card__media">
        <figure>
          <img src="https://github.com/user-attachments/assets/f6457b81-f280-4e35-8201-2ca5856dfc3e" alt="1D hillslope-storage Boussinesq model">
        </figure>
      </div>
    </article>

    <article class="model-card model-card--compact">
      <div class="model-card__content">
        <p class="model-card__kicker">Coupled surface-subsurface hillslope modeling</p>
        <h3>Coupled hsB-SM Model</h3>
        <p>The hsB-SM model links atmosphere, soil water, groundwater, lateral baseflow, and routed surface runoff in a parsimonious hillslope framework. This tool is currently under development.</p>
      </div>
      <div class="model-card__media">
        <figure>
          <img src="https://github.com/user-attachments/assets/fee4ac8e-3dab-4f4a-82c4-7a2d6b58173c" alt="Coupled hsB-SM model framework">
        </figure>
      </div>
    </article>
  </div>
</section>
