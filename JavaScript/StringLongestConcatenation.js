//Concatenate strings in a array given amount of strings to concatenate, find longest string
function longestConsec(strarr, k){
  if (k > strarr.length || k <= 0)
    return '';
  const joined = strarr.map((x, index) => strarr.slice(index, index + k).join(""));
  const lengths = joined.map(x => x.length);
  return joined[lengths.indexOf(Math.max(...lengths))]
}