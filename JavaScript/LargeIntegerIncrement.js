function plusOne(digits) {
    digits[digits.length - 1]++;
    let start = digits.length - 1;
    while (digits[start] > 9){
        digits[start] = 0;
        if (start)
            digits[start - 1]++;
        else
            digits.unshift(1);
        start--;
    }
    return digits;
}
