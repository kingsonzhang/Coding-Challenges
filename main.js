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

//Count the characters in a string
function count (string){ 
  let dictionary = {};
  string.split("").map((character) => character in dictionary ? dictionary[character]++ : dictionary[character] = 1)
  return dictionary;
}

//Create a multiplication table
function multiplicationTable(size) {
  let bigArray = [];
  for (let i = 1; i <= size; i++){
    let smallArray = [];
    for (let j = 1; j <= size; j++){
      smallArray.push(i * j);
    }
    bigArray.push(smallArray);
  }
  return bigArray;
}

//Convert only characters to numbers, remove all special character
function alphabetPosition(text) {
  return text.toUpperCase().split("").filter(x => x >= "A" && x <= "Z").map(x => x.charCodeAt() - 64).join(" ");
}

//Capitalize a book title
function titleCase(title, minorWords){
  if (title != ""){
    const lowerTitle = title.toLowerCase().split(" ");
    let lowerMinor = []
    if (minorWords !== undefined)
      lowerMinor = minorWords.toLowerCase().split(" ");
    
    return lowerTitle.map((word, index) => (lowerMinor.includes(word) && index != 0) ? word.toLowerCase(): word[0].toUpperCase() + word.substring(1)).join(" ");
  }
  return "";
}

//Sum numbers left and right of index in array and check if equal
function findEvenIndex(arr){
  for (let i = 0; i < arr.length; i++){
    if (arr.slice(0, i).reduce((acc, x) => acc + x, 0) == arr.slice(i + 1).reduce((acc, x) => acc + x, 0))
      return i;
  }
  return -1;
}

//Queue at self checkout fastest time given different amount of checkouts
function queueTime(customers, n) {
  let queue = new Array(n).fill(0); 
  customers.forEach(x => queue[queue.indexOf(Math.min(...queue))] += x);
  return Math.max(...queue);
}

//Filter out array b from a
function arrayDiff(a, b) {
  return a.filter(x => !b.includes(x));
}

//Street Fighter selector using arrays
function streetFighterSelection(fighters, position, moves){
  let currentFighter = [];
  for (let i = 0; i < moves.length; i++){
    switch(moves[i]){
        case ("up"):
          position[0] = 0;
          break;
        case ("down"):
          position[0] = 1;
          break;
        case ("left"):
          position[1] == 0 ? position[1] = 5 : position[1] -= 1;
          break;
        case ("right"):
          position[1] == 5 ? position[1] = 0 : position[1] += 1;
          break;
    }
    currentFighter.push(fighters[position[0]][position[1]]);
  }
  return currentFighter;
}

//Find duplicates in a string
function duplicateEncode(word){
  return word.toLowerCase().split("").map((letter, index, self) => self.indexOf(letter) == self.lastIndexOf(letter) ? "(" : ")").join("");
}

//Checking loterry winner if character is in string
function bingo(ticket, win){
  let count = 0;
  ticket.forEach(
    x => {
      x[0].split("").map(character => character.charCodeAt(0)).includes(x[1]) ? count++ : count;
    }
  )
  return count >= win ? "Winner!" : "Loser!"
}

//Find indexes of two numbers in array that add to target
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == target) {
        return [i, j];
      }
    }
  }
}

//Convert binary to ASCII using regex
function binaryToString(binary) {
  return binary.replace(/[01]{8}/g, x => String.fromCharCode(parseInt(x, 2)));
}

//Reverse binary array every 8 bytes
function dataReverse(data){
  let reverse = [];
  for (let i = 0; i < data.length; i + 8){
    reverse.unshift(...data.splice(i, 8));
  }
  return reverse;
}

//Prime Number
function prime(number){
  for (let i = 2; i < Math.sqrt(number); i++)
      if (number % i == 0)
        return false;
    return true;
}

//Add number into array so sum is a prime number
function minimumNumber(numbers){
  const sum = numbers.reduce((acc, x) => acc + x, 0);
  let current = sum;
  
  function prime(number){
    for (let i = 2; i < Math.sqrt(number); i++)
      if (number % i == 0)
        return false;
    return true;
  }
  
  while (!prime(current))
    current++;
  return current - sum;
}

//Increment string number at the end by one, do not change length of string number, and reappend to end
function incrementString(strng){
  let i = strng.length;
  while (strng[i - 1] >= '0' && strng[i - 1] <= '9')
    i--;
  let text = strng.substring(0, i);
  let original = strng.substring(i);
  let update = (Number(original) + 1).toString();
  while (update.length < original.length)
    update = "0" + update;
  return text + update;
}

//Take a string fraction and reduce it to mixed fraction form
function mixedFraction(s){
  const temp = s.split("/");
  let numer = temp[0];
  let denom = temp[1];
  if (denom == 0)
    throw new Error("Divided by Zero");
  let whole = ((numer >= 0 && denom > 0) || (numer < 0 && denom < 0)) ? Math.floor(numer/denom) : Math.ceil(numer/denom);
  numer = numer % denom;
  let reduce = gcd(numer, denom);
  if (numer == 0)
    return whole.toString();
  else if (whole != 0)
    return `${whole} ${Math.abs(numer / reduce)}/${Math.abs(denom / reduce)}`;
  else{
    return ((numer > 0 && denom > 0) || (numer < 0 && denom < 0)) ? `${numer / reduce}/${denom / reduce}` : `-${Math.abs(numer / reduce)}/${Math.abs(denom / reduce)}`;
  }
  
  
  function gcd(a, b){
    if (!b)
      return a;
    return gcd(b, a % b);
  }
}

//Find if sum of divisors is a square
function listSquared(m, n) {
  let pair = [];
  for (let start = m; start <= n; start++){
    let divisors = findDivisors(start);
    let sum = divisors.map(x => x * x).reduce((acc, x) => acc + x, 0);
    if (Number.isInteger(Math.sqrt(sum)))
      pair.push([start, sum]);
  }
  return pair;
  
  function findDivisors(number){
    let divisors = [];
    for (let i = 1; i < Math.sqrt(number); i++){
      if (Number.isInteger(number / i)){
        divisors.push(i);
        divisors.push(number / i);
      }
    }
    if (Number.isInteger(Math.sqrt(number)))
      divisors.push(Math.sqrt(number));
    return divisors;
  }
}

//Find if product of two Fib numbers equals given number
function productFib(prod){
  let first = 0;
  let second = 1;
  while (first * second < prod){
    second += first;
    first = second - first;
  }
  return [Math.min(first, second), Math.max(first, second), first * second == prod];
}

// function replaceMath(){
//   Math.round = function(number) {
//     const fraction = number % 1;
//     return number - fraction + (fraction >= 0.5 ? 1 : 0);
//   };
  
//   Math.ceil = function(number) {
//     return (number % 1 == 0) ? number : number - (number % 1) + 1;
//   };
  
//   Math.floor = function(number) {
//     return number - (number % 1);
//   }
// }

//Zoo Hunger Games
//Some pretty awful code tbh, but it works and just needs to be refactored to removed duplicate lines of code
var whoEatsWho = function(zoo){
  let order = zoo.split(",");
  
  let actions = [zoo];
  let currentLength = -1;
  while (order.length != currentLength){
    currentLength = order.length;
    let start = 0;
    let notEaten = true;
    while (start < currentLength && notEaten){
      let previous = order[start - 1];
      let next = order[start + 1];
      function eaten(index, which){
        actions.push(`${order[start]} eats ${order[start + which]}`);
        order.splice(start + which, 1);
        notEaten = false;
      }
      switch(order[start]){
          case "antelope":
          case "cow":
          case "sheep":
            if (previous == "grass")
              eaten(start, -1);
            else if (next == "grass")
              eaten(start, 1);
            break;
          case "big-fish":
            if (previous == "little-fish")
              eaten(start, -1);
            else if (next == "little-fish")
              eaten(start, 1);
            break;
          case "bug":
          case "giraffe":
          case "panda":
            if (previous == "leaves")
              eaten(start, -1);
            else if (next == "leaves")
              eaten(start, 1);
            break;
          case "bear":
            if (previous == "big-fish" || previous == "bug" || previous == "chicken" || previous == "cow" || previous == "leaves" || previous == "sheep")
              eaten(start, -1);
            else if (next == "big-fish" || next == "bug" || next == "chicken" || next == "cow" || next == "leaves" || next == "sheep")
              eaten(start, 1);
            break;
          case "chicken":
            if (previous == "bug")
              eaten(start, -1);
            else if (next == "bug")
              eaten(start, 1);
            break;
          case "fox":
            if (previous == "chicken" || previous == "sheep")
              eaten(start, -1);
            else if (next == "chicken" || next == "sheep")
              eaten(start, 1);
            break;
          case "lion":
            if (previous == "antelope" || previous == "cow")
              eaten(start, -1);
            else if (next == "antelope" || next == "cow")
              eaten(start, 1);
            break;
      }
      start++;
    }
  }
  actions.push(order.join(","));
  return actions;
}