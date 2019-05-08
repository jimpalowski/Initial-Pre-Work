// We removed the switch statement and replaced it with an object with properties of a lookup and set the result variable
// to the value using bracket notation.

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha" : "Adams",
    "bravo" : "Boston",
    "charlie" : "Chicago",
    "delta" : "Denver",
    "echo" : "Easy",
    "foxtrot": "Frank"
  }
  result = lookup[val]
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");