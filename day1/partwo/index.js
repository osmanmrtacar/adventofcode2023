const fs = require('fs');
const readline = require('readline');
const readFile = require('../../lib/read-file');

const wordToNumber = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
}

async function puzzle() {
    const rl = readFile("./input.txt")


    let total = 0
    for await (const line of rl) {


        let currentNumber = ''

        for (let index = 0; index < line.length; index++) {
            let letter = line[index]

            if (Number(letter)) {
                currentNumber += letter
            } else {
                let theWord = letter

                for (let j = index + 1; j < line.length; j++) {
                    const jChr = line[j];

                    theWord += jChr

                    if (wordToNumber[theWord]) {
                        currentNumber += wordToNumber[theWord]
                    }
                }
            }





        }

        if (Number(currentNumber)) {
            if (currentNumber.length > 1) {
                currentNumber = currentNumber[0] + currentNumber[currentNumber.length - 1]
            } else {
                currentNumber = currentNumber + currentNumber
            }

            total += Number(currentNumber)
        }

    }

    return total;
}



puzzle()
    .then(answer => {
        console.log(answer);
    })