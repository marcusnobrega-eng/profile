permalink: /Developed_Models/
title: "Selected Open-Source Code from my Github Account"
author_profile: true
redirect_from: 
  - /md/
  - /markdown.html
---

## HydroPol2D
HydroPol2D is a fully distributed hydrologic-hydrodynamic model capable of simulating a variety of flood-related problems.

Model Description:
- Spatially varied inputs given by rasters representing the land use and land cover, terrain elevation, and soil texture characteristics
- Possibility to simulate a variety of rain-on-the-grid boundary conditions such as: (i) concentrated rainfall, (ii) interpolated rainfall from known rain gauges, (iii) maps of rainfall, and (iv) satellite rainfall from PERSIAN-PDIR (automatically)
- Possibility to simulate inflow hydrographs, stage hydrographs, dam-break scenarios, monte-carlo simulations, and control of valves and gauges spatially in the catchment
- Possibility to simulate internal boundary conditions to represent flow controls and detention ponds
- Infiltration simulated by Green-Ampt model
- Evapotranspiration simulated by Penman-Monteith formulation
- Groundwater replenishing by SWMM approach
- Momentum equations solved by the local-inertial 2D approximations or by cellular automata approach
- Outlet boundary conditions of normal flow or critical flow
- Automatic calibration algorithm provided
- One-at-the-time sensitivity analysis code
- Outputs saved in a variety of formats, such as .TIF rasters, .mp4 animations, .csv stage-discharge values in internal gauges and at the outlet, .png figures of the input data, etc.
- The model is fully written in Matlab and includes all input data from Excel spreadsheets.

<i> Example of a 1 in 50-year rain-on-the-grid simulation in an urban area in Sao Paulo, Brazil with the influence of hydraulic devices such as culverts or by urban infrastructure such as bridges</i>.

<img src="https://marcusnobrega-eng.github.io/profile//files/Rain_on_the_grid.gif">

<i> Example of a dam-break scenario simulated with the local-inertial solver of HydroPol2D </i>

<img src="https://marcusnobrega-eng.github.io/profile//files/dam_break.gif">

[Download Model](https://github.com/marcusnobrega-eng/HydroPol2D)
## HydroHP-1D
HydroHP-1D is a 1D full momentum saint-venant solver for a variety of different cross-sections under a variety of boundary conditions.

Model Description:
- A variety of cross-sections (XS) can be simulated, such as (i) rectangular, (ii) triangular, (iii) trapezoidal, (iv) parabolic, (v) circular, (vi) irregular, and (vii) composite
- Different conceptualizations of Manning's roughness coefficients can be assigned, such as: (i) depth varying, (ii) constant in the XS, (iii) different values for inbanks and overbanks, (iv) constant at the section and varied in space
- HydroHP can deal with boundary conditions of:
- (a) Inflow hydrographs
- (b) Nash hydrographs
- (c) Tidal Outlet Hydrographs
- (d) Stage-Hydrographs
- (e) Combination of previous cases
- The model is fully written in Matlab and includes all input data from Excel spreadsheets.

<i> Example of the state evolution in a unsteady-state simulation</i>

<img src="https://marcusnobrega-eng.github.io/profile//files/HydroHP_1".gif>

<i> Example of a composite channel receiving a 100 in a year unsteady-state inflow hydrograph</i>

<img src="https://marcusnobrega-eng.github.io/profile//files/HydroHP_2.gif">

[Download Model](https://github.com/marcusnobrega-eng/HydroHP)

## RTC-Stormwater
The RTC-Stormwater model linearizes the non-linear hydrologic and hydrodynamics of catchments, reservoirs, and channels dynamical equations and provides a state-space model approach that is designed to be coupled with reactive and predictive control algorithms.

<i>Model Description</i>
- Watershed hydrodynamics simulated by a kinematic wave approach
- Infiltration through Green-Ampt Model
- Evapotranspiration simulated by Penman-Monteith formulation
- Groundwater replenishing by SWMM approach
- Model predictive control 
- Linear Quadratic Regulators
- Linear Quadratic Integrators
- Reservoirs simulated by mass and energy conservation equations
- Channels solved by the diffusive-wave model

[Download Model](https://github.com/marcusnobrega-eng/RTC---Flood-and-Water-Quality)

## TC-Hydro
TC-Hydro is a bioretention system analysis model with a variety of design and analysis methods, including:
- Design of bioretention systems by methods such as Envelope Curve, Pre-development Flow Conditions, Biorerention Manyal
- Hydrologic routing of the bioretention system by solving Green-Ampt model merged with pool-level routing schemes
- One-at-the-time sensitivity analysis
- Global sensitivity analysis
- Monte-carlo simulations
- Automatic Calibration
- Design Optimization considering construction costs

The model is designed in Excel-VBA and also has a version in Matlab.

[Download Model](https://github.com/marcusnobrega-eng/TC-Hydro)

## MODOBR
MODOBR is a retention pond design algorithm focused on maximizing the hydrological routing maximum ponding depth with the depth required in case the media and/or the hydraulic devices are clogged and cannot store or release any water.

The model is developed in Excel-VBA and is available in

[Download Model](https://github.com/marcusnobrega-eng/MoDOBR)

## X-WHAT 

The x-WHAT model is a hydraulic solver for the flow-water problem in looped hydraulic networks. The model solves the conservation of mass and energy in hydraulic networks and allows the optimization of tanks considering pipeline costs, reservoir costs, and foundation costs by estimating lateral wind stresses at the surface of the reservoir, later translated to bending moment and shear forces at the foundation of the reservoir.

By merging hydraulics with structural design, the simple Excel-VBA tool can optimally design hydraulic network systems.

[Download Model](https://github.com/marcusnobrega-eng/X-WHAT)

## SWE-Solver
I developed a simple, well-balanced, conservative shallow-water equations solver to visualize 2D problems involving fluid dynamics using a 4-point explicit numerical scheme.

[Download Model](https://github.com/marcusnobrega-eng/SWE_Solver)

