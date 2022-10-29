function evenNumbers(array, number) {
    return array.filter(x => !(x % 2)).slice(-number);
}