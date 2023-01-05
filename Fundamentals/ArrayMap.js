//Map all words in a string to their length in a new array
function addLength(str) {
    return str.split(" ").map(x => `${x} ${x.length}`);
}  