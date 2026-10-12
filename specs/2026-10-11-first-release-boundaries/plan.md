# Plan: Agree on the First-Release Boundaries (Roadmap Phase 1)

Mostly documentation, plus one minimal home page (group 4). No other
application code is written in this phase.

## 1. Define the primary journeys
- 1.1 Re-read `readme.md`, `specs/mission.md`, and `specs/tech-stack.md`.
- 1.2 Write the agent journeys: arrive, learn about ailments and therapies,
  book an appointment, see confirmation.
- 1.3 Write the staff journeys: open the dashboard, review agents and
  appointments, support an agent.
- 1.4 Note which roadmap phase delivers each journey step.

## 2. Record unresolved decisions
- 2.1 Collect the open decisions from `specs/tech-stack.md`: SQLite
  library/ORM and migrations, authentication and authorization, hosting and
  monitoring, UI library and styling, browser and accessibility targets.
- 2.2 For each, record the owner, the roadmap phase that needs it, and a
  decide-by point.
- 2.3 Record any new decisions found while writing the journeys.

## 3. Draw the first-release boundaries
- 3.1 List what is in the first release, mapped to roadmap phases 2-14.
- 3.2 List what is explicitly out of scope or deferred.
- 3.3 Confirm the boundaries match the mission's scope and principles.

## 4. Add a minimal AgentClinic home page
- 4.1 Create only the smallest strict-TypeScript Next.js App Router setup
  needed to serve one page (full foundation remains Phase 2).
- 4.2 Build a single server-rendered home page at `/` with the AgentClinic
  name, a short playful welcome from `specs/mission.md`, and no links to
  features that do not exist yet.
- 4.3 Keep it accessible: one `h1`, semantic landmarks, readable contrast,
  and a responsive layout in modern browsers.
- 4.4 Add a basic type-check and a way to start it locally, and record the
  commands in the README.
- 4.5 Add no database, authentication, staff pages, or other routes.

## 5. Review and finalize
- 5.1 Cross-check the documents and home page against `mission.md` and
  `tech-stack.md` for contradictions.
- 5.2 Walk through `validation.md` and fix any gaps.
- 5.3 Update `specs/roadmap.md` to mark Phase 1 complete once merged.
