# TypeScript Learning Project

## Overview
This project contains TypeScript code examples demonstrating fundamental concepts including type annotations, type inference, and basic function definitions. It's designed for learning TypeScript basics.

## Project Structure
```
.
├── tsconfig.json          # TypeScript configuration
├── src/
│   └── index.ts          # Main TypeScript file with examples
└── README.md             # This file
```

## Code Examples

### 1. Type Inference with Ternary Operator
```typescript
let bestSong = Math.random() > 5 ? "Chain of fools" : "Magic happened."
```
- **Concept**: TypeScript automatically infers the type as `string`
- **Note**: The condition `Math.random() > 5` is always false since `Math.random()` returns values between 0 and 1
- **Inferred Type**: `string`

### 2. String Type and Properties
```typescript
let firstName = "Marianna"
console.log(firstName.length)
```
- **Concept**: String variables have built-in properties like `.length`
- **Type**: Explicitly inferred as `string`
- **Output**: `8` (length of "Marianna")

### 3. Boolean Type with Conditional Logic
```typescript
let long = firstName.length > 8? true : false
```
- **Concept**: Boolean type inference from conditional expression
- **Type**: `boolean`
- **Simplification Note**: This can be simplified to just `firstName.length > 8` since it already returns a boolean

### 4. Function with Type Annotations
```typescript
function determineIfLong(name : string) : boolean {
    return name.length > 8
}
```
- **Concept**: Function parameter and return type annotations
- **Parameter**: `name` is typed as `string`
- **Return Type**: Explicitly declared as `boolean`
- **Logic**: Returns `true` if the name has more than 8 characters

**Example Outputs**:
- `determineIfLong("Marianna")` → `false` (8 characters, not > 8)
- `determineIfLong("James Mwai")` → `true` (10 characters including space)
- `determineIfLong("Anthony")` → `false` (7 characters)

### 5. Number Type
```typescript
let age = 30
```
- **Concept**: TypeScript infers `number` type from numeric literal
- **Type**: `number`

### 6. Simple Interest Calculator
```typescript
function calculateSimpleInterest(principal : number, rate : number, years : number) : number {
    return principal * rate * years
}
```
- **Concept**: Multiple parameters with type annotations
- **Formula**: `Simple Interest = Principal × Rate × Time`
- **Parameters**:
  - `principal`: Initial amount (number)
  - `rate`: Interest rate (number)
  - `years`: Time period (number)
- **Return Type**: `number`
- **Example**: `calculateSimpleInterest(1000, 0.1, 1)` → `100`

### 7. Compound Interest Calculator
```typescript
function compoundInterest(principal : number, rate : number, years :number) : number {
    rate = rate < 1 ? rate : rate / 100
    return principal * (1 + rate) ** years
}
```
- **Concept**: More complex function with conditional logic
- **Formula**: `A = P(1 + r)^t` where A is the final amount
- **Smart Rate Handling**: 
  - If `rate < 1`, treats it as a decimal (e.g., 0.1 = 10%)
  - If `rate >= 1`, treats it as a percentage and converts (e.g., 10 → 0.1)
- **Exponentiation**: Uses the `**` operator for power calculation
- **Example**: `compoundInterest(1000, 0.1, 1)` → `1100`

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

### Compile TypeScript
```bash
tsc
```

### Run the JavaScript Output
```bash
node dist/index.js
```
*Note: Check your `tsconfig.json` for the output directory configuration*

### Or use ts-node for direct execution
```bash
npx ts-node src/index.ts
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

## Additional Resources

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play) - Try TypeScript in your browser

## Notes

- The code demonstrates progressive learning from basic type inference to more complex function implementations
- All examples include console.log statements to observe outputs
- Type safety helps catch errors before runtime

---

**Last Updated**: October 19, 2025
