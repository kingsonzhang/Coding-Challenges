function comp(array1, array2){
    if (array1 != null && array2 != null){
      array1.sort((a, b) => a - b);
      array2.sort((a, b) => a - b);
      return array2.map(Math.sqrt).every((x, index) => x == array1[index]);
    }
    return false;
}