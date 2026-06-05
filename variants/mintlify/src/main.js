import "./styles.css";

document.querySelector("#app").innerHTML = `
  <header class="top-banner">
    <span>OlchiLab knowledge system</span>
    <a href="#docs">운영 문서 보기</a>
  </header>

  <header class="site-header">
    <div class="nav">
      <a class="brand" href="#top" aria-label="OlchiLab home">
        <span class="brand-symbol">O</span>
        <span>OlchiLab</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#docs">문서 구조</a>
        <a href="#class">올치클래스</a>
        <a href="#pricing">프로젝트</a>
        <a href="#contact">문의</a>
      </nav>
      <a class="button dark small" href="#contact">Get started</a>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">AI · CLASS · OPS DOCUMENTATION</p>
        <h1>작업 맥락을 잃지 않는 올치랩 지식 운영체계.</h1>
        <p>
          올치랩은 수업 준비, AI 활용, 자동화 기준, 프로젝트 기록을 한 번 쓰고 버리는 자료가
          아니라 다시 검색하고 연결할 수 있는 문서 구조로 남깁니다.
        </p>
        <div class="actions">
          <a class="button accent" href="#docs">문서 구조 보기</a>
          <a class="button outline" href="#class">올치클래스 보기</a>
        </div>
      </div>

      <div class="doc-preview" aria-label="OlchiLab documentation preview">
        <aside>
          <strong>OlchiLab</strong>
          <span class="active">시작하기</span>
          <span>올치클래스</span>
          <span>자동화 기준</span>
          <span>프로젝트 기록</span>
          <span>개념 카드</span>
        </aside>
        <article>
          <div class="search">검색: 맥락 자산, 입력 스키마, 수업 준비</div>
          <h2>필요한 것을 먼저 알아차리고, 실행 가능한 형태로 정리합니다.</h2>
          <p>
            고객 요청은 문서, 수업, 자동화, 프로젝트의 네 층위로 나눠 정리합니다.
            각 작업은 다음 행동과 보류 기준을 함께 남깁니다.
          </p>
          <div class="code-block">
            <span>workflow.olchi</span>
            <code>intake → classify → prepare → run → archive</code>
          </div>
        </article>
        <nav class="toc">
          <span>On this page</span>
          <a>핵심 역할</a>
          <a>문서 구조</a>
          <a>현재 프로젝트</a>
        </nav>
      </div>
    </section>

    <section id="docs" class="section">
      <div class="section-copy">
        <p class="eyebrow">DOCUMENT MAP</p>
        <h2>말, 자료, 실행 기록을 다시 찾을 수 있게 쌓습니다.</h2>
      </div>
      <div class="doc-grid">
        <article>
          <span>01</span>
          <h3>Obsidian 원천 자료</h3>
          <p>아이디어, 시행착오, 긴 메모, 강의 원천 자료를 넓게 보관합니다.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Notion 정본</h3>
          <p>검토된 SOP, 현재 상태, 프로젝트 요약을 공식 기준으로 정리합니다.</p>
        </article>
        <article>
          <span>03</span>
          <h3>웹사이트 메시지</h3>
          <p>외부 방문자에게 보여줄 수 있는 가장 간단한 사업 설명으로 압축합니다.</p>
        </article>
      </div>
    </section>

    <section id="class" class="split-section">
      <div>
        <p class="eyebrow">OLCHICLASS</p>
        <h2>올치클래스는 올치랩 아래의 교육 브랜드입니다.</h2>
        <p>
          MBL 실험수업과 AI 기초특강을 준비합니다. 수업은 단순 강의안이 아니라
          대상, 준비물, 실습 흐름, 복습 기준을 함께 갖춘 운영 단위로 설계합니다.
        </p>
      </div>
      <div class="checklist">
        <article><span></span><strong>학교·기관 대상 MBL 수업 구조화</strong></article>
        <article><span></span><strong>AI 기초특강의 핵심 개념 정리</strong></article>
        <article><span></span><strong>수업 후 다시 쓸 수 있는 기록 체계</strong></article>
      </div>
    </section>

    <section id="pricing" class="section project-section">
      <div class="section-copy centered">
        <p class="eyebrow">PROJECT TIERS</p>
        <h2>모든 아이디어를 같은 단계로 보지 않습니다.</h2>
      </div>
      <div class="tier-grid">
        <article>
          <h3>준비 중</h3>
          <strong>올치클래스</strong>
          <p>MBL·AI 강의 브랜드. 현재 가장 먼저 정리할 사업 축입니다.</p>
        </article>
        <article class="featured">
          <h3>실험</h3>
          <strong>올치픽</strong>
          <p>AI 사진 정리 비서. 문제 정의와 사용 시나리오를 확인합니다.</p>
        </article>
        <article>
          <h3>아이디어</h3>
          <strong>올치보드 · 올치손</strong>
          <p>필요성은 있으나 지금은 보류 기준과 사용 상황을 먼저 모읍니다.</p>
        </article>
      </div>
    </section>

    <section id="contact" class="contact">
      <p class="eyebrow">CONTACT</p>
      <h2>정리되지 않은 요청도 문서 구조부터 잡을 수 있습니다.</h2>
      <a class="button accent" href="mailto:hello@olchilab.com">hello@olchilab.com</a>
    </section>
  </main>
`;
