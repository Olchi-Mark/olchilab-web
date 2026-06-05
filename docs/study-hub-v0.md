# Study Hub v0

Date: 2026-06-05
Status: v0 documentation
Owner context: Mark / OlchiLab / OlchiClass learning control
Notion hub: https://app.notion.com/p/376ea3fc723e814d8c1bc9026d73ee1d
Notion database: https://app.notion.com/p/164f6acf98074c6d96864dcc0ed744ae
Obsidian source: `D:\Obsidian\OlchiVault\00_Hub\Study Hub.md`

## Purpose

Study Hub v0 collects scattered learning topics in one place and prevents scope creep.

The goal is not to add every interesting topic. The goal is to move new learning needs into a controlled queue, connect each topic to a real project, and only actively study what supports current work.

## Operating Rules

1. Study only when the topic connects to a real project.
2. Keep at most three active learning tracks at once.
3. Completion means applying the learning to work, not merely understanding it.
4. New learning topics go to Study Hub first, then become `INBOX`, `진행중`, or `보류`.

## Active Tracks

### 1. 홈페이지 제작 기초

Connected projects:

- OlchiLab website
- `olchilab.com`
- `class.olchilab.com`
- `board.olchilab.com`

Minimum scope:

- Domain
- Subdomain
- DNS
- CNAME
- A record
- Cloudflare Pages
- Static site
- HTML
- CSS
- Basic deployment flow

Next action:

> Define the roles of `olchilab.com`, `class.olchilab.com`, and `board.olchilab.com` in a table.

### 2. Codex / 개발 협업

Connected projects:

- OlchiLab website
- Study Hub
- OlchiClass Admin
- `board.olchilab.com`
- n8n automation
- Worksheet automation

Minimum scope:

- Repo structure
- `src`
- `docs`
- `scripts`
- `assets`
- `README.md`
- GitHub basics
- commit
- push
- pull
- task brief writing
- error-message reporting
- change review

Next action:

> Create a basic Codex task brief template.

### 3. 자동화 / n8n / JSON

Connected projects:

- SMS automation
- Work-log automation
- School inquiry management
- Lesson schedule management
- Notion integration
- Gmail/Calendar integration
- OlchiClass operations automation

Minimum scope:

- JSON structure
- Parameters
- HTTP Request
- Webhook
- Input schema
- Output schema
- Failure conditions
- Logs
- n8n node connections
- Manual Trigger
- Edit Fields
- Response inspection

Next action:

> Turn the successful SMS workflow into a learning card.

## Learning Item Schema

| Property | Purpose |
|---|---|
| 이름 | Learning item name |
| 분류 | Learning category |
| 상태 | Current state |
| 우선순위 | P1, P2, P3, P4 |
| 연결 프로젝트 | Real project connection |
| 왜 배우는가 | Learning purpose |
| 최소 학습 범위 | What must be learned now |
| 제외 범위 | What is out of scope now |
| 다음 행동 | One immediate next action |
| 결과물 | Memo, document, code, applied example |
| 보류 이유 | Why this is deferred |
| 마지막 업데이트일 | Last update date |

## Status Values

| Status | Meaning |
|---|---|
| INBOX | Collected but not prioritized |
| 검토 | Under review |
| 진행중 | Connected to current work |
| 실습완료 | Tried once |
| 산출물화 | Applied to a project, document, or class material |
| 보류 | Important but not now |
| 완료 | Enough for the current stage |

## Priority Values

| Priority | Meaning |
|---|---|
| P1 | Needed for current projects |
| P2 | Needed soon |
| P3 | Useful to know |
| P4 | Deferred |

## Initial Items

| Name | Category | Status | Priority | Connected project | Next action |
|---|---|---|---|---|---|
| DNS와 서브도메인 이해 | 홈페이지 / 웹기초 | 진행중 | P1 | `olchilab.com`, `board.olchilab.com` | 도메인, 서브도메인, DNS 레코드 차이를 정리한다. |
| Cloudflare Pages 기본 배포 | 홈페이지 / 웹기초 | INBOX | P1 | OlchiLab homepage, `board.olchilab.com` | Cloudflare Pages 배포 흐름을 정리한다. |
| HTML 기본 구조 | 홈페이지 / 웹기초 | INBOX | P1 | OlchiLab homepage | HTML 문서 기본 구조를 학습한다. |
| CSS 기본 구조 | 홈페이지 / 웹기초 | INBOX | P1 | OlchiLab homepage | 선택자, 박스모델, 레이아웃 개념을 정리한다. |
| Codex 작업지시서 작성법 | Codex / 개발 | 진행중 | P1 | All development projects | 기본 작업지시서 템플릿을 만든다. |
| repo 폴더 구조 이해 | Codex / 개발 | 진행중 | P1 | Website, automation, admin system | `src`, `docs`, `scripts`, `assets`의 뜻과 용도를 정리한다. |
| JSON 기본 규칙 | 자동화 / n8n | 진행중 | P1 | n8n, API, automation | 객체, 배열, 문자열, 숫자, 불리언 예시를 정리한다. |
| n8n HTTP Request 이해 | 자동화 / n8n | 진행중 | P1 | SMS automation | 성공한 SMS 발송 노드를 기준으로 요청 구조를 정리한다. |
| GitHub 기본 흐름 | Codex / 개발 | INBOX | P2 | Website, Codex collaboration | commit, push, pull 개념을 정리한다. |
| 정적 사이트 구조 | 홈페이지 / 웹기초 | INBOX | P2 | OlchiLab homepage | 정적 사이트와 동적 사이트의 차이를 정리한다. |
| 입력/출력 스키마 | 자동화 / n8n | INBOX | P2 | Automation standardization | SMS 워크플로우의 입력값과 출력값을 표로 정리한다. |
| LLM 기본 개념 | AI / LLM | INBOX | P3 | AI 기초특강 | LLM, 생성형 AI, 검색의 차이를 정리한다. |
| 프롬프트와 맥락 자산 | AI / LLM | INBOX | P3 | AI 기초특강, Olchi Bridge | 강의용 개념 메모로 정리한다. |
| 로컬 LLM 설치 | 심화학습 | 보류 | P4 | Internal AI engine | Defer until local retrieval or internal engine is needed. |
| RAG 구조 | 심화학습 | 보류 | P4 | Olchi Bridge, learning coaching app | Defer until enough source materials exist. |
| 머신러닝 | 심화학습 | 보류 | P4 | Template analysis, recommendation system | Defer until real data and pattern-analysis needs exist. |

## Out Of Scope For v0

- Login
- Application database implementation
- Automatic progress calculation
- API integration
- Notion API synchronization
- Learning recommendation algorithm
- Local LLM installation
- RAG implementation
- Learning app development
- Web dashboard implementation

## Fixed Rule

When a new study topic appears, move it to Study Hub first. Do not expand the current task just because a new topic is interesting.
