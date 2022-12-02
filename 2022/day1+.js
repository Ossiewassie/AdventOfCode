const fs = require('fs');
const readline = require('readline');
const { getSystemErrorMap } = require('util');
const puzzleInput = 'input/day1.txt';

//creates interface to read puzzleinput line for line
let myInterface = readline.createInterface({
    input: fs.createReadStream(puzzleInput)
});

//initializes elves array
var elves = new Array();

//initializes nr of elf in array and amount elf carries
var amount = 0;

//tells the code what to do with each line  
myInterface.on('line', function (line) {
    if(line == "") {
        elves.push(amount);
        amount = 0;
    }
    else {
        amount += parseInt(line);
    }
}); 

//fires upon closing the interface
myInterface.on('close', function() {
    var topThree = 0;

    for (let i = 0; i < 3; i++) {
        var max = Math.max(...elves); 
        topThree += max;
        elves.splice(elves.indexOf(max), 1);
        console.log(i);
    }
    console.log("Total of top three elves is " + topThree);
});
