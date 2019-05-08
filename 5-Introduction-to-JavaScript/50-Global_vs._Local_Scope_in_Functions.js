// We added a local variable of outerWear and a global version, but the local version takes priority.

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear= "sweater"
  
  
  // Only change code above this line
  return outerWear;
}

myOutfit();