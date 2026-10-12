# AgentClinic High-Level Roadmap

Deliver a usable thin slice early. Each phase is intentionally small and should
end with a working, reviewable result before the next phase begins.

## Phases

1. **Agree on the first-release boundaries** — Confirm primary agent and staff
   journeys; record unresolved backend, data, identity, and hosting decisions.
2. **Create the application foundation** — Set up a strict-TypeScript
   Next.js App Router project with server-side application logic, basic
   quality checks, and a reproducible local start.
3. **Add the visual shell** — Build responsive navigation, page structure, and
   the initial warm, playful visual direction.
4. **Add the agent landing page** — Show a clear welcome and entry points to
   ailments, therapies, and appointments using temporary example content.
5. **Add the staff dashboard shell** — Give staff a distinct dashboard entry
   point and navigation without exposing staff controls to agents.
6. **Show an agent directory** — Display a small, accessible list of agents
   with useful summary information.
7. **Add an agent profile** — Let a user open one agent's details from the
   directory.
8. **Introduce ailment information** — Show a browsable set of ailments and
   an informative detail view.
9. **Connect ailments to therapies** — Present therapies relevant to an
   ailment, with clear descriptions and next steps.
10. **Add appointment availability** — Display available appointment options
    and basic booking requirements.
11. **Complete appointment booking** — Let an agent select an option, submit
    a booking, and see a clear confirmation or recoverable error.
12. **Add staff support visibility** — Let staff review the agent and
    appointment information needed to support the initial journeys.
13. **Connect persistent data and access controls** — Replace temporary
    content with SQLite and enforce agent/staff permissions in
    server-side TypeScript.
14. **Harden the release** — Verify critical journeys, accessibility,
    responsive layouts, supported browsers, and operational error handling.

## Phase Completion Rule

A phase is complete when its visible behavior works in the application, its
important states are handled, and relevant automated checks pass. Keep later
work out of a phase unless it is required to make that phase usable.
