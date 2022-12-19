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
let elfIndex = 1;
let elves = [];

//tells the code what to do with each line  
myInterface.on('line', function (line) {
  let letter = "";
  let backpacks = line.split("");

  elves[elfIndex] = backpacks;

  if(elfIndex % 3 == 0) {
    elf1 = elves[1];
    elf2 = elves[2];
    elf3 = elves[3];
  
    // console.log(elf1);
    // console.log(elf2);
    // console.log(elf3);

    //this returns an array of the letter that matches between the 3 elf arrays
    const filterElves = elf1.filter(element => elf2.includes(element));
    const filterElves2 = filterElves.filter(element => elf3.includes(element));

    //we only need the letter once though
    letter = filterElves2[0];

    // console.log("the letter " + letter + " matches between the 3 elves");
    
    score += priorityLetter(letter);

    elfIndex = 0;
  }

  

  elfIndex++;

}); 

//fires upon closing the interface
myInterface.on('close', function() {
  console.log(score);
});