function step(step, start, stop) {
    function isPrime(number){
      for (let i = 2; i <= Math.sqrt(number); i++)
        if (number % i === 0)
          return false;
      return true;
    }
    
    for (let i = start; i <= stop - step; i++){
      if (isPrime(i))
        if (isPrime(i + step))
          return [i, i + step];
    }
    return null;
}