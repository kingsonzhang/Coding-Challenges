//Create a multiplication table
function multiplicationTable(size) {
    let bigArray = [];
    for (let i = 1; i <= size; i++){
      let smallArray = [];
      for (let j = 1; j <= size; j++){
        smallArray.push(i * j);
      }
      bigArray.push(smallArray);
    }
    return bigArray;
  }