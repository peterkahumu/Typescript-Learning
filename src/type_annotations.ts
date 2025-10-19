let rocket; // type any. Will go through 'type evolving'

rocket = "Animal are cute" // string
console.log(rocket.toUpperCase())

rocket = 18.48923 // number
console.log(rocket.toFixed(1))

//console.log(rocket.toUpperCase())

// Property 'toUpperCase' does not exist on type 'number'.


// TYPE ANNOTATION
let name: string;
name = "James Allen"

console.log(name)
//name = 12.4
// Type 'number' is not assignable to type 'string'.
