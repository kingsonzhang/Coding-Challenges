//Keep multiplying digits in number until number is single digit, return how many times
function persistence(num) {
    let count = 0;
    let split = num.toString().split("");
    while (split.length > 1){
      count++;
      split = split.reduce((acc, x) => acc *= Number(x) , 1).toString().split("");
    }
    return count;
}