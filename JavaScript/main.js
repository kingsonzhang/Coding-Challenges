//Return 5 without using any numbers or math/
//Wow this one was clever
function unusualFive(){
  return "smart".length;
}

//Rule of divisibility by 13
function thirt(n) {
  const ORDER = [1, 10, 9, 12, 3, 4];
  const next = n.toString().split("").reverse().map(Number).reduce((acc, x, index) => acc + x * ORDER[index % 6], 0);
  return next == n ? n : thirt(next);
}

//Check to see how many cakes can be made with available ingredients and recipe
function cakes(recipe, available){
  if (Object.keys(recipe).every(x => x in available))
    return Math.min(...Object.keys(recipe).map(x => Math.floor(available[x] / recipe[x])));
  return 0;
}

//Generate a valid tweet given a sentence
function generateHashtag (str){
  if (str != ""){
    let hashtag = "#" + str.split(" ").filter(x => x != "").map(x => x[0].toUpperCase() + x.slice(1)).join("");
    if (hashtag.length > 1 && hashtag.length <= 140)
      return hashtag;
  }
  return false;
}

//If string2 cannot be made from string1, return false
function scramble(str1, str2) {
  let dictionary = {};
  for (let i = 0; i < str1.length; i++)
    str1[i] in dictionary ? dictionary[str1[i]]++ : dictionary[str1[i]] = 1;
  for (let i = 0; i < str2.length; i++)
    if (!(--dictionary[str2[i]] >= 0))
      return false;
  return true;
}

//Formula for trailing zeroes in factorial
function zeros (n) {
  let total = 0;
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5)
    total += Math.floor(n / i);
  return total;
}
