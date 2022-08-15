function sumOfMinimums(arr) {
    return arr.reduce((acc, x) => acc + Math.min(...x), 0);
}