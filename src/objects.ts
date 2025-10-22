// poet with two properties.

const poet = {
    born: 1935,
    name: "John",
}

console.log(poet['born']) // 1935
console.log(poet.name) // James

// console.log(poet.age) // Error: Property 'age' does not exist on type {born : number, name : string }


// Declaring Object Types
let poetLater: {
    born: number,
    name: string,
    age: () => number
}

function calculateAge(yearOfBirh: number): number {
    return (new Date().getFullYear() - yearOfBirh)
}

poetLater = {
    born: 1930,
    name: "James",
    age: function () {
        return calculateAge(this.born)
    }
}

console.log(poetLater.age())

// Using Type Aliases

type Human = {
    name: string,
    gender: "male" | "female" | "non-binary",
    dateOfBirth: Date,
    weight: number,
    height: number,
    age: () => number,
}

function actualAge(yearOfBirth: Date): number {
    let today = new Date()
    let age = today.getFullYear() - yearOfBirth.getFullYear()

    const hasBirthday = today.getMonth() > yearOfBirth.getMonth() ||
        (today.getMonth() === yearOfBirth.getMonth() && today.getDate() >= yearOfBirth.getDate())

    if (!hasBirthday) age = age - 1;
    return age
}

let james: Human = {
    name: "James",
    gender: "male",
    dateOfBirth: new Date("2000-10-22"),
    weight: 670,
    height: 160,
    age: function () {
        return actualAge(this.dateOfBirth)
    }
}

console.log(james.age())

// Nested objects.
type Poem = {
    author: Human,
    title: string,
    genres: string[]
}

let poem1: Poem = {
    author: {
        name: "John",
        gender: "non-binary",
        dateOfBirth: new Date("2000-01-01"),
        weight: 500,
        height: 160,
        age: function () {
            return actualAge(this.dateOfBirth)
        }
    },
    title: "Lost paradise",
    genres: ['love', 'philosophy', 'life']
}

let poem2: Poem = {
    author: james,
    title: "Beyond the wall",
    genres: ['love', 'life']
}

// console.log(`${poem1.author.name} is the writer of ${poem1.title}, a poem focusing on ${poem1.genres.join(', ')}. They are ${poem1.author.age()} Years old.`)
// console.log(`${poem2.author.name} is the writer of ${poem2.title}, a poem focusing on ${poem2.genres.join(', ')}. They are ${poem2.author.age()} Years old.`)

// Repetion detected. Function to display information about a poem and author.
function displayPoemInfo(poem: Poem): string {
    const gender = poem.author.gender
    let refPhrase: string;

    if (gender == "male") {
        refPhrase = "He is"
    } else if (gender === "female") {
        refPhrase = "She is"
    } else {
        refPhrase = "They are"
    }

    const genres = poem.genres
    const genrePhrase = genres.length > 1
        ? genres.slice(0, -1).join(', ') + ', and ' + genres.slice(-1)
        : genres[0];

    return `${poem.author.name} is the writer of ${poem.title}, a poem focusing on ${genrePhrase}. ${refPhrase} ${poem.author.age()} Years old.`
}

console.log(displayPoemInfo(poem1))
console.log(displayPoemInfo(poem2))

// OPTIONAL PROPERTIES.

type Book = {
    title: string,
    author: string,
    pages: number,
    chapters?: string[] // chapters are optional.
}

const theLuxe: Book = {
    title: "The Luxe",
    author: "Anna Godbersen",
    pages: 433,
    // chapters : ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5', 'Chapter 6']
}

console.log(theLuxe.chapters ?? "There are no chapters")

enum Love {
    "platonic",
    "romantic"
}

type Relationship = {
    love: Love
}

let romantic: Relationship = {
    love: Love['platonic']
}

console.log(Love[romantic.love])

// INFERED OBJECT TYPES UNIONS.
const poem = Math.random() > 0.5
    ? { name: "James", pages: 50 }
    : { name: "Akinyi", rhyme: true }

// const poem: {
//     name: string;
//     pages: number;
//     rhyme?: never;
// } | {
//     name: string;
//     rhyme: boolean;
//     pages?: never;
// }
poem.name // string
poem.pages //number | undefined.
poem.rhyme // boolean | undefined.


// EXPLICIT OBJECT TYPES UNIONS.
type PoemWithPages = {
    name: string,
    pages: number,
}

type PoemWithRhyme = {
    name: string,
    rhyme: boolean
}

type Poetry = PoemWithPages | PoemWithRhyme

const poem3: Poetry = Math.random() > 0.5
    ? { name: "James", pages: 50 }
    : { name: "Maxwel", rhyme: true }

// poem3.pages Error:  Property 'pages' does not exist on type 'Poetry'.
//   Property 'pages' does not exist on type 'PoemWithRhymes'.

const describePoem = (poem: Poetry): string => {

    if ("pages" in poem)
        return `The poem has ${poem.pages} pages` // narrow down to PoemmWithPages
    else
        return `The poem rhymes` // narrow down to PoemWithRhyme

}

console.log(describePoem(poem3))