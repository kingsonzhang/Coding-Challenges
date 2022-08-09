function solve(s){
    let count = [0, 0];
    let split = s.split("");
    split.map(x => x.toLowerCase() === x ? count[0]++ : count[1]++);
    if (count[1] > count [0])
      return split.map(x => x.toUpperCase()).join("");
    return split.map(x => x.toLowerCase()).join("");
}