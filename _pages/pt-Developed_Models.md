---
layout: archive
permalink: /pt/Developed_Models/
title: "Modelos Desenvolvidos"
author_profile: true
lang: pt
translation_url: /Developed_Models/
body_class: models-archive-page
models_layout: true
description: "Software open-source de hidrologia, hidráulica e drenagem urbana desenvolvido por Marcus N. Gomes Jr."
---

<section class="models-page">
  <header class="models-intro models-reveal">
    <div class="models-intro__copy">
      <p class="models-eyebrow">Software científico · ciência aberta</p>
      <p class="models-intro__lead">Desenvolvo ferramentas computacionais para entender como a água se move, onde as inundações surgem e como a infraestrutura pode responder.</p>
      <p class="models-intro__text">A coleção abrange simulação física de inundações, hidrologia de encostas, extremos de chuva, infraestrutura verde e controle em tempo real.</p>
    </div>
    <nav class="models-intro__links" aria-label="Recursos de software">
      <a href="https://github.com/marcusnobrega-eng"><i class="fab fa-github" aria-hidden="true"></i> Perfil completo no GitHub</a>
      <a href="https://marcusnobrega-eng.github.io/HydroPol2D-docs/"><i class="fas fa-book-open" aria-hidden="true"></i> Documentação do HydroPol2D</a>
      <a href="{{ '/pt/publications/' | relative_url }}"><i class="fas fa-file-alt" aria-hidden="true"></i> Publicações associadas</a>
    </nav>
    <ol class="models-process" aria-label="Fluxo de desenvolvimento do software científico">
      <li><span>01</span><strong>Observar</strong><small>Chuva, terreno, solos, vazão</small></li>
      <li><span>02</span><strong>Representar</strong><small>Processos e trocas</small></li>
      <li><span>03</span><strong>Simular</strong><small>Perigos entre escalas</small></li>
      <li><span>04</span><strong>Decidir</strong><small>Projeto e adaptação</small></li>
    </ol>
  </header>

  <section class="models-flagship models-reveal" aria-labelledby="hydropol-title">
    <header class="models-section-heading models-section-heading--flagship">
      <p>01 / Modelo principal</p>
      <div><h2 id="hydropol-title">HydroPol2D</h2><p>Um modelo distribuído do ciclo hidrológico desenvolvido para estudar inundações em diferentes escalas espaciais e temporais.</p></div>
    </header>
    <div class="models-flagship__grid">
      <div class="models-flagship__copy">
        <p>O HydroPol2D acopla chuva, infiltração, troca com águas subterrâneas, escoamento, drenagem urbana, canais, reservatórios, transporte de poluentes, neve, balanço de energia da superfície e inundação em uma estrutura baseada em rasters.</p>
        <ul class="models-capabilities" aria-label="Capacidades do HydroPol2D">
          <li><span>Superfície e subsuperfície</span><strong>Hidrologia acoplada</strong></li>
          <li><span>Escala local a regional</span><strong>Espacialmente distribuído</strong></li>
          <li><span>Água e poluentes</span><strong>Propagação hidrodinâmica</strong></li>
        </ul>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/HydroPol2D"><i class="fab fa-github" aria-hidden="true"></i> Repositório</a>
          <a class="model-button model-button--secondary" href="https://marcusnobrega-eng.github.io/HydroPol2D-docs/"><i class="fas fa-book-open" aria-hidden="true"></i> Documentação</a>
          <a class="model-button model-button--secondary" href="https://doi.org/10.1016/j.jhydrol.2023.129982"><i class="fas fa-external-link-alt" aria-hidden="true"></i> Artigo</a>
        </div>
      </div>
      <figure class="models-flagship__media">
        <video autoplay muted loop playsinline controls preload="metadata" poster="{{ '/files/stanford-campus-coupled-states-poster.png' | relative_url }}" aria-label="Oito saídas sincronizadas do HydroPol2D para uma simulação acoplada do campus de Stanford"><source src="{{ '/files/stanford-campus-coupled-states.mp4' | relative_url }}" type="video/mp4"></video>
        <figcaption><strong>Campus de Stanford · simulação acoplada em 10 m</strong><span>Profundidade · velocidade · chuva · infiltração · água subterrânea · recarga</span></figcaption>
      </figure>
    </div>
  </section>

  <section class="models-portfolio" aria-labelledby="portfolio-title">
    <header class="models-section-heading models-reveal">
      <p>02 / Portfólio de software</p>
      <div><h2 id="portfolio-title">Ferramentas em todo o fluxo de pesquisa</h2><p>Modelos direcionados à hidráulica fluvial, infraestrutura verde, extremos de chuva, controle e projeto.</p></div>
    </header>
    <div class="models-grid">
      <article class="model-card models-reveal">
        <div class="model-card__content"><div class="model-card__top"><span>02</span><i class="fas fa-water" aria-hidden="true"></i></div><p class="model-card__kicker">Hidráulica 1D com momento completo</p><h3>HydroHP-1D</h3><p>Resolve as equações completas de Saint-Venant em uma dimensão para diferentes geometrias de canal e combinações de condições de contorno.</p><p class="model-card__scope">Canais · marés · escoamento transiente</p><div class="model-card__actions"><a class="model-button model-button--secondary" href="https://github.com/marcusnobrega-eng/HydroHP"><i class="fab fa-github" aria-hidden="true"></i> Repositório</a></div></div>
        <figure class="model-card__media"><img src="{{ '/files/HydroHP_1.gif' | relative_url }}" alt="Simulação de escoamento transiente com o HydroHP-1D" loading="eager"><figcaption>Evolução dos estados em uma simulação transiente.</figcaption></figure>
      </article>
      <article class="model-card models-reveal">
        <div class="model-card__content"><div class="model-card__top"><span>03</span><i class="fas fa-seedling" aria-hidden="true"></i></div><p class="model-card__kicker">Modelagem de LID baseada em infiltração</p><h3>DRAIN-LID</h3><p>Um solucionador da equação de Richards em forma mista para simulação contínua e de alta resolução do fluxo saturado e não saturado em sistemas de baixo impacto.</p><p class="model-card__scope">Água no solo · infiltração · adaptação climática</p><div class="model-card__actions"><a class="model-button model-button--secondary" href="https://github.com/marcusnobrega-eng/DRAIN-LID"><i class="fab fa-github" aria-hidden="true"></i> Repositório</a></div></div>
        <figure class="model-card__media"><img src="https://github.com/user-attachments/assets/cf5fca6c-4d27-4e32-af86-5f17bf0261f6" alt="Estrutura conceitual do DRAIN-LID para sistemas baseados em infiltração" loading="eager"><figcaption>Processos de superfície e subsuperfície representados pelo DRAIN-LID.</figcaption></figure>
      </article>
      <article class="model-card models-reveal">
        <div class="model-card__content"><div class="model-card__top"><span>04</span><i class="fas fa-cloud-rain" aria-hidden="true"></i></div><p class="model-card__kicker">Extremos de chuva e curvas IDF</p><h3>GRIDF-BR</h3><p>Processa chuva em rasters, extrai extremos, corrige o viés de satélites e estima curvas intensidade-duração-frequência de forma consistente em todo o Brasil.</p><p class="model-card__scope">Observação da Terra · extremos · escala nacional</p><div class="model-card__actions"><a class="model-button" href="https://gridf-470516.projects.earthengine.app/view/gridf-br"><i class="fas fa-external-link-alt" aria-hidden="true"></i> Aplicativo</a><a class="model-button model-button--secondary" href="https://github.com/marcusnobrega-eng/GRIDF"><i class="fab fa-github" aria-hidden="true"></i> Código</a></div></div>
        <figure class="model-card__media"><img src="https://github.com/user-attachments/assets/1090dd66-fa1f-47b7-9207-df39a5387208" alt="Interface e resultados de extremos de chuva do GRIDF-BR" loading="eager"><figcaption>Estimativas nacionalmente consistentes de frequência de chuva.</figcaption></figure>
      </article>
      <article class="model-card models-reveal">
        <div class="model-card__content"><div class="model-card__top"><span>05</span><i class="fas fa-sliders-h" aria-hidden="true"></i></div><p class="model-card__kicker">Drenagem orientada a controle</p><h3>RTC-Stormwater</h3><p>Representa bacias, canais e reservatórios em espaço de estados para testar o controle reativo e preditivo da quantidade e da qualidade da água.</p><p class="model-card__scope">Previsões · reservatórios · controle em tempo real</p><div class="model-card__actions"><a class="model-button model-button--secondary" href="https://github.com/marcusnobrega-eng/RTC---Flood-and-Water-Quality"><i class="fab fa-github" aria-hidden="true"></i> Repositório</a></div></div>
        <figure class="model-card__media"><img src="{{ '/files/Graphical_Abstract_MPC-1.png' | relative_url }}" alt="Estrutura de controle preditivo do RTC-Stormwater" loading="eager"><figcaption>Controle de armazenamento distribuído informado por previsões.</figcaption></figure>
      </article>
      <article class="model-card models-reveal">
        <div class="model-card__content"><div class="model-card__top"><span>06</span><i class="fas fa-project-diagram" aria-hidden="true"></i></div><p class="model-card__kicker">Análise e projeto de biorretenção</p><h3>TC-Hydro</h3><p>Apoia propagação, análise de sensibilidade, calibração, simulação de Monte Carlo e otimização de biorretenção considerando custos.</p><p class="model-card__scope">Infraestrutura verde · incerteza · custo</p><div class="model-card__actions"><a class="model-button model-button--secondary" href="https://github.com/marcusnobrega-eng/TC-Hydro"><i class="fab fa-github" aria-hidden="true"></i> Repositório</a></div></div>
        <figure class="model-card__media"><img src="{{ '/files/Conceptual_Model-1.png' | relative_url }}" alt="Representação conceitual de um sistema de biorretenção no TC-Hydro" loading="eager"><figcaption>Processos hidrológicos em um sistema de biorretenção.</figcaption></figure>
      </article>
    </div>
  </section>

  <section class="models-registry" aria-labelledby="registry-title">
    <header class="models-section-heading models-reveal"><p>03 / Códigos de pesquisa</p><div><h2 id="registry-title">Outros modelos e experimentos numéricos</h2><p>Ferramentas compactas para questões específicas de preparação do terreno, projeto de infraestrutura, águas rasas e hidrologia de encostas.</p></div></header>
    <div class="models-registry__list">
      <a class="model-registry-item models-reveal" href="https://github.com/marcusnobrega-eng/HydroBathyDEM"><span class="model-registry-item__index">07</span><span><small>Preparação do terreno</small><strong>HydroBathyDEM</strong><em>Condicionamento hidrológico e batimetria para dados de elevação prontos para modelagem.</em></span><i class="fab fa-github" aria-hidden="true"></i></a>
      <a class="model-registry-item models-reveal" href="https://github.com/marcusnobrega-eng/LotScaleReservoir"><span class="model-registry-item__index">08</span><span><small>Armazenamento distribuído</small><strong>LotScaleReservoir</strong><em>Dimensionamento de LID em lotes com contribuições espacialmente variáveis.</em></span><i class="fab fa-github" aria-hidden="true"></i></a>
      <a class="model-registry-item models-reveal" href="https://github.com/marcusnobrega-eng/MoDOBR"><span class="model-registry-item__index">09</span><span><small>Projeto de reservatórios</small><strong>MODOBR</strong><em>Propagação hidrológica e armazenamento sob condições de saída obstruída.</em></span><i class="fab fa-github" aria-hidden="true"></i></a>
      <div class="model-registry-item models-reveal"><span class="model-registry-item__index">10</span><span><small>Redes hidráulicas</small><strong>X-WHAT</strong><em>Escoamento em redes e otimização de reservatórios usando custos de infraestrutura.</em></span><i class="fas fa-code" aria-hidden="true"></i></div>
      <a class="model-registry-item models-reveal" href="https://github.com/marcusnobrega-eng/SWE_Solver"><span class="model-registry-item__index">11</span><span><small>Hidráulica bidimensional</small><strong>SWE-Solver</strong><em>Solucionador conservativo e bem balanceado das equações de águas rasas.</em></span><i class="fab fa-github" aria-hidden="true"></i></a>
      <a class="model-registry-item models-reveal" href="https://github.com/marcusnobrega-eng/1D_hsB?tab=readme-ov-file"><span class="model-registry-item__index">12</span><span><small>Hidrologia de encostas</small><strong>Modelo hsB 1D</strong><em>Simulação Hillslope-Storage-Boussinesq por volumes finitos.</em></span><i class="fab fa-github" aria-hidden="true"></i></a>
      <div class="model-registry-item models-reveal"><span class="model-registry-item__index">13</span><span><small>Processos acoplados em encostas</small><strong>Modelo hsB-SM acoplado</strong><em>Atmosfera, água no solo, água subterrânea, baseflow e escoamento superficial em desenvolvimento.</em></span><i class="fas fa-code" aria-hidden="true"></i></div>
    </div>
  </section>

  <footer class="models-closing models-reveal">
    <p>Vamos conversar!</p>
    <div><span>Métodos, exemplos e repositórios ativos estão disponíveis no GitHub.</span><a href="https://github.com/marcusnobrega-eng">Ver todos os repositórios <i class="fas fa-arrow-right" aria-hidden="true"></i></a></div>
  </footer>
</section>
