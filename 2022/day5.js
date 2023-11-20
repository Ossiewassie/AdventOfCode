const fs = require('fs');
const readline = require('readline');
const puzzleInput = 'input/day5example.txt';

//creates interface to read puzzleinput line for line
let myInterface = readline.createInterface({
    input: fs.createReadStream(puzzleInput)
});


let supplies = [];
let suppliesScanned = false;
//tells the code what to do with each line  
myInterface.on('line', function (line) {
  const chars = line.split('');
  const supplyXCoords = [1,5,9/*,13,17,21,25,29,33*/];

  // I'll write the code to scan the supplies within this if
  if(!suppliesScanned) {
    if(chars[1] !== '1') {
      supplyXCoords.forEach(function callback(element, index) { 
        //index starts at 1 so
        if(chars[element] !== " ") {
          if(supplies[index] == undefined) {
            supplies[index] = chars[element];
          }
          else {
            supplies[index] += chars[element];
          }
        }
      });
    }
    else {
      suppliesScanned = true;
    }
  }
  //✅ works
  
  let amount;
  let from;
  let to;
  let chunk;
  let reversechunk;

  if(suppliesScanned && chars[0] === 'm') {
    amount = line.split(' ')[1];
    from = line.split(' ')[3];
    to = line.split(' ')[5];

    chunk = supplies[from].substring(0, amount);
    reversechunk = chunk.split('').reverse().join("");
    supplies[from] = supplies[from].slice(amount);
    supplies[to - 1] += reversechunk;
  }

}); 

//fires upon closing the interface
myInterface.on('close', function() {
  console.log(supplies);
});