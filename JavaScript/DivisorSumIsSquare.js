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