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