function largestPairSum (numbers) {
    let largest = -Infinity;
    let secondLargest = -Infinity
    for (let i = 0; i < numbers.length; i++){
      if (numbers[i] > largest){
        secondLargest = largest
        largest = numbers[i]
      }
      else if (numbers[i] > secondLargest)
        secondLargest = numbers[i];
    }
    return largest + secondLargest;
}