function isHappy(n){
    let cache = [n];
    while (n !== 1){
        let number = 0;
        while (n !== 0){
            number += Math.pow(Math.floor(n % 10), 2);
            n = Math.floor(n / 10);
        }
        if (cache.includes(number))
            return false;
        n = number;
        cache.push(n);
    }
    return true;
};