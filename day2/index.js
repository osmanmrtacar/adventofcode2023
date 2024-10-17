const readLines = require("../lib/read-file")

const CubeConfig = {
    "red": 12,
    "green": 13,
    "blue": 14
}

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

        for (const set of sets) {
            const cubes = set.split(", ")

            for (const cube of cubes) {
                const [digit, cubeColor] = cube.split(" ")

                if(cubeColor in CubeConfig){
                    if(Number(digit) > CubeConfig[cubeColor]){
                        valid = false
                    }
                }

                
            }


        }

        if(valid){
            total+=Number(gameId)
        }





    }

    return total
}
//12 red cubes, 13 green cubes, and 14 blue cubes
puzzle().then(res=> console.log(res))