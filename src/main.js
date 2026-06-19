import "./styles.css";

const siteBasePath = import.meta.env.BASE_URL || "/";
const routeHref = (path = "") => `${siteBasePath}${path}`.replace(/\/{2,}/g, "/");

const homePage = `
  <header class="site-header">
    <div class="nav-shell">
      <a class="brand" href="#top" aria-label="OlchiLab home">
        <span class="brand-mark">olchi</span><span class="brand-lab">lab</span>
      </a>
      <nav class="nav-links" aria-label="Main navigation">
        <a href="#about">올치랩 소개</a>
        <a href="#work">하는 일</a>
        <a href="#class">올치클래스</a>
        <a href="#collaboration">협업 방식</a>
        <a href="${routeHref("company-board/")}">사내게시판</a>
        <a href="#contact">문의</a>
      </nav>
      <a class="nav-cta" href="#contact">학교·기관 협업 문의</a>
    </div>
  </header>

  <main id="top" class="home-v3">
    <section class="home-hero">
      <div class="home-hero__copy">
        <p class="eyebrow">OlchiLab · company and operations hub</p>
        <h1>학교·기관 협업을 위한 교육과 실무 정리</h1>
        <p class="home-hero__lead">
          올치랩은 학교·기관과 협업해 교육 운영과 실무를 정리하는 소규모 사업체입니다.
          교육은 하위 브랜드 올치클래스에서 MBL 수업과 AI 기초특강으로 운영합니다.
        </p>
        <div class="cta-row">
          <a class="button primary" href="#contact">학교·기관 협업 문의하기</a>
          <a class="button secondary" href="#class">올치클래스 보기</a>
        </div>
      </div>

      <aside class="home-hero__panel" aria-label="올치랩과 올치클래스 관계 요약">
        <div class="relationship-card">
          <span>상위 운영 주체</span>
          <strong>올치랩</strong>
          <p>교육 운영, 기관 대응, 자료 정리, 실행 구조화, 자동화 가능성 검토</p>
        </div>
        <div class="relationship-arrow" aria-hidden="true">↓</div>
        <div class="relationship-card subbrand">
          <span>하위 교육 브랜드</span>
          <strong>올치클래스</strong>
          <p>MBL 수업과 AI 기초특강을 학교와 기관 조건에 맞게 준비</p>
        </div>
        <div class="home-note">
          <strong>첫 상담에서 정리할 것</strong>
          <ul>
            <li>대상과 목적</li>
            <li>일정과 운영 조건</li>
            <li>자료와 준비물</li>
            <li>문의 이후 다음 행동</li>
          </ul>
        </div>
      </aside>
    </section>

    <section id="about" class="home-band home-band--navy">
      <div class="home-band__inner">
        <p class="eyebrow on-dark">About OlchiLab</p>
        <h2>올치랩은 단순 강의 브랜드가 아닙니다.</h2>
        <p>
          교육 운영, 기관 대응, 자료 정리, 실행 구조화까지 함께 다루는 사업 운영 주체입니다.
          수업 상세는 올치클래스에서 안내하고, 올치랩 홈은 협업 범위와 신뢰 정보를 먼저 설명합니다.
        </p>
      </div>
    </section>

    <section id="work" class="home-section">
      <div class="home-section__head">
        <p class="eyebrow">What OlchiLab organizes</p>
        <h2>먼저 정리해야 실행이 분명해집니다.</h2>
        <p>
          요청을 바로 상품처럼 포장하기보다, 목적과 조건을 나누고 실제 운영 가능한 단위로 정리합니다.
        </p>
      </div>
      <div class="work-grid">
        <article>
          <span>01</span>
          <h3>교육 운영 준비</h3>
          <p>대상, 시간, 공간, 준비물, 수업 흐름을 확인해 실제 진행 가능한 형태로 정리합니다.</p>
        </article>
        <article>
          <span>02</span>
          <h3>기관 대응과 실무 정리</h3>
          <p>학교·기관과 협의할 때 필요한 일정, 자료, 안내 문구, 의사결정 항목을 나눕니다.</p>
        </article>
        <article>
          <span>03</span>
          <h3>자료 구조화와 자동화 검토</h3>
          <p>반복되는 문서와 작업 흐름을 다시 쓸 수 있게 정리하고, 자동화 가능성을 검토합니다.</p>
        </article>
      </div>
    </section>

    <section id="class" class="home-section class-entry">
      <div class="class-entry__copy">
        <p class="eyebrow">Education brand</p>
        <h2>수업 상세는 올치클래스에서 안내합니다.</h2>
        <p>
          올치클래스는 올치랩이 운영하는 교육 브랜드입니다. 홈에서는 교육 브랜드의 위치만 짧게 소개하고,
          상세 커리큘럼과 운영 방식은 올치클래스 페이지에서 분리해 다룹니다.
        </p>
      </div>
      <div class="program-cards">
        <article>
          <span class="status active">올치클래스</span>
          <h3>MBL 수업</h3>
          <p>센서와 실험 조건을 고려해 학교·기관 상황에 맞게 준비하는 실험 수업입니다.</p>
        </article>
        <article>
          <span class="status planning">올치클래스</span>
          <h3>AI 기초특강</h3>
          <p>비전문가가 AI를 실제 작업에 활용하도록 언어화, 개념어, 검증 습관을 다룹니다.</p>
        </article>
      </div>
    </section>

    <section id="collaboration" class="home-section collaboration">
      <div class="home-section__head">
        <p class="eyebrow">Collaboration</p>
        <h2>역할별 페이지보다, 협업 흐름을 먼저 보여줍니다.</h2>
        <p>
          학교, 기관, 교사, 학부모, 학생을 메뉴에서 먼저 나누지 않습니다. 같은 방문자가 여러 역할을 가질 수 있기 때문에, 협업 흐름 안에서 필요한 정보를 안내합니다.
        </p>
      </div>
      <div class="flow-list">
        <article>
          <span>1</span>
          <strong>문의와 상황 확인</strong>
          <p>대상, 목적, 일정, 장소, 예산, 필요한 자료를 먼저 확인합니다.</p>
        </article>
        <article>
          <span>2</span>
          <strong>진행 방식 정리</strong>
          <p>출강, 특강, 자료 준비, 운영 협의 중 어떤 방식이 맞는지 나눕니다.</p>
        </article>
        <article>
          <span>3</span>
          <strong>준비 항목 확정</strong>
          <p>수업 흐름, 안내 문구, 준비물, 담당자 확인 사항을 실행 단위로 정리합니다.</p>
        </article>
        <article>
          <span>4</span>
          <strong>실행 후 기록</strong>
          <p>다음 협업에 다시 쓸 수 있도록 자료와 판단 기준을 남깁니다.</p>
        </article>
      </div>
    </section>

    <section id="trust" class="home-section trust-section">
      <div class="trust-grid">
        <div>
          <p class="eyebrow">Trust information</p>
          <h2>첫 버전에서는 정직한 기본 정보가 신뢰입니다.</h2>
          <p>
            아직 후기, 가격표, 상세 커리큘럼을 과장해서 채우지 않습니다. 대신 누가 운영하고, 어떻게 연락하며, 어떤 범위에서 협의할 수 있는지 분명하게 보여줍니다.
          </p>
        </div>
        <div class="trust-list">
          <article>
            <strong>현재 상태</strong>
            <span>후기 준비 중 · 상세 커리큘럼 협의형 · 가격은 문의 후 안내</span>
          </article>
          <article>
            <strong>문의 기준</strong>
            <span>학생 직접 문의보다 교사·기관·보호자 중심 문의 구조를 우선합니다.</span>
          </article>
          <article>
            <strong>필수 보강</strong>
            <span>개인정보처리방침, 운영자 정보, 이메일과 대체 연락 수단을 준비합니다.</span>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="contact-card">
        <p class="eyebrow on-dark">Contact</p>
        <h2>학교·기관 협업이나 수업 준비가 필요하다면 먼저 상황을 알려주세요.</h2>
        <p>
          무엇을 어떻게 준비해야 할지 아직 명확하지 않아도 괜찮습니다. 대상, 일정, 목적, 필요한 자료를 함께 정리하는 일부터 시작할 수 있습니다.
        </p>
        <div class="cta-row center">
          <a class="button primary light" href="mailto:hello@olchilab.com">학교·기관 협업 문의하기</a>
          <a class="button secondary light" href="#class">올치클래스 먼저 보기</a>
        </div>
      </div>
    </section>

    <footer class="site-footer" aria-label="OlchiLab footer">
      <div>
        <strong>OlchiLab</strong>
        <span>올치랩 · 사업 운영 허브</span>
      </div>
      <nav aria-label="Footer navigation">
        <a href="#about">올치랩 소개</a>
        <a href="#class">올치클래스</a>
        <a href="${routeHref("company-board/")}">사내게시판</a>
        <a href="#contact">문의</a>
        <a href="#trust">개인정보처리방침 준비 중</a>
      </nav>
    </footer>
  </main>
`;

const companyBoardPage = `
  <main class="company-board-page">
    <section class="company-board-shell">
      <header class="company-board-header">
        <div>
          <p class="company-board-kicker"><span></span>Olchi Teams · public board mirror</p>
          <h1>Olchi Teams 사내게시판</h1>
          <p>
            내부 53240 사내게시판의 홈, 구축 상태판, 조직도 내용을 정적 스냅샷으로 노출합니다.
            원장은 Olchi Teams repo이고, 이 화면은 공개 사이트용 읽기 전용 projection입니다.
          </p>
        </div>
        <nav class="company-board-nav" aria-label="사내게시판 보기">
          <a href="${routeHref("")}">OlchiLab 홈</a>
          <a href="#overview">홈</a>
          <a href="#build">구축 상태판</a>
          <a href="#org">조직도</a>
        </nav>
      </header>

      <div class="company-board-root" data-company-board-root>
        <section class="company-board-loading">
          <strong>사내게시판 스냅샷을 불러오는 중입니다.</strong>
          <span>public/data/company-board-snapshot.json</span>
        </section>
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

const formatBoardDate = (value) => {
  if (!value) return "확인 필요";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleString("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
  });
};

const boardNumber = (value) => Number(value || 0).toLocaleString("ko-KR");

function boardStatusTone(status = "") {
  if (status.includes("done") || status.includes("active") || status.includes("acked")) return "good";
  if (status.includes("waiting") || status.includes("review") || status.includes("draft")) return "warn";
  if (status.includes("blocked") || status.includes("missing")) return "bad";
  return "neutral";
}

function boardBadge(status = "") {
  return `<span class="company-board-badge ${boardStatusTone(status)}">${escapeHtml(status || "unknown")}</span>`;
}

function boardMetric(label, value, detail) {
  return `
    <article>
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
      <em>${escapeHtml(detail)}</em>
    </article>
  `;
}

function renderStatusCounts(counts = {}) {
  const entries = Object.entries(counts);
  if (!entries.length) return `<span class="company-board-muted">기록 없음</span>`;

  return entries
    .map(
      ([key, value]) => `
        <span class="company-board-chip">
          ${escapeHtml(key)}
          <strong>${escapeHtml(value)}</strong>
        </span>
      `
    )
    .join("");
}

function renderRecentLog(logs = []) {
  if (!logs.length) {
    return `<li><strong>최근 로그 없음</strong><span>current-log.md 제목을 찾지 못했습니다.</span></li>`;
  }

  return logs
    .slice(0, 6)
    .map((item) => `<li><strong>${escapeHtml(item)}</strong><span>current-log projection</span></li>`)
    .join("");
}

function renderComponents(components = []) {
  if (!components.length) {
    return `<tr><td colspan="5">표시할 구성요소가 없습니다.</td></tr>`;
  }

  return components
    .map(
      (component) => `
        <tr>
          <td>${escapeHtml(component.area)}</td>
          <td><strong>${escapeHtml(component.name)}</strong></td>
          <td>${boardBadge(component.status)}</td>
          <td>${escapeHtml(component.owner)}</td>
          <td>${escapeHtml(component.next)}</td>
        </tr>
      `
    )
    .join("");
}

function renderWorkItems(items = []) {
  if (!items.length) {
    return `<tr><td colspan="6">최근 작업이 없습니다.</td></tr>`;
  }

  return items
    .map(
      (item) => `
        <tr>
          <td><code>${escapeHtml(item.work_id || item.id || "-")}</code></td>
          <td><strong>${escapeHtml(item.title || "제목 없음")}</strong></td>
          <td>${boardBadge(item.status || item.work_status)}</td>
          <td>${escapeHtml(item.priority || "-")}</td>
          <td>${escapeHtml(item.assignee_seat_key || item.owner_seat_key || "-")}</td>
          <td>${escapeHtml(item.next_action || item.expected_output || "-")}</td>
        </tr>
      `
    )
    .join("");
}

function renderInboxRows(rows = []) {
  if (!rows.length) {
    return `<tr><td colspan="3">교신문 inbox projection이 없습니다.</td></tr>`;
  }

  return rows
    .map(
      (row) => `
        <tr>
          <td>${escapeHtml(row.to_path)}</td>
          <td>${boardBadge(row.ack === 1 || row.ack === true ? "acked" : "unacked")}</td>
          <td>${escapeHtml(row.count ?? 0)}</td>
        </tr>
      `
    )
    .join("");
}

function renderWakeRows(rows = []) {
  if (!rows.length) {
    return `<tr><td colspan="4">wake queue projection이 없습니다.</td></tr>`;
  }

  return rows
    .slice(0, 8)
    .map(
      (row) => `
        <tr>
          <td>${escapeHtml(row.to_key || row.to_path)}</td>
          <td>${boardBadge(row.wake_status || "unknown")}</td>
          <td><code>${escapeHtml(row.trigger_message_id || "-")}</code></td>
          <td>${escapeHtml(row.updated_at || row.last_wake_at || "-")}</td>
        </tr>
      `
    )
    .join("");
}

function renderSeats(seats = []) {
  if (!seats.length) {
    return `<tr><td colspan="6">Seat projection이 없습니다.</td></tr>`;
  }

  return seats
    .slice()
    .sort((a, b) => String(a.seat_path || "").localeCompare(String(b.seat_path || ""), "ko-KR"))
    .map(
      (seat) => `
        <tr>
          <td>${escapeHtml(seat.seat_path || seat.seat_name || "-")}</td>
          <td><strong>${escapeHtml(seat.seat_name || "-")}</strong></td>
          <td>${escapeHtml(seat.actor_name || seat.assigned_actor_id || "미배정")}</td>
          <td>${boardBadge(seat.seat_status || "unknown")}</td>
          <td>${boardBadge(seat.runtime_status || "no_runtime")}</td>
          <td><code>${escapeHtml(seat.target_thread_id || "-")}</code></td>
        </tr>
      `
    )
    .join("");
}

function applyCompanyBoardSnapshot(snapshot) {
  const root = document.querySelector("[data-company-board-root]");
  if (!root) return;

  const metrics = snapshot.metrics || {};
  const statusCounts = snapshot.status_counts || {};
  const communication = snapshot.communication || {};
  const inbox = Array.isArray(communication.inbox) ? communication.inbox : [];
  const wakes = Array.isArray(communication.wake_queue) ? communication.wake_queue : [];
  const components = Array.isArray(snapshot.components) ? snapshot.components : [];
  const workItems = Array.isArray(snapshot.work_items) ? snapshot.work_items : [];
  const seats = Array.isArray(snapshot.seats) ? snapshot.seats : [];

  root.innerHTML = `
    <section id="overview" class="company-board-metrics" aria-label="사내게시판 핵심 지표">
      ${boardMetric("Actors", boardNumber(metrics.actors), "actor registry")}
      ${boardMetric("Active assignments", boardNumber(metrics.active_assignments), `${boardNumber(metrics.assigned_seats)} assigned seats`)}
      ${boardMetric("Work waiting", boardNumber(metrics.work_waiting), `${boardNumber(metrics.work_done)} done / ${boardNumber(metrics.work_items)} total`)}
      ${boardMetric("Messages / wakes", `${boardNumber(metrics.unacked_messages)} / ${boardNumber(metrics.active_wakes)}`, "unACKed / active wake")}
    </section>

    <section class="company-board-routes" aria-label="사내게시판 라우트">
      <a href="#overview">
        <strong>홈</strong>
        <span>현재 지표, 최근 로그, 운영 board projection</span>
      </a>
      <a href="#build">
        <strong>구축 상태판</strong>
        <span>WorkBoard, registry, communication 상태</span>
      </a>
      <a href="#org">
        <strong>조직도</strong>
        <span>Seat name과 actor name 중심 조직 구조</span>
      </a>
    </section>

    <section class="company-board-two-col">
      <article class="company-board-panel">
        <div class="company-board-panel-head">
          <div>
            <h2>최근 로그</h2>
            <p>00_start_here/current-log.md에서 읽은 최근 제목입니다.</p>
          </div>
          <span>${escapeHtml(formatBoardDate(snapshot.generated_at))}</span>
        </div>
        <ol class="company-board-log">
          ${renderRecentLog(snapshot.recent_log)}
        </ol>
      </article>

      <article class="company-board-panel">
        <div class="company-board-panel-head">
          <div>
            <h2>상태 집계</h2>
            <p>registry와 WorkBoard status count입니다.</p>
          </div>
          <span>snapshot</span>
        </div>
        <div class="company-board-counts">
          <h3>Actors</h3>
          <div>${renderStatusCounts(statusCounts.actors)}</div>
          <h3>Seats</h3>
          <div>${renderStatusCounts(statusCounts.seats)}</div>
          <h3>Assignments</h3>
          <div>${renderStatusCounts(statusCounts.assignments)}</div>
          <h3>Work</h3>
          <div>${renderStatusCounts(statusCounts.work)}</div>
        </div>
      </article>
    </section>

    <section id="build" class="company-board-panel">
      <div class="company-board-panel-head">
        <div>
          <h2>구축 상태판</h2>
          <p>내부 사내게시판의 Clean Rebuild Board 구성요소입니다.</p>
        </div>
        <span>${escapeHtml(components.length)} components</span>
      </div>
      <div class="company-board-table-wrap">
        <table class="company-board-table">
          <thead>
            <tr><th>영역</th><th>이름</th><th>상태</th><th>owner</th><th>다음 기준</th></tr>
          </thead>
          <tbody>${renderComponents(components)}</tbody>
        </table>
      </div>
    </section>

    <section class="company-board-panel">
      <div class="company-board-panel-head">
        <div>
          <h2>WorkBoard</h2>
          <p>최근 작업 12건입니다. 작업 정본은 Olchi Teams WorkBoard입니다.</p>
        </div>
        <span>${boardNumber(metrics.work_items)} items</span>
      </div>
      <div class="company-board-table-wrap">
        <table class="company-board-table">
          <thead>
            <tr><th>ID</th><th>작업</th><th>상태</th><th>우선순위</th><th>담당</th><th>다음 행동</th></tr>
          </thead>
          <tbody>${renderWorkItems(workItems)}</tbody>
        </table>
      </div>
    </section>

    <section class="company-board-two-col">
      <article class="company-board-panel">
        <div class="company-board-panel-head">
          <div>
            <h2>Communication</h2>
            <p>교신문 ACK 요약입니다.</p>
          </div>
          <span>${boardNumber(metrics.unacked_messages)} unACKed</span>
        </div>
        <div class="company-board-table-wrap">
          <table class="company-board-table">
            <thead><tr><th>수신처</th><th>ACK</th><th>count</th></tr></thead>
            <tbody>${renderInboxRows(inbox)}</tbody>
          </table>
        </div>
      </article>

      <article class="company-board-panel">
        <div class="company-board-panel-head">
          <div>
            <h2>Wake Queue</h2>
            <p>최근 wake 상태 projection입니다.</p>
          </div>
          <span>${boardNumber(metrics.active_wakes)} active</span>
        </div>
        <div class="company-board-table-wrap">
          <table class="company-board-table">
            <thead><tr><th>to</th><th>상태</th><th>trigger</th><th>updated</th></tr></thead>
            <tbody>${renderWakeRows(wakes)}</tbody>
          </table>
        </div>
      </article>
    </section>

    <section id="org" class="company-board-panel">
      <div class="company-board-panel-head">
        <div>
          <h2>조직도</h2>
          <p>Seat Registry, Assignment Registry, Runtime Binding을 합친 projection입니다.</p>
        </div>
        <span>${escapeHtml(seats.length)} seats</span>
      </div>
      <div class="company-board-table-wrap">
        <table class="company-board-table">
          <thead>
            <tr><th>경로</th><th>seat</th><th>actor</th><th>seat status</th><th>runtime</th><th>thread</th></tr>
          </thead>
          <tbody>${renderSeats(seats)}</tbody>
        </table>
      </div>
    </section>
  `;
}

async function loadCompanyBoardSnapshot() {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}data/company-board-snapshot.json`, {
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`Snapshot load failed: ${response.status}`);
    applyCompanyBoardSnapshot(await response.json());
  } catch (error) {
    const root = document.querySelector("[data-company-board-root]");
    if (!root) return;
    root.innerHTML = `
      <section class="company-board-error">
        <strong>사내게시판 스냅샷을 불러오지 못했습니다.</strong>
        <span>${escapeHtml(error.message)}</span>
      </section>
    `;
  }
}

const currentPath = window.location.pathname;
const isPromotionTemplateTest = currentPath.includes("promotion-template-test");
const isNotionDashboardEmbed = currentPath.includes("notion-dashboard-embed");
const isCompanyBoard = currentPath.includes("company-board");

document.title = isPromotionTemplateTest
  ? "OlchiLab Promotion Template Test"
  : isNotionDashboardEmbed
    ? "OlchiClass Promotion Dashboard Embed"
  : isCompanyBoard
    ? "Olchi Teams Company Board"
  : "OlchiLab";

document.querySelector("#app").innerHTML = isPromotionTemplateTest
  ? promotionTemplateTestPage
  : isNotionDashboardEmbed
    ? notionDashboardEmbedPage
  : isCompanyBoard
    ? companyBoardPage
  : homePage;

if (isNotionDashboardEmbed) {
  loadPromotionDashboardSnapshot();
}

if (isCompanyBoard) {
  loadCompanyBoardSnapshot();
}
