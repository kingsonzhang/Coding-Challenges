function SeriesSum(n){
    let total = 0;
    for (let i = 0; i < n; i++){
      total += 1 / (1 + 3 * i);
    }
    return total.toFixed(2);
}