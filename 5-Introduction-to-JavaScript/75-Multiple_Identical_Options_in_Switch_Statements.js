// We set multiple switch cases to go through a certain amount of steps before it is set then it breaks off onto the next one.

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3:
    answer = "Low";
    break;
    case 4:
    case 5:
    case 6:
    answer = "Mid";
    break;
    case 7:
    case 8:
    case 9:
    answer = "High";
  }
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
sequentialSizes(1);

