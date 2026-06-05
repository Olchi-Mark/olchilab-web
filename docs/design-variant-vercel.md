# OlchiLab Design Variant: Vercel Reference

## Intent

This variant keeps the OlchiLab color palette but tests a Vercel-like system:

- precise grid
- smaller 6-8px radius
- restrained cards
- mono labels for technical/operational cues
- tighter, more deliberate typography
- dashboard/table rhythm instead of decorative presentation cards

## Local Preview

Run:

```sh
npm run dev:vercel
```

Open:

```txt
http://127.0.0.1:5174/
```

## Reference Choice

Vercel was chosen for this second draft because the previous Airtable-style draft still felt too much like an auto-generated presentation.

This version should feel more engineered:

- fewer soft decorative cards
- no large rounded corners
- stronger line and table structure
- smaller, more consistent type scale
- clearer line breaks in the hero headline

## Guardrails

- Keep OlchiLab colors.
- Do not make OlchiLab look like only OlchiClass.
- Do not make idea-stage projects look launched.
- Do not overuse Sensor Lime.
- Keep body text readable and avoid awkward Korean line breaks with `word-break: keep-all`.
