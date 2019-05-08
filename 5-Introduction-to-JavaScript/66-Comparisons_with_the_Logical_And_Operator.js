// We use two logical operators to get numbers in between 50 and 25 by 
// utilizing the greater than or equal to and less than or equal to.


function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);