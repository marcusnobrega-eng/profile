---
layout: archive
title: "Notícias"
permalink: /pt/news/
author_profile: true
lang: pt
translation_url: /news/
body_class: news-page
news_layout: true
---

{% assign news_count = site.news | size %}
{% assign paper_count = site.news | where: "type", "Paper" | size %}
{% assign conference_count = site.news | where: "type", "Conference" | size %}

<section class="news-intro" aria-label="Visão geral do arquivo de notícias">
  <div class="news-intro__copy">
    <p class="news-intro__eyebrow">Arquivo de pesquisa</p>
    <p class="news-intro__lead">Um registro cronológico de publicações, cargos, apresentações, cursos, prêmios e outros marcos da minha trajetória de pesquisa.</p>
  </div>
  <div class="news-intro__counts" aria-label="Contagem de notícias">
    <a href="#news-timeline"><strong>{{ news_count }}</strong><span>atualizações desde 2017</span></a>
    <a href="#news-timeline"><strong>{{ paper_count }}</strong><span>atualizações de artigos</span></a>
    <a href="#news-timeline"><strong>{{ conference_count }}</strong><span>atualizações de conferências</span></a>
  </div>
  <nav class="news-intro__links" aria-label="Páginas relacionadas">
    <a href="{{ '/pt/publications/' | relative_url }}"><i class="fas fa-book-open" aria-hidden="true"></i> Publicações</a>
    <a href="{{ '/pt/talks/' | relative_url }}"><i class="fas fa-microphone" aria-hidden="true"></i> Palestras</a>
  </nav>
</section>

<div id="news-timeline">
  {% include news-list.html initial=18 reveal=18 %}
</div>
