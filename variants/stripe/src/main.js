import "./styles.css";

document.querySelector("#app").innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top">OlchiLab</a>
    <nav aria-label="Main navigation">
      <a href="#platform">Platform</a>
      <a href="#class">OlchiClass</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
    <a class="button secondary small" href="#contact">문의하기</a>
  </header>

  <main id="top">
    <section class="hero">
      <div class="mesh-band"></div>
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">OLCHILAB BUSINESS HUB</p>
          <h1>필요한 준비를 먼저 읽고, 실행 가능한 형태로 정리합니다.</h1>
          <p>
            올치랩은 교육, AI 활용, 자료 정리, 자동화 흐름을 하나의 운영 흐름으로
            연결합니다. 올치클래스는 그 아래에서 MBL 수업과 AI 강의를 준비합니다.
          </p>
          <div class="actions">
            <a class="button primary" href="#contact">수업/협업 문의</a>
            <a class="button link" href="#platform">운영 구조 보기 →</a>
          </div>
        </div>

        <div class="dashboard" aria-label="OlchiLab dashboard mockup">
          <div class="dash-sidebar">
            <strong>olchi</strong>
            <span class="active">Overview</span>
            <span>Classes</span>
            <span>Projects</span>
            <span>Archive</span>
          </div>
          <div class="dash-main">
            <div class="dash-header">
              <span>Current focus</span>
              <strong>OlchiClass launch prep</strong>
            </div>
            <div class="metrics">
              <article>
                <span>Priority</span>
                <strong>01</strong>
              </article>
              <article>
                <span>Docs</span>
                <strong>12</strong>
              </article>
              <article>
                <span>Next</span>
                <strong>3</strong>
              </article>
            </div>
            <div class="table">
              <div><span>MBL 수업</span><strong>준비 중</strong><em></em></div>
              <div><span>AI 기초특강</span><strong>구조화</strong><em></em></div>
              <div><span>자동화 기준</span><strong>보류</strong><em></em></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="platform" class="platform">
      <div class="section-copy">
        <p class="eyebrow">PLATFORM OF WORK</p>
        <h2>올치랩은 여러 일을 하나의 준비 체계로 묶습니다.</h2>
        <p>
          수업 하나, 자동화 하나, 문서 하나를 따로 만들면 금방 흩어집니다.
          올치랩은 요청을 받아 운영 가능한 단위로 나누고, 다시 쓸 수 있게 남깁니다.
        </p>
      </div>
      <div class="platform-grid">
        <article>
          <span>Education</span>
          <h3>수업 준비</h3>
          <p>대상, 목표, 준비물, 활동 흐름을 함께 설계합니다.</p>
        </article>
        <article>
          <span>Automation</span>
          <h3>자동화 설계</h3>
          <p>입력, 출력, 실패 조건, 승인 지점을 먼저 정리합니다.</p>
        </article>
        <article>
          <span>Archive</span>
          <h3>맥락 보관</h3>
          <p>작업 기록을 다음 판단에 쓸 수 있는 자료로 남깁니다.</p>
        </article>
      </div>
    </section>

    <section id="class" class="cream-band">
      <div>
        <p class="eyebrow">OLCHICLASS</p>
        <h2>올치클래스는 수업을 제품처럼 준비합니다.</h2>
        <p>
          MBL 실험수업과 AI 기초특강은 단순 설명이 아니라 참여자가 따라올 수 있는
          흐름, 활동지, 예시, 복습 기준까지 갖춰야 합니다.
        </p>
      </div>
      <div class="mini-ui">
        <div class="mini-row head"><span>강의 축</span><span>상태</span><span>다음</span></div>
        <div class="mini-row"><strong>MBL</strong><span>우선</span><em>수업안</em></div>
        <div class="mini-row"><strong>AI</strong><span>정리</span><em>핵심 메시지</em></div>
        <div class="mini-row"><strong>교사 연수</strong><span>후보</span><em>요구 수집</em></div>
      </div>
    </section>

    <section id="projects" class="projects">
      <div class="section-copy centered">
        <p class="eyebrow">PROJECT FLOW</p>
        <h2>아이디어는 상태를 가진 흐름으로 관리합니다.</h2>
      </div>
      <div class="flow">
        <article>
          <span>01</span>
          <strong>우선 준비</strong>
          <p>올치클래스</p>
        </article>
        <article>
          <span>02</span>
          <strong>실험</strong>
          <p>올치픽</p>
        </article>
        <article>
          <span>03</span>
          <strong>보류</strong>
          <p>올치보드 · 올치손</p>
        </article>
        <article>
          <span>04</span>
          <strong>자료화</strong>
          <p>Obsidian → Notion</p>
        </article>
      </div>
    </section>

    <section id="contact" class="contact">
      <div>
        <p class="eyebrow">CONTACT</p>
        <h2>수업, 문서, 자동화 준비가 필요하다면 먼저 구조를 잡겠습니다.</h2>
      </div>
      <a class="button primary" href="mailto:hello@olchilab.com">hello@olchilab.com</a>
    </section>
  </main>
`;
