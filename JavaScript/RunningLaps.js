//PREP
//Parameters: Given two numbers, find the least common multiple (LCM)
//  of both numbers, and find the factor needed to multiple to get the LCM
//Return: Return an array with the two factors found
//Example: Look at Codewar examples
//Psuedo:

var nbrOfLaps = function (x, y) {
    //Find the LCM of both numbers
    //Multiply x and y and divide by GCD
    function GCD(a, b){
      if (!b)
        return a;
      return GCD(b, a % b);
    }
    let LCM = x * y / GCD(x, y);
    
    // Return the LCM divided by both x and y
    return [LCM / x, LCM / y]
}