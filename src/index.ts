// Type to string after a ternally operator.
let bestSong = Math.random() > 5 ? "Chain of fools" : "Magic happened."

console.log(bestSong)

// Type String
let firstName = "Marianna"
console.log(firstName.length)

// Type boolean
let long = firstName.length > 8? true : false

console.log(long)

// Type boolean -> Function
function determineIfLong(name : string) : boolean {
    return name.length > 8
}

console.log(determineIfLong(firstName))
console.log(determineIfLong("James Mwai"))
console.log(determineIfLong("Anthony"))

// Type number
let age = 30
console.log(age)

function calculateSimpleInterest(principal : number, rate : number, years : number) : number {
    return principal * rate * years
}

console.log(calculateSimpleInterest(1000, 0.1, 1))

function compoundInterest(principal : number, rate : number, years :number) : number {
    // if rate < 1, assume a fraction was provided.
    // if rate > 1, assume the user provided a percentage.

    rate = rate < 1 ? rate : rate / 100
    return principal * (1 + rate) ** years
}
console.log(compoundInterest(1000, 0.1, 1))