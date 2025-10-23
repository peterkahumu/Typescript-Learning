function singSong(song: string): void {
    console.log(`Singing : ${song}`)
}

singSong("Breaker of Chains")
// singSong("Hello there", "Love is in the  air") Error: Expected 1 arguments, but got 2.

type Song = {
    title: string,
    singer?: string[]
}

const seperator = () => console.log('************************************');

function announceSong(song: Song): void {
    seperator()
    console.log(`Song : ${song.title}`)
    if (song.singer)
        song.singer.length == 1
            ? console.log(`Singer: ${song.singer[0]}`)
            : console.log(`Singer: ${song.singer.slice(0, -1).join(', ') + ' and ' + song.singer.at(-1)}`)
}

const song1: Song = {
    title: "Sweet but a Psycho"
}

const song2: Song = {
    title: "Hurts too good",
    singer: ["Astrid",]
}

const song3: Song = {
    title: "Without Me feat Halsey, Juiceworld",
    singer: ['Halsey', 'Juice World']
}

const song4: Song = {
    title: "Test country",
    singer: ['Kenny Lodgers', 'Allan Jackson', 'Dolly Parton']
}

const songs = [song1, song2, song3, song4]

songs.forEach(song => announceSong(song))

// for (const song of songs) {
//     announceSong(song)
// }

// for (let i = 0; i < songs.length; i ++){
//     announceSong(songs[i]!)
// }

/*
* REST PARAMETERS.
**/

seperator()
function singAllSongs(singer: string, ...songs: string[]): void {
    for (const song of songs) {
        console.log(`${song} by ${singer}`)
    }
}

singAllSongs("Halsey", 'Without me', 'Eastside', 'Clarity', 'Ghost') // ok

const halseySongs = ['Withour me', 'EastSide', 'Clarity', 'Ghost', 'colors']

seperator()
function getSongAt(songs: string[], index: number): string | undefined {
    return index >= -songs.length && index < songs.length
        ? songs.at(index)
        : undefined;
}

console.log(getSongAt(halseySongs, 10) ?? "Index out of range.")
console.log(getSongAt(halseySongs, 0) ?? "Index out of range.")
console.log(getSongAt(halseySongs, 2) ?? "Index out of range.")
console.log(getSongAt(halseySongs, 3) ?? "Index out of range.")
console.log(getSongAt(halseySongs, -1) ?? "Index out of range.")
console.log(getSongAt(halseySongs, -4) ?? "Index out of range.")
console.log(getSongAt(halseySongs, -5) ?? "Index out of range.")


seperator()

function singSongsRecursive(songs: string[]) {
    if (songs.length === 0) return;
    console.log(`Currently singing: ${songs[0]}`)
    singSongsRecursive(songs.slice(1))
}

singSongsRecursive(halseySongs)

const countSongs = (songs: string[], count = 0): number => songs.length ? countSongs(songs.slice(1), count + 1) : count;

console.log(`Just sung a total of ${countSongs(halseySongs)} songs.`)