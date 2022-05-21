//Find amount of characters are duplicates in string regardless of case
function duplicateCount(text){
  let dictionary = {};
  text.toLowerCase().split("").map(x => x in dictionary ? dictionary[x]++ : dictionary[x] = 0);
  return Object.values(dictionary).filter(x => x > 0).length;
}