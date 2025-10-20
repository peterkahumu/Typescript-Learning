// Union : Expanding a variables allowed type to two or more types
// Narrowing : Reducing a value's allowed type to not be one or more possible types.

// EXAMPLE 1.

let mathematician = Math.random() > 0.5 ? undefined : "Great" // let mathematician : string | undefined

console.log(mathematician)

let thinker: string | null = null; // intialize to null

if (Math.random() > 0.5)
    thinker = "James Bond" // re-assign variable to a string.

console.log(thinker)

// TypeScript will only allow you to access member properties that exist on all possible types in the union

let physicist = Math.random() > 0.5 ? "Pass" : 1

physicist.toString() // ok

// physicist.length
//Error : Property 'length' does not exist on type 'string | number'.
// Property 'length' does not exist on type 'number'


// NARROWING : JS infers from the code that value is of a specific type than what it was defined, declared or previously infered.
// 1. Assignment Narrowing
let admiral: number | string;

admiral = "Grace Hopper"

admiral.toUpperCase() // ok. Typescript => "It must be string"
// admiral.toFixed(2)
// Error : Property 'toFixed' does not exist on type 'string'. Did you mean 'fixed'?

let inventor: number | string = "Hedy Lammar"
inventor.toUpperCase() // ok
// inventor.toFixed()
// Error: Property 'toFixed' does not exist on type 'string'

// 2. Conditional checks.
let scientist: number | string = Math.random() > 0.5 ? "Love in the air" : 10

if (scientist == "Love in the air")
    // Must be string
    scientist.toUpperCase()

// scientist.toFixed() // Error 

// 3. Typeof checks.

let researcher = Math.random() > 0.5 ? "Rosalind Franklin" : null

if (typeof researcher == 'string')
    console.log(researcher)
else
    console.log("Mininmum requirement for research not satisfied.")

typeof researcher == 'string'
    ? console.log("Reasearch Valid. Carried out by ", researcher)
    : console.log("Research invalid.") // making use of ternary operators.

    