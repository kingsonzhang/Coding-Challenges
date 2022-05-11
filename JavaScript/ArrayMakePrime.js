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