function sumConsecutives(s) {
    let sums = []
    let current = Infinity;
    for (let i = 0; i < s.length; i++){
      if (current != s[i]){
        sums.push(s[i]);
        current = s[i];
      }
      else{
        sums[sums.length - 1] += s[i];
      }
    }
    return sums;
  }