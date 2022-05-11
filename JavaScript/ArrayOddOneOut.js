//Find the instance of key that is odd in array
function findOdd(A) {
    let dictionary = {};
    A.forEach(x => x in dictionary ? dictionary[x]++ : dictionary[x] = 1);
    for (x in dictionary)
      if (dictionary[x] % 2 == 1)
        return Number(x);
}