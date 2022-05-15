//Find the odd/even one out
function findOutlier(integers){
    const odds = integers.filter(x => x % 2);
    const evens = integers.filter(x => !(x % 2));
    return odds.length == 1 ? odds[0] : evens[0];
  }
  