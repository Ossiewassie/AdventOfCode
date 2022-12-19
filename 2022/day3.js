const fs = require('fs');
const readline = require('readline');
const puzzleInput = 'input/day3.txt';

//creates interface to read puzzleinput line for line
let myInterface = readline.createInterface({
    input: fs.createReadStream(puzzleInput)
});

//this function I stole from stackoverflow user "dagg-nabbit". I edited it to fit the puzzle's needs. Thx bro!
function priorityLetter(str) {
  // console.log(str.charCodeAt());
  if (str.charCodeAt() < 91) {
      var out = 26,
      len = str.length,
      pos = len;
    while ((pos -= 1) > -1) {
      out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - 1 - pos);
    }
  }
  else {
      var out = 0,
      len = str.length,
      pos = len;
    while ((pos -= 1) > -1) {
        out += (str.charCodeAt(pos) - 96) * Math.pow(26, len - 1 - pos);
    }
  }

  return out;
}

let score = 0;

//tells the code what to do with each line  
myInterface.on('line', function (line) {
  let letter = "";
  let length = line.length;
  let sizeBackpack = (length / 2);
  
  let backpack1 = line.split("", sizeBackpack)
  let backpack2 = line.substring(sizeBackpack).split("", sizeBackpack)


  //this returns an array of the letter that matches between the two backpack arrays
  const intersection = backpack1.filter(element => backpack2.includes(element));

  //we only need the letter once though
  letter = intersection[0];
  
  //test code
  // console.log(letter);
  // console.log(priorityLetter(letter))
  
  score += priorityLetter(letter);

}); 

//fires upon closing the interface
myInterface.on('close', function() {
  console.log(score);
});