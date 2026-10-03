---
layout: archive
title: "News"
permalink: /news/
author_profile: true
lang: en
translation_url: /pt/news/
body_class: news-page
news_layout: true
---

{% assign news_count = site.news | size %}
{% assign paper_count = site.news | where: "type", "Paper" | size %}
{% assign conference_count = site.news | where: "type", "Conference" | size %}

<section class="news-intro" aria-label="News archive overview">
  <div class="news-intro__copy">
    <p class="news-intro__eyebrow">Research archive</p>
    <p class="news-intro__lead">A chronological record of publications, appointments, presentations, courses, awards, and other research milestones.</p>
  </div>
  <div class="news-intro__counts" aria-label="News counts">
    <a href="#news-timeline"><strong>{{ news_count }}</strong><span>updates since 2017</span></a>
    <a href="#news-timeline"><strong>{{ paper_count }}</strong><span>paper updates</span></a>
    <a href="#news-timeline"><strong>{{ conference_count }}</strong><span>conference updates</span></a>
  </div>
  <nav class="news-intro__links" aria-label="Related pages">
    <a href="{{ '/publications/' | relative_url }}"><i class="fas fa-book-open" aria-hidden="true"></i> Publications</a>
    <a href="{{ '/talks/' | relative_url }}"><i class="fas fa-microphone" aria-hidden="true"></i> Talks</a>
  </nav>
</section>

<div id="news-timeline">
  {% include news-list.html initial=18 reveal=18 %}
</div>
