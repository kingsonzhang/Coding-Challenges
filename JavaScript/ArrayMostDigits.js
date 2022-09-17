function findLongest(array){
    let digits = array.map(x => x.toString().length);
    return (array[digits.indexOf(Math.max(...digits))]);
}  