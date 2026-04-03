# Review Code

Review the current change with a code-review mindset for this Excalidraw monorepo.

Focus on:

- bugs and behavioral regressions;
- architecture violations in `packages/excalidraw/**`;
- security issues in embeds, sharing, persistence, Firebase, and browser-boundary code;
- performance risks in hot paths, persistence cadence, collaboration sync, and lazy-loading;
- missing or insufficient tests.

Instructions:

1. Read the relevant changed files first and use repository context from `AGENTS.md`, `docs/memory/*.md`, and `.cursor/rules/*.mdc`.
2. Prioritize findings over summary.
3. Report findings ordered by severity with file references and concrete reasoning.
4. Call out open questions or assumptions if evidence is incomplete.
5. If there are no findings, say that explicitly and mention residual risks or testing gaps.
6. Do not make code changes unless the user explicitly asks for fixes after the review.

How to verify:

1. Confirm the review references the actual changed files and affected workflows.
2. Confirm findings cover correctness, security, performance, and tests where relevant.
3. Confirm the response is review-first, not implementation-first.
