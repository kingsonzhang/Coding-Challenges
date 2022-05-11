//Take n >= 0 and 0 <= d <= 9
//Starting from 0, square from 0 to n, and find the amount of digits in the squares
//Equal to the given d
function nbDig(n, d){
    let total = 0;
    d = d.toString();
    for (let i = 0; i <= n; i++)
      (i * i).toString().split("").forEach(x => x == d ? total++ : total);
    return total;
}