function getDivisorsCnt(n){
    let total = 0;
    for (let i = 0; i < Math.sqrt(n); i++){
      if (n % i == 0)
        total += 2;
    }
    return (n / Math.sqrt(n)) % 1 == 0 ? ++total : total;
}