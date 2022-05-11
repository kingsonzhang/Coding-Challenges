//Find if product of two Fib numbers equals given number
function productFib(prod){
    let first = 0;
    let second = 1;
    while (first * second < prod){
      second += first;
      first = second - first;
    }
    return [Math.min(first, second), Math.max(first, second), first * second == prod];
}