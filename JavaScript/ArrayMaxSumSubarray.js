//Max sum of subarray in a array problem
//Look up Kadane's Algorithm
//Dynamic programming
var maxSequence = function(arr){
    let localMax = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++){
      localMax = Math.max(arr[i], arr[i] + localMax);
      if (localMax > maxSum)
        maxSum = localMax;
    }
    return maxSum;
  }