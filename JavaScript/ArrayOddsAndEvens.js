function sortArray(array) {
    let odds = array.filter(x => x % 2).sort((a, b) => b - a);
    return array.map(x => x % 2 ? odds.pop() : x);
}