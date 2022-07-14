function convertFrac(lst){
  function GCD(a, b){
    if (!b)
      return a;
    return GCD(b, a % b);
  }
  
  let LCD = lst.map(x => x[1]).reduce((acc, x) => acc * x / GCD(acc, x), 1);
  return lst.map(x => `(${x[0] * LCD / x[1]},${LCD})`).join("");
}
