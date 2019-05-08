// We set our if statement to check for two things which is if the value
// is greater than 10 and less than 20 while using the || operator meaning logical or operator.

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);