function pickPeaks(arr){
    let peaks = [];
    let pos = [];
    let index = -1;
    let height = arr[0];
    
    for (let i = 0; i < arr.length; i++){
      if (arr[i] > height)
        index = i;
      else if (arr[i] < height){
        if (index > 0){
          pos.push(index);
          peaks.push(arr[index]);
        }
        index = -1;
      }
      height = arr[i];
    }
    return {pos, peaks};
}