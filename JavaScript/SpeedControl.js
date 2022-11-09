function gps(s, x){
    if (x.length < 2)
      return 0;
    let values = x.map((value, index) => (x[index + 1] - x[index]) / s);
    values.pop();
    return Math.floor(3600 * Math.max(...values));
}