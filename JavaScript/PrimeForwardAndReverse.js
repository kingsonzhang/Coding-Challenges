function backwardsPrime(start, stop){
    let primes = [];
    for (let i = start; i <= stop; i++){
      let reverse = Number(i.toString().split("").reverse().join(""))
      if (i != reverse && prime(i) && prime(reverse))
        primes.push(i);
    }
    return primes
    
    function prime(number){
      for (let i = 2; i <= Math.sqrt(number); i++)
        if (number % i == 0)
          return false;
      return true;
    }
}