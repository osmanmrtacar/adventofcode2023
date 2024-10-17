const fs = require('fs');
const readline = require('readline');

module.exports =  function readLines(filePath) {
    const fileStream = fs.createReadStream(filePath);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity, // Recognize both '\r\n' and '\n' as line endings
    });


    return rl
}