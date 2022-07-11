function numPrimorial(n){
  function prime(number){
    for (let i = 2; i <= Math.sqrt(number); i++)
        if (number % i == 0)
          return false;
      return true;
  }
  
  let total = 2;
  let count = 1
  let current = 3;
  
  while (count < n){
    if (prime(current)){
      total *= current;
      count++
    }
    current += 2;
  }
  return total;
}
