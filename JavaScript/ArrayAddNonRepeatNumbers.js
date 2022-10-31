function repeats(arr){
    return arr.filter(x => arr.indexOf(x) == arr.lastIndexOf(x)).reduce((acc, x) => acc + x, 0);
}