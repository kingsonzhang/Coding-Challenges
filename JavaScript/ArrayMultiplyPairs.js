function minSum(arr) {
    return arr.sort((a, b) => a - b).reduce((acc, x) => acc + x * arr.pop(), 0);
}