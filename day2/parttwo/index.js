const readLines = require("../../lib/read-file")



async function puzzle() {
    const rl = readLines("./input.txt")
    let total = 0
    for await (const line of rl) {
        const spaceIndex = line.indexOf(" ")
        const colonIndex = line.indexOf(":")

        const gameId = line.substring(spaceIndex, colonIndex)
        const game = line.substring(colonIndex + 2)
        const sets = game.split("; ")

        let valid = true;

        const maxOfColors = {}

        for (const set of sets) {
            const cubes = set.split(", ")

            for (const cube of cubes) {
                const [digit, cubeColor] = cube.split(" ")

                maxOfColors[cubeColor] = Math.max(Number(digit), maxOfColors[cubeColor] ?? 0)



            }


        }

        const currentPower = Object.values(maxOfColors).reduce((acc, curr)=>{
            return acc * curr
        }, 1)

        total+= currentPower





    }

    return total
}
//12 red cubes, 13 green cubes, and 14 blue cubes
puzzle().then(res => console.log(res))