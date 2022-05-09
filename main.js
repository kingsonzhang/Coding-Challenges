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

//Return a sentence depending on the number of people in the array
function likes(names) {
  switch(names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

//Check if equal number of x's and o'x in string
function XO(str) {
  let dictionary = {};
  str.toLowerCase().split("").forEach(x => x in dictionary ? dictionary[x] += 1 : dictionary[x] = 1);
  return dictionary['x'] == dictionary['o'];
}

//See if function ends with given string
function solution(str, ending){
  return str.endsWith(ending);
}

//Find the instance of key that is odd in array
function findOdd(A) {
  let dictionary = {};
  A.forEach(x => x in dictionary ? dictionary[x]++ : dictionary[x] = 1);
  for (x in dictionary)
    if (dictionary[x] % 2 == 1)
      return Number(x);
}

//Loop through iterable and remove all instances of same element as preceding
var uniqueInOrder=function(iterable){
  let holder = [];
  for (let i = 0; i < iterable.length; i++)
    if (holder[holder.length - 1] != iterable[i])
      holder.push(iterable[i])
  return holder;
}

//Find opposite DNA pairs in a string
function DNAStrand(dna){
  const dictionary = {'A': 'T', 'T': 'A', 'C' : 'G', 'G' : 'C'};
  return dna.split("").map(x => dictionary[x]).join("");
}

//Test example: accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
function accum(s) {
	return s.split("").map((x, index) => x.toUpperCase() + x.toLowerCase().repeat(index)).join('-');
}

//Keep multiplying digits in number until number is single digit, return how many times
function persistence(num) {
  let count = 0;
  let split = num.toString().split("");
  while (split.length > 1){
    count++;
    split = split.reduce((acc, x) => acc *= Number(x) , 1).toString().split("");
  }
  return count;
}

//Concatenate strings in a array given amount of strings to concatenate, find longest string
function longestConsec(strarr, k){
  if (k > strarr.length || k <= 0)
    return '';
  const joined = strarr.map((x, index) => strarr.slice(index, index + k).join(""));
  const lengths = joined.map(x => x.length);
  return joined[lengths.indexOf(Math.max(...lengths))]
}

//Return a number in expanded form
function expandedForm(num) {
  let temp = [];
  let count = 1;
  while (num != 0){
    temp.push((num % 10) * count);
    num = Math.floor(num / 10);
    count *= 10;
  }
  return temp.filter(x => x != 0).reverse().join(" + ");
}

//Caesar cipher without brute force or regex
function rot13(message){
  let characters = message.split("");
  for (let i = 0; i < characters.length; i++){
    if (characters[i] >= 'a'  && characters[i] <= 'z'){
      let number = characters[i].charCodeAt(0) + 13;
      if (number > 122)
        number -= 26;
      characters[i] = String.fromCharCode(number);
    }
    else if (characters[i] >= 'A'  && characters[i] <= 'Z'){
      let number = characters[i].charCodeAt(0) + 13;
      if (number > 90)
        number -= 26;
      characters[i] = String.fromCharCode(number);
    }
  }
  return characters.join("");
}

//Convert seconds into HH:MM:SS
function humanReadable (seconds) {
  const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0')
  const second = (seconds % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${second}`;
}

//Return amount of valid smiley faces, without regex and with regex
function countSmileys(arr){
  const valid = [':', ';', '-', '~', ')', 'D'];
  let count = 0;
  for (let i = 0; i < arr.length; i++){
    const split = arr[i].split("");
    if (split.length < 4 && split.every(x => valid.includes(x))){
      if ((split.includes(':') || split.includes(';')) && (split.includes(')') || split.includes('D')))
        count++
    }
  }
  console.log(arr)
  return count;
}

function countSmileys(arr) {
  return arr.reduce((acc, x) => acc + /^[:;][-~]?[)D]$/.test(x), 0);
}

//Return a sentence with all words greater than 5 characters reversed
function spinWords(string){
  return string.split(" ").map(x=>x.length>4? x.split("").reverse().join("") : x).join(" ")
}

//Find the odd/even one out
function findOutlier(integers){
  const odds = integers.filter(x => x % 2);
  const evens = integers.filter(x => !(x % 2));
  return odds.length == 1 ? odds[0] : evens[0];
}

//Build an asterisk pyramid given how many floors
function towerBuilder(nFloors){
  let pyramid = [];
  for (let i = 1; i <= nFloors; i++){
    pyramid.push(' '.repeat(nFloors - i) + '*'.repeat(2*i - 1) + ' '.repeat(nFloors - i));
  }
  return pyramid;
}

//Morse Code decoder
decodeMorse = function(morseCode){
  return morseCode.trim().split("   ").map(x => x.split(" ").map(y => MORSE_CODE[y]).join("")).join(" ")
}

//String does not contain same character, uses Set as a dictionary
function isIsogram(str){
  return new Set(str.toLowerCase()).size == str.length;
}

//Change seconds into readable format
function formatDuration (time){
  if (time == 0)
    return "now";
  let array = [];
  const years = Math.floor(time / 31536000);
  if (years)
    array.push(`${years} year${years > 1 ? 's' : ""}`);
  const days = Math.floor((time % 31536000) / 86400);
  if (days)
    array.push(`${days} day${days > 1 ? 's' : ""}`);
  const hours = Math.floor((time % 86400) / 3600);
  if (hours)
    array.push(`${hours} hour${hours > 1 ? 's' : ""}`);
  const minutes = Math.floor((time % 3600) / 60);
  if (minutes)
    array.push(`${minutes} minute${minutes > 1 ? 's' : ""}`);
  const seconds = time % 60;
  if (seconds)
    array.push(`${seconds} second${seconds > 1 ? 's' : ""}`);
  
  if (array.length == 1)
    return array[0];
  else if (array.length == 2)
    return array.join(" and ");
  else{
    let noComma = array.pop();
    noComma = array.pop() + " and " + noComma;
    return array.join(", ") + ", " + noComma;
  }
}

//Sort only the odds in ascending order, every even numbers remains in place in the array
function sortArray(array) {
  let odds = array.filter(x => x % 2).sort((a, b) => a - b);
  return array.map(x => (x % 2) ? odds.shift() : x);
}

//Remove extra number > n elements in an array without changing order
function deleteNth(arr,n){
  let cache = {};
  return arr.filter(x =>{
    cache[x] = (cache[x] || 0) + 1;
    return cache[x] <= n;
  })
}

//Sort by weight of a string number (add digits), and then by number alphabetically if weights are equal
function orderWeight(strng) {
  let orderPairs = [];
  strng.split(" ").forEach(x => orderPairs.push([x, x.split("").reduce((acc, value) => acc + Number(value), 0)]))
  return orderPairs.sort((a, b) => {
      if (a[1] > b[1]) return 1;
      if (a[1] < b[1]) return -1;
      if (a[0] > b[0]) return 1;
      if (a[0] < b[0]) return -1;
    })
    .map(x => x[0]).join(" ");
}

//Push all zeroes to the end of the array
function moveZeros(arr) {
  let temp = arr.filter(x => x !== 0);
  while (temp.length < arr.length)
    temp.push(0);
  return temp;
}

//Sudoku board check
function sudoku(){
  function validSolution(board){
    let squares = getSquares(board);
    for (let x = 0; x < board.length; x++){
      //0 Check
      if (board[x].includes(0))
        return false;
      
      //Row check
      if (!unique(board[x]))
        return false;
      
      //Column check
      let column = [];
      for (let y = 0; y < 9; y++)
        column.push(board[x][y]);
      if (!unique(column))
        return false;
      
      //Squares check
      if (!unique(squares[x]))
        return false
    }
    return true;
  }
  
  function unique(board){
    return (new Set(board)).size == board.length;
  }
  
  function getSquares(board){
    let squares = [];
    for (let rows = 0; rows < board.length; rows += 3){
      for (let columns = 0; columns < board[rows].length; columns += 3){
        let temp = [];
        temp.push(...(board[rows].slice(columns, columns + 3)));
        temp.push(...(board[rows + 1].slice(columns, columns + 3)));
        temp.push(...(board[rows + 2].slice(columns, columns + 3)));
        squares.push(temp);
      }
    }
    return squares;
  }
}

//Find amount of characters are duplicates in string regardless of case
function duplicateCount(text){
  let dictionary = {};
  text.toLowerCase().split("").map(x => x in dictionary ? dictionary[x]++ : dictionary[x] = 0);
  return Object.values(dictionary).filter(x => x > 0).length;
}

//Sort characters alphabetically and remove duplicate characters
function longest(s1, s2) {
  return [...new Set(s1+s2)].sort().join("");
}

//Cypher to encrypt and decrypt string by odd and even indexes
function encrypt(text, n){
  function cypher(text){
    const split = text.split("");
    return split.filter((x, index) => index % 2).join("") + split.filter((x, index) => !(index % 2)).join("");
  }

  if (text == null)
    return text;
  for (let i = 0 ; i < n; i++)
    text = cypher(text);
  return text;
}

function decrypt(encryptedText, n){
  function decypher(text){
    const split = encryptedText.split("");
    const front = split.slice(0, Math.floor(split.length / 2));
    const back = split.slice(Math.floor(split.length / 2), split.length);
    let string = [];
    for (let i = 0; i < front.length; i++){
      string.push(back[i]);
      string.push(front[i]);
    }
    if (back.length > front.length)
      string.push(back[back.length - 1]);
    return string.join("");
  }

  if (encryptedText == null)
    return encryptedText;
  for (let i = 0; i < n; i++)
    encryptedText = decypher(encryptedText);
  return encryptedText;
}

//Remove first and last character from string
function removeChar(str) {
  return str.slice(1, -1);
}

//Find two integers in array that add up to given number within time limit
function sumPairs(ints, s) {
  let cache = {};
  for (let i = 0; i < ints.length; i++){
    if (s - ints[i] in cache)
      return [s - ints[i], ints[i]]
    else
      cache[ints[i]] = i;
  }
  return undefined
}

//Find weight of words, return word with highest weight
function high(x){
  let characters = x.split(" ");
  let weight = x.split(" ").map(y => y.split("").reduce((acc, char) => acc + (char.charCodeAt(0) - 96), 0));
  return characters[weight.indexOf(Math.max(...weight))];
}

//Categorizing each book by letter and total amount in stock
function stockList(listOfArt, listOfCat){
  if (listOfArt.length == 0)
    return "";
  let dictionary = {};
  listOfArt.forEach(x => {
    let split = x.split(" ");
    split[0][0] in dictionary ? dictionary[split[0][0]] += Number(split[1]) : dictionary[split[0][0]] = Number(split[1]);
  })
  return listOfCat.map(x => `(${x} : ${x in dictionary ? dictionary[x] : 0})`).join(" - ")
}

//Cancel out NORTH/SOUTH and EAST/WEST in a given array
function dirReduc(arr){
  const OPPOSITE = {"NORTH":"SOUTH", "SOUTH":"NORTH", "WEST":"EAST", "EAST":"WEST"};
  return arr.reduce((acc, direction) => {direction == OPPOSITE[acc.slice(-1)] ? acc.pop() : acc.push(direction); return acc}, []);
}

//Sum of a row of pyramid of odd numbers
//          1
//        3   5
//      7   9   11
//    13  15  17  19
//  21  23  25  27  29
//...

//wELL PLAYED
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

//Max sum of subarray in a array problem
//Look up Kadane's Algorithm
//Dynamic programming
var maxSequence = function(arr){
  let localMax = 0;
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++){
    localMax = Math.max(arr[i], arr[i] + localMax);
    if (localMax > maxSum)
      maxSum = localMax;
  }
  return maxSum;
}

//Return 5 without using any numbers or math/
//Wow this one was clever
function unusualFive(){
  return "smart".length;
}

//Rule of divisibility by 13
function thirt(n) {
  const ORDER = [1, 10, 9, 12, 3, 4];
  const next = n.toString().split("").reverse().map(Number).reduce((acc, x, index) => acc + x * ORDER[index % 6], 0);
  return next == n ? n : thirt(next);
}

//Convert to camelCase
function toCamelCase(str){
  let split = str.split(/[-_]+/);
  for (let i = 1; i < split.length; i++){
    let characters = split[i].split("");
    characters[0] = characters[0].toUpperCase();
    split[i] = characters.join("");
  }
  return split.join("");
}

//Valid parenthesis
function validParentheses(parens) {
  let count = 0;
  for (let i = 0; i < parens.length; i++){
    if (parens[i] == "(")
      count++;
    else 
      count--;
    if (count < 0)
      return false;
  }
  return count == 0;
}

//Return squares that make up a rectangle
function sqInRect(lng, wdth){
  if (lng == wdth)
    return null;
  let total = [];
  while (lng > 0 && wdth > 0){
    total.push(Math.min(lng, wdth));
    lng > wdth ? lng -= wdth : wdth -= lng;
  }
  return total;
}

//Valid IP Numbers
function isValidIP(str) {
  const VALUES = str.split(".");
  console.log(VALUES);
  //If there are only 4 numbers in the string seperated by periods
  if (VALUES.length == 4)
    //If every number only contains numbers (no letters)
    if (VALUES.every(x => x.split("").every(character => character >= '0' && character <= '9')))
      //If every number does not have leading 0's
      if (VALUES.every(y => y == Number(y).toString()))
        //Return true if the numbers are between 0 and 255 inclusive
        return VALUES.every(z => Number(z) >= 0 && Number(z) <= 255);
  //Otherwise by default return false
  return false;
}

//Sort by last then first name
function meeting(s) {
  return s.split(";")
    .map(x => x.toUpperCase())
    .map(x => x.split(":"))
    .sort((a, b) => {
      if (a[1] > b[1]) return 1;
      if (a[1] < b[1]) return -1;
      if (a[0] > b[0]) return 1;
      if (a[0] < b[0]) return -1;
    })
    .map(x => `(${x[1].toUpperCase()}, ${x[0].toUpperCase()})`)
    .join("");
}

//RPN Calculator
//Very clever use of switching order of pops on stack through number manipulation
function calc(expr){
  let numbers = [];
  expr.split(" ").forEach(x => {
    switch(x){
        case '+':
          numbers.push(numbers.pop() + numbers. pop());
          break;
        case '-':
          numbers.push(-numbers.pop() + numbers.pop());
          break;
        case '*':
          numbers.push(numbers.pop() * numbers.pop());
          break;
        case '/':
          numbers.push(1 / (numbers.pop() / numbers.pop()));
           break;
        default:
          numbers.push(Number(x));
    }
  })
  return numbers.pop();
}

//Check to see how many cakes can be made with available ingredients and recipe
function cakes(recipe, available){
  if (Object.keys(recipe).every(x => x in available))
    return Math.min(...Object.keys(recipe).map(x => Math.floor(available[x] / recipe[x])));
  return 0;
}

//Generate a valid tweet given a sentence
function generateHashtag (str){
  if (str != ""){
    let hashtag = "#" + str.split(" ").filter(x => x != "").map(x => x[0].toUpperCase() + x.slice(1)).join("");
    if (hashtag.length > 1 && hashtag.length <= 140)
      return hashtag;
  }
  return false;
}

//If string2 cannot be made from string1, return false
function scramble(str1, str2) {
  let dictionary = {};
  for (let i = 0; i < str1.length; i++)
    str1[i] in dictionary ? dictionary[str1[i]]++ : dictionary[str1[i]] = 1;
  for (let i = 0; i < str2.length; i++)
    if (!(--dictionary[str2[i]] >= 0))
      return false;
  return true;
}

//Formula for trailing zeroes in factorial
function zeros (n) {
  let total = 0;
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5)
    total += Math.floor(n / i);
  return total;
}