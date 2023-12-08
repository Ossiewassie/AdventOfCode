const fs = require('fs');
const readline = require('readline');
const puzzleInput = 'input/day5.txt';

//creates interface to read puzzleinput line for line
let myInterface = readline.createInterface({
    input: fs.createReadStream(puzzleInput)
});


let supplies = [];
let suppliesScanned = false;

let amount;
let from;
let to;
let chunk;
let reversechunk;

//tells the code what to do with each line  
myInterface.on('line', function (line) {
  const chars = line.split('');
  const supplyXCoords = [1,5,9,13,17,21,25,29,33];

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

  if(suppliesScanned && chars[0] === 'm') {
    amount = line.split(' ')[1];

    //array start at 0 so the 1st will be 0, 2nd 1 etc
    from = (line.split(' ')[3] - 1);
    to = (line.split(' ')[5] - 1);

    chunk = supplies[from].substring(0, amount);
    // reversechunk = chunk.split('').reverse().join(""); part 1
    
    //part 2: 
    reversechunk = chunk.split('').join("");

    supplies[from] = supplies[from].slice(amount);
    supplies[to] = reversechunk + supplies[to];
    // console.log(supplies);
  }

}); 

//fires upon closing the interface
myInterface.on('close', function() {
  console.log(supplies);
});