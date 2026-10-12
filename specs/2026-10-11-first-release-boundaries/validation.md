# Validation: First-Release Boundaries

The work can be merged when every item below is true.

## Checklist
- [x] Agent journeys cover ailments, therapies, and appointment booking.
- [x] Staff journeys cover the dashboard and support visibility.
- [x] Each journey step maps to a roadmap phase.
- [x] Every open decision in `specs/tech-stack.md` is either decided or has
      an owner and the roadmap phase that needs it.
- [x] In-scope and out-of-scope lists exist for the first release.
- [x] No contradictions with `specs/mission.md` or `specs/tech-stack.md`.
- [x] Staff-only capabilities are separated from agent-facing ones.
- [x] The only application code is the minimal home page and the Next.js
      setup it needs; no database, auth, staff pages, or extra routes.
- [x] `npm install` then the documented start command serves the home page
      at `/` locally.
- [x] The home page shows the AgentClinic name and mission-based welcome,
      with one `h1` and semantic landmarks.
- [x] The home page is readable and usable at narrow and wide widths in a
      modern browser.
- [x] The type-check passes with strict TypeScript.
- [x] README documents how to install, start, and type-check.
- [x] `plan.md`, `requirements.md`, and `validation.md` are consistent.
- [x] `specs/roadmap.md` marks Phase 1 complete at merge.

## Merge Criteria
All checklist items are checked and the branch contains only the spec
documents, the minimal home page with its setup files, and README updates.
