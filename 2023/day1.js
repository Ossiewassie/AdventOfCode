const fs = require('fs');
const readline = require('readline');
const puzzleInput = 'input/day1.txt';

//creates interface to read puzzleinput line for line
let myInterface = readline.createInterface({
    input: fs.createReadStream(puzzleInput)
});

let sum = 0;
let writtenNrs = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

myInterface.on('line', function (line) {
    chars = line.split('');
    number1 = "";
    number2 = "";

    (chars).forEach(function(char, i) {
        if(char >= 0 && char <= 9 && number1 == ""){
            number1 = char;
            number1pos = i;
        }
        else if(char >= 0 && char <= 9) {
            number2 = char;
            number2pos = i;
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