// The else if statment we implemented is more of a second if statement in case the first doesn't go through we have another
// else to pass.

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  
  else if (val < 5) {
    return "Smaller than 5";
  }
  else{
  return "Between 5 and 10";
}
}
// Change this value to test
testElseIf(7);