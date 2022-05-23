//PREP
//Parameters: Given n number of rows
//Return: A single dimention array with all the rows up to n of Pascal's Triangle
//Example/Output: Check Codewars examples
//Pseudo

function pascalsTriangle(n) {
    //Create a single dimension array
    let solution = [];
    let temp = 0;
    //Loop through n amount of rows
    for (let row = 0; row < n; row++){
      //Loop from 1 to n amount of numbers for n amount of numbers in the row
      for (let position = 0; position <= row; position++)
        //Use Pascal's formula and push the solution into the single dimension array
        //Starting from 56! and greater, numbers are too big
        //Must convert to BigInteger type
        solution.push(Number((factorial(row)/factorial(position)/factorial(row - position)).toString()));
    }
    return solution;
    
    function factorial(number){
      if (number <= 1)
        return BigInt(1);
      else
        return BigInt(number) * factorial(number - 1);
    }
}