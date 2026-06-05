import "./styles.css";

document.querySelector("#app").innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top">olchilab</a>
    <nav aria-label="Main navigation">
      <a href="#debug">요구 분석</a>
      <a href="#class">올치클래스</a>
      <a href="#projects">프로젝트</a>
      <a href="#contact">문의</a>
    </nav>
    <a class="button inverted small" href="#contact">GET STARTED</a>
  </header>

  <main id="top">
    <section class="hero">
      <div class="sticker sticker-one">정리</div>
      <div class="sticker sticker-two">실행</div>
      <div class="hero-copy">
        <p class="eyebrow">OLCHILAB DEBUGS WORKFLOW</p>
        <h1>
          요청을 <mark>해석</mark>하고,
          실행을 <mark>준비</mark>합니다.
        </h1>
        <p>
          올치랩은 막연한 말 속에서 목적, 조건, 자료, 일정, 보류 기준을 찾아냅니다.
          수업과 자동화와 프로젝트가 한 화면에서 판단되도록 구조화합니다.
        </p>
        <div class="actions">
          <a class="button inverted" href="#contact">문의하기</a>
          <a class="button ghost" href="#debug">작업 방식 보기</a>
        </div>
      </div>

      <div class="console-card" aria-label="OlchiLab console">
        <div class="console-head">
          <span></span>
          <strong>request-debugger</strong>
          <em>running</em>
        </div>
        <pre><code>> input: "AI 강의랑 MBL 수업 준비해야 해"
> classify: education / content / operation
> priority: OlchiClass
> next: outline, audience, materials, schedule
> archive: Obsidian first, Notion when canonical</code></pre>
      </div>
    </section>

    <section id="debug" class="section">
      <div class="section-title">
        <p class="eyebrow">WHAT GETS DEBUGGED</p>
        <h2>올치랩은 보이지 않는 조건을 먼저 잡습니다.</h2>
      </div>
      <div class="debug-grid">
        <article>
          <span>01</span>
          <h3>말한 요청</h3>
          <p>사용자가 직접 말한 요구, 마감, 대상, 출력물을 분리합니다.</p>
        </article>
        <article>
          <span>02</span>
          <h3>숨은 조건</h3>
          <p>수업 대상, 준비물, 승인 지점, 검증 조건처럼 놓치기 쉬운 부분을 찾습니다.</p>
        </article>
        <article>
          <span>03</span>
          <h3>다음 행동</h3>
          <p>아이디어를 넓히기보다 지금 실제로 움직일 작업 하나를 정합니다.</p>
        </article>
      </div>
    </section>

    <section id="class" class="class-band">
      <div>
        <p class="eyebrow">OLCHICLASS</p>
        <h2><mark>올치클래스</mark>는 수업 준비를 담당합니다.</h2>
      </div>
      <div class="class-copy">
        <p>
          올치랩은 사업체입니다. 올치클래스는 그 아래에서 MBL 실험수업과 AI 기초특강을
          준비하는 교육 브랜드입니다. 이 구분이 웹사이트와 문서에서 반복되어야 합니다.
        </p>
        <div class="pill-row">
          <span>MBL CLASS</span>
          <span>AI BASICS</span>
          <span>TEACHER OPS</span>
        </div>
      </div>
    </section>

    <section id="projects" class="section">
      <div class="section-title">
        <p class="eyebrow">PROJECT STATUS</p>
        <h2>진행 상태를 숨기지 않습니다.</h2>
      </div>
      <div class="status-board">
        <article class="active">
          <header><span>우선 준비</span><strong>올치클래스</strong></header>
          <p>MBL·AI 강의 브랜드. 현재 외부 설명과 수업 구조를 정리합니다.</p>
        </article>
        <article>
          <header><span>실험</span><strong>올치픽</strong></header>
          <p>AI 사진 정리 비서. 사용자 문제와 입력 자료를 먼저 확인합니다.</p>
        </article>
        <article>
          <header><span>아이디어</span><strong>올치보드</strong></header>
          <p>AI 전자종이 생활 보드. 사용 상황과 가치 가설을 보류 기록으로 남깁니다.</p>
        </article>
        <article>
          <header><span>아이디어</span><strong>올치손</strong></header>
          <p>고령자 생활 연결 서비스. 지금은 출시처럼 말하지 않고 가능성만 보관합니다.</p>
        </article>
      </div>
    </section>

    <section class="light-panel">
      <p class="eyebrow">OUTPUT FORMAT</p>
      <h2>결과물은 말이 아니라 다음 작업을 가능하게 하는 형식이어야 합니다.</h2>
      <div class="output-list">
        <span>01 / 수업안</span>
        <span>02 / 운영 기준</span>
        <span>03 / 프로젝트 상태</span>
        <span>04 / 다음 실행 작업</span>
      </div>
    </section>

    <section id="contact" class="contact">
      <p class="eyebrow">CONTACT</p>
      <h2>요청이 정리되지 않았다면, 그것부터 함께 디버깅합니다.</h2>
      <a class="button primary" href="mailto:hello@olchilab.com">hello@olchilab.com</a>
    </section>
  </main>
`;
