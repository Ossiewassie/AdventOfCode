const fs = require('fs');
const readline = require('readline');
const puzzleInput = 'input/day4.txt';

//creates interface to read puzzleinput line for line
let myInterface = readline.createInterface({
    input: fs.createReadStream(puzzleInput)
});


let count = 0;
//tells the code what to do with each line  
myInterface.on('line', function (line) {
    const coords = line.split(',');

    // Converting each range into two nrs by splitting at the '-' and parsing them as integers 
    // then putting that in a new range[] array.
    const range1 = [parseInt(coords[0].split('-')[0]), parseInt(coords[0].split('-')[1])];
    const range2 = [parseInt(coords[1].split('-')[0]), parseInt(coords[1].split('-')[1])];

    if(range1[0] >= range2[0] && range1[1] <= range2[1]){
        // console.log(`1: checking if ${range1[0]} is equal or lower to ${range2[0]} and ${range1[1]} is higher or equal to ${range2[1]}`);
        count++;
    }
    else if (range2[0] >= range1[0] && range2[1] <= range1[1]){
        // console.log(`2: checking if ${range2[0]} is equal or lower to ${range1[0]} and ${range2[1]} is higher or equal to ${range1[1]}`);
        count++;
    }
    else{
        // i slep zZzZZZZzzzZzz
    }
});

// I ran into an issue with this one because I'd used 2 if-statements rather than an 
// if and if-else. This caused duplicate ranges to be counted twice
// very dumb of me :)

//fires upon closing the interface
myInterface.on('close', function() {
    console.log(count);
});