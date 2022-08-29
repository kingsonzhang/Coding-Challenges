function sumStrings(a,b) { 
    const MAXLENGTH = Math.max(a.length, b.length);
    a = a.padStart(MAXLENGTH, '0');
    b = b.padStart(MAXLENGTH, '0');
    let carry = false;
    let sum = [];
    for (let i = MAXLENGTH - 1; i >= 0; i--){
      let digit = parseInt(a[i]) + parseInt(b[i]);
      if (carry)
        digit++;
      carry = false;
      if (digit > 9){
        carry = true;
        digit = digit % 10;
      }
      sum.push(digit);
    }
    if (carry)
      sum.push(1);
    sum.reverse();
    while (sum[0] === 0)
      sum.shift();
    return sum.join("");
}