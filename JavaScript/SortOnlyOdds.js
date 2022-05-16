//Sort only the odds in ascending order, every even numbers remains in place in the array
function sortArray(array) {
    let odds = array.filter(x => x % 2).sort((a, b) => a - b);
    return array.map(x => (x % 2) ? odds.shift() : x);
}