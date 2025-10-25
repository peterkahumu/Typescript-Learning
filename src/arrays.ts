const separator = () => console.log("****************************************")
const elements = [true, null, undefined, 42, 'James', { "name": "boy" }]
elements.push("Hello", { "name": "Mercy" })
console.log(elements)

separator()
let arrayOfNumbers: number[];
arrayOfNumbers = [10, 20, 30, 40, 50, 60, 70, 80]
console.log("Array of numbers: ", arrayOfNumbers)

separator()
// Arrays and functional types.
let createStrings: () => string[]; // function that returns an array of strings.

createStrings = () => {
    return ["Age", "Year", "Makeup", "Love", "Phone"]
}

// Array of functions that each return a string.
let stringCreators: (() => string)[];

function print(): string {
    return "James"
}

function printStringAge(): string {
    return "20"
}

function returnToday(): string {
    return new Date().toDateString()
}

stringCreators = [print, printStringAge, returnToday]

stringCreators.forEach(fn => console.log(fn()))

for (const fn of stringCreators) {
    console.log(fn())
}

separator()
// Union-Type arrays

let stringOrArrayOfNumbers: string | number[]; // a string or an array of numbers.
stringOrArrayOfNumbers = "John";
console.log(stringOrArrayOfNumbers)
stringOrArrayOfNumbers = [10, 20, 40];
console.log(stringOrArrayOfNumbers)

// Array of either numbers or strings
let arrayOfNumbersOrStrings: (string | number)[];
arrayOfNumbersOrStrings = arrayOfNumbers;
console.log(arrayOfNumbersOrStrings)
arrayOfNumbersOrStrings = createStrings(); // the function returns an array of strings
console.log(arrayOfNumbersOrStrings)
arrayOfNumbersOrStrings = ['10', 10, '20', 20]
console.log(arrayOfNumbersOrStrings)


separator()
// Multidimensional arrays
let multiDimensional: (number | string)[][];
multiDimensional = [
    ["Name", "Age", "IDNumber"],
    ["Caroline", 50, 32202],
    ["Joseph", 50, 12020],
]

function printMultiDArray(input: (number | string)[][]) {
    input.forEach(row => console.log(row.join(" | ")))
}
printMultiDArray(multiDimensional)


separator()
// Array Members

console.log(multiDimensional[0]?.[10] ?? "Index out of range") // If element does not exist, print index out of range.
console.log(multiDimensional[1] ?? "Index out of range") // print entire row if it exists.

separator()
const returnElementAtIndex = (array: (string | number)[], index: number) => array[index] ?? "Index out of range"

console.log(returnElementAtIndex(arrayOfNumbers, 3))
console.log(returnElementAtIndex(arrayOfNumbers, 20))

separator()
// SPREADS AND RESTS.
const soldiers = ['James', 'Ann', 'Alex']
const soldierAges = [20, 30, 40]

const conjoined = [soldiers, soldierAges]
console.log(conjoined)

const spreadConjoined = [...soldiers, ...soldierAges]
console.log(spreadConjoined)

function logWarriors(greeting: string, ...names: string[]): void {
    names.forEach(name => {
        console.log(`${greeting} ${name}`)
    });
}

logWarriors("Holla", ...soldiers);

// TUPLES.
let nameAndAge : [string, number];
nameAndAge = ["John", 40]
// nameAndAge = ["Alice", 30 , undefined] => Error