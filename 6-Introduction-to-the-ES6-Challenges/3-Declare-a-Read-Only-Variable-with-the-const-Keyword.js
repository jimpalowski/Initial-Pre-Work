// We made the sentence variable into a const so that it never changes and define "i" with a let.

function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }
  // change code above this line

}
printManyTimes("freeCodeCamp");