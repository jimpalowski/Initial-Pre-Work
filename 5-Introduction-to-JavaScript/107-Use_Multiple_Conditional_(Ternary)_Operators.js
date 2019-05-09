// This function will be used to check multiple conditionals for a number.

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative": num === 0 ? "zero": "";
}

checkSign(10);