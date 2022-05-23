//Find weight of words, return word with highest weight
function high(x){
    let characters = x.split(" ");
    let weight = x.split(" ").map(y => y.split("").reduce((acc, char) => acc + (char.charCodeAt(0) - 96), 0));
    return characters[weight.indexOf(Math.max(...weight))];
}