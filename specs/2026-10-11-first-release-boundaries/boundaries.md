# First-Release Boundaries

Output of plan groups 1-3 for roadmap Phase 1. Sources: `readme.md`,
`specs/mission.md`, `specs/tech-stack.md`.

## 1. Primary journeys

### Agent journeys
| Step | Delivered in phase |
|---|---|
| Arrive at a welcoming home page | 4 (minimal version in Phase 1) |
| Browse the agent directory and open an agent profile | 6, 7 |
| Learn about ailments | 8 |
| See therapies relevant to an ailment | 9 |
| View appointment availability and booking requirements | 10 |
| Book an appointment and see a confirmation or recoverable error | 11 |

### Staff journeys
| Step | Delivered in phase |
|---|---|
| Open a distinct staff dashboard | 5 |
| Review agent and appointment information | 12 |
| Support an agent using that information | 12 |
| Work with real data under enforced permissions | 13 |

## 2. Open decisions register

| Decision | Owner | Needed by phase | Decide by |
|---|---|---|---|
| SQLite access library/ORM, migrations, persistence model | Mary (engineering) | 13 | Start of Phase 13 |
| Authentication and authorization for agents and staff | Mary (engineering) with Susan (product) | 5 (separation), 13 (enforcement) | Before Phase 5 starts |
| Hosting, deployment, monitoring, operational targets | Mary (engineering) | 14 | Start of Phase 14 |
| UI component library, styling approach, design tokens | Steve (marketing) with Mary | 3 | Start of Phase 3 |
| Browser support policy and accessibility target | Steve (marketing) with Mary | 3 (target), 14 (verification) | Start of Phase 3 |
| Who is a "staff" user and how agents are identified (new) | Susan (product) | 5 | Before Phase 5 starts |
| Appointment rules: durations, cancellation, double booking (new) | Susan (product) | 10 | Start of Phase 10 |

## 3. First-release boundaries

### In scope
- Agent-facing home, directory, profiles, ailments, therapies, availability,
  and booking (phases 4, 6-11).
- Staff dashboard and support visibility (phases 5, 12).
- Strict-TypeScript Next.js foundation and quality checks (phase 2).
- Visual shell with a warm, playful direction (phase 3).
- SQLite persistence with server-side permissions (phase 13).
- Release hardening: journeys, accessibility, browsers, errors (phase 14).

### Out of scope or deferred
- Community features beyond the core experience (per the mission).
- Anything not needed to complete the journeys above, including payments,
  notifications, and analytics.
- Hosting and monitoring choices until Phase 14.

### Consistency with mission and tech stack
- Warm, playful tone and clinic services as the core of the initial product
  match `mission.md`.
- All logic and data access stay server-side in TypeScript; staff-only data
  and actions are never exposed to agent-facing users, per `tech-stack.md`.
