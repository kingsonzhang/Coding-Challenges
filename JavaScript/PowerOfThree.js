function isPowerOfThree(n){
    while(n){
        if (n === 1)
            return true;
        n /= 3;
        if (n % 1)
            return false;
    }
    return false;
};