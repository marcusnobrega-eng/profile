---
layout: archive
title: "CV"
permalink: /pt/cv/
author_profile: true
lang: pt
translation_url: /cv/
---

{% include base_path %}

Esta página resume meu currículo acadêmico. Para a versão mais atualizada e completa, baixe o arquivo em PDF.

<p><a class="btn btn--primary" href="{{ '/files/CV___Marcus_N__Gomes_Jr.pdf' | relative_url }}">Baixar CV em PDF</a></p>

Publicações
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Palestras
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
