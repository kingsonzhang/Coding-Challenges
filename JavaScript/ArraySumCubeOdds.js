function cubeOdd(arr){
    if (arr.every(Number.isInteger))
      return arr.reduce((acc, x) => acc += x % 2 ? x * x * x : 0, 0);
    return undefined;
}