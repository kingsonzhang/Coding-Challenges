function findDeletedNumber(arr, mixArr) {
    return arr.reduce((acc, x) => acc + x, 0) - mixArr.reduce((acc ,x) => acc + x, 0);
}