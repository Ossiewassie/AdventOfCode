const fs = require('fs');
const readline = require('readline');
const puzzleInput = 'input/day1.txt';

//creates interface to read puzzleinput line for line
let myInterface = readline.createInterface({
    input: fs.createReadStream(puzzleInput)
});

let sum = 0;

myInterface.on('line', function (line) {
    chars = line.split('');
    number1 = "";
    number2 = "";

    (chars).forEach(char => {
        if(char >= 0 && char <= 9 && number1 == ""){
            number1 = char;
        }
        else if(char >= 0 && char <= 9) {
            number2 = char;
        }
    });

    if(number2 == "") {
        number2 = number1;
    }

    number = parseInt(number1 + "" + number2);
    console.log(number);
    sum += number;
});

myInterface.on('close', function() {
    console.log(sum);
});