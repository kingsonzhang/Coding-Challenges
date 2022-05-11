//Return a number in expanded form
function expandedForm(num) {
    let temp = [];
    let count = 1;
    while (num != 0){
      temp.push((num % 10) * count);
      num = Math.floor(num / 10);
      count *= 10;
    }
    return temp.filter(x => x != 0).reverse().join(" + ");
}