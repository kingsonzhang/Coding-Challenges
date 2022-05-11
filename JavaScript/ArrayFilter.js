//Filter out array b from a
function arrayDiff(a, b) {
    return a.filter(x => !b.includes(x));
}