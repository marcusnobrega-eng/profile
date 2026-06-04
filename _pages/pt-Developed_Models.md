---
permalink: /pt/Developed_Models/
title: "Modelos Desenvolvidos"
author_profile: true
lang: pt
translation_url: /Developed_Models/
---

<section class="models-page">
  <div class="models-hero">
    <p class="models-eyebrow">Ferramentas open-source de hidrologia, hidráulica e drenagem urbana</p>
    <h2>Modelos e códigos selecionados do meu fluxo de pesquisa</h2>
    <p>Estas ferramentas conectam modelagem numérica, projeto de infraestrutura verde, propagação de cheias, gêmeos digitais e apoio à decisão. Muitas são códigos de pesquisa desenvolvidos em torno de estudos publicados, materiais de ensino ou colaborações em andamento.</p>
  </div>

  <div class="models-grid">
    <article class="model-card model-card--featured">
      <div class="model-card__content">
        <div class="model-card__header">
          <p class="model-card__kicker">Hidrologia e hidráulica distribuídas</p>
          <h3>HydroPol2D</h3>
        </div>
        <p>HydroPol2D é um modelo hidrológico-hidrodinâmico totalmente distribuído para simulações relacionadas a inundações, roteamento de qualidade da água, cenários de ruptura de barragens, eventos de chuva sobre grade e aplicações de drenagem urbana.</p>
        <ul class="model-card__features">
          <li>Entradas raster de terreno, uso do solo e solos</li>
          <li>Chuva sobre grade, hidrogramas, níveis, ruptura de barragens e condições de contorno de controle</li>
          <li>Infiltração de Green-Ampt, evapotranspiração de Penman-Monteith, troca com água subterrânea, calibração e análise de sensibilidade</li>
        </ul>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/HydroPol2D">Repositório</a>
        </div>
      </div>
      <div class="model-card__media model-card__media--stack">
        <figure>
          <img src="https://marcusnobrega-eng.github.io/profile//files/Rain_on_the_grid.gif" alt="Simulação de chuva sobre grade com influência da drenagem urbana em São Paulo, Brasil">
          <figcaption>Simulação de chuva sobre grade em uma bacia urbana.</figcaption>
        </figure>
        <figure>
          <img src="https://marcusnobrega-eng.github.io/profile//files/dam_break.gif" alt="Cenário de ruptura de barragem em uma cidade de Pernambuco, Brasil">
          <figcaption>Cenário de ruptura de barragem no Nordeste do Brasil.</figcaption>
        </figure>
      </div>
    </article>

    <article class="model-card">
      <div class="model-card__content">
        <p class="model-card__kicker">Hidráulica 1D com momento completo</p>
        <h3>HydroHP-1D</h3>
        <p>HydroHP-1D resolve as equações unidimensionais completas de Saint-Venant para diferentes geometrias de canal e combinações de condições de contorno.</p>
        <ul class="model-card__features">
          <li>Seções retangulares, triangulares, trapezoidais, parabólicas, circulares, irregulares e compostas</li>
          <li>Conceitualizações flexíveis de rugosidade de Manning</li>
          <li>Vazão de entrada, Nash, saída por maré, hidrogramas de nível e condições de contorno combinadas</li>
        </ul>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/HydroHP">Repositório</a>
        </div>
      </div>
      <div class="model-card__media">
        <figure>
          <img src="https://marcusnobrega-eng.github.io/profile//files/HydroHP_1.gif" alt="Simulação em regime transiente com HydroHP-1D">
          <figcaption>Evolução de estados em uma simulação transiente.</figcaption>
        </figure>
      </div>
    </article>

    <article class="model-card">
      <div class="model-card__content">
        <p class="model-card__kicker">Modelagem de LID baseada em infiltração</p>
        <h3>DRAIN-LID</h3>
        <p>DRAIN-LID é um solucionador da equação de Richards em forma mista para fluxo unidimensional saturado e não saturado em sistemas de desenvolvimento de baixo impacto, projetado para simulações contínuas de alta resolução em longos períodos.</p>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/DRAIN-LID">Repositório</a>
        </div>
      </div>
      <div class="model-card__media">
        <figure>
          <img src="https://github.com/user-attachments/assets/cf5fca6c-4d27-4e32-af86-5f17bf0261f6" alt="Estrutura conceitual do DRAIN-LID">
          <figcaption>Estrutura conceitual do DRAIN-LID.</figcaption>
        </figure>
      </div>
    </article>

    <article class="model-card">
      <div class="model-card__content">
        <p class="model-card__kicker">Extremos de chuva e curvas IDF</p>
        <h3>GRIDF-BR</h3>
        <p>GRIDF-BR é um conjunto de ferramentas em Python e MATLAB para processar produtos rasterizados de chuva, extrair extremos, corrigir viés de bases de satélite e calcular curvas intensidade-duração-frequência para o Brasil.</p>
        <div class="model-card__actions">
          <a class="model-button" href="https://gridf-470516.projects.earthengine.app/view/gridf-br">Aplicativo web</a>
          <a class="model-button model-button--secondary" href="https://github.com/marcusnobrega-eng/GRIDF">Código</a>
        </div>
      </div>
      <div class="model-card__media">
        <figure>
          <img src="https://github.com/user-attachments/assets/1090dd66-fa1f-47b7-9207-df39a5387208" alt="Ferramentas GRIDF-BR">
          <figcaption>Interface e saídas do GRIDF-BR.</figcaption>
        </figure>
      </div>
    </article>

    <article class="model-card model-card--text">
      <div class="model-card__content">
        <p class="model-card__kicker">Condicionamento de MDE e preparação de batimetria</p>
        <h3>HydroBathyDEM</h3>
        <p>HydroBathyDEM é uma caixa de ferramentas em Python para adaptar modelos digitais de elevação existentes em MDEs condicionados para modelagem hidrológica-hidrodinâmica. Ela apoia fluxos de trabalho em que dados de terreno precisam ser preparados para aplicações de inundação, rios e escoamento superficial.</p>
        <ul class="model-card__features">
          <li>Fluxo de condicionamento hidrológico-hidrodinâmico de MDE</li>
          <li>Preparação de terreno e batimetria com atenção à rede fluvial</li>
          <li>Ferramentas em Python para pré-processamento de elevação pronta para modelagem</li>
        </ul>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/HydroBathyDEM">Repositório</a>
        </div>
      </div>
    </article>

    <article class="model-card">
      <div class="model-card__content">
        <p class="model-card__kicker">Modelagem de drenagem orientada a controle</p>
        <h3>RTC-Stormwater</h3>
        <p>RTC-Stormwater lineariza equações hidrológicas e hidrodinâmicas para bacias, reservatórios e canais, oferecendo uma estrutura em espaço de estados para algoritmos de controle reativo e preditivo.</p>
        <ul class="model-card__features">
          <li>Componentes de propagação por onda cinemática e difusiva</li>
          <li>Controle preditivo baseado em modelo, reguladores quadráticos lineares e integradores quadráticos lineares</li>
          <li>Equações de conservação de massa e energia em reservatórios</li>
        </ul>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/RTC---Flood-and-Water-Quality">Repositório</a>
        </div>
      </div>
      <div class="model-card__media">
        <figure>
          <img src="https://marcusnobrega-eng.github.io/profile//files/Graphical_Abstract_MPC-1.png" alt="Estrutura conceitual do RTC-Stormwater">
          <figcaption>Estrutura de controle do RTC-Stormwater.</figcaption>
        </figure>
      </div>
    </article>

    <article class="model-card">
      <div class="model-card__content">
        <p class="model-card__kicker">Análise e projeto de biorretenção</p>
        <h3>TC-Hydro</h3>
        <p>TC-Hydro apoia projeto de biorretenção, roteamento, análise de sensibilidade, calibração, simulação de Monte Carlo e otimização de projeto com custos, usando implementações em Excel-VBA e MATLAB.</p>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/TC-Hydro">Repositório</a>
        </div>
      </div>
      <div class="model-card__media">
        <figure>
          <img src="https://marcusnobrega-eng.github.io/profile//files/Conceptual_Model-1.png" alt="Modelo conceitual do TC-Hydro">
          <figcaption>Modelo conceitual do TC-Hydro.</figcaption>
        </figure>
      </div>
    </article>

    <article class="model-card model-card--text">
      <div class="model-card__content">
        <p class="model-card__kicker">Projeto de reservatórios em escala de lote</p>
        <h3>LotScaleReservoir</h3>
        <p>LotScaleReservoir contém o software desenvolvido para o estudo sobre variabilidade espacial do escoamento no projeto de LID em bacias urbanas. A ferramenta apoia o dimensionamento de reservatórios em escala de lote e soluções de baixo impacto quando a contribuição de escoamento varia entre parcelas urbanas.</p>
        <ul class="model-card__features">
          <li>Dimensionamento de reservatórios em escala de lote considerando a bacia</li>
          <li>Software associado ao artigo sobre variabilidade espacial do escoamento em projeto de LID</li>
          <li>Fluxo de projeto para estudos de mitigação e adaptação em bacias urbanas</li>
        </ul>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/LotScaleReservoir">Repositório</a>
        </div>
      </div>
    </article>

    <article class="model-card model-card--compact">
      <div class="model-card__content">
        <p class="model-card__kicker">Projeto de reservatórios de detenção</p>
        <h3>MODOBR</h3>
        <p>MODOBR é um algoritmo em Excel-VBA para projeto de reservatórios de detenção, com foco em roteamento hidrológico, profundidade máxima de armazenamento e condições de projeto com dispositivos obstruídos.</p>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/MoDOBR">Repositório</a>
        </div>
      </div>
      <div class="model-card__media">
        <figure>
          <img src="https://github.com/user-attachments/assets/03e8fba3-7ac8-4494-91c6-bc36c4ab8526" alt="Fluxo do modelo MODOBR">
        </figure>
      </div>
    </article>

    <article class="model-card model-card--compact">
      <div class="model-card__content">
        <p class="model-card__kicker">Redes hidráulicas e dimensionamento estrutural</p>
        <h3>X-WHAT</h3>
        <p>X-WHAT resolve escoamento em redes hidráulicas enquanto otimiza reservatórios, usando custos de tubulações, reservatórios e fundações com hipóteses de esforços laterais de vento.</p>
      </div>
      <div class="model-card__media">
        <figure>
          <img src="https://marcusnobrega-eng.github.io/profile//files/General_user_algorithm-1.png" alt="Algoritmo do X-WHAT">
        </figure>
      </div>
    </article>

    <article class="model-card model-card--compact">
      <div class="model-card__content">
        <p class="model-card__kicker">Equações rasas da água</p>
        <h3>SWE-Solver</h3>
        <p>Um solucionador simples, bem balanceado e conservativo das equações rasas da água para visualizar problemas bidimensionais de dinâmica dos fluidos usando um esquema numérico explícito de quatro pontos.</p>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/SWE_Solver">Repositório</a>
        </div>
      </div>
      <div class="model-card__media">
        <figure>
          <img src="https://github.com/user-attachments/assets/a2b137cc-7131-4c10-b446-600bc91911e5" alt="Propagação instantânea de ruptura de barragem com SWE-Solver">
        </figure>
      </div>
    </article>

    <article class="model-card model-card--compact">
      <div class="model-card__content">
        <p class="model-card__kicker">Modelagem Boussinesq de armazenamento em encostas</p>
        <h3>1D hsB Model</h3>
        <p>Uma implementação em volumes finitos de um modelo Hillslope-Storage-Boussinesq unidimensional para fluxo saturado em meios porosos sob controles de largura de encosta.</p>
        <div class="model-card__actions">
          <a class="model-button" href="https://github.com/marcusnobrega-eng/1D_hsB?tab=readme-ov-file">Repositório</a>
        </div>
      </div>
      <div class="model-card__media">
        <figure>
          <img src="https://github.com/user-attachments/assets/f6457b81-f280-4e35-8201-2ca5856dfc3e" alt="Modelo 1D Hillslope-Storage-Boussinesq">
        </figure>
      </div>
    </article>

    <article class="model-card model-card--compact">
      <div class="model-card__content">
        <p class="model-card__kicker">Modelagem acoplada superfície-subsuperfície em encostas</p>
        <h3>Coupled hsB-SM Model</h3>
        <p>O modelo hsB-SM conecta atmosfera, água no solo, água subterrânea, escoamento lateral de base e escoamento superficial roteado em uma estrutura parcimoniosa de encosta. Esta ferramenta está atualmente em desenvolvimento.</p>
      </div>
      <div class="model-card__media">
        <figure>
          <img src="https://github.com/user-attachments/assets/fee4ac8e-3dab-4f4a-82c4-7a2d6b58173c" alt="Estrutura do modelo acoplado hsB-SM">
        </figure>
      </div>
    </article>
  </div>
</section>
