function isSortedAndHow(array){
    let ascending = array[0] <= array[1];
    for (let i = 0; i < array.length - 1; i++){
      if (ascending){
        if (array[i] > array[i + 1])
          return "no";
      }
      else{
        if (array[i] < array[i + 1])
          return  "no";
      }
    }
    return ascending ? "yes, ascending" : "yes, descending"
}
  