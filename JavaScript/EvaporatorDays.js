function evaporator(content, evap_per_day, threshold){ 
    let count = 0;
    let start = content;
    while (content / start > threshold / 100){
      count++;
      content *= 1 - (evap_per_day / 100);
    }
    return count;
}