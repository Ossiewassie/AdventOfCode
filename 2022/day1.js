const fs = require('fs');
const readline = require('readline');
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
    var max = Math.max(...elves);
    var index = elves.indexOf(max);
                                //the +1 is because arrays start at 0
    console.log("elf nr " + (index + 1) + " has the most calories on him, " + max + " of them to be exact!");
});