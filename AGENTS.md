# Repository Instructions

## Project Summary

Excalidraw is a Yarn workspaces monorepo with two first-class deliverables:

- the hosted web app in `excalidraw-app/`;
- the embeddable React editor library in `packages/excalidraw/`.

Supporting packages in `packages/common`, `packages/element`, `packages/math`, and `packages/utils` hold shared primitives, geometry, math, and utilities. Integration examples live in `examples/*`.

Primary product capabilities visible in the codebase:

- canvas-based diagram editing;
- import/export of scenes and libraries;
- live collaboration and sharing;
- local/browser persistence and recovery;
- PWA/offline-aware app behavior;
- embeddable editor API for host applications.

## Memory Bank

The repository has a memory bank in `docs/memory/`. Treat it as persistent project context and keep it updated after each project change that affects behavior, architecture, workflows, scope, or current focus.

Memory bank files:

- `docs/memory/projectbrief.md` - what the project is, its primary goals, core capabilities, and repository scope.
- `docs/memory/productContext.md` - user-facing purpose, UX goals, main scenarios, and product constraints.
- `docs/memory/activeContext.md` - current focus areas, app-level attention, and short-term working assumptions.
- `docs/memory/progress.md` - what is clearly implemented, quality/maturity signals, and remaining uncertainty.
- `docs/memory/techContext.md` - stack, tools, commands, test environment, and build/runtime facts.
- `docs/memory/systemPatterns.md` - architecture boundaries, composition patterns, state/persistence/collaboration patterns, and risk areas.
- `docs/memory/decisionLog.md` - durable architectural decisions, rationale, and notable implicit behavior worth recording.

Memory bank maintenance rules:

- Update the relevant `docs/memory/*.md` files as part of the same change when code materially changes project behavior or understanding.
- Update `activeContext.md` and `progress.md` after each meaningful project change.
- Update `decisionLog.md` when a change introduces or reverses a durable architectural or workflow decision.
- Update `systemPatterns.md` when boundaries, data flow, state management, rendering, persistence, or collaboration patterns change.
- Update `techContext.md` when dependencies, tooling, commands, build/test setup, or runtime requirements change.
- Update `projectbrief.md` or `productContext.md` when product scope, user scenarios, or repository responsibilities change.
- Keep entries grounded in repository evidence. Do not write speculative roadmap items as facts.

## Architecture Constraints

These constraints apply to changes under `packages/excalidraw/**`.

### State Management

- Use custom state via `actionManager`; do not introduce Redux, Zustand, or MobX.
- Perform state updates via `actionManager.dispatch()` only.
- Use `AppState` from `packages/excalidraw/types.ts` as the state type.

### Rendering

- Use Canvas 2D rendering; do not use React DOM for drawing.
- Keep the render pipeline aligned with `Scene -> renderScene() -> canvas context`.
- Do not use `react-konva`, `fabric.js`, or `pixi.js`.

### Dependencies

- Do not add new npm packages without explicit approval.
- Check `packages/utils/` before adding external helpers.

## Development Workflow

- Work in `packages/*` for editor/library features.
- Work in `excalidraw-app/` for hosted app-specific features.
- Prefer the smallest relevant test scope first, then broader validation when the change affects shared behavior.
- Use `yarn test:typecheck` to verify TypeScript changes.

## Development Commands

```bash
yarn test:typecheck
yarn test:app --watch=false
yarn test:all
yarn fix
```

## Architecture Notes

- Uses Yarn workspaces for monorepo management.
- Internal packages use path aliases across TypeScript, Vite, and Vitest.
- Build system uses esbuild for packages and Vite for the app.
- The hosted app layers product UX, collaboration, and persistence on top of the reusable editor package.
