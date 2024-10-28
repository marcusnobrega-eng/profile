---
permalink: /Developed_Models/
title: "Developed Models"
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
- 
[Download Model](https://github.com/marcusnobrega-eng/HydroHP)

## RTC-Stormwater
The RTC-Stormwater model linearizes the non-linear hydrologic and hydrodynamics of catchments, reservoirs, and channels dynamical equations and provide a state-space model approach that is designed to be coupled with reactive and predictive control algorithms.

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

## MatSEHA

## PFSA

## Dam-break Module

## Alternated Blocks Hyetograph

## SCS-Hydrologic Model

## 



## Tips and hints

* Name a file ".md" to have it render in markdown, name it ".html" to render in HTML.
* Go to the [commit list](https://github.com/academicpages/academicpages.github.io/commits/master) (on your repo) to find the last version Github built with Jekyll. 
  * Green check: successful build
  * Orange circle: building
  * Red X: error
  * No icon: not built
* Academic Pages uses [Jekyll Kramdown](https://jekyllrb.com/docs/configuration/markdown/), GitHub Flavored Markdown (GFM) parser, which is similar to the version of Markdown used on GitHub, but may have some minor differences. 
  * Some of emoji supported on GitHub should be supposed via the [Jemoji](https://github.com/jekyll/jemoji) plugin :computer:.
  * The best list of the supported emoji can be found in the [Emojis for Jekyll via Jemoji](https://www.fabriziomusacchio.com/blog/2021-08-16-emojis_for_Jekyll/#computer) blog post.

## Resources
 * [Liquid syntax guide](https://shopify.github.io/liquid/tags/control-flow/)
 * [MathJax Documentation](https://docs.mathjax.org/en/latest/)

## MathJax 

Support for MathJax Version 3.0 is included in the template:

$$
\displaylines{
\nabla \cdot E= \frac{\rho}{\epsilon_0} \\\
\nabla \cdot B=0 \\\
\nabla \times E= -\partial_tB \\\
\nabla \times B  = \mu_0 \left(J + \varepsilon_0 \partial_t E \right)
}
$$

The default delimiters of `$$...$$` and `\\[...\\]` are supported for displayed mathematics, while `\\(...\\)` should be used for in-line mathematics (ex., \\(a^2 + b^2 = c^2\\))

**Note** that since Academic Pages uses Markdown which cases some interference with MathJax and LaTeX for escaping characters and new lines, although [some workarounds exist](https://math.codidact.com/posts/278763/278772#answer-278772).

## Markdown guide

Academic Pages uses [kramdown](https://kramdown.gettalong.org/index.html) for Markdown rendering, which has some differences from other Markdown implementations such as GitHub's. In addition to this guide, please see the [kramdown Syntax page](https://kramdown.gettalong.org/syntax.html) for full documentation.  

### Header three

#### Header four

##### Header five

###### Header six

## Blockquotes

Single line blockquote:

> Quotes are cool.

## Tables

### Table 1

| Entry            | Item   |                                                              |
| --------         | ------ | ------------------------------------------------------------ |
| [John Doe](#)    | 2016   | Description of the item in the list                          |
| [Jane Doe](#)    | 2019   | Description of the item in the list                          |
| [Doe Doe](#)     | 2022   | Description of the item in the list                          |

### Table 2

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | ce
ll5   | cell6   |
|-----------------------------|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=============================|
| Foot1   | Foot2   | Foot3   |

## Definition Lists

Definition List Title
:   Definition list division.

Startup
:   A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.

#dowork
:   Coined by Rob Dyrdek and his personal body guard Christopher "Big Black" Boykins, "Do Work" works as a self motivator, to motivating your friends.

Do It Live
:   I'll let Bill O'Reilly [explain](https://www.youtube.com/watch?v=O_HyZ5aW76c "We'll Do It Live") this one.

## Unordered Lists (Nested)

  * List item one 
      * List item one 
          * List item one
          * List item two
          * List item three
          * List item four
      * List item two
      * List item three
      * List item four
  * List item two
  * List item three
  * List item four

## Ordered List (Nested)

  1. List item one 
      1. List item one 
          1. List item one
          2. List item two
          3. List item three
          4. List item four
      2. List item two
      3. List item three
      4. List item four
  2. List item two
  3. List item three
  4. List item four

## Buttons

Make any link standout more when applying the `.btn` class.

## Notices

Basic notices or call-outs are supported using the following syntax:

```markdown
**Watch out!** You can also add notices by appending `{: .notice}` to the line following paragraph.
{: .notice}
```

which wil render as:

**Watch out!** You can also add notices by appending `{: .notice}` to the line following paragraph.
{: .notice}

### Footnotes

Footnotes can be useful for clarifying points in the text, or citing information.[^1] Markdown support numeric footnotes, as well as text as long as the values are unique.[^note]

```markdown
This is the regular text.[^1] This is more regular text.[^note]

[^1]: This is the footnote itself.
[^note]: This is another footnote.
```

[^1]: Such as this footnote.
[^note]: When using text for footnotes markers, no spaces are permitted in the name.

## HTML Tags

### Address Tag

<address>
  1 Infinite Loop<br /> Cupertino, CA 95014<br /> United States
</address>

### Anchor Tag (aka. Link)

This is an example of a [link](http://github.com "Github").

### Abbreviation Tag

The abbreviation CSS stands for "Cascading Style Sheets".

*[CSS]: Cascading Style Sheets

### Cite Tag

"Code is poetry." ---<cite>Automattic</cite>

### Code Tag

You will learn later on in these tests that `word-wrap: break-word;` will be your best friend.

You can also write larger blocks of code with syntax highlighting supported for some languages, such as Python:

```python
print('Hello World!')
```

or R:

```R
print("Hello World!", quote = FALSE)
```

### Details Tag (collapsible sections)

The HTML `<details>` tag works well with Markdown and allows you to include collapsible sections, see [W3Schools](https://www.w3schools.com/tags/tag_details.asp) for more information on how to use the tag.

<details>
  <summary>Collapsed by default</summary>
  This section was collapsed by default!
</details>

The source code:

```HTML
<details>
  <summary>Collapsed by default</summary>
  This section was collapsed by default!
</details>
```

Or, you can leave a section open by default by including the `open` attribute in the tag:

<details open>
  <summary>Open by default</summary>
  This section is open by default thanks to open in the &lt;details open&gt; tag!
</details>


### Emphasize Tag

The emphasize tag should _italicize_ text.

### Insert Tag

This tag should denote <ins>inserted</ins> text.

### Keyboard Tag

This scarcely known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the `<code>` tag.

### Preformatted Tag

This tag styles large blocks of code.

<pre>
.post-title {
  margin: 0 0 5px;
  font-weight: bold;
  font-size: 38px;
  line-height: 1.2;
  and here's a line of some really, really, really, really long text, just to see how the PRE tag handles it and to find out how it overflows;
}
</pre>

### Quote Tag

<q>Developers, developers, developers&#8230;</q> &#8211;Steve Ballmer

### Strike Tag

This tag will let you <strike>strikeout text</strike>.

### Strong Tag

This tag shows **bold text**.

### Subscript Tag

Getting our science styling on with H<sub>2</sub>O, which should push the "2" down.

### Superscript Tag

Still sticking with science and Isaac Newton's E = MC<sup>2</sup>, which should lift the 2 up.

### Variable Tag

This allows you to denote <var>variables</var>.

***
**Footnotes**

The footnotes in the page will be returned following this line, return to the section on <a href="#footnotes">Markdown Footnotes</a>.

