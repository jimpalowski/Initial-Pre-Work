// We chained a number of if and else if statements to check for numbers to return strings of a certain value.

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else (num >= 20)
    return "Huge";
  
  // Only change code above this line
}

// Change this value to test
testSize(7);