// We set an else statement after the if statement just in case our value doesn't get past the if statement,
// we have an else to fall back on.

function testElse(val) {
  var result = "";
  // Only change code below this line
  
  if (val > 5) {
    result = "Bigger than 5";
  }
  
  else{(val <= 5) 
    result = "5 or Smaller";
  }
  
  // Only change code above this line
  return result;

}
// Change this value to test
testElse(4);
