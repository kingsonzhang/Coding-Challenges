function maxDiff(list) {
    return list.length ? Math.max(...list) - Math.min(...list) : 0;
    /*
    if (list.length){
      let min = list[0];
      let max = list[0];
      for (let i = 1; i < list.length; i++){
        if (list[i] < min)
          min = list[i];
        else if (list[i] > max)
          max = list[i];
      }
      return max - min;
    }
    return 0;
    */
};