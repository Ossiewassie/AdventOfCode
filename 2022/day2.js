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
    let myShape = line.charAt(2);
    let addedScore = 0;

    switch (myShape) {
        case "X":
            //rock
            addedScore += 1;
            break;
        case "Y":
            //paper
            addedScore += 2;
            break;
        
        case "Z":
            //scissors
            addedScore += 3;
            break;
        default:
            console.error(new Error("This should never happen"));
        break;
    }
    

    switch (oppShape) {
        case "A":
            //rock
            switch (addedScore) {
                case 1:
                    //draw
                    addedScore += 3;
                    break;
                case 2:
                    //WIN!!!
                    addedScore += 6;
                    break;
                case 3:
                    //loss (no points)
                    break;
            
                default:
                    console.error(new Error("This should never happen"));
                break;
            }

            break;

        case "B":
            //paper
            switch (addedScore) {
                case 1:
                    //loss (no points)
                    break;
                case 2:
                    //draw
                    addedScore += 3;
                    break;
                case 3:
                    //WIN!!!
                    addedScore += 6;
                    break;
            
                default:
                    console.error(new Error("This should never happen"));
                break;
            }

            break;
        
        case "C":
            //scissors
            switch (addedScore) {
                case 1:
                    //WIN!!!
                    addedScore += 6;                   
                    break;
                case 2:
                    //loss (no points)  
                    break;
                case 3:
                    //draw
                    addedScore += 3;
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

    // console.log(myShape + " vs " + oppShape + " = " + addedScore + " points" );
    score += addedScore;
    // console.log("Current score = " + score);
}); 

//fires upon closing the interface
myInterface.on('close', function() {
    console.log(score);
});