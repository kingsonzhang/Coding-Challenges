function adjacentElementsProduct(array) {
    return Math.max(...array.map((x, index) => x * array[index + 1]).slice(0, -1));
}