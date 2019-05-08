// We added a equality operator to check if the value is equal to 12, if it is not equal then we return not equal.

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);