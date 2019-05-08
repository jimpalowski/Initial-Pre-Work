// In this exercise we use the strict operator which means the value has to be the exact match and cannot be nothing else.

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);