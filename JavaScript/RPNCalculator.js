//RPN Calculator
//Very clever use of switching order of pops on stack through number manipulation
function calc(expr){
    let numbers = [];
    expr.split(" ").forEach(x => {
      switch(x){
          case '+':
            numbers.push(numbers.pop() + numbers.pop());
            break;
          case '-':
            numbers.push(-numbers.pop() + numbers.pop());
            break;
          case '*':
            numbers.push(numbers.pop() * numbers.pop());
            break;
          case '/':
            numbers.push(1 / (numbers.pop() / numbers.pop()));
             break;
          default:
            numbers.push(Number(x));
      }
    })
    return numbers.pop();
}