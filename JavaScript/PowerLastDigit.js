//PREP
//Parameters: Given two numbers as strings, str1 and str2, take str1 to the power of str2
//str1 and str2 can be big numbers, hence string
//Return: Return the last digit of the power
//Examples: Check codewars examples
//Psuedo

var lastDigit = function(str1, str2){
    //Special case power of 0
    if (str2 == "0")
      return 1;
    
    //Get the last digit of str1
    const LASTDIGIT = Number(str1[str1.length - 1]);
    
    //Create an array of all potential last digits when taken to the power
    let endingNumbers = [];
    let start = LASTDIGIT;
    while (!endingNumbers.includes(start)){
      endingNumbers.push(start);
      start = (start * LASTDIGIT) % 10;
    }
    
    //Find the modulus of str2 by the length of endingNumbers
    //This is a given formula
    let position = mod(str2, endingNumbers.length);
    //position is 1 index above the correct one, so decrement it
    //Formula to handle negative modulo
    position = (((position - 1) % endingNumbers.length) + endingNumbers.length) % endingNumbers.length;
    //Using the result, return the number at the given index
    return endingNumbers[position];
}

function mod(num, a){  
    // Initialize result
    let res = 0;
 
    // One by one process
    // all digits of 'num'
    for(let i = 0; i < num.length; i++)
      res = (res * 10 +
        Number(num[i])) % a;
 
    return res;
}