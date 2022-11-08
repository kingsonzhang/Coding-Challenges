function palindromeChainLength(n){
    let step = 0;
    while (n != Number(n.toString().split("").reverse().join(""))){
      n += Number(n.toString().split("").reverse().join(""));
      step++;
    }
    return step;
}