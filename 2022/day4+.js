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

    if(range1[0] <= range2[0] && range1[1] >= range2[0]){
        count++;
    }
    else if(range1[1] >= range2[0] && range1[0] <= range2[0]){
        count++;
    }
    else if(range2[1] >= range1[0] && range2[0] <= range1[0]){
        count++;
    }
    else if(range2[1] >= range1[0] && range2[0] <= range1[0]){
        count++;
    }
});

//fires upon closing the interface
myInterface.on('close', function() {
    console.log(count);
});