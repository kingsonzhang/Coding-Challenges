//If a = 1, b = 2, c = 3 ... z = 26, return the sum of a string
function wordsToMarks(string){
  return string.split("").reduce((acc, letter) => acc + letter.charCodeAt() - 96, 0)
}

//Square every digit of a number and concatenate them
function squareDigits(num){
  return parseInt(num.toString().split("").map(value => value * value).join(""));
}

//Flatten a 2D numerical array and sort it in ascending order
function flattenAndSort(array) {
  return [].concat(...array).sort((a, b) => a - b);
}

//Take n >= 0 and 0 <= d <= 9
//Starting from 0, square from 0 to n, and find the amount of digits in the squares
//Equal to the given d
function nbDig(n, d){
  let total = 0;
  d = d.toString();
  for (let i = 0; i <= n; i++)
    (i * i).toString().split("").forEach(x => x == d ? total++ : total);
  return total;
}