const fs = require('fs');
const readline = require('readline');
const puzzleInput = 'input/day2.txt';

//creates interface to read puzzleinput line for line
let myInterface = readline.createInterface({
    input: fs.createReadStream(puzzleInput)
});

    let score = 0;

//tells the code what to do with each line  
myInterface.on('line', function (line) {
    let oppShape = line.charAt(0);
    let desOutcome = line.charAt(2);
    let addedScore = 0;

    switch (oppShape) {
        case "A":
            //rock
            switch (desOutcome) {
                case "X":
                    //lose
                    addedScore += 0;
                    //(scissors)
                    addedScore += 3;
                    break;
                case "Y":
                    //draw
                    addedScore += 3;
                    //(rock)
                    addedScore += 1;
                    break;
                case "Z":
                    //win
                    addedScore += 6;
                    //paper
                    addedScore += 2;
                    break;
            
                default:
                    console.error(new Error("This should never happen"));
                break;
            }

            break;

        case "B":
            //paper
            switch (desOutcome) {
                case "X":
                    //lose
                    addedScore += 0;
                    //(rock)
                    addedScore += 1;
                    break;
                case "Y":
                    //draw
                    addedScore += 3;
                    //(paper)
                    addedScore += 2;
                    break;
                case "Z":
                    //win
                    addedScore += 6;
                    //scissors
                    addedScore += 3;
                    break;
            
                default:
                    console.error(new Error("This should never happen"));
                break;
            }

            break;
        
        case "C":
            //scissors
            switch (desOutcome) {
                case "X":
                    //lose
                    addedScore += 0;
                    //(paper)
                    addedScore += 2;
                    break;
                case "Y":
                    //draw
                    addedScore += 3;
                    //(scissors)
                    addedScore += 3;
                    break;
                case "Z":
                    //win
                    addedScore += 6;
                    //rock
                    addedScore += 1;
                    break;
            
                default:
                    console.error(new Error("This should never happen"));
                break;
            }

            break;

        default:
            console.error(new Error("This should never happen"));
        break;

    }

    score += addedScore;
    // console.log("Current score = " + score);
}); 

//fires upon closing the interface
myInterface.on('close', function() {
    console.log(score);
});