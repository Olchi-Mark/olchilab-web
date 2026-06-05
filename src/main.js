import "./styles.css";

const homePage = `
  <header class="site-header">
    <div class="nav-shell">
      <a class="brand" href="#top" aria-label="OlchiLab home">
        <span class="brand-mark">olchi</span><span class="brand-lab">lab</span>
      </a>
      <nav class="nav-links" aria-label="Main navigation">
        <a href="#about">소개</a>
        <a href="#class">올치클래스</a>
        <a href="#projects">프로젝트</a>
        <a href="#journal">기록</a>
        <a href="#contact">문의</a>
      </nav>
      <a class="nav-cta" href="#contact">수업/협업 문의</a>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">OlchiLab · 옳게 보고, 꼼꼼하게 맞춘다</p>
        <h1>필요한 것을 먼저 알아차리고,<br />실행 가능한 형태로 정리합니다.</h1>
        <p class="hero-lead">
          올치랩은 교육, 실험수업, AI 활용, 자료 정리, 자동화 흐름을 고객의
          상황에 맞게 구조화하는 실무형 파트너입니다. 올치클래스를 통해 MBL
          실험수업과 AI 기초특강을 준비하고, 여러 실험 프로젝트를 작게 만들고
          검증합니다.
        </p>
        <div class="cta-row">
          <a class="button primary" href="#contact">수업/협업 문의</a>
          <a class="button secondary" href="#class">올치클래스 보기</a>
        </div>
      </div>

      <div class="hero-art" aria-label="OlchiLab operating system preview">
        <div class="board-header">
          <span>작업 흐름</span>
          <strong>고객 요청 → 실행 구조</strong>
        </div>
        <div class="board-grid">
          <article class="wide">
            <span>01</span>
            <strong>요구 파악</strong>
            <p>말한 요구와 숨은 조건을 함께 봅니다.</p>
          </article>
          <article>
            <span>02</span>
            <strong>구조화</strong>
            <p>목적, 대상, 일정, 자료를 나눕니다.</p>
          </article>
          <article>
            <span>03</span>
            <strong>준비</strong>
            <p>수업, 문서, 자동화 흐름을 만듭니다.</p>
          </article>
          <article class="wide muted-card">
            <span>04</span>
            <strong>실행하고 다시 쓸 수 있게 남깁니다.</strong>
            <p>현장에서 쓰고, 다음 작업에 재사용되는 기준으로 정리합니다.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="about" class="signature-band">
      <div class="signature-card">
        <div>
          <p class="eyebrow on-dark">What we organize</p>
          <h2>막연한 요청을 작고 실행 가능한 단위로 나눕니다.</h2>
        </div>
        <p>
          고객이 원하는 결과를 만들려면 먼저 목적, 조건, 자료, 일정, 준비물,
          실행 흐름이 정리되어야 합니다. 올치랩은 그 과정을 대신 흐릿하게 넘기지
          않고, 현장에서 바로 쓸 수 있는 구조로 바꿉니다.
        </p>
      </div>
    </section>

    <section id="class" class="section split-section">
      <div class="section-copy">
        <p class="eyebrow">Main brand</p>
        <h2>올치클래스는 올치랩의 교육 브랜드입니다.</h2>
        <p>
          MBL 실험수업과 AI 기초특강을 준비하는 교육 브랜드입니다. 학교, 교사,
          수강생의 조건을 읽고 실제 수업에 필요한 자료와 운영 흐름까지 함께
          설계합니다.
        </p>
      </div>
      <div class="feature-stack">
        <article class="feature-card emphasis">
          <span class="status active">우선 준비</span>
          <h3>학교 맞춤 MBL 실험수업</h3>
          <p>학교, 교사, 교육기관을 대상으로 장비와 수업 조건에 맞는 실험수업을 준비합니다.</p>
        </article>
        <article class="feature-card">
          <span class="status planning">방향 정리</span>
          <h3>AI 기초특강</h3>
          <p>비전문가가 AI를 실제 작업에 쓰도록 언어화, 개념어, 검증 습관을 다룹니다.</p>
        </article>
        <article class="feature-card">
          <span class="status idea">확장 후보</span>
          <h3>교사 연수 / 수업자료</h3>
          <p>교사 연수, 활동지, 수업자료 운영체계로 확장 가능한 교육 라인입니다.</p>
        </article>
      </div>
    </section>

    <section id="projects" class="section project-section">
      <div class="section-heading">
        <p class="eyebrow">Projects</p>
        <h2>올치랩 아래에서 작게 실험하는 프로젝트들</h2>
        <p>
          아이디어는 바로 사업이 되지 않습니다. 올치랩은 작게 만들고, 기록하고,
          검토하며 가능성이 있는 프로젝트만 다음 단계로 옮깁니다.
        </p>
      </div>
      <div class="project-list" aria-label="OlchiLab project list">
        ${[
          ["올치클래스", "MBL·AI 강의 교육 브랜드", "우선 준비"],
          ["올치픽", "AI 사진 정리 비서 아이디어", "실험"],
          ["올치보드", "AI 전자종이 생활 보드 아이디어", "아이디어"],
          ["올치손", "고령자 생활 연결 서비스 아이디어", "아이디어"],
          ["올치마크", "도장형 마크 기반 패션/굿즈 브랜드", "아이디어"],
          ["Olchi Wrap", "건강식 랩·밀프렙 브랜드 아이디어", "아이디어"],
        ]
          .map(
            ([name, desc, status]) => `
              <article class="project-row">
                <strong>${name}</strong>
                <span>${desc}</span>
                <em>${status}</em>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section id="journal" class="section work-section">
      <div class="section-heading centered">
        <p class="eyebrow">How we work</p>
        <h2>듣고, 나누고, 준비하고, 실행하고, 다시 쓸 수 있게 남깁니다.</h2>
      </div>
      <div class="steps">
        ${["듣기", "구조화", "준비", "실행", "기록과 개선"]
          .map((step, index) => `<article><span>${index + 1}</span><strong>${step}</strong></article>`)
          .join("")}
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="contact-card">
        <p class="eyebrow on-dark">Contact</p>
        <h2>어떤 준비가 필요한지부터 함께 정리해보겠습니다.</h2>
        <p>
          무엇을 어떻게 준비해야 할지 아직 명확하지 않아도 괜찮습니다.
          필요한 것을 먼저 정리하는 일부터 시작할 수 있습니다.
        </p>
        <div class="cta-row center">
          <a class="button primary light" href="mailto:hello@olchilab.com">문의하기</a>
          <a class="button secondary light" href="#class">올치클래스 먼저 보기</a>
        </div>
      </div>
    </section>
  </main>
`;

const promotionTemplateTestPage = `
  <main class="template-test">
    <section class="template-hero">
      <div>
        <p class="eyebrow">Template absorption test · 홍보 프로젝트 관리 Ver.1</p>
        <h1>캠페인 운영을 한 화면에서<br />판단하는 대시보드</h1>
        <p>
          방금 흡수한 노션 템플릿의 20 / 60 / 20 구조를 웹 테스트 화면으로 재현했습니다.
          왼쪽은 빠른 실행, 가운데는 실제 운영판, 오른쪽은 KPI와 참고 링크가 담당합니다.
        </p>
      </div>
      <a class="button primary" href="/">홈으로</a>
    </section>

    <section class="template-notion-shell" aria-label="홍보 프로젝트 관리 테스트 대시보드">
      <div class="template-callout">
        <strong>홍보 프로젝트 관리 템플릿 VER 1.</strong>
        <span>아이디어, 프로젝트, 콘텐츠, 체크리스트, 성과, 예산을 연결해 캠페인을 운영합니다.</span>
      </div>

      <div class="template-columns">
        <aside class="template-side left-panel" aria-label="빠른 실행과 이번 주 작업">
          <section class="panel-block panel-primary">
            <span class="panel-label">HOME</span>
            <h2>빠른 실행</h2>
            <button type="button">새 캠페인 등록</button>
            <button type="button">콘텐츠 아이디어 추가</button>
            <button type="button">이번 주 체크리스트</button>
          </section>

          <section class="panel-block">
            <span class="panel-label">Guideline</span>
            <h3>사용법 3줄</h3>
            <ol class="mini-list">
              <li>아이디어를 먼저 모은다.</li>
              <li>채택한 것만 프로젝트로 승격한다.</li>
              <li>성과와 예산은 프로젝트에 연결한다.</li>
            </ol>
          </section>

          <section class="panel-block weekly-block">
            <span class="panel-label">Weekly</span>
            <h3>이번 주 작업</h3>
            <label><input type="checkbox" checked /> AI 기초특강 모집 문구 정리</label>
            <label><input type="checkbox" /> MBL 학교 제안서 이미지 점검</label>
            <label><input type="checkbox" /> 블로그 콘텐츠 초안 검수</label>
          </section>
        </aside>

        <section class="template-main" aria-label="중앙 캠페인 운영판">
          <div class="section-strip">
            <span>Project</span>
            <strong>진행 중 캠페인</strong>
          </div>

          <div class="campaign-board">
            <article class="campaign-card active">
              <div class="campaign-meta">
                <span>올치클래스</span>
                <em>진행 중</em>
              </div>
              <h2>AI 기초특강 1차 모집</h2>
              <p>언어의 한계, 개념어, 맥락 자산을 중심 메시지로 한 입문 강의 홍보.</p>
              <div class="campaign-stats">
                <span>콘텐츠 5</span>
                <span>체크 8</span>
                <span>KPI 64%</span>
              </div>
            </article>

            <article class="campaign-card">
              <div class="campaign-meta">
                <span>MBL</span>
                <em>준비</em>
              </div>
              <h2>학교 대상 실험수업 제안</h2>
              <p>학교·기관 파트너에게 보낼 제안서, 수업 흐름, 장비 안내를 묶는 캠페인.</p>
              <div class="campaign-stats">
                <span>콘텐츠 3</span>
                <span>체크 6</span>
                <span>KPI 42%</span>
              </div>
            </article>
          </div>

          <div class="calendar-panel">
            <div class="section-strip compact">
              <span>Contents</span>
              <strong>게시 예정 콘텐츠</strong>
            </div>
            <div class="content-table">
              <div class="table-row header">
                <span>콘텐츠</span>
                <span>채널</span>
                <span>상태</span>
                <span>게시일</span>
              </div>
              <div class="table-row">
                <strong>AI는 내가 모르는 말을 찾아준다</strong>
                <span>블로그</span>
                <em class="tag progress">작성 중</em>
                <span>6/10</span>
              </div>
              <div class="table-row">
                <strong>MBL 실험수업 소개 카드</strong>
                <span>제안서</span>
                <em class="tag review">검수</em>
                <span>6/12</span>
              </div>
              <div class="table-row">
                <strong>AI 기초특강 신청 안내</strong>
                <span>공지</span>
                <em class="tag ready">예약</em>
                <span>6/14</span>
              </div>
            </div>
          </div>

          <div class="budget-summary">
            <div>
              <span>Budget summary</span>
              <strong>₩480,000</strong>
              <small>예상 집행액</small>
            </div>
            <div>
              <span>잔액</span>
              <strong>₩220,000</strong>
              <small>소재 제작/광고 테스트 가능</small>
            </div>
            <div>
              <span>집행률</span>
              <strong>68%</strong>
              <small>위험 없음</small>
            </div>
          </div>
        </section>

        <aside class="template-side right-panel" aria-label="성과와 링크">
          <section class="panel-block kpi-panel">
            <span class="panel-label">KPI</span>
            <h3>성과 확인</h3>
            <div class="kpi-item">
              <span>문의 전환</span>
              <strong>12</strong>
            </div>
            <div class="kpi-item">
              <span>콘텐츠 조회</span>
              <strong>1,840</strong>
            </div>
            <div class="kpi-item">
              <span>완료 작업</span>
              <strong>71%</strong>
            </div>
          </section>

          <section class="panel-block link-panel">
            <span class="panel-label">LINK</span>
            <h3>채널 / 참고 링크</h3>
            <a href="#">올치클래스 소개문</a>
            <a href="#">강의 신청 폼</a>
            <a href="#">제안서 초안</a>
            <a href="#">콘텐츠 저장소</a>
          </section>

          <details class="source-toggle">
            <summary>원본 DB 보관함</summary>
            <p>Idea, Project, Check List, Contents, Reports, Budget DB는 첫 화면에서 숨기고 필요한 view만 노출합니다.</p>
          </details>
        </aside>
      </div>
    </section>
  </main>
`;

const notionDashboardEmbedPage = `
  <main class="notion-embed-page">
    <section class="embed-scroll" aria-label="올치클래스 홍보 운영판 가로형 임베드">
      <div class="wide-dashboard">
        <header class="embed-topbar">
          <div>
            <p class="embed-kicker">OlchiClass · promotion operations</p>
            <h1>올치클래스 홍보 운영판</h1>
          </div>
          <div class="embed-status">
            <span>v1 구조 기준</span>
            <strong>2026.06</strong>
          </div>
        </header>

        <section class="embed-metrics" aria-label="핵심 지표">
          <article>
            <span>진행 캠페인</span>
            <strong>2</strong>
            <em>AI 특강 · MBL 제안</em>
          </article>
          <article>
            <span>콘텐츠</span>
            <strong>8</strong>
            <em>작성 3 · 검토 2 · 예약 3</em>
          </article>
          <article>
            <span>예산 집행</span>
            <strong>68%</strong>
            <em>₩480,000 / ₩700,000</em>
          </article>
          <article>
            <span>문의 목표</span>
            <strong>12 / 20</strong>
            <em>이번 달 목표 대비</em>
          </article>
        </section>

        <section class="embed-layout" aria-label="홍보 운영 3열 대시보드">
          <aside class="embed-rail embed-left">
            <article class="embed-panel command-panel">
              <span class="panel-label">HOME</span>
              <h2>오늘 볼 것</h2>
              <button type="button">캠페인 점검</button>
              <button type="button">콘텐츠 일정</button>
              <button type="button">예산 확인</button>
            </article>

            <article class="embed-panel checklist-panel">
              <span class="panel-label">This week</span>
              <h3>이번 주 실행</h3>
              <label><input type="checkbox" checked /> AI 기초특강 핵심 문구 확정</label>
              <label><input type="checkbox" checked /> 홍보 카드 1차 소재 정리</label>
              <label><input type="checkbox" /> MBL 기관 제안용 문장 다듬기</label>
              <label><input type="checkbox" /> 신청 폼 안내 문구 점검</label>
            </article>

            <article class="embed-panel principle-panel">
              <span class="panel-label">Rule</span>
              <p>아이디어는 모으고, 채택한 것만 프로젝트로 승격한다. 성과와 예산은 반드시 캠페인에 연결한다.</p>
            </article>
          </aside>

          <section class="embed-main" aria-label="중앙 운영판">
            <div class="embed-section-title">
              <span>Project board</span>
              <strong>캠페인 진행 상태</strong>
            </div>

            <div class="kanban-grid">
              <article class="kanban-lane">
                <h3>준비</h3>
                <div class="work-card">
                  <span class="work-badge teal">MBL</span>
                  <strong>학교 대상 실험수업 제안</strong>
                  <p>기관 담당자가 빠르게 이해할 수 있는 1장 소개문과 제안 흐름 정리.</p>
                  <div class="work-foot"><span>콘텐츠 3</span><span>체크 6</span></div>
                </div>
              </article>

              <article class="kanban-lane active-lane">
                <h3>진행</h3>
                <div class="work-card primary-work">
                  <span class="work-badge lime">AI 기초특강</span>
                  <strong>1차 모집 캠페인</strong>
                  <p>언어의 한계, 개념어, 맥락 자산을 중심 메시지로 모집 페이지와 콘텐츠 작성.</p>
                  <div class="work-foot"><span>콘텐츠 5</span><span>완료 64%</span></div>
                </div>
              </article>

              <article class="kanban-lane">
                <h3>검토</h3>
                <div class="work-card">
                  <span class="work-badge orange">공통</span>
                  <strong>브랜드 표기 정리</strong>
                  <p>올치랩은 사업체, 올치클래스는 교육 브랜드로 모든 문구에서 분리.</p>
                  <div class="work-foot"><span>표기</span><span>재검토</span></div>
                </div>
              </article>
            </div>

            <div class="embed-section-title schedule-title">
              <span>Content calendar</span>
              <strong>6월 2주 게시 흐름</strong>
            </div>

            <div class="week-calendar" aria-label="주간 콘텐츠 캘린더">
              ${[
                ["월", "6/8", "AI 특강 제목 후보", "draft"],
                ["화", "6/9", "개념어 카드뉴스", "draft"],
                ["수", "6/10", "블로그 본문", "progress"],
                ["목", "6/11", "MBL 제안 요약", "review"],
                ["금", "6/12", "신청 안내 공지", "ready"],
                ["토", "6/13", "주말 리마인드", "sat"],
                ["일", "6/14", "마감 안내", "sun"],
              ]
                .map(
                  ([day, date, title, tone]) => `
                    <article class="calendar-day ${tone}">
                      <span>${day}</span>
                      <em>${date}</em>
                      <strong>${title}</strong>
                    </article>
                  `
                )
                .join("")}
            </div>

            <div class="budget-track" aria-label="예산 집행 흐름">
              <div>
                <span>예상 집행</span>
                <strong>₩480,000</strong>
              </div>
              <div class="track-bar" aria-hidden="true"><span></span></div>
              <div>
                <span>남은 예산</span>
                <strong>₩220,000</strong>
              </div>
            </div>
          </section>

          <aside class="embed-rail embed-right">
            <article class="embed-panel report-panel">
              <span class="panel-label">KPI</span>
              <h3>성과 요약</h3>
              <div class="report-row"><span>문의</span><strong>12</strong></div>
              <div class="report-row"><span>조회</span><strong>1,840</strong></div>
              <div class="report-row"><span>완료율</span><strong>71%</strong></div>
            </article>

            <article class="embed-panel source-panel">
              <span class="panel-label">Source DB</span>
              <h3>원본 데이터</h3>
              <a href="#">Project DB</a>
              <a href="#">Contents DB</a>
              <a href="#">Budget DB</a>
              <a href="#">Reports DB</a>
              <a href="#">Check List DB</a>
            </article>

            <article class="embed-panel memo-panel">
              <span class="panel-label">Memo</span>
              <p>노션에는 이 화면을 임베드하고, 실제 데이터는 원본 DB에서 관리한다. 화면 폭이 좁으면 이 보드만 가로로 스크롤된다.</p>
            </article>
          </aside>
        </section>
      </div>
    </section>
  </main>
`;

const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const formatMoney = (value) => `₩${Number(value || 0).toLocaleString("ko-KR")}`;

function statusTone(status = "") {
  if (status.includes("진행") || status.includes("제작")) return "lime";
  if (status.includes("검토")) return "orange";
  return "teal";
}

function contentTone(tone = "", status = "") {
  if (tone) return tone;
  if (status.includes("진행") || status.includes("제작")) return "progress";
  if (status.includes("검토")) return "review";
  if (status.includes("예약") || status.includes("완료")) return "ready";
  return "draft";
}

function updateText(selector, value) {
  const element = document.querySelector(selector);
  if (element && value !== undefined && value !== null) {
    element.textContent = value;
  }
}

function renderMetrics(metrics = []) {
  const container = document.querySelector(".embed-metrics");
  if (!container || !metrics.length) return;

  container.innerHTML = metrics
    .map(
      (metric) => `
        <article>
          <span>${escapeHtml(metric.label)}</span>
          <strong>${escapeHtml(metric.value)}</strong>
          <em>${escapeHtml(metric.detail)}</em>
        </article>
      `
    )
    .join("");
}

function renderCampaigns(campaigns = []) {
  const container = document.querySelector(".kanban-grid");
  if (!container || !campaigns.length) return;

  const laneNames = ["준비", "진행 중", "검토"];
  const lanes = laneNames.map((name) => ({
    name,
    items: campaigns.filter((campaign) =>
      name === "검토"
        ? !["준비", "진행 중"].includes(campaign.status)
        : campaign.status === name
    ),
  }));

  container.innerHTML = lanes
    .map(
      (lane) => `
        <article class="kanban-lane ${lane.name === "진행 중" ? "active-lane" : ""}">
          <h3>${escapeHtml(lane.name)}</h3>
          ${
            lane.items.length
              ? lane.items
                  .map(
                    (campaign, index) => `
                      <div class="work-card ${lane.name === "진행 중" && index === 0 ? "primary-work" : ""}">
                        <span class="work-badge ${statusTone(campaign.status)}">
                          ${escapeHtml(campaign.channels?.[0] || campaign.priority || campaign.status)}
                        </span>
                        <strong>${escapeHtml(campaign.title)}</strong>
                        <p>${escapeHtml(campaign.description || campaign.memo || "캠페인 설명이 아직 없습니다.")}</p>
                        <div class="work-foot">
                          <span>콘텐츠 ${escapeHtml(campaign.contentCount ?? 0)}</span>
                          <span>체크 ${escapeHtml(campaign.checkCount ?? 0)}</span>
                          <span>${formatMoney(campaign.budgetTotal)}</span>
                        </div>
                      </div>
                    `
                  )
                  .join("")
              : `<div class="work-card empty-work"><strong>비어 있음</strong><p>이 상태의 캠페인이 없습니다.</p></div>`
          }
        </article>
      `
    )
    .join("");
}

function renderWeek(week = []) {
  const container = document.querySelector(".week-calendar");
  if (!container || !week.length) return;

  container.innerHTML = week
    .map(
      (day) => `
        <article class="calendar-day ${contentTone(day.tone, day.status)}">
          <span>${escapeHtml(day.day)}</span>
          <em>${escapeHtml(day.label)}</em>
          <strong>${escapeHtml(day.title)}</strong>
        </article>
      `
    )
    .join("");
}

function renderChecks(checks = []) {
  const panel = document.querySelector(".checklist-panel");
  if (!panel || !checks.length) return;

  panel.innerHTML = `
    <span class="panel-label">This week</span>
    <h3>이번 주 실행</h3>
    ${checks
      .slice(0, 5)
      .map(
        (check) => `
          <label>
            <input type="checkbox" ${check.done ? "checked" : ""} disabled />
            ${escapeHtml(check.title)}
          </label>
        `
      )
      .join("")}
  `;
}

function renderBudget(budget = {}) {
  const container = document.querySelector(".budget-track");
  if (!container) return;

  const percent = Math.max(0, Math.min(Number(budget.percent || 0), 100));
  container.innerHTML = `
    <div>
      <span>예상 집행</span>
      <strong>${formatMoney(budget.spent)}</strong>
    </div>
    <div class="track-bar" aria-hidden="true"><span style="width: ${percent}%"></span></div>
    <div>
      <span>남은 예산</span>
      <strong>${formatMoney(budget.remaining)}</strong>
    </div>
  `;
}

function renderReports(reports = {}) {
  const panel = document.querySelector(".report-panel");
  if (!panel) return;

  panel.innerHTML = `
    <span class="panel-label">KPI</span>
    <h3>성과 요약</h3>
    <div class="report-row"><span>문의</span><strong>${escapeHtml(reports.inquiries ?? 0)}</strong></div>
    <div class="report-row"><span>조회</span><strong>${Number(reports.views || 0).toLocaleString("ko-KR")}</strong></div>
    <div class="report-row"><span>완료율</span><strong>${escapeHtml(reports.completionRate ?? 0)}%</strong></div>
  `;
}

function renderSourceSummary(source = {}) {
  const panel = document.querySelector(".source-panel");
  if (!panel || !source.rowCounts) return;

  const labels = {
    projects: "Project DB",
    contents: "Contents DB",
    budget: "Budget DB",
    reports: "Reports DB",
    checks: "Check List DB",
    ideas: "Idea DB",
  };

  panel.innerHTML = `
    <span class="panel-label">Source DB</span>
    <h3>원본 데이터</h3>
    ${Object.entries(labels)
      .map(([key, label]) => `<a href="#">${label} · ${escapeHtml(source.rowCounts[key] ?? 0)}</a>`)
      .join("")}
  `;
}

function renderMemo(snapshot) {
  const panel = document.querySelector(".memo-panel");
  if (!panel) return;

  panel.innerHTML = `
    <span class="panel-label">Snapshot</span>
    <p>Notion 원본 DB를 읽어 만든 정적 스냅샷입니다. 마지막 갱신: ${escapeHtml(
      snapshot.generatedAt?.slice(0, 16)?.replace("T", " ") || "확인 필요"
    )}</p>
  `;
}

function applyPromotionDashboardSnapshot(snapshot) {
  updateText(".embed-kicker", snapshot.header?.kicker);
  updateText(".wide-dashboard h1", snapshot.header?.title);
  updateText(".embed-status span", snapshot.header?.statusLabel);
  updateText(".embed-status strong", snapshot.header?.periodLabel);

  renderMetrics(snapshot.metrics);
  renderCampaigns(snapshot.campaigns);
  renderWeek(snapshot.week);
  renderChecks(snapshot.checks);
  renderBudget(snapshot.budget);
  renderReports(snapshot.reports);
  renderSourceSummary(snapshot.source);
  renderMemo(snapshot);
}

async function loadPromotionDashboardSnapshot() {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}data/promotion-dashboard.json`, {
      cache: "no-store",
    });
    if (!response.ok) return;
    applyPromotionDashboardSnapshot(await response.json());
  } catch {
    // Keep the static fallback dashboard when the snapshot is unavailable.
  }
}

const currentPath = window.location.pathname;
const isPromotionTemplateTest = currentPath.includes("promotion-template-test");
const isNotionDashboardEmbed = currentPath.includes("notion-dashboard-embed");

document.title = isPromotionTemplateTest
  ? "OlchiLab Promotion Template Test"
  : isNotionDashboardEmbed
    ? "OlchiClass Promotion Dashboard Embed"
  : "OlchiLab";

document.querySelector("#app").innerHTML = isPromotionTemplateTest
  ? promotionTemplateTestPage
  : isNotionDashboardEmbed
    ? notionDashboardEmbedPage
  : homePage;

if (isNotionDashboardEmbed) {
  loadPromotionDashboardSnapshot();
}
