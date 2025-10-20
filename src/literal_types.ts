// Defined using the const keyword.

const philosopher = "Marcus Aurelius"

// union of every possible matching literal value
let lifespan: number | "Long" | "Short";

lifespan = "Long"; // ok
lifespan = 30; // ok
// lifespan = "Undetermined" /// Error

let yourName : "Ada";
yourName = "Ada" // ok
// yourName = "James" // Error