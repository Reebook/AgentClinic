# Requirements: First-Release Boundaries

## Scope
Roadmap Phase 1: confirm the primary agent and staff journeys and record
unresolved backend, data, identity, and hosting decisions.

In scope:
- Agent and staff journeys, written as short step lists.
- An open-decisions register with owners and the phase that needs each.
- A first-release in/out boundary list.
- A minimal AgentClinic home page: one server-rendered route (`/`) with the
  name and a short welcome, on the smallest Next.js setup that serves it.

Out of scope:
- Anything beyond the home page: other routes, navigation, database,
  authentication, staff pages, and the full foundation and quality tooling
  (Phase 2 onward).
- Resolving every open decision now; some may be assigned to later phases.

## Decisions
- Deliverables are the boundary documents in this directory plus the minimal
  home page. The home page is a deliberate, small exception to keeping this
  phase documentation-first; it gives the boundaries something visible.
- The home page uses placeholder-free copy drawn from the mission, with no
  links to unbuilt features.
- Stakeholder input comes from `readme.md`: Mary (engineering), Susan
  (product), Steve (marketing).
- The stack is fixed: strict TypeScript, Next.js App Router, server-side
  logic, SQLite.

## Context
- Mission: a playful agent wellness community; clinic services are secondary.
- Audiences: agents, clinic staff, course students, and conference demo
  presenters and attendees.
- Open decisions inherited from `tech-stack.md`: SQLite library/ORM and
  migrations, authentication and authorization, hosting and monitoring, UI
  library and styling, browser and accessibility targets.
- Staff-only data and actions must never be exposed to agent-facing users.
- Branch: `2026-10-11-first-release-boundaries`.
