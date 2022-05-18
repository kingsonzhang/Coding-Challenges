//Push all zeroes to the end of the array
function moveZeros(arr) {
    let temp = arr.filter(x => x !== 0);
    while (temp.length < arr.length)
      temp.push(0);
    return temp;
}