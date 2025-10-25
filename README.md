***
# TypeScript Learning — concise

Short, focused TypeScript example files to learn one concept per file.

Project layout

- `src/` — example files (each file is a single focused lesson)
- `tsconfig.json` — compiler options (rootDir: ./src, outDir: ./dist)

Files (one-line summaries)

- `src/index.ts` — basic primitives + small numeric helpers
- `src/type_annotations.ts` — `any` vs explicit annotations
- `src/literal_types.ts` — literal and narrowed types
- `src/objects.ts` — object types, aliases, nested objects
- `src/unions.ts` — union types and narrowing patterns
- `src/functions.ts` — function signatures, rest params, recursion
- `src/arrays.js` - arrays, array members,

Quick run

1) Compile: `tsc --project tsconfig.json` → then `node dist/index.js`.
2) Or run a single file: `npx ts-node src/<file>.ts` (e.g. `npx ts-node src/index.ts`).

How to add a page

- Create `src/<topic>.ts`
- Keep it small (one concept), add a one-line header comment, and update this README's file list.

License & notes

- Learning repo — no production guarantees. Tinker and experiment.

---

**Last Updated**: October 25, 2025
