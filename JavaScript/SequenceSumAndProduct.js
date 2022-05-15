//PREP
//Parameters: A number is given, and an array from 1 to n is created
//Return: Return 2 numbers where the product of the two numbers is equal
//to the sum of the sequence not including the two numbers
//Examples: Given in the codewar

function removeNb (n){
    //Create a array to store numbers for products
    let combo = []
    
    //Find the sum of the sequence using formula
    const SUM = (n * (n + 1)) / 2;
    
    //Pick a whole number in the sequence x, starting from 1
    //Using the formula
    //x * OPPOSITE = SUM - x - OPPOSITE
    //x * OPPOSITE + OPPOSITE = SUM - x
    //(x + 1) * OPPOSITE = SUM - x
    //OPPOSITE = (SUM - x) / (x + 1)
    for (let x = 1; x <= n; x++){
      const OPPOSITE = (SUM - x)/ (x + 1);
      //If opposite is a whole number and is within the sequence (less than n)
      if (Math.floor(OPPOSITE) == OPPOSITE && OPPOSITE < n)
        //Push the two numbers into combo
        combo.push([x, OPPOSITE]);
    }
    //Return all possible combination of products
    return combo;
  }