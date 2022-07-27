function hammingWeight(n){
    return n.toString(2).split("").reduce((acc, x) => acc + (x === '1' ? 1 : 0), 0);
};