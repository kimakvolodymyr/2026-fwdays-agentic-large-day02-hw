## A/B Test: architecture.mdc

- **Prompt**: "create a new component for dislplaying element information"
- **Result A (rule ON)**: uses Excalidraw-specific architecture guidance and a dedicated `ElementCoordinates` component to compose X/Y stats in `packages/excalidraw/components/Stats/`
- **Result B (rule OFF)**: loses the Excalidraw-specific architecture source once the duplicate `AGENTS.md` section is temporarily removed, leaving only generic repository guidance
- **Conclusion**: Rule effectively provides Excalidraw-specific architecture guidance for `packages/excalidraw/**`, especially around `actionManager` state handling, Canvas-based rendering, and dependency restrictions.
