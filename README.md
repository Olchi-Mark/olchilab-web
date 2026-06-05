# OlchiLab Web

`www.olchilab.com` 웹사이트 repo.

올치랩은 고객의 막연한 요구를 옳게 읽고, 필요한 준비와 실행을 꼼꼼하게 구조화하는 회사/사업 허브다. 올치클래스는 올치랩 아래의 MBL·AI 강의 교육 브랜드로 다룬다.

## 현재 단계

- 로컬 repo 초기 생성
- Vite 기반 정적 사이트 scaffold
- 올치랩 홈 설계안과 브랜드 컬러 토큰 반영

## 실행

```bash
npm install
npm run dev
```

## 디자인 시안 비교

| Port | Script | Direction |
| --- | --- | --- |
| 5173 | `npm run dev` | Airtable-style main draft |
| 5174 | `npm run dev:vercel` | Vercel-style grid/system draft |
| 5175 | `npm run dev:mintlify` | Mintlify-style docs/knowledge draft |
| 5176 | `npm run dev:sentry` | Sentry-style dark console draft |
| 5177 | `npm run dev:stripe` | Stripe-style gradient/product draft |

자세한 비교 기준은 `docs/design-variants-2026-06-05.md`를 본다.

## 빌드 확인

```bash
npm run build
npm run build:vercel
npm run build:mintlify
npm run build:sentry
npm run build:stripe
```

## 기준 문서

- `docs/design-brief.md`
- Obsidian: `D:\Obsidian\OlchiVault\20_Areas\올치랩\올치랩 웹사이트 홈 설계안 2026-06-05.md`
- Obsidian: `D:\Obsidian\OlchiVault\20_Areas\운영\올치랩 디자인 SOP.md`
