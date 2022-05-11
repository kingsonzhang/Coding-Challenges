//Square every digit of a number and concatenate them
function squareDigits(num){
  return parseInt(num.toString().split("").map(value => value * value).join(""));
}