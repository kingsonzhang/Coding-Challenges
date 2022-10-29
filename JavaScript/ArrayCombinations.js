function solve(arr) {
    return arr.map(x => new Set(x).size).reduce((acc, x) => acc * x, 1);
}