function stringTransformer(str) {
    return str.split(" ")
    .reverse()
    .join(" ")
    .split("")
    .map(x => x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase())
    .join("");
}