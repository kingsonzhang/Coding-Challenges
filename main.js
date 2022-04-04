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