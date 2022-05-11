//Flatten a 2D numerical array and sort it in ascending order
function flattenAndSort(array){
    return [].concat(...array).sort((a, b) => a - b);
}