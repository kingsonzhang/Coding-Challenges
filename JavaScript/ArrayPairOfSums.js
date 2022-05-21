//Find two integers in array that add up to given number within time limit
function sumPairs(ints, s) {
    let cache = {};
    for (let i = 0; i < ints.length; i++){
      if (s - ints[i] in cache)
        return [s - ints[i], ints[i]]
      else
        cache[ints[i]] = i;
    }
    return undefined
}