function partlist(arr) {
    return arr.map((x, index) => [arr.slice(0, index + 1).join(" "), arr.slice(index + 1, arr.length).join(" ")]).slice(0 ,-1);
}