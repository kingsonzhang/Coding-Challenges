function seven(m) {
    let count = 0;
    while (m >= 100){
      count++;
      m = (Math.floor(m / 10)) - (m % 10 * 2);
    }
    return [m, count];
}