---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
lang: en
translation_url: /pt/cv/
redirect_from:
  - /resume
---

{% include base_path %}

This page summarizes my academic CV. For the most current and complete version, download the PDF.

<p><a class="btn btn--primary" href="{{ '/files/CV___Marcus_N__Gomes_Jr.pdf' | relative_url }}">Download CV (PDF)</a></p>

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
