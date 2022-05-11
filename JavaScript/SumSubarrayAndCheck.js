//Sum numbers left and right of index in array and check if equal
function findEvenIndex(arr){
    for (let i = 0; i < arr.length; i++){
      if (arr.slice(0, i).reduce((acc, x) => acc + x, 0) == arr.slice(i + 1).reduce((acc, x) => acc + x, 0))
        return i;
    }
    return -1;
}