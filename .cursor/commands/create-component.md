# Create Component

Create a new component that fits the established Excalidraw monorepo patterns.

Instructions:

1. Determine whether the component belongs in `packages/excalidraw/` or `excalidraw-app/` based on whether it is reusable editor functionality or app-shell-specific UI.
2. Follow repository rules from `AGENTS.md`, `.cursor/rules/*.mdc`, and relevant memory-bank docs before editing.
3. Use functional React components only.
4. Prefer named exports.
5. Match the nearest existing file naming and styling pattern in the target area.
6. Keep the component small and composable; reuse existing shared utilities and UI primitives before adding new abstractions.
7. If behavior changes are introduced in `packages/**`, add or update focused tests following the nearest existing pattern.
8. Avoid new dependencies unless explicitly approved.
9. If the component affects hot paths, sharing, embeds, or persistence, apply the relevant performance and security constraints.
10. After implementation, summarize what was added, where it lives, and how it was verified.

How to verify:

1. Confirm the component was added in the correct package boundary.
2. Confirm naming, exports, typing, and styling match nearby components.
3. Run the smallest relevant verification, and use `yarn test:typecheck` for TypeScript changes plus focused tests for behavioral changes.
