# OlchiLab Design Variants

This repo currently keeps multiple visual directions side by side.

The purpose is comparison, not final production selection.

## Preview URLs

| Port | Variant | Reference | Direction |
| --- | --- | --- | --- |
| 5173 | Main draft | Airtable | Editorial white canvas, signature band, restrained cards |
| 5174 | Vercel draft | Vercel | Precise grid, small radius, mono labels, dashboard/table rhythm |
| 5175 | Mintlify draft | Mintlify | Documentation platform, knowledge system, docs preview |
| 5176 | Sentry draft | Sentry | Dark console, highlighted language, status board |
| 5177 | Stripe draft | Stripe | Gradient hero band, slim type, product UI mockup |

## Commands

```sh
npm run dev
npm run dev:vercel
npm run dev:mintlify
npm run dev:sentry
npm run dev:stripe
```

## Color Rule

All variants keep the same OlchiLab color palette:

- Deep Navy `#1B3556`
- Active Teal `#17777A`
- Sensor Lime `#A8CF45`
- Warm Paper `#F5F7F2`
- Graphite `#24323D`
- Safety Orange `#E98A2B`

## Current Judgment

- Airtable: calm and editorial, but can feel too presentation-like if cards are overused.
- Vercel: strongest for operational clarity and refined engineering tone.
- Mintlify: strongest if OlchiLab wants to emphasize knowledge, docs, and AI/class operating guides.
- Sentry: strongest for a distinctive dark personality, but may be too intense for schools and institutions.
- Stripe: strongest for polished business/product credibility, but gradient treatment needs restraint.

## Verification

Passed:

```sh
node --check variants\mintlify\src\main.js
node --check variants\sentry\src\main.js
node --check variants\stripe\src\main.js
npm run build:mintlify
npm run build:sentry
npm run build:stripe
```

HTTP 200 verified:

- `http://127.0.0.1:5175/`
- `http://127.0.0.1:5176/`
- `http://127.0.0.1:5177/`

Browser screenshot verification was attempted, but the Codex in-app browser returned `Browser is not available: iab` in this session.
