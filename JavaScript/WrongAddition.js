function add(num1, num2) {
    let sum = "";
    while (num1 + num2){
      sum = (num1 % 10) + (num2 % 10) + sum;
      num1 = Math.floor(num1 / 10);
      num2 = Math.floor(num2 / 10)
    }
    return Number(sum);
}