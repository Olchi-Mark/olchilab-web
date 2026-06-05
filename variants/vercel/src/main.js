import "./styles.css";

document.querySelector("#app").innerHTML = `
  <header class="site-header">
    <div class="nav">
      <a class="brand" href="#top" aria-label="OlchiLab home">
        <span class="brand-icon"></span>
        <span>olchilab</span>
      </a>
      <nav class="nav-links" aria-label="Main navigation">
        <a href="#system">운영 구조</a>
        <a href="#class">올치클래스</a>
        <a href="#projects">프로젝트</a>
        <a href="#contact">문의</a>
      </nav>
      <a class="nav-action" href="#contact">상담 요청</a>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <p class="mono-label">OLCHILAB OPERATING SYSTEM</p>
      <h1>
        <span>흐릿한 요청을</span>
        <span>실행 가능한 구조로 바꿉니다.</span>
      </h1>
      <p class="hero-lead">
        올치랩은 교육, 실험수업, AI 활용, 자료 정리, 자동화 흐름을 고객의 상황에 맞게
        분해하고 정리하는 실무형 파트너입니다.
      </p>
      <div class="hero-actions">
        <a class="button primary" href="#contact">수업/협업 문의</a>
        <a class="button secondary" href="#projects">프로젝트 보기</a>
      </div>

      <div class="signal-strip" aria-label="OlchiLab signals">
        <article>
          <span>01</span>
          <strong>요구 파악</strong>
          <p>말한 요청과 숨은 조건을 분리합니다.</p>
        </article>
        <article>
          <span>02</span>
          <strong>실행 설계</strong>
          <p>목적, 일정, 자료, 출력물을 정리합니다.</p>
        </article>
        <article>
          <span>03</span>
          <strong>운영 기록</strong>
          <p>다음 작업에 다시 쓸 수 있게 남깁니다.</p>
        </article>
      </div>

      <div class="ops-panel" aria-label="OlchiLab workflow dashboard mockup">
        <div class="panel-topbar">
          <span class="traffic"></span>
          <strong>olchilab / work-intake</strong>
          <em>ready</em>
        </div>
        <div class="panel-grid">
          <aside class="panel-sidebar">
            <span class="active">intake</span>
            <span>class</span>
            <span>automation</span>
            <span>archive</span>
          </aside>
          <section class="panel-main">
            <div class="task-row head">
              <span>영역</span>
              <span>현재 판단</span>
              <span>다음 출력</span>
            </div>
            <div class="task-row">
              <strong>OlchiClass</strong>
              <span>MBL·AI 강의 준비 브랜드</span>
              <em>수업 제안 구조</em>
            </div>
            <div class="task-row">
              <strong>자료 정리</strong>
              <span>Obsidian 원천 → Notion 정본</span>
              <em>운영 기준</em>
            </div>
            <div class="task-row">
              <strong>자동화</strong>
              <span>입력·출력·승인 지점부터 고정</span>
              <em>작업 흐름</em>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section id="system" class="section system-section">
      <div class="section-kicker">
        <p class="mono-label">WHAT OLCHILAB DOES</p>
        <h2>올치랩은 아이디어를 바로 서비스처럼 포장하지 않습니다.</h2>
      </div>
      <div class="system-grid">
        <article>
          <span>분류</span>
          <h3>사업체와 브랜드를 구분합니다.</h3>
          <p>올치랩은 전체 사업체이고, 올치클래스는 MBL·AI 강의를 준비하는 교육 브랜드입니다.</p>
        </article>
        <article>
          <span>정리</span>
          <h3>요청을 작업 단위로 나눕니다.</h3>
          <p>수업, 문서, 자동화, 프로젝트를 목적과 실행 조건으로 나눠 관리합니다.</p>
        </article>
        <article>
          <span>검증</span>
          <h3>작게 만들고 기록합니다.</h3>
          <p>실험 프로젝트는 출시된 서비스처럼 과장하지 않고 상태와 다음 행동을 남깁니다.</p>
        </article>
      </div>
    </section>

    <section id="class" class="dark-band">
      <div class="dark-copy">
        <p class="mono-label">MAIN EDUCATION BRAND</p>
        <h2>올치클래스는 수업 준비를 담당하는 하위 브랜드입니다.</h2>
        <p>
          학교, 교사, 교육기관, 비전문가 수강생이 바로 이해하고 따라올 수 있도록
          수업 목적과 활동지, 실습 흐름, AI 활용 기준을 함께 설계합니다.
        </p>
      </div>
      <div class="dark-list">
        <article>
          <span>MBL</span>
          <strong>센서 기반 실험수업</strong>
          <p>준비물, 실험 흐름, 교사용 안내를 수업 단위로 구성합니다.</p>
        </article>
        <article>
          <span>AI</span>
          <strong>AI 기초특강</strong>
          <p>언어화, 개념어, 맥락 자산, 검증 습관을 중심으로 설계합니다.</p>
        </article>
      </div>
    </section>

    <section id="projects" class="section">
      <div class="section-kicker project-heading">
        <p class="mono-label">PROJECT MATRIX</p>
        <h2>프로젝트는 카드보다 표로 먼저 판단합니다.</h2>
        <p>
          무엇이 진행 중이고, 무엇이 아이디어인지 한눈에 보여야 합니다.
          그래서 이 시안은 장식 카드 대신 상태 중심의 매트릭스를 사용합니다.
        </p>
      </div>
      <div class="matrix" aria-label="OlchiLab project matrix">
        <div class="matrix-row matrix-head">
          <span>프로젝트</span>
          <span>역할</span>
          <span>상태</span>
          <span>다음 행동</span>
        </div>
        <div class="matrix-row">
          <strong>올치클래스</strong>
          <span>MBL·AI 강의 브랜드</span>
          <em class="status active">우선</em>
          <span>수업 소개 구조 확정</span>
        </div>
        <div class="matrix-row">
          <strong>올치픽</strong>
          <span>AI 사진 정리 비서</span>
          <em class="status lab">실험</em>
          <span>문제 정의 보강</span>
        </div>
        <div class="matrix-row">
          <strong>올치보드</strong>
          <span>AI 전자종이 생활 보드</span>
          <em class="status idea">아이디어</em>
          <span>사용 상황 수집</span>
        </div>
        <div class="matrix-row">
          <strong>올치손</strong>
          <span>고령자 생활 연결 서비스</span>
          <em class="status idea">아이디어</em>
          <span>보류 기준 정리</span>
        </div>
      </div>
    </section>

    <section class="process">
      <div class="process-inner">
        <p class="mono-label">WORKFLOW</p>
        <div class="process-line">
          <article>
            <span>1</span>
            <strong>듣기</strong>
            <p>요청과 배경을 분리합니다.</p>
          </article>
          <article>
            <span>2</span>
            <strong>나누기</strong>
            <p>목적, 자료, 일정, 제약을 나눕니다.</p>
          </article>
          <article>
            <span>3</span>
            <strong>만들기</strong>
            <p>수업안, 문서, 자동화 흐름을 만듭니다.</p>
          </article>
          <article>
            <span>4</span>
            <strong>남기기</strong>
            <p>다시 쓸 수 있는 운영 기준으로 정리합니다.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <p class="mono-label">CONTACT</p>
      <h2>아직 요청이 흐릿해도 괜찮습니다.</h2>
      <p>필요한 준비를 먼저 정리하는 일부터 시작할 수 있습니다.</p>
      <a class="button primary" href="mailto:hello@olchilab.com">hello@olchilab.com</a>
    </section>
  </main>
`;
