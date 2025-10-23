# TypeScript Learning Project

## Overview
This project contains TypeScript code examples demonstrating fundamental concepts including type annotations, type inference, and basic function definitions. It's designed for learning TypeScript basics.


## Files / page summaries

This project is organized as small example "pages" under `src/`. Each file focuses on a single concept so you can open, run, and learn from one focused example at a time. Below are concise summaries for every current file in `src/`.

- `src/index.ts` — Core examples and small utilities
  - Focus: quick, runnable examples demonstrating type inference, primitives (string/number/boolean), and small helper functions.
  - Notable items: `bestSong` (ternary inference), `determineIfLong`, `calculateSimpleInterest`, `compoundInterest`.

- `src/type_annotations.ts` — Explicit typing vs `any`
  - Focus: shows how an untyped variable can "evolve" at runtime and how explicit annotations prevent misuse.
  - Notable items: `rocket` (type-evolving example), `let name: string` example, and commented compiler-error examples.

- `src/literal_types.ts` — Literal and narrowed types
  - Focus: literal types and narrowing (e.g., `let yourName: "Ada"` or unions like `number | "Long" | "Short"`).
  - Notable items: examples that show which assignments are allowed and which cause compile-time errors.

- `src/objects.ts` — Object types, aliases, composition
  - Focus: declaring object types inline and with `type` aliases, optional properties, enums, nested objects, and functions that accept typed objects.
  - Notable items: `Human`, `Poem`, `Book` types, `displayPoemInfo`, optional properties (`chapters?`), and object unions.

- `src/unions.ts` — Unions and narrowing techniques
  - Focus: union types (e.g., `string | number | undefined`) and runtime narrowing patterns (assignment narrowing, `typeof`, `in`).
  - Notable items: examples showing common pitfalls (e.g., calling `.length` on a `string | number`), and recommended checks.

- `src/functions.ts` — Functions, rest params, recursion and small helpers
  - Focus: function signatures, optional parameters, rest parameters, recursion, and small type-based helpers.
  - Notable items: `singSong`, `announceSong` (with a `Song` type), `singAllSongs` (rest parameters), `getSongAt` (safe indexing), `singSongsRecursive`, and `countSongs` (tail-recursive style).

Design note: Keep each file small and focused. As you add more pages, consider grouping related topics into subfolders (for example `src/strings/`, `src/objects/`, `src/functions/`) and give each file a one-line header comment describing the intent.

## Examples (short)

Rather than embedding full example code in this README, each example file contains concise, runnable code and inline comments. Open the file links below to view and run the examples.

- [src/index.ts](src/index.ts) — Collection of beginner-friendly examples: type inference, primitives, a small `determineIfLong` helper, and simple/compound interest functions.
- [src/type_annotations.ts](src/type_annotations.ts) — Demonstrates the difference between untyped variables (type `any`) and explicit annotations like `let name: string`.
- [src/literal_types.ts](src/literal_types.ts) — (If present) Examples showing literal and narrow types — open the file to explore.

Quick tip: run any single file directly with `ts-node` to experiment quickly. For example:

```bash
npx ts-node src/index.ts
```

## Key TypeScript Concepts Covered

### Type Annotations
- Explicitly declaring types for variables and function parameters
- Syntax: `variableName: type`
- Example: `function calculate(x: number): number`

### Type Inference
- TypeScript automatically determines types from assigned values
- No explicit annotation needed when type is obvious
- Example: `let name = "John"` (inferred as string)

### Primitive Types
- **string**: Text values
- **number**: Numeric values (integers and decimals)
- **boolean**: `true` or `false`

### Function Return Types
- Declaring what type a function returns
- Syntax: `function name(): returnType`
- Helps catch errors at compile time

## Running the Code

### Prerequisites
- Node.js installed
- TypeScript installed (`npm install -g typescript`)

If you don't want to install TypeScript globally you can use the local tooling via npm scripts or npx (examples shown below).

### Compile TypeScript (uses your project's `tsconfig.json`)
The project `tsconfig.json` is configured with `rootDir: ./src` and `outDir: ./dist`. Compile using:

```bash
tsc --project tsconfig.json
```

Then run the emitted JavaScript from the `dist` folder:

```bash
node dist/index.js
```

If you prefer not to compile first, run directly using `ts-node` (no global TypeScript required):

```bash
npx ts-node src/index.ts
```

Or add an npm script in `package.json` (recommended for convenience):

```json
"scripts": {
  "build": "tsc --project tsconfig.json",
  "start": "node dist/index.js",
  "dev": "npx ts-node src/index.ts"
}
```

## Learning Exercises

1. **Modify the `bestSong` condition**: Change `Math.random() > 5` to `Math.random() > 0.5` to make both outcomes possible

2. **Enhance `determineIfLong`**: Modify to accept a custom length threshold
   ```typescript
   function determineIfLong(name: string, threshold: number = 8): boolean
   ```

3. **Add Error Handling**: Update `compoundInterest` to validate that principal and years are positive numbers

4. **Create New Functions**: 
   - Write a function to calculate the difference between simple and compound interest
   - Create a function that returns a formatted string with the interest calculations

5. **Explore Union Types**: Create a function that accepts either a string or number parameter

6. **Inspect `src/type_annotations.ts`**: Read and run the file to see how a variable with no annotation can "evolve" its type at runtime. Try adding explicit type annotations to prevent accidental misuse of properties (for example, calling string methods on a number).

## Additional Resources

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play) - Try TypeScript in your browser

## Notes

- The code demonstrates progressive learning from basic type inference to more complex function implementations
- All examples include console.log statements to observe outputs
- Type safety helps catch errors before runtime

---

**Last Updated**: October 24, 2025
