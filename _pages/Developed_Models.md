---
permalink: /Developed_Models/
title: "Selected Published Open-Source Code from my Github Account"
author_profile: true
redirect_from: 
  - /md/
  - /Developed_Models.html
---


## HydroPol2D
HydroPol2D is a fully distributed hydrologic-hydrodynamic model capable of simulating a variety of flood-related problems.

Model Description:
- Spatially varied inputs given by rasters representing the land use and land cover, terrain elevation, and soil texture characteristics
- Possibility to simulate a variety of rain-on-the-grid boundary conditions, such as: (i) concentrated rainfall, (ii) interpolated rainfall from known rain gauges, (iii) maps of rainfall, and (iv) satellite rainfall from PERSIANN-PDIR (automatically)
- Possibility to simulate inflow hydrographs, stage hydrographs, dam-break scenarios, Monte-Carlo simulations, and control of valves and gauges spatially in the catchment
- Possibility to simulate internal boundary conditions to represent flow controls and detention ponds
- Infiltration simulated by the Green-Ampt model
- Evapotranspiration simulated by the Penman-Monteith formulation
- Groundwater replenishment by the SWMM approach
- Groundwater fluxes simulated with 2D Boussinesq Model
- Momentum equations solved by the local-inertial 2D approximations or by cellular automata approach
- Outlet boundary conditions of normal flow or critical flow
- Automatic calibration algorithm provided
- One-at-the-time sensitivity analysis code
- Outputs saved in a variety of formats, such as .TIF rasters, .mp4 animations, .csv stage-discharge values in internal gauges and at the outlet, .png figures of the input data, etc.
- The model is fully written in MATLAB and includes all input data from Excel spreadsheets.

<i> Example of a rain-on-the-grid simulation of a 1 in 50 year rainfall in an urban area with influence of urban drainage - Sao Paulo, Brazil.h</i>

<img src="https://marcusnobrega-eng.github.io/profile//files/Rain_on_the_grid.gif">

<i> Example of a total dam-break collapse scenario in a city in Pernambuco, Northeast - Brazil. </i>

<img src="https://marcusnobrega-eng.github.io/profile//files/dam_break.gif">

[Download Model](https://github.com/marcusnobrega-eng/HydroPol2D)
## HydroHP-1D
HydroHP-1D is a 1D full momentum de St. Venant solver for a variety of different cross-sections under a variety of boundary conditions.

Model Description:
- A variety of cross-sections (XS) can be simulated, such as (i) rectangular, (ii) triangular, (iii) trapezoidal, (iv) parabolic, (v) circular, (vi) irregular, and (vii) composite
- Different conceptualizations of Manning's roughness coefficients can be assigned, such as: (i) depth varying, (ii) constant in the XS, (iii) different values for inbanks and overbanks, (iv) constant at the section and varied in space
- HydroHP can deal with boundary conditions of:
- (a) Inflow hydrographs
- (b) Nash hydrographs
- (c) Tidal Outlet Hydrographs
- (d) Stage-Hydrographs
- (e) Combination of previous cases
- The model is fully written in MATLAB and includes all input data from Excel spreadsheets.

<i> Example of the state evolution in an unsteady-state simulation</i>

<img src="https://marcusnobrega-eng.github.io/profile//files/HydroHP_1.gif">

<i> Example of a composite channel receiving a 100 in a year unsteady-state inflow hydrograph</i>

<img src="https://marcusnobrega-eng.github.io/profile//files/HydroHP_2.gif">

[Download Model](https://github.com/marcusnobrega-eng/HydroHP)

## DRAIN-LID: Darcy–Richards Analysis of Infiltration in Nature-based Low Impact Development
DRAIN-LID is a Mixed-Form Richard Solver for 1D simulation of saturated/unsaturated flow in saturated media. The model is written in MATLAB and allows the evaluation of the long-term performance of infiltration techniques by making it possible to perform continuous high-resolution simulations over decades.  
<i> Conceptual Example framework of DRAIN-LID, currently under review on Environmental Modelling and Software</i>
<img width="1987" height="861" alt="DRAIN_LID" src="https://github.com/user-attachments/assets/cf5fca6c-4d27-4e32-af86-5f17bf0261f6" />

[Download Model](https://github.com/marcusnobrega-eng/DRAIN-LID).

## GRIDF-BR: Gridded Intensity–Duration–Frequency Curves for Brazil
GRIDF-BR is a set of tools to analyze and process rasterized rainfall data from satellite dataframes such as IMERG, PERSIANN, CHRIPs, and BR-DWGD. The series of Python and Matlab codes allows for the extraction of maximum time series, extreme events, performing bias correction, extracting gauge precipitation from the ANA database, computing rainfall intensity duration curves, and more. Preliminary results of my paper (currently under review in JoH) show a framework to evaluate IDF curves for the Brazilian boundaries.

<i> GRIDF toolbox, currently under review in JoH</i>
<img width="1389" height="759" alt="image" src="https://github.com/user-attachments/assets/1090dd66-fa1f-47b7-9207-df39a5387208" />

GRIDF 
[https://github.com/marcusnobrega-eng/DRAIN-LID](https://gridf-470516.projects.earthengine.app/view/gridf-br)
[Download Code](https://github.com/marcusnobrega-eng/GRIDF).

## RTC-Stormwater
The RTC-Stormwater model linearizes the non-linear hydrologic and hydrodynamics of catchments, reservoirs, and channels' dynamical equations and provides a state-space model approach that is designed to be coupled with reactive and predictive control algorithms.

<i>Model Description</i>
- Watershed hydrodynamics simulated by a kinematic wave approach
- Infiltration through Green-Ampt Model
- Evapotranspiration simulated by the Penman-Monteith formulation
- Groundwater replenishment by the SWMM approach
- Model predictive control 
- Linear Quadratic Regulators
- Linear Quadratic Integrators
- Reservoirs simulated by mass and energy conservation equations
- Channels solved by the diffusive-wave model

<i> Conceptual Example of the RTC-Stormwater Model, available at Gomes Jr., et al., (2024)</i>
<img src="https://marcusnobrega-eng.github.io/profile//files/Graphical_Abstract_MPC-1.png">

[Download Model](https://github.com/marcusnobrega-eng/RTC---Flood-and-Water-Quality)

## TC-Hydro
TC-Hydro is a bioretention system analysis model with a variety of design and analysis methods, including:
- Design of bioretention systems by methods such as Envelope Curve, Pre-development Flow Conditions, Biorerention Manual
- Hydrologic routing of the bioretention system by solving Green-Ampt model merged with pool-level routing schemes
- One-at-the-time sensitivity analysis
- Global sensitivity analysis
- Monte-carlo simulations
- Automatic Calibration
- Design Optimization considering construction costs

The model is designed in Excel-VBA and also has a version in MATLAB.

<i> Conceptual Example of the TC-Hydro Model, available at Gomes Jr., et al., (2023)</i>
<img src="https://marcusnobrega-eng.github.io/profile//files/Conceptual_Model-1.png">

[Download Model](https://github.com/marcusnobrega-eng/TC-Hydro)

## MODOBR
MODOBR is a retention pond design algorithm focused on maximizing the hydrological routing maximum ponding depth, with the depth required in case the media and/or the hydraulic devices are clogged and cannot store or release any water.
<img width="1460" height="448" alt="image" src="https://github.com/user-attachments/assets/03e8fba3-7ac8-4494-91c6-bc36c4ab8526" />

The model is developed in Excel-VBA and is available in

[Download Model](https://github.com/marcusnobrega-eng/MoDOBR)

## X-WHAT 

The x-WHAT model is a hydraulic solver for the flow-water problem in looped hydraulic networks. The model solves the conservation of mass and energy in hydraulic networks and allows the optimization of tanks considering pipeline costs, reservoir costs, and foundation costs by estimating lateral wind stresses at the surface of the reservoir, later translated to bending moment and shear forces at the foundation of the reservoir.

By merging hydraulics with structural design, the simple Excel-VBA tool can optimally design hydraulic network systems.

<i> Conceptual Example of the X-WHAT model, available at Gomes Jr., et al., (2024)</i>
<img src="https://marcusnobrega-eng.github.io/profile//files/General_user_algorithm-1.png">

<i> Conceptual framework and reservoir design assumptions</i>
<img width="968" height="764" alt="image" src="https://github.com/user-attachments/assets/30935368-5d42-4f3d-8ba5-ffed752f7617" />


## SWE-Solver
I developed a simple, well-balanced, conservative shallow-water equations solver to visualize 2D problems involving fluid dynamics using a 4-point explicit numerical scheme.
<i> Example of an instantenous dam-break propagation</i>
<img width="532" height="411" alt="image" src="https://github.com/user-attachments/assets/a2b137cc-7131-4c10-b446-600bc91911e5" />

[Download Model](https://github.com/marcusnobrega-eng/SWE_Solver)

## 1D Hillslope Storage Boussinesq Model
Hillslopes can be accurately simulated with simplified 1D Hillslope-Storage-Boussinesq models following the approach developed in Troch (1993). In this model, I develop a finite-volume approach to solve the 1D saturated flow problem in porous media following diffusive and kinematic effects of the wave under hillslope defined by its hillslope width function.
<i> hsB Modeln</i>
<img width="1563" height="430" alt="image" src="https://github.com/user-attachments/assets/f6457b81-f280-4e35-8201-2ca5856dfc3e" />

[Download Model](https://github.com/marcusnobrega-eng/1D_hsB?tab=readme-ov-file)

## Coupled hsB-SM Model
The hsB–SM is a parsimonious, coupled surface–subsurface hillslope model that links atmosphere, soil, and groundwater to predict outlet flow. It partitions precipitation via a canopy interception–evapotranspiration scheme (wet-canopy evaporation, transpiration, bare-soil evaporation from Penman–Monteith potentials modulated by soil-moisture stress), then tracks soil water in two layers—a root zone and a deeper transmission zone—whose drainage provides recharge to a 1-D hillslope-storage Boussinesq aquifer. Surface runoff arises from infiltration-excess and saturation-excess at each node and is routed to the outlet with a geomorphically averaged, linearized de Saint–Venant unit hydrograph, while lateral groundwater produces instantaneous baseflow; an optional deep aquifer acts as a linear reservoir. A conservative finite-volume solver with robust flux splitting, adaptive stepping, and clear mass-balance diagnostics ensures stable, unit-consistent simulation of total discharge as the sum of routed surface flow, perched-aquifer baseflow, and optional deep outflow. Under development.

<img width="1652" height="403" alt="hsb_coupled" src="https://github.com/user-attachments/assets/fee4ac8e-3dab-4f4a-82c4-7a2d6b58173c" />

