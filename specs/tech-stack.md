# AgentClinic Technology Stack

## Goals

- Use a popular, maintainable TypeScript-based stack.
- Support an attractive, responsive experience for agents and clinic staff.
- Keep the first release simple while preserving room for reliable growth.

## Recommended Baseline

| Area | Recommendation | Status / Notes |
|---|---|---|
| Language | TypeScript with strict type checking on both server and client | Required direction from engineering; application logic and data access run server-side |
| Web framework | Next.js App Router | Recommended full-stack React framework; use its server rendering, Server Components, Route Handlers, and Server Actions where appropriate |
| Database | SQLite | Embedded, file-based database accessed only from server-side code; keeps setup simple for course and demo use |
| UI | Semantic HTML, responsive CSS, and reusable React components | Select a component or styling library only when a concrete need is established |
| Browser support | Current stable versions of major modern browsers | Define and test the exact support window before release |
| Testing | Unit/component tests for logic and UI; browser-level tests for critical journeys | Choose tools when project setup begins |
| Formatting and linting | Automated formatting and linting in local development and CI | Select tools alongside the initial project scaffold |

## Server-Side Application Boundary

Implement server-side application and domain logic in TypeScript within the
Next.js application. Keep database access, secrets, authorization checks, and
trusted business rules on the server. Use client components only for browser
interactions that require client-side state or APIs; do not treat client-side
checks as an authorization boundary.

## Decisions Still Open

These choices are intentionally not settled by the current stakeholder input:

- SQLite access library/ORM, schema migration approach, and persistence model.
- Authentication and authorization for agents and staff.
- Hosting, deployment, monitoring, and operational targets.
- UI component library, styling approach, and design tokens.
- Exact browser support policy and accessibility conformance target.

Resolve each decision when it becomes necessary for an implementation phase.
Prefer the simplest option that meets the product's security, reliability, and
user needs; document the rationale before it constrains later work.

## Engineering Constraints

- Keep shared domain and UI behavior type-safe; avoid unvalidated external data.
- Do not expose staff-only information or actions to agent-facing users.
- Validate forms and show actionable errors and success confirmations.
- Build responsive layouts and verify keyboard access for core journeys.
- Add automated checks for each critical user journey as it is introduced.
- Avoid adding dependencies or architectural layers without a demonstrated need.
