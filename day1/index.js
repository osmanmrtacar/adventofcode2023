const readFile = require("../lib/read-file")


async function puzzle() {
    const rl = readFile("./input.txt")
    

    let total = 0
    for await (const line of rl) {
        let currentNumber = ''

        for (let index = 0; index < line.length; index++) {
            let letter = line[index]

            if(Number(letter)){
                currentNumber+= letter
            }
            




        }

    if(Number(currentNumber)){
        if(currentNumber.length > 1){
            currentNumber = currentNumber[0] + currentNumber[currentNumber.length -1]
        }else{
            currentNumber = currentNumber + currentNumber
        }

        total+= Number(currentNumber)
    }

    }

    return total;
}

puzzle()
    .then(answer => {
        console.log(answer);
    })
